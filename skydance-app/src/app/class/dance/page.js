import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Timetable from "@/components/Timetable";
import SnapScrollSection from "@/components/SnapScrollSection";
import ButtonLink2 from "@/components/ButtonLink2";
import danceWorkshops from "@/lib/data/danceWorkshops";
import SwiperDanceStyles from "@/components/SwiperHorizontalScollbar/SwiperDanceStyles";
import ScrollbarHeading from "@/components/SwiperHorizontalScollbar/ScrollbarHeading";
import SwiperDanceEvents from "@/components/SwiperHorizontalScollbar/SwiperDanceEvents";
import danceIntensives from "@/lib/data/danceIntensives";
import SnapScrollSection2 from "@/components/SnapScrollSection2";
import danceEvents from "@/lib/data/danceEvents";

export default function DancePage() {
  return (
    <>
      <Hero minHeight={"100vh"} backgroundImage="url('/jazzclass.png')">
        <AnimateInView>
          <h1>Dance Classes</h1>
          <p>
            <em>Designed to inspire every dancer's passion and growth</em>
          </p>
        </AnimateInView>
      </Hero>

      <SnapScrollSection2 visibility={0.1}>
        <Box maxWidth={"xl"} margin={"auto"}>
          {/* Dance Styles Info */}
          <ScrollbarHeading title="Dance Styles" />
          <SwiperDanceStyles />
          <Box
            sx={{
              marginY: 5,
              paddingX: { xs: 2, md: 5 },
              textAlign: "left",
            }}
          >
            <p>
              Sky Dance Studio offers high-quality training for dancers for all
              ages and abilities. Our classes span multiple styles, allowing
              dancers to explore movements and artistry, while developing strong
              technical foundations.
            </p>
          </Box>
        </Box>
      </SnapScrollSection2>

      <Box maxWidth={"xl"} margin={"auto"}>
        {/* Events */}
        <SwiperDanceEvents
          events={danceEvents}
          heading={"Upcoming Events"}
          link={"/class/dance/events"}
        />

        {/* Workshops */}
        <SwiperDanceEvents
          events={danceWorkshops}
          heading={"Upcoming Workshops"}
          link={"/class/dance/programs"}
        />

        {/* Intensives */}
        <SwiperDanceEvents
          events={danceIntensives}
          heading={"Upcoming Intensives"}
          link={"/class/dance/programs"}
        />
      </Box>

      {/* Timetable */}
      <Timetable />

      {/* Enrol for group or private classes */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {/* Enrol or Trial Class */}
        <Hero
          backgroundImage="url('/jazz/2.png')"
          overlay="rgba(4, 11, 9, 0.5)"
          height="100%"
        >
          <Box
            sx={{
              my: 5,
              width: { xs: 0.8, md: 1 / 2 },
              maxWidth: "lg",
              marginX: "auto",
              marginY: 5,
            }}
          >
            <h4>Join a class</h4>
            <p>
              Discover the joy of dance! Whether you’re a beginner or
              experienced, join us and unleash your passion for dance today!
            </p>
            <ButtonLink2 href="/enrol">Apply Now</ButtonLink2>
          </Box>
        </Hero>

        {/* Register for private class */}
        <Hero
          backgroundImage="url('/jazz/1.png')"
          height="inherit"
          overlay="rgba(4, 11, 9, 0.5)"
        >
          <Box
            sx={{
              my: 5,
              width: { xs: 0.8, md: 1 / 2 },
              maxWidth: "lg",
              marginX: "auto",
              marginY: 5,
            }}
          >
            <h4>Private Class</h4>
            <p>Sign up for 1:1 class and tailor your learning</p>
            <ButtonLink2 href="/enrol">Apply Now</ButtonLink2>
          </Box>
        </Hero>
      </Stack>
    </>
  );
}
