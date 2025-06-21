import { Box } from '@mui/material';

const LogoOverlay = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '-45px', sm: '-60px', md: '-75px' },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          width: { xs: '90px', sm: '110px', md: '130px' },
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'transparent',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateX(-50%) scale(1.05)',
          }
        }}
      >
        <img
          src="/src/assets/logo.png"
          alt="Company Logo"
          style={{
            width: '100%',
            height: 'auto',
            filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
          }}
        />
      </Box>
    </Box>
  );
};

export default LogoOverlay; 