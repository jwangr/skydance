import { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
} from "@mui/material";

export default function NavBarMobile({ navLinks }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* Menu button (mobile only) */}
      <IconButton
        aria-label="open menu"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { sm: "none" },
          color: "white",
          fontFamily: "Montserrat",
        }}
      >
        Menu
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
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "var(--bg2)",
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2 }}>
          <h4 style={{ color: "white" }}>Sky Dance Studio</h4>
          <Divider />

          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {navLinks.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Link
                      href={item.link}
                      underline="none"
                      sx={{
                        color: "white",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {item.title}
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
