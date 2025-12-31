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

const classLinks = [
  { title: "DANCE", link: "/class/dance" },
  { title: "ART", link: "/class/art" },
  { title: "MUSIC", link: "/class/music" },
  { title: "TUTORING", link: "/class/tutoring" },
];

export default function DancePage() {
  return (
    <>
      <Hero
        overlay="rgba(185, 131, 181, 0.5)"
        minHeight={"100vh"}
        backgroundImage="url('/jazzclass.png')"
      >
        <AnimateInView>
          <h1>Classes</h1>
          <Stack
            direction={{ xs: "column", md: "row" }}
            // gap={3}
            width={{ xs: 1, sm: 1 / 2, md: 3 / 4 }}
            maxWidth={"lg"}
            marginX={"auto"}
            marginTop={{ xs: 1, md: 5 }}
            justifyContent={"center"}
          >
            {classLinks.map((link) => (
              <ButtonLink2 key={link.title} href={link.link} marginY="5px">
                {link.title}
              </ButtonLink2>
            ))}
          </Stack>
        </AnimateInView>
      </Hero>

      {/* Dance Styles  */}
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
            <h2>Dance Classes</h2>
            <p>
              <em>Designed to inspire every dancer's passion and growth</em>
            </p>
            <p>
              Sky Dance Studio offers high-quality training for dancers for all
              ages and abilities. Our classes span multiple styles, allowing
              dancers to explore movements and artistry, while developing strong
              technical foundations. We encourage every dancer to reach their
              potential in a space where passion, discipline, and artistry come
              together.
            </p>
          </Stack>
        </Box>
      </SnapScrollSection>

      {/* Timetable */}
      <AnimateInView>
        <Timetable />
      </AnimateInView>

      <Grid container spacing={0} sx={{ alignItems: "stretch" }}>
        {danceEvents.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 4 }}>
            <HeroGrows
              backgroundImage={item.img}
              overlay="rgba(0, 0, 0, 0.5)"
              textShadow="0"
              height="100%"
            >
              <Stack gap={2.5} paddingY={8} width={"inherit"}>
                <h4 style={{ color: "var(--bg6)" }}>{item.caption1}</h4>
                <h2>{item.title} </h2>
                <h4>{item.caption2}</h4>
                <ButtonLink1 href={item.link}>{item.button}</ButtonLink1>
              </Stack>
            </HeroGrows>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        gap={0}
        alignItems={"stretch"}
        maxWidth={"xl"}
        margin={"auto"}
      >
        {danceClasses.map((dance) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ClassInfoCard1 danceClass={dance} />
          </Grid>
        ))}
      </Grid>

      {/* Enrol or Trial Class */}
      <Hero
        backgroundImage="url('studio.webp')"
        minHeight={"100vh"}
        overlay="rgba(4, 11, 9, 0.5)"
      >
        <Box
          sx={{
            my: 5,
            paddingX: { xs: 2, md: 10 },
          }}
        >
          <h4>Join a class</h4>
          <p>
            Discover the joy of dance! From Ballet and Lyrical to Hip Hop and
            Contemporary, our classes inspire creativity, build confidence, and
            let you move your way. Whether you’re a beginner or experienced,
            join us and unleash your passion for dance today!
          </p>
          <ButtonLink2 href="/enrol">Apply Now</ButtonLink2>
        </Box>
      </Hero>
    </>
  );
}
