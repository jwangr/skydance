import ButtonLink1 from "@/components/ButtonLink1";
import Hero from "@/components/HeroImage";
import HeroGrows from "@/components/HeroImageGrows";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

export const metadata = {
  title: "About Our Story | Sky Dance Studio",
  description:
    "Learn about Sky Dance Studio’s journey from 2009 to today. We’ve grown from 4 students to a thriving dance community in Auburn, Sydney offering ballet, jazz, lyrical, contemporary, acrobatics and more.",

  alternates: {
    canonical: "/about/story",
  },

  openGraph: {
    title: "About Sky Dance Studio",
    description:
      "Discover the story behind Sky Dance Studio, a growing dance community in Auburn, Sydney.",
    url: "https://skydancestudio.com.au/about/story",
    type: "article",
  },
};

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
              Since 2009, our studio has been committed to providing dance
              training in a positive and supportive environment. We nurture each
              student's talent while building confidence, discipline,
              creativity, and a lifelong passion for dance. Our experienced
              mentors, who are professionally trained and highly accomplished,
              guide dancers of all levels to reach their full potential for
              personal growth, enjoyment, and competition.
              <br />
              <br />
              Over the years, our dancers have represented Sky Dance Performing
              Arts at major competitions across Sydney and internationally,
              achieving outstanding success and earning numerous trophies and
              awards.
              <br />
              <br />
              Our studio offers over 60 classes across a wide range of styles,
              including hip-hop, RAD ballet, jazz, tap, acrobatics, Chinese
              dance, K-pop, contemporary, musical theatre, and lyrical, and many
              more, fitting your style of dance!
            </div>
            <ButtonLink1 href="/contact">Contact Us</ButtonLink1>
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
