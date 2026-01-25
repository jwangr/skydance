import StudioHireForm from "@/components/forms/StudioHire";
import Hero from "@/components/HeroImage";
import StudioCard from "@/components/StudioCard";
import studiosForHire from "@/lib/data/studiosForHire";
import { Box, Grid } from "@mui/material";
import React from "react";

export default function StudioHirePage() {
  return (
    <>
      {/* Heading */}
      <Box sx={{ margin: 5, textAlign: "center" }}>
        <h1 style={{ marginX: "auto", color: "white" }}>Studio Hire</h1>
      </Box>
      <Hero minHeight="20vh">
        <Box maxWidth="md" sx={{ margin: "auto" }}>
          <h2>The perfect space for your next event</h2>
        </Box>
      </Hero>

      <Grid container spacing={0} maxWidth={"xl"} sx={{ margin: "auto" }}>
        {studiosForHire.map((studio) => (
          <Grid key={studio.title} size={{ xs: 12, sm: 6, lg: 4 }}>
            <StudioCard key={studio.title} studio={studio} />
          </Grid>
        ))}
      </Grid>

      <StudioHireForm />
    </>
  );
}
