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
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const menuItems = [
  {
    title: "About",
    subItems: [
      { name: "Institutional Background", link: "/about/institutional-background" },
      { name: "Institutional Insights", link: "/about/institutional-insights" },
      { name: "Team Management", link: "/about/team-management" },
      { name: "Staff Management", link: "/about/staff-management" },
      { name: "Internship", link: "/about/internship" },
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

  const handleNavigation = (link) => {
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
        backgroundColor: 'white',
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
              src="/src/assets/company-logo.jpg" 
              alt="Mukuba Logo" 
              style={{ 
                height: '48px',
                width: '48px',
                objectFit: 'contain',
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1rem' },
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                transition: 'color 0.2s',
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
            {menuItems.map((item) => (
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
                    fontWeight: 600,
                    color: 'inherit',
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
                      {item.subItems.map((subItem) => (
                        <MenuItem 
                          key={subItem.name}
                          onClick={() => handleNavigation(subItem.link)}
                          sx={{
                            px: 2,
                            py: 1.5,
                            fontSize: '0.875rem',
                            color: 'text.primary',
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
                      ))}
                    </Box>
                  </Popover>
                )}
              </Box>
            ))}
            {user ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  component={Link}
                  to="/dashboard"
                  variant="outlined"
                  color="secondary"
                  sx={{ fontWeight: 600 }}
                >
                  Dashboard
                </Button>
                <Typography sx={{ fontWeight: 600, mx: 1 }}>
                  {user.name || user.email}
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={logoutUser}
                  sx={{
                    borderColor: '#AF9871',
                    color: '#AF9871',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      borderColor: '#977F59',
                      color: '#977F59',
                    },
                  }}
                >
                  Logout
                </Button>
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
                            onClick={() => handleNavigation(subItem.link)}
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
                  <Button
                    component={Link}
                    to="/dashboard"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Dashboard
                  </Button>
                  <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    {user.name || user.email}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="inherit"
                    fullWidth
                    onClick={logoutUser}
                    sx={{
                      borderColor: '#AF9871',
                      color: '#AF9871',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        borderColor: '#977F59',
                        color: '#977F59',
                      },
                    }}
                  >
                    Logout
                  </Button>
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