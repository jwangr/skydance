import ButtonLink1 from "@/components/ButtonLink1";
import Hero from "@/components/HeroImage";
import HeroGrows from "@/components/HeroImageGrows";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

export default function AboutStory() {
  return (
    <>
      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center", color: "white" }}>
          About Us
        </h1>
      </Box>
      <Hero backgroundImage="url('/abstractbackground.jpg')">
        <Container maxWidth="md">
          <Stack
            direction={"column"}
            gap={3}
            sx={{ fontSize: "1.3rem" }}
            margin={3}
          >
            <h2>Our story began over one decade ago...</h2>
            <div>
              Since our establishment in 2009, Sky Dance has grown from 4
              students to a thriving community of over 300 dancers, ranging in
              ages from three to adult.
            </div>
            <div>
              Originally dedicated to Royal Ballet, our studio has now evolved
              into a comprehensive dance school with over 20 classes. We offer a
              wide range of styles including jazz, modern, lyrical,
              contemporary, acrobatics, musical theatre, Chinese, and character
              dance. The studio also proudly supports students in preparing for
              all levels of the Royal Academy of Dance (RAD) examinations.
            </div>
            <div>
              We offer daily classes, as well as intensive workshops and private
              classes.
            </div>
            <ButtonLink1>Contact Us</ButtonLink1>
          </Stack>
        </Container>
      </Hero>

      {/* Link to Our Team */}
      <HeroGrows
        backgroundImage="url('/ballet/Ballet7.jpg')"
        minHeight={{ xs: 300, sm: 500 }}
      >
        <Box sx={{ maxWidth: "md", margin: "auto" }}>
          <h2>Meet Our Team</h2>
          <ButtonLink1 width="50%" href="/about/team">
            Learn more
          </ButtonLink1>
        </Box>
      </HeroGrows>
    </>
  );
}
