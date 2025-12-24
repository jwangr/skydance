import { EastOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function ButtonLink2({ children = "Button Here", href = "/" }) {
  return (
    <Button
      href={href}
      sx={{
        width: "100%",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        color: "white",
        borderRadius: "50px",
        padding: "10px 20px",
        marginY: "20px",

        "& .label": {
          position: "relative",
          display: "inline-block",
          paddingBottom: "4px", // space between text & underline
        },

        "& .label::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "currentColor",
        },

        "& .arrow": {
          opacity: 0,
          transform: "translateX(-20px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        },

        "&:hover": {
          backgroundColor: "var(--bg5)",
          color: "white",
          "& .arrow": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      }}
    >
      <span className="label">{children}</span>
      <EastOutlined className="arrow" sx={{ ml: 2 }} />
    </Button>
  );
}
