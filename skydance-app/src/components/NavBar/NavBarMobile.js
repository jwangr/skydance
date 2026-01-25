import { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItemButton,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MobileAccordian from "./MobileAccordian";
import titleStyle from "./linkTitleStyle";

// has accordian instead of drop down for menu items
export default function NavBarMobile({ navLinks }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const [expanded, setExpanded] = useState(false);
  const handleAccordionChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <IconButton
        aria-label="open menu"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { md: "none" },
          color: "white",
          fontFamily: "Montserrat",
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Drawer */}
      <Drawer
        variant="temporary"
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "var(--bg2)",
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2 }}>
          <h4 style={{ color: "white" }}>Sky Dance Studio</h4>

          {navLinks.map((link) =>
            link.children ? (
              <MobileAccordian
                key={link.title}
                link={link}
                expanded={expanded}
                onChange={handleAccordionChange}
              />
            ) : (
              <ListItemButton key={link.title} href={link.link}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "white",
                    width: "100%",
                    ...titleStyle,
                  }}
                >
                  {link.title}
                </Typography>
              </ListItemButton>
            )
          )}

          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
