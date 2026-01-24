import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack, Toolbar } from "@mui/material";
import React from "react";
import Timetable from "@/components/Timetable";
import SnapScrollSection from "@/components/SnapScrollSection";
import HeroGrows from "@/components/HeroImageGrows";
import artImages from "@/lib/data/artImages";
import MusicEnrolment from "@/components/forms/musicEnrolment";

export default function MusicPage() {
  return (
    <>
      <Hero
        backgroundImage="url('/music/Singing2.jpg')"
        minHeight={"80vh"}
        overlay="rgba(0, 0, 0, 0.6)"
      >
        <AnimateInView>
          <h1>Music Classes</h1>
        </AnimateInView>
      </Hero>

      {/* Music Description  */}
      <SnapScrollSection visibility={1}>
        <Box
          sx={{
            marginY: 10,
            paddingX: { xs: 2, md: 10 },
            textAlign: "center",
            maxWidth: "lg",
            marginX: "auto",
          }}
        >
          <Stack gap={{ xs: 1, md: 3 }}>
            <p>
              Sky Dance Studio’s music classes are open to students of all ages
              and skill levels. We offer one-on-one classes for violin, piano
              and singing.
            </p>
            <p>
              We focus on building confidence, having fun, and creating music in
              a relaxed and supportive environment.
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
      <Timetable />

      <MusicEnrolment />
    </>
  );
}
