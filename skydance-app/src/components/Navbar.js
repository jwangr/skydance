import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";

const Navbar = () => {
  const navLinks = [
    { title: "HOME", link: "/" },
    { title: "ABOUT US", link: "/about" },
    { title: "CLASSES", link: "/class" },
    { title: "ENROL NOW", link: "/enrol" },
    { title: "STUDIO HIRE", link: "/hire" },
    { title: "CONTACT US", link: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ boxShadow: "none", backgroundColor: "#F7E1D7" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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
          <h6>Sky Dance Studio</h6>
        </Box>

        {/* Navigation links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              sx={{ color: "#000", textDecoration: "none", fontFamily: 'sans-serif' }}
            >
              <p>{link.title} </p>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
