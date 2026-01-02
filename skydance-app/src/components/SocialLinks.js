import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import socialLinks from "@/lib/data/socialLinks.js";
import { Box, Button, IconButton, Modal, Stack } from "@mui/material";
import { Chat } from "@mui/icons-material";
import { useState } from "react";

const iconMap = {
  Instagram: <InstagramIcon sx={{ color: "var(--bg6)" }} />,
  Facebook: <FacebookIcon sx={{ color: "var(--bg6)" }} />,
  Twitter: <TwitterIcon sx={{ color: "var(--bg6)" }} />,
  Chat: <Chat sx={{ color: "var(--bg6)" }} />,
};

export default function SocialLinks() {
  // react state for wechat modal
  const [open, setOpen] = useState(false);

  return (
    <Stack direction={"row"} gap={3} justifyContent={"left"}>
      {socialLinks.map(({ title, link, icon }) => (
        <IconButton key={title} href={link}>
          {iconMap[icon]}
        </IconButton>
      ))}
      {/* Wechat Modal */}
      <IconButton onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
        <Chat sx={{ color: "var(--bg6)" }} />
      </IconButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            backgroundColor: "#0f172a",
            color: "#fff",
            p: 3,
            borderRadius: "12px",
            maxWidth: 320,
            mx: "auto",
            mt: "20vh",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="/wechat-audreyzhao-qr.png"
            alt="WeChat QR Code for Sky Dance Studio"
            sx={{ width: "100%", borderRadius: "8px", mb: 2 }}
          />

          <Box sx={{ color: "#9ca3af", fontSize: "0.9rem" }}>
            Scan with WeChat to start chatting
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}
