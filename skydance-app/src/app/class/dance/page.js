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
import SwiperDanceStyles from "@/components/SwiperDanceStyles";
import { ArrowForwardIos } from "@mui/icons-material";
import ScrollbarHeading from "@/components/ScrollbarHeading";

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
          <h1>Dance Classes</h1>
          <p>
            <em>Designed to inspire every dancer's passion and growth</em>
          </p>
        </AnimateInView>
      </Hero>

      <SnapScrollSection visibility={1}>
        <Box maxWidth={"xl"} margin={"auto"}>
          {/* Dance Styles Info */}
          <ScrollbarHeading title="Dance Styles" />
          <SwiperDanceStyles />
          <Box
            sx={{
              marginY: 5,
              paddingX: { xs: 2, md: 5 },
              textAlign: "left",
              maxWidth: "lg",
              marginX: "auto",
            }}
          >
            <Stack gap={{ xs: 1, md: 3 }}>
              <p>
                Sky Dance Studio offers high-quality training for dancers for
                all ages and abilities. Our classes span multiple styles,
                allowing dancers to explore movements and artistry, while
                developing strong technical foundations.
              </p>
            </Stack>
          </Box>
        </Box>
      </SnapScrollSection>

      <Grid container spacing={0} sx={{ alignItems: "stretch" }} margin={5}>
        {danceEvents.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
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

      {/* Gallery of Dance Class Styles */}
      <Grid
        container
        gap={0}
        alignItems={"stretch"}
        maxWidth={"xl"}
        margin={"auto"}
        marginBottom={4}
      >
        {danceClasses.map((dance) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ClassInfoCard1 danceClass={dance} />
          </Grid>
        ))}
      </Grid>

      {/* Timetable */}
      <AnimateInView>
        <Timetable />
      </AnimateInView>

      {/* Enrol or Trial Class */}
      <Hero
        backgroundImage="url('/jazz/2.png')"
        // minHeight={"100vh"}
        overlay="rgba(4, 11, 9, 0.5)"
      >
        <Box
          sx={{
            my: 5,
            width: { xs: 0.8, md: 1 / 2 },
            maxWidth: "lg",
            marginX: "auto",
            marginY: 5,
          }}
        >
          <h4>Join a class</h4>
          <p>
            Discover the joy of dance! Whether you’re a beginner or experienced,
            join us and unleash your passion for dance today!
          </p>
          <ButtonLink2 href="/enrol">Apply Now</ButtonLink2>
        </Box>
      </Hero>
    </>
  );
}
