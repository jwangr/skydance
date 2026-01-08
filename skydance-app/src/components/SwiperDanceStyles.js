"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { Box, Typography } from "@mui/material";
import danceClasses from "@/lib/data/classdescriptions";
import DanceCard from "./DanceCard";

export default function SwiperDanceStyles() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      spaceBetween={0}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
      }}
      speed={2000}
      slidesPerView={2}
      breakpoints={{
        600: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
      style={{
        width: "100%",
      }}
    >
      {danceClasses.map((style) => (
        <SwiperSlide key={style.title}>
          <DanceCard dance={style} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
