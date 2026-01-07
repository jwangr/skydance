import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function DanceCard({ dance }) {
  console.log(dance);
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        aspectRatio: 4 / 3,
        position: "relative",
      }}
    >
      <Image src={dance.images[0]} fill={true} alt={dance.title} style={{objectFit:'cover'}} />
    </Box>
  );
}
