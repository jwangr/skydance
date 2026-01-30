import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Timetable from "@/components/Timetable";
import ButtonLink2 from "@/components/ButtonLink2";
import danceWorkshops from "@/lib/data/danceWorkshops";
import SwiperDanceStyles from "@/components/SwiperHorizontalScollbar/SwiperDanceStyles";
import ScrollbarHeading from "@/components/SwiperHorizontalScollbar/ScrollbarHeading";
import SwiperDanceEvents from "@/components/SwiperHorizontalScollbar/SwiperDanceEvents";
import danceIntensives from "@/lib/data/danceIntensives";
import danceEvents from "@/lib/data/danceEvents";

export const metadata = {
  title: "Dance Classes in Auburn, Sydney",
  description:
    "Looking for dance classes in Auburn, Sydney? Sky Dance Studio offers ballet, jazz, hip hop and kids dance classes for all ages.",
};

export default function DancePage() {
  return (
    <>
      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center", color: "white" }}>
          Dance Classes
        </h1>
      </Box>

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
          <br />
          <p>
            Our adult classes are open to all levels and designed for those who
            want to move, build strength, and enjoy dance. We offer open classes
            for ballet, chinese dance and jazz.
          </p>
        </Box>
      </Box>

      <Box maxWidth={"xl"} margin={"auto"}>
        {/* Events */}
        <AnimateInView>
          <SwiperDanceEvents
            events={danceEvents}
            heading={"Upcoming Events"}
            link={"/events"}
          />
        </AnimateInView>

        {/* Workshops */}
        <AnimateInView>
          <SwiperDanceEvents
            events={danceWorkshops}
            heading={"Upcoming Workshops"}
            link={"/class/dance/programs"}
          />
        </AnimateInView>

        {/* Intensives */}
        <AnimateInView>
          <SwiperDanceEvents
            events={danceIntensives}
            heading={"Upcoming Intensives"}
            link={"/class/dance/programs"}
          />
        </AnimateInView>
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
          backgroundImage="url('/lyrical/Lyrical7.jpg')"
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
          backgroundImage="url('/chinesedance/Chinese6.jpg')"
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
