import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import ButtonLink2 from "@/components/ButtonLink2";
import danceEvents from "@/lib/data/danceWorkshops";
import SwiperDanceStyles from "@/components/SwiperHorizontalScollbar/SwiperDanceStyles";
import ScrollbarHeading from "@/components/SwiperHorizontalScollbar/ScrollbarHeading";
import SwiperDanceEvents from "@/components/SwiperHorizontalScollbar/SwiperDanceEvents";
import danceIntensives from "@/lib/data/danceIntensives";
import SnapScrollSection2 from "@/components/SnapScrollSection2";
import danceWorkshops from "@/lib/data/danceWorkshops";
import DanceProgramEnrolment from "@/components/forms/DanceProgramEnrolment";
import SnapScrollSection from "@/components/SnapScrollSection";

const intensives = danceIntensives.map;
const workshops = danceWorkshops;

export default function DancePrograms() {
  return (
    <>
      <Hero minHeight={"100vh"} backgroundImage="url('/jazzclass.png')">
        <AnimateInView>
          <h1>Dance Programs</h1>
          <em>
            <p>Workshops led by special guest teachers.</p>
            <p>Intensives led by our studio teachers.</p>
          </em>
        </AnimateInView>
      </Hero>

      <SnapScrollSection>
        <Box maxWidth={"xl"} margin={"auto"}>
          {/* Workshops */}
          <SwiperDanceEvents
            events={danceEvents}
            heading={"Upcoming Workshops"}
          />

          {/* Intensives */}
          <SwiperDanceEvents
            events={danceIntensives}
            heading={"Upcoming Intensives"}
          />
        </Box>
      </SnapScrollSection>

      <DanceProgramEnrolment />
    </>
  );
}
