import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack, Toolbar } from "@mui/material";
import React from "react";
import Timetable from "@/components/Timetable";
import Link from "next/link";
import Parallax from "@/components/ParallaxSection";
import SnapScrollSection from "@/components/SnapScrollSection";
import ButtonLink2 from "@/components/ButtonLink2";
import HeroGrows from "@/components/HeroImageGrows";
import ButtonLink1 from "@/components/ButtonLink1";
import danceEvents from "@/lib/data/danceEvents";
import ClassInfoCard1 from "@/components/ClassInfoCard1";
import danceClasses from "@/lib/data/classdescriptions";
import artImages from "@/lib/data/artImages";
import ArtEnrolment from "@/components/enrolment/artEnrolment";
import MusicEnrolment from "@/components/enrolment/musicEnrolment";

export default function MusicPage() {
  return (
    <>
      <Hero backgroundImage="url('/studio.webp')" minHeight={"100vh"}>
        <AnimateInView>
          <h1>Music Classes</h1>
        </AnimateInView>
      </Hero>

      {/* Music Description  */}
      <SnapScrollSection visibility={1}>
        <Box
          sx={{
            marginY: 10,
            paddingX: { xs: 0, md: 10 },
            textAlign: "center",
            maxWidth: "lg",
            marginX: "auto",
          }}
        >
          <Stack gap={{ xs: 1, md: 3 }}>
            <p>
              <em>Designed to inspire creativity and confidence</em>
            </p>
            <p>
              Sky Dance Studio’s music classes are open to students of all ages
              and skill levels. We offer classes for{" "}
              <span className="accent">violin, piano and singing. </span>
              We focus on building confidence, having fun, and creating in a
              relaxed and supportive environment.
            </p>
          </Stack>
        </Box>
      </SnapScrollSection>

      {/* Pictures */}
      <Grid container spacing={0} sx={{ alignItems: "stretch" }} margin={5}>
        {artImages.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <HeroGrows
              backgroundImage={item.img}
              overlay="rgba(0, 0, 0, 0)"
              textShadow="0"
              height="30vh"
            ></HeroGrows>
          </Grid>
        ))}
      </Grid>

      {/* Timetable */}
      <AnimateInView>
        <Timetable />
      </AnimateInView>

      <MusicEnrolment />
    </>
  );
}
