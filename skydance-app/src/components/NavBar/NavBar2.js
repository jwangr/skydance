"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {
  Button,
  Link,
  ListItemButton,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Popper,
  Stack,
} from "@mui/material";
import NavBarMobile from "./NavBarMobile";
import { KeyboardArrowDown } from "@mui/icons-material";
import ScrollToTop from "./ScrollToTop";
import LogoHeader from "../LogoHeader";
import navLinks from "@/lib/data/navLinks";

export default function Navbar2() {
  // hover over multi-links
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleEnter = (e, title) => {
    setAnchorEl(e.currentTarget); // DOM element ✅
    setOpenMenu(title); // which menu ✅
  };

  const handleLeave = () => {
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
            flexDirection: { xs: "row", md: "column", lg: "row" },
            justifyContent: "space-between",
          }}
        >
          <LogoHeader />

          {/* Large Display: Navigation links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) =>
              !!link.children ? (
                <ListItemButton
                  key={link.title}
                  onMouseEnter={(e) => handleEnter(e, link.title)}
                  onMouseLeave={handleLeave}
                  onClick={(e) => handleEnter(e, link.title)}
                >
                  <Button
                    underline="none"
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
                          openMenu === link.title
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </Button>
                  <Popper
                    open={openMenu === link.title}
                    anchorEl={anchorEl}
                    placement="bottom"
                    disablePortal
                    sx={{ zIndex: 1200 }}
                  >
                    <Stack
                      direction={"column"}
                      gap={1}
                      sx={{ p: 2, bgcolor: "var(--bg2)", color: "white" }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.link}
                          sx={{
                            color: "white",
                            textDecoration: "none",
                            "&:hover": {
                              color: "coral",
                            },
                          }}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </Stack>
                  </Popper>
                </ListItemButton>
              ) : (
                <ListItemButton key={link.title}>
                  <Link
                    color="white"
                    underline="none"
                    href={link.link}
                    sx={{
                      fontFamily: '"Montserrat", sans-serif',
                      letterSpacing: "10%",
                      fontSize: "14px",
                      textWrap: "nowrap",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        color: "coral",
                      },
                    }}
                  >
                    {link.title}
                  </Link>
                </ListItemButton>
              ),
            )}
          </Box>

          {/* Mobile Drawer */}
          <NavBarMobile navLinks={navLinks} />
        </Toolbar>
      </AppBar>
      <ScrollToTop />
    </>
  );
}
