"use client";

import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import SocialLinks from "./SocialLinks";
import LogoHeader from "./LogoHeader";

const Footer = () => {
  //   dynamically get year
  const currentYear = new Date().getFullYear();

  return (
    <Box
      color="default"
      sx={{
        backgroundColor: "var(--bg2)",
        marginTop: 2,
        paddingY: 3,
        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.3)", // shadow on top
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, lg: "auto" },
          justifyContent: "space-between",
        }}
      >
        <LogoHeader />

        <Box sx={{ textAlign: "center" }}>
          Shop 8/219 Parramatta Rd, Auburn, NSW 2144 (Level 1)
        </Box>

        {/* Social Media Links */}
        <SocialLinks />
      </Toolbar>
      <Divider />
      {/* Copyright */}
      <Box sx={{ textAlign: "center", color: "grey" }}>
        © {currentYear} Sky Dance Studio. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
