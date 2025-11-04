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

const Navbar = () => {
  // Drawer states
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "HOME", link: "/" },
    { title: "ABOUT US", link: "/about" },
    { title: "CLASSES", link: "/class" },
    { title: "ENROL NOW", link: "/enrol" },
    { title: "STUDIO HIRE", link: "/hire" },
    { title: "CONTACT US", link: "/contact" },
  ];

  //   Mobile Drawer Contents
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <h4 sx={{ my: 2 }}>Sky Dance Studio</h4>
      <Divider />
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  color="black"
                  underline="none"
                  href={item.link}
                  sx={{ fontFamily: "Marcellus, sans-serif" }}
                >
                  {item.title}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ color: "white" }} />
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ boxShadow: "none", backgroundColor: "var(--bg5)" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column", lg: "row" },
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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <h6>Sky Dance Studio</h6>
          </Box>
        </Box>

        {/* Non-mobile Navigation links */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {navLinks.map((link) => (
            <ListItemButton key={link.title}>
              <ListItemText>
                <Link
                  color="black"
                  underline="none"
                  href={link.link}
                  sx={{ fontFamily: '"EB Garamond", serif' }}
                >
                  {link.title}
                </Link>
              </ListItemText>
            </ListItemButton>
          ))}
        </Box>

        {/* Mobile Drawer */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          Menu
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "var(--bg5)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
