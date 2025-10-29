import { Box } from "@mui/material";
import React from "react";

export default function EmbeddedMap() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "100%", // makes it a perfect square (height = width)
        borderRadius: "12px",
        overflow: "hidden",
        mx: "auto",
        marginTop: 5
        // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6627.88445452184!2d151.0332172!3d-33.839600499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3443bf0becf%3A0x128d1c9853a09d71!2sSky%20Dance%20Studio!5e0!3m2!1sen!2sau!4v1761779874951!5m2!1sen!2sau"
        width="100%"
        height={"100%"}
        style={{ border: 0, position: "absolute", top: 0, left: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
}
