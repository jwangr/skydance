import { EastOutlined } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React from "react";

export default function ButtonLink2({
  children = "Button Here",
  href = "/",
  marginY = "20px",
}) {
  return (
    <Button
      href={href}
      sx={{
        width: "100%",
        minHeight: "50px",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        color: "white",
        borderRadius: "50px",
        padding: "10px 20px",
        marginY: marginY,

        // Label styling
        "& .label": {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)", // center the label
          transition: "all 0.3s ease",
          paddingBottom: "4px",
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

        // Arrow styling
        "& .arrow": {
          position: "absolute",
          right: "20px",
          top: "25%",
          transform: "translateX(-20px)",
          opacity: 0,
          transition: "opacity 0.3s ease, transform 0.3s ease",
        },

        "&:hover": {
          backgroundColor: "var(--bg5)",
          color: "white",
          "& .label": {
            left: "40%", // move left a bit to make space for arrow
            transform: "translate(-50%, -50%)",
          },
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
