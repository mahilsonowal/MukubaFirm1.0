import React from "react";
import { Box, CircularProgress } from "@mui/material";

const BrandedLoader = () => (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "#0C2237",
      zIndex: 9999,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
    }}
  >
    <img
      src="/assets/company-logo.jpg"
      alt="Mukuba Logo"
      style={{ width: 200, height: 200, marginBottom: 24 }}
    />
    <CircularProgress sx={{ color: '#C9AA74' }} />
  </Box>
);

export default BrandedLoader; 