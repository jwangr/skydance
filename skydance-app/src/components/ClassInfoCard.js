"use client";
import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";

// Import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Sample props structure:
const example = {
  title: "Ballet",
  description:
    "Students build strong technique, musicality, and performance skills while working toward internationally recognized RAD certificates, accepted in 83 countries. These classes provide a solid foundation for all dance styles, inspiring confidence and a lifelong foundation of dance in every dancer.",
  images: ["ballet/ballet1.png", "ballet/ballet2.png", "ballet/ballet3.png"],
};

export default function ClassInfoCard({ danceClass = example }) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        my: 4,
        borderRadius: 3,
        backgroundColor: "var(--bg1)",
      }}
    >
      {/* Decorative Title */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Divider
          sx={{
            flex: 1,
            borderBottomWidth: 2,
            borderColor: "var(--bg-2)",
            mr: 2,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontFamily: "EB Garamond, serif",
            fontWeight: 500,
            textTransform: "capitalize",
            color: "var(--bg-2)",
          }}
        >
          {danceClass.title}
        </Typography>
        <Divider
          sx={{
            flex: 1,
            borderBottomWidth: 2,
            borderColor: "var(--bg-2)",
            ml: 2,
          }}
        />
      </Box>

      {/* Main content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "flex-start",
        }}
      >
        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            flex: 1,
            lineHeight: 1.6,
            color: "var(--paragraph-1)",
            fontFamily: "EB Garamond, serif",
            fontSize: "clamp(18px, 2vw, 24px)",
          }}
        >
          {danceClass.description}
        </Typography>

        <Box sx={{ flexShrink: 0, width: { xs: "100%", md: 400 } }}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
          >
            {danceClass.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${danceClass.title} ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Paper>
  );
}
