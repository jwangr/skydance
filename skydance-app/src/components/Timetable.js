import { Box } from "@mui/material";
import React from "react";

export default function Timetable() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginY: 2,
      }}
    >
      <h2>Class Timetable</h2>
      <h5>Term 4, 2025 (13/10/25 - 21/12/2025)</h5>
      <Box
        sx={{
          width: "100%", // fill width of container
          overflowX: "auto", // allow horizontal scroll if needed
        }}
      >
        <Box
          component="img"
          src="/Timetable.PNG"
          alt="Timetable"
          sx={{
            maxWidth: "100%", // scales to container
            minWidth: 750, // never shrink below 500px
            height: "auto",
            maxHeight: "80vh",
            display: "block",
            margin: { md: "auto" },
          }}
        />
      </Box>
    </Box>
  );
}
