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
      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center", color: "white" }}>
          Tutoring Classes
        </h1>
      </Box>

      {/* Tutoring Description  */}
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
            At Sky Dance Studio, we promote learning for children from
            Kindergarten to Year 7 with group tutoring classes. Our experienced
            tutors help children with Maths, English or Science. We offer
            classes on Tuesday, Wednesday and Saturday.
          </p>
          <p>
            Tutoring helps students understand ideas clearly and build
            confidence. Lessons are tailored to each student’s pace and goals,
            with a focus on asking questions and learning step by step.
          </p>
        </Stack>
      </Box>

      {/* Timetable */}
      <Timetable />

      <TutoringEnrolment />
    </>
  );
}
