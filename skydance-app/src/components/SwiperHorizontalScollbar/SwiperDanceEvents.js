"use client";

import { Box, Stack } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { useRef, useState } from "react";
import ScrollbarHeading from "./ScrollbarHeading";
import { NextButton, PreviousButton } from "./NavigationButtons";
import ScrollbarHeadingLink from "./ScrollbarHeadingLink";
import formatDate from "@/lib/utils/formatDate";

export default function SwiperDanceEvents({
  events,
  heading = "",
  description,
  link,
}) {
  const swiperRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <Box paddingY={2}>
      {/* Top-right arrows */}
      <Stack
        direction={description ? "column" : "row"}
        paddingX={{ xs: 1, md: 3 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "stretch",
        }}
      >
        {link ? (
          <ScrollbarHeadingLink title={heading} link={link} />
        ) : (
          <ScrollbarHeading title={heading} />
        )}

        {/* Swiper buttons */}
        <Box
          sx={{
            display: isScrollable ? "block" : "none",
          }}
        >
          <PreviousButton swiperRef={swiperRef} disabled={isBeginning} />
          <NextButton swiperRef={swiperRef} disabled={isEnd} />
        </Box>
      </Stack>
      {events.length === 0 && (
        <Box sx={{ px: 10 }}>
          <p>Coming soon...</p>
        </Box>
      )}
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
        // Initialises the states
        onInit={(swiper) => {
          const totalSlides = swiper.slides.length;
          const visibleSlides = swiper.params.slidesPerView;

          setIsScrollable(totalSlides > visibleSlides);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
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

              <p>{event.location ? event.location : ""}</p>
              <p>
                {event.caption2
                  ? event.caption2
                  : event.date
                    ? formatDate(event.date, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : ""}
              </p>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
