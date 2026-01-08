"use client";

import { Box, Stack } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { useRef, useState } from "react";
import ScrollbarHeading from "./ScrollbarHeading";
import { NextButton, PreviousButton } from "./NavigationButtons";

export default function SwiperDanceEvents({ events, heading = "" }) {
  const swiperRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <>
      {/* Top-right arrows */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={{ xs: 1, md: 3 }}
        alignContent={"stretch"}
      >
        <ScrollbarHeading title={heading} />
        {/* Swiper buttons */}
        <Box>
          <PreviousButton swiperRef={swiperRef} disabled={isBeginning} />
          <NextButton swiperRef={swiperRef} disabled={isEnd} />
          {/* <IconButton
            className="events-prev"
            sx={{
              color: "white",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
              mr: 1,
              display: "inline-flex",
            }}
          >
            <ArrowBackIosNew fontSize="small" />
          </IconButton>

          <IconButton
            className="events-next"
            sx={{
              color: "white",
              display: "inline-flex",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            <ArrowForwardIos fontSize="small" />
          </IconButton> */}
        </Box>
      </Stack>
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        // default view
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        speed={600}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {events.map((event) => (
          <SwiperSlide
            key={event.title}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              justifyContent: "stretch",
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderRadius: 4,
                backgroundColor: "#0b0129ff",
                color: "white",
                p: { xs: 3, md: 5 },
              }}
            >
              <h4>{event.title}</h4>
              <p>{event.caption1}</p>
              <p>{event.caption2}</p>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
