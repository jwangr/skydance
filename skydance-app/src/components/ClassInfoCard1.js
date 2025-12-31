"use client";
import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";

// Import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

// Sample props structure:
const example = {
  title: "Ballet",
  images: ["ballet/ballet1.png", "ballet/ballet2.png", "ballet/ballet3.png"],
};

export default function ClassInfoCard1({ danceClass = example }) {
  return (
    <>
      {/* Main content */}
      <Box
        sx={{
          position: "relative",
          flexShrink: 0,
          width: 1,
          overflow: "hidden",
        }}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {danceClass.images &&
            danceClass.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${danceClass.title} ${index + 1}`}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    aspectRatio: "16/9",
                    objectPosition: "center",
                  }}
                />
              </SwiperSlide>
            ))}

          {!danceClass.images && (
            <img
              src={"logo.webp"}
              alt={`no image`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </Swiper>
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 100,
          }}
        >
          <h3>{danceClass.title}</h3>
        </Box>
      </Box>
    </>
  );
}
