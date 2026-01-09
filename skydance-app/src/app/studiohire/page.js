import ButtonLink1 from "@/components/ButtonLink1";
import StudioHireForm from "@/components/forms/StudioHire";
import Hero from "@/components/HeroImage";
import HeroGrows from "@/components/HeroImageGrows";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

export default function StudioHirePage() {
  return (
    <>
      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center", color: "white" }}>
          Studio Hire
        </h1>
      </Box>
      <Hero backgroundImage="url('/studio.webp')" minHeight="50vh">
        <Container maxWidth="md">
          <Stack
            direction={"column"}
            gap={3}
            sx={{ fontSize: "1.3rem" }}
          >
            <h2>The perfect space for your next event</h2>
            <div>
              Sky Dance has 5 studios, each equipped with vinyl floors and
              full-length mirrors. Guests can use these for rehearsals,
              auditions and other creative events.
            </div>
          </Stack>
        </Container>
      </Hero>

      <StudioHireForm />
    </>
  );
}
