import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import danceWorkshops from "@/lib/data/danceWorkshops";
import SwiperDanceEvents from "@/components/SwiperHorizontalScollbar/SwiperDanceEvents";
import danceIntensives from "@/lib/data/danceIntensives";
import DanceProgramEnrolment from "@/components/forms/DanceProgramEnrolment";

export const metadata = {
  title: "Dance Workshops & Intensives Sydney | Programs",
  description:
    "Join dance workshops and intensives at Sky Dance Studio in Auburn, Sydney. Programs for all ages led by guest and studio teachers.",

  alternates: {
    canonical: "/class/dance/programs",
  },

  openGraph: {
    title: "Dance Programs | Workshops & Intensives Sydney",
    description:
      "Explore seasonal dance workshops and intensives in Auburn, Sydney for dancers of all levels.",
    url: "https://skydancestudio.com.au/class/dance/programs",
    type: "website",
  },
};

export default function DancePrograms() {
  return (
    <>
      <Hero minHeight={"100vh"} backgroundImage="url('/lyrical/Lyrical7.jpg')">
        <AnimateInView>
          <h1>Dance Programs</h1>
          <em>
            <p>Workshops led by special guest teachers.</p>
            <p>Intensives led by our studio teachers.</p>
          </em>
        </AnimateInView>
      </Hero>

      <Box maxWidth={"xl"} margin={"auto"}>
        {/* Workshops */}
        <SwiperDanceEvents
          events={danceWorkshops}
          heading={"Upcoming Workshops"}
        />

        {/* Intensives */}
        <SwiperDanceEvents
          events={danceIntensives}
          heading={"Upcoming Intensives"}
        />
      </Box>

      <DanceProgramEnrolment />
    </>
  );
}
