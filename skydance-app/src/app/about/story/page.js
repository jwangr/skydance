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
            {" "}
            <h2>Our story began over one decade ago...</h2>
            <div>
              Since our establishment in 2009, Sky Dance has grown from 4
              students to a thriving community of over 300 dancers, ranging in
              ages from <span className="accent">three to adult</span>.
            </div>
            <div>
              Originally dedicated to Royal Ballet, our studio has now evolved
              into a comprehensive dance school with{" "}
              <span className="accent">over 20 classes</span>. We offer a wide
              range of styles including jazz, modern, lyrical, contemporary,
              acrobatics, musical theatre, Chinese, and character dance. The
              studio also proudly supports students in preparing for all levels
              of the Royal Academy of Dance (RAD) examinations.
            </div>
            <div>
              We offer <span className="accent">daily classes</span>, as well as
              intensive workshops and{" "}
              <span className="accent">private classes.</span>
            </div>
            <ButtonLink1>Contact Us</ButtonLink1>
          </Stack>
        </Container>
      </Hero>

      {/* Link to Our Team */}
      <HeroGrows backgroundImage="url('/studio.webp')" minHeight={300}>
        <h2>
          Meet Our Team
        </h2>
        <ButtonLink1 width="50%" href="/about/team">
          Learn more
        </ButtonLink1>
      </HeroGrows>
    </>
  );
}
