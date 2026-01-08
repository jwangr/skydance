"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {
  Button,
  Link,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import NavBarMobile from "./NavBarMobile";
import { KeyboardArrowDown } from "@mui/icons-material";
import ScrollToTop from "./ScrollToTop";
import Image from "next/image";

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

const Navbar = () => {
  // hover over multi-links
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpen = (event, title) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(title);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        sx={{ backgroundColor: "var(--bg2)" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "column", lg: "row" },
            gap: "auto",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Button href="/">
              <Image
                src="/logo.webp"
                alt="Logo"
                height={160}
                width={70}
                objectFit="contain"
              />
              <Box
                sx={{ display: { xs: "none", lg: "block" }, color: "white" }}
              >
                <div className="logo">Sky Dance Studio</div>
              </Box>
            </Button>
          </Box>

          {/* Non-mobile Navigation links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navLinks.map((link) =>
              !!link.children ? (
                <ListItemButton
                  key={link.title}
                  onMouseEnter={(e) => handleOpen(e, link.title)} // open menu on hover
                >
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

                        "&:hover": {
                          color: "coral",
                        },
                      }}
                    >
                      <span>{link.title}</span>
                      <KeyboardArrowDown
                        sx={{
                          ml: 1,
                          transition: "transform 0.3s ease",
                          transform:
                            openMenu == link.title
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={openMenu === link.title}
                      onClose={handleClose}
                      slotProps={{
                        list: {
                          onMouseLeave: handleClose,
                        },
                      }}
                      sx={{
                        "& .MuiPaper-root": {
                          backgroundColor: "var(--bg2)",
                          color: "white",
                          padding: 2,
                        },
                      }}
                    >
                      {link.children.map((child) => (
                        <MenuItem
                          key={child.title}
                          component={Link}
                          href={child.link}
                          onClick={handleClose}
                          sx={{
                            "&:hover": {
                              color: "coral",
                            },
                          }}
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
                      sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        letterSpacing: "10%",
                        fontSize: "14px",
                        "&:hover": {
                          color: "coral",
                        },
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
          <NavBarMobile navLinks={navLinks} />
        </Toolbar>
      </AppBar>
      <ScrollToTop />
    </>
  );
};

export default Navbar;
