"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

const Navbar = () => {
  // Drawer states
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "HOME", link: "/" },
    {
      title: "ABOUT US",
      link: "/about",
      children: [
        { title: "OUR TEAM", link: "/about/team" },
        { title: "OUR STORY", link: "/about/story" },
      ],
    },
    {
      title: "CLASSES",
      link: "/class",
      children: [
        { title: "DANCE", link: "/class/dance" },
        { title: "ART", link: "/class/art" },
        { title: "MUSIC", link: "/class/music" },
        { title: "TUTORING", link: "/class/tutoring" },
      ],
    },
    { title: "ENROL NOW", link: "/enrol" },
    { title: "STUDIO HIRE", link: "/studiohire" },
    { title: "CONTACT US", link: "/contact" },
  ];

  //   Mobile Drawer Contents
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <h4 style={{ my: 2, color: "white" }}>Sky Dance Studio</h4>
      <Divider />
      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemText sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  color="white"
                  underline="none"
                  href={item.link}
                  sx={{ fontFamily: "Montserrat, sans-serif" }}
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

  // hover over multi-links
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpen = (event, title) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(title)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null)
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ boxShadow: "none", backgroundColor: "var(--bg2)" }}
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
          <Box sx={{ display: { xs: "none", sm: "block" }, color: "white" }}>
            <h6>Sky Dance Studio</h6>
          </Box>
        </Box>

        {/* Non-mobile Navigation links */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {navLinks.map((link) =>
            link.children ? (
              <ListItemButton key={link.title}>
                <ListItemText>
                  <Button
                    underline="none"
                    onMouseEnter={(e) => handleOpen(e, link.title)}
                    onClick={(e) => handleOpen(e, link.title)}
                    sx={{
                      fontFamily: '"Montserrat", sans-serif',
                      letterSpacing: "10%",
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    {link.title}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onMouseLeave={handleClose}
                  >
                    {link.children.map((child) => (
                      <MenuItem
                        key={child.title}
                        component={Link}
                        href={child.link}
                        onClick={handleClose}
                      >
                        {child.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </ListItemText>
              </ListItemButton>
            ) : (
              <ListItemButton key={link.title}>
                <ListItemText>
                  <Link
                    color="white"
                    underline="none"
                    href={link.link}
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      letterSpacing: "10%",
                      fontSize: "14px",
                    }}
                  >
                    {link.title}
                  </Link>
                </ListItemText>
              </ListItemButton>
            )
          )}
        </Box>

        {/* Mobile Drawer */}
        <IconButton
          color="white"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            color: "white",
            fontFamily: "Montserrat",
          }}
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
              backgroundColor: "var(--bg2)",
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
