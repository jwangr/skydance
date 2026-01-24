import newestTimetable from "@/lib/data/timetable";
import { Box } from "@mui/material";
import React from "react";

export default function Timetable({ timetable = newestTimetable }) {
  console.log(timetable);
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
          alt="Timetable to come..."
          sx={{
            maxWidth: 1, // scales to container
            minWidth: 750, // never shrink below
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
