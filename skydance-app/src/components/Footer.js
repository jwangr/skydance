"use client";

import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {
  Divider,
} from "@mui/material";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  //   dynamically get year
  const currentYear = new Date().getFullYear();

  return (
    <Box color="default" sx={{ backgroundColor: "var(--bg5)", paddingY: 3 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, lg: "auto" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <img
            src="logo.webp"
            alt="Logo"
            style={{
              height: 40,
              width: "auto",
              filter: "brightness(200%)",
            }}
          />
          <Box>
            <h6>Sky Dance Studio</h6>
          </Box>
        </Box>

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
