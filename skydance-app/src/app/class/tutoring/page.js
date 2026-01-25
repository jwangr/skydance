import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack, Toolbar } from "@mui/material";
import React from "react";
import Timetable from "@/components/Timetable";
import SnapScrollSection from "@/components/SnapScrollSection";
import HeroGrows from "@/components/HeroImageGrows";
import artImages from "@/lib/data/artImages";
import TutoringEnrolment from "@/components/forms/tutoringEnrolment";

export default function TutoringPage() {
  return (
    <>
      <Hero minHeight={"100vh"}>
        <AnimateInView>
          <h1>Tutoring Classes</h1>
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
              <em>Tutoring for many subjects: Lorum Ipsum</em>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Tutoring helps students understand ideas clearly and build
              confidence. Lessons are tailored to each student’s pace and goals,
              with a focus on asking questions and learning step by step.
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

      <TutoringEnrolment />
    </>
  );
}
