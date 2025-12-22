import { EastOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const baseStyles = {
  textDecoration: "underline",
};

export default function ButtonLink1({ children = "Button Here", href = "/" }) {
  return (
    <Button
      href={href}
      sx={{
        width: "100%",
        backgroundColor: "var(--bg5)",
        textTransform: "uppercase",
        textAlign: "center",
        color: "white",
        borderRadius: "50px",
        padding: "10px 20px",
        marginY: "20px",
        "&:hover": {
          backgroundColor: "var(--bg6)",
          color: "black",
          fontWeight: "bold",
        },
      }}
    >
      {children}
    </Button>
  );
}
