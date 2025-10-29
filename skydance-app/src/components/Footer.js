"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const navLinks = [
    { title: "Instagram", link: "https://www.instagram.com/skydancestudio2020/", icon: <InstagramIcon /> },
    { title: "Facebook", link: "https://www.facebook.com/SkyDanceStudioSydney", icon: <FacebookIcon /> },
    { title: "X", link: "https://twitter.com/SkyDance2020", icon: <TwitterIcon /> },
  ];

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

        {/* Copyright */}
        <Box>© {currentYear} Sky Dance Studio. All rights reserved. </Box>

        {/* Social Media Links */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
          {navLinks.map((link) => (
            <Link href={link.link}>
              <IconButton aria-label="link.title">{link.icon}</IconButton>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Footer;
