"use client";

import { Box, FormLabel, Stack } from "@mui/material";

import Hero from "@/components/HeroImage";
import DanceEnrolment from "@/components/forms/danceEnrolment";

export default function EnrolPage() {
  return (
    <>
      <Hero>
        <Box sx={{ marginBottom: 5 }}>
          <h1 style={{ marginX: "auto", textAlign: "center" }}>Join Now</h1>
        </Box>
        <p>Be a part of the Sky Dance community today</p>
      </Hero>
      <DanceEnrolment />
    </>
  );
}
