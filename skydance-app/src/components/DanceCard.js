import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function DanceCard({ dance }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        aspectRatio: 4 / 3,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <Image
        src={dance.images[0]}
        fill={true}
        alt={dance.title}
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
      <div className="swiper-lazy-preloader"></div>
      <Box sx={{ position: "absolute", bottom: "0", right: 10 }}>
        <h4>{dance.title}</h4>
      </Box>
    </Box>
  );
}
