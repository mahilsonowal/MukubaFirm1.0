import { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Container,
  Popover,
  Avatar,
} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { supabase } from '../../utils/supabaseClient';

const menuItems = [
  {
    title: "About",
    subItems: [
      { name: "Institutional Background", link: "/about/institutional-background" },
      { name: "Institutional Insights", link: "/about/institutional-insights" },
      { name: "Team Management", link: "/about/team-management" },
      { name: "Staff Management", link: "/about/staff-management" },
      { name: "Advisory Team", link: "/about/governance" },
      { name: "Internship", link: "/about/internship" },
      { name: "Featured Program", link: "/program/pathways-details" },
    ],
  },
  {
    title: "Reports",
    subItems: [
      { name: "Annual Reports", link: "/reports/annual-reports" },
      { name: "Strategic Plans", link: "/reports/strategic-plans" },
    ],
  },
  {
    title: "Research",
    subItems: [
      { name: "Research Work", link: "/research/research-work" },
      { name: "Budget Analysis Reports", link: "/research/budget-analysis" },
      { name: "Policy Briefs", link: "/research/policy-briefs" },
      { name: "Working Papers", link: "/research/working-papers" },
      { name: "Parliamentary Submissions", link: "/research/parliamentary-submissions" },
      { name: "Miscellaneous Research", link: "/research/miscellaneous-research" },
    ],
  },
  {
    title: "Notice Board",
    subItems: [{ name: "Updates", link: "/notice-board/updates" }],
  },
  { title: "Services", subItems: [], link: "/pages/services" },
  { title: "Contact", subItems: [], link: "/pages/contact" },
];

const Navbar = () => {
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState({});
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const location = useLocation();

  // Add a helper to check if mobile view is active
  const isMobile = window.innerWidth < 1200; // lg breakpoint is 1200px in MUI by default

  useEffect(() => {
    async function fetchProfile() {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        if (!error) setProfile(data);
      } else {
        setProfile(null);
      }
    }
    fetchProfile();
  }, [user]);

  // Profile menu state
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };
  const handleDashboardClick = () => {
    handleProfileMenuClose();
    handleDropdownClose();
    if (isMobile) handleMobileMenuClose();
    if (profile?.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  // Add new state for mobile profile menu anchor
  const [mobileProfileAnchorEl, setMobileProfileAnchorEl] = useState(null);
  const handleMobileProfileMenuOpen = (event) => {
    setMobileProfileAnchorEl(event.currentTarget);
  };
  const handleMobileProfileMenuClose = () => {
    setMobileProfileAnchorEl(null);
  };
  const handleMobileDashboardClick = () => {
    handleMobileProfileMenuClose();
    handleMobileMenuClose();
    if (profile?.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
    setMobileExpandedMenus({});
  };

  const handleDropdownOpen = (event, menuTitle) => {
    setDropdownAnchorEl(event.currentTarget);
    setActiveMenu(menuTitle);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
    setActiveMenu(null);
  };

  const handleNavigation = (link, closeDropdown = false) => {
    if (mobileAnchorEl) handleMobileMenuClose();
    if (closeDropdown) handleDropdownClose();
    window.location.href = link;
  };

  const handleMobileMenuItemClick = (title) => {
    setMobileExpandedMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        handleDropdownClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <AppBar 
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: 'black',
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 10 },
          py: { xs: 1, sm: 1.5, md: 1 },
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: { xs: '64px', sm: '70px', md: '76px' },
            padding: '0 !important',
          }}
        >
          {/* Logo and Company Name */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: { xs: 1, sm: 1.5, md: 2 },
              cursor: 'pointer',
              '&:hover': {
                '& .MuiTypography-root': {
                  color: '#AF9871',
                }
              },
              transition: 'all 0.2s',
            }}
            onClick={() => handleNavigation('/')}
          >
            <img 
              src="/assets/company-logo.jpg" 
              alt="Mukuba Logo" 
              style={{ 
                height: '40px',
                width: 'auto',
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1rem' },
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                transition: 'color 0.2s',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Mukuba Economic Research and Consulting Firm
            </Typography>
          </Box>
          
          {/* Desktop Menu */}
          <Box 
            ref={menuRef}
            sx={{ 
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              gap: { md: 2, lg: 1 }
            }}
          >
            {menuItems.map((item) => {
              // Determine if this menu or any of its subItems is active
              const isActive = item.link
                ? location.pathname === item.link
                : item.subItems.some(sub => location.pathname === sub.link);
              return (
                <Box key={item.title}>
                  <Button
                    color="inherit"
                    onClick={item.subItems.length > 0 
                      ? (e) => handleDropdownOpen(e, item.title)
                      : () => handleNavigation(item.link)
                    }
                    sx={{
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      fontSize: { md: '0.875rem', lg: '0.8rem' },
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? '#AF9871' : 'inherit',
                      borderBottom: isActive ? '2px solid #AF9871' : 'none',
                      backgroundColor: isActive ? 'rgba(175,152,113,0.08)' : 'transparent',
                      '&:hover': {
                        color: '#AF9871',
                        backgroundColor: 'transparent',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    {item.title}
                    {item.subItems.length > 0 && (
                      activeMenu === item.title
                        ? <KeyboardArrowUpIcon sx={{ fontSize: 20, transition: 'transform 0.2s' }} />
                        : <KeyboardArrowDownIcon sx={{ fontSize: 20, transition: 'transform 0.2s' }} />
                    )}
                  </Button>
                  {item.subItems.length > 0 && (
                    <Popover
                      ref={dropdownRef}
                      open={activeMenu === item.title && Boolean(dropdownAnchorEl)}
                      anchorEl={dropdownAnchorEl}
                      onClose={handleDropdownClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      sx={{
                        '& .MuiPaper-root': {
                          width: '220px',
                          mt: 1,
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                          borderRadius: '6px',
                        }
                      }}
                    >
                      <Box sx={{ py: 1 }}>
                        {item.subItems.map((subItem) => {
                          const isSubActive = location.pathname === subItem.link;
                          return (
                            <MenuItem 
                              key={subItem.name}
                              onClick={() => handleNavigation(subItem.link, true)}
                              sx={{
                                px: 2,
                                py: 1.5,
                                fontSize: '0.875rem',
                                color: isSubActive ? '#AF9871' : 'text.primary',
                                fontWeight: isSubActive ? 700 : 400,
                                borderLeft: isSubActive ? '3px solid #AF9871' : 'none',
                                backgroundColor: isSubActive ? 'rgba(175,152,113,0.08)' : 'transparent',
                                '&:hover': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                  color: '#AF9871',
                                },
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              {subItem.name}
                              <ChevronRightIcon 
                                sx={{ 
                                  fontSize: 20,
                                  opacity: 0,
                                  transition: 'all 0.2s',
                                }}
                              />
                            </MenuItem>
                          );
                        })}
                      </Box>
                    </Popover>
                  )}
                </Box>
              );
            })}
            {user ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Desktop: Avatar icon */}
                <IconButton
                  onClick={handleProfileMenuOpen}
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                    p: 0.4,
                    border: '2px solid #C9AA74',
                    bgcolor: 'white',
                  }}
                >
                  <Avatar sx={{ bgcolor: '#C9AA74', color: 'white', width: 18, height: 18, fontWeight: 700 }}>
                    <AccountCircle sx={{ fontSize: 20, color: 'white' }} />
                  </Avatar>
                </IconButton>

                {/* Mobile: User name as button (no icon/avatar) */}
                <Button
                  onClick={handleProfileMenuOpen}
                  sx={{
                    display: { xs: 'flex', lg: 'none' },
                    fontWeight: 700,
                    color: '#C9AA74',
                    textTransform: 'none',
                    bgcolor: 'white',
                    border: '2px solid #C9AA74',
                    borderRadius: 2,
                    px: 2,
                    py: 0.5,
                    minWidth: 0,
                  }}
                >
                  {user.user_metadata?.name || profile?.name || user.email}
                </Button>
                <Menu
                  anchorEl={profileAnchorEl}
                  open={Boolean(profileAnchorEl)}
                  onClose={handleProfileMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem disabled sx={{ fontWeight: 700, opacity: 1, color: '#1B2441', cursor: 'default' }}>
                    {user.user_metadata?.name || user.email}
                  </MenuItem>
                  <MenuItem onClick={handleDashboardClick}>Dashboard</MenuItem>
                  {profile?.role === 'admin' && (
                    <MenuItem onClick={() => { handleProfileMenuClose(); handleDropdownClose(); navigate('/admin-upload-report'); }}>Upload documents</MenuItem>
                  )}
                  <MenuItem onClick={() => { handleProfileMenuClose(); if (isMobile) handleMobileMenuClose(); logoutUser(); }}>Logout</MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button 
                component={Link}
                to="/login"
                variant="contained"
                startIcon={<PersonOutlineIcon />}
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  backgroundColor: '#AF9871',
                  color: 'white',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#977F59',
                  },
                }}
              >
                Sign In
              </Button>
            )}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ 
              display: { xs: 'flex', lg: 'none' },
              color: 'inherit',
            }}
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={mobileAnchorEl}
            open={Boolean(mobileAnchorEl)}
            onClose={handleMobileMenuClose}
            sx={{
              display: { xs: 'block', lg: 'none' },
              '& .MuiPaper-root': {
                width: '100%',
                maxWidth: '300px',
                mt: 2,
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }
            }}
          >
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.subItems.length > 0 ? (
                  <>
                    <MenuItem 
                      onClick={() => handleMobileMenuItemClick(item.title)}
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                      }}
                    >
                      {item.title}
                      {mobileExpandedMenus[item.title] ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </MenuItem>
                    {mobileExpandedMenus[item.title] && (
                      <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
                        {item.subItems.map((subItem) => (
                          <MenuItem
                            key={subItem.name}
                            onClick={() => { handleNavigation(subItem.link); handleMobileMenuClose(); }}
                            sx={{
                              pl: 4,
                              py: 1.5,
                              fontSize: '0.875rem',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                color: '#AF9871',
                              },
                            }}
                          >
                            {subItem.name}
                          </MenuItem>
                        ))}
                      </Box>
                    )}
                  </>
                ) : (
                  <MenuItem
                    onClick={() => handleNavigation(item.link)}
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </MenuItem>
                )}
              </div>
            ))}
            <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.08)', mt: 1 }}>
              {user ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexDirection: 'column' }}>
                  {/* Desktop: Avatar icon */}
                  <IconButton
                    onClick={handleProfileMenuOpen}
                    sx={{
                      display: { xs: 'none', lg: 'flex' },
                      p: 0.5,
                      border: '2px solid #C9AA74',
                      bgcolor: 'white',
                    }}
                  >
                    <Avatar sx={{ bgcolor: '#C9AA74', color: 'white', width: 36, height: 36, fontWeight: 700 }}>
                      <AccountCircle sx={{ fontSize: 30, color: 'white' }} />
                    </Avatar>
                  </IconButton>
                  {/* Mobile: User name as button (no icon/avatar) */}
                  <Button
                    onClick={handleProfileMenuOpen}
                    sx={{
                      display: { xs: 'flex', lg: 'none' },
                      fontWeight: 700,
                      color: '#C9AA74',
                      textTransform: 'none',
                      bgcolor: 'white',
                      border: '2px solid #C9AA74',
                      borderRadius: 2,
                      px: 2,
                      py: 0.5,
                      minWidth: 0,
                    }}
                  >
                    {user.user_metadata?.name || profile?.name || 'Profile'}
                  </Button>
                  <Menu
                    anchorEl={profileAnchorEl}
                    open={Boolean(profileAnchorEl)}
                    onClose={handleProfileMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <MenuItem disabled sx={{ fontWeight: 700, opacity: 1, color: '#1B2441', cursor: 'default' }}>
                      {user.user_metadata?.name || user.email}
                    </MenuItem>
                    <MenuItem onClick={handleDashboardClick}>Dashboard</MenuItem>
                    {profile?.role === 'admin' && (
                      <MenuItem onClick={() => { handleProfileMenuClose(); handleDropdownClose(); navigate('/admin-upload-report'); }}>Upload Documents</MenuItem>
                    )}
                    <MenuItem onClick={() => { handleProfileMenuClose(); if (isMobile) handleMobileMenuClose(); logoutUser(); }}>Logout</MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  fullWidth
                  startIcon={<PersonOutlineIcon />}
                  sx={{
                    backgroundColor: '#AF9871',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#977F59',
                    },
                  }}
                  onClick={() => {
                    if (mobileAnchorEl) handleMobileMenuClose();
                  }}
                >
                  Sign In
                </Button>
              )}
            </Box>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;