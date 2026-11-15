import newestTimetable from "@/lib/data/timetable";
import { Box } from "@mui/material";
import React from "react";

export default function Timetable({
  timetable = newestTimetable,
  showTitle = true,
  isLandscape = true,
}) {
  // Landscape: fixed minimum width, scrolls sideways on small screens.
  // Portrait: fills the width up to sm, keeping its aspect ratio.
  const imageSx = isLandscape
    ? {
        maxWidth: 1, // scales to container
        minWidth: 750, // never shrink below
        height: "auto",
        maxHeight: "80vh",
        display: "block",
        margin: { md: "auto" },
      }
    : {
        width: 1,
        maxWidth: "sm",
        height: "auto",
        display: "block",
        margin: "auto",
      };

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
      <h2 style={{ display: showTitle ? "block" : "none" }}>Class Timetable</h2>
      <h5>{timetable.title}</h5>
      <Box
        sx={{
          width: "100%", // fill width of container
          overflowX: "auto", // allow horizontal scroll if needed
        }}
      >
        <Box
          component="img"
          src={timetable.url}
          alt={timetable.title}
          loading="lazy"
          sx={imageSx}
        />
      </Box>
    </Box>
  );
}
