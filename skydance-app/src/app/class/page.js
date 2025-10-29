import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Toolbar } from "@mui/material";
import React from "react";
import classData from "@/lib/data/classdescriptions.json";
import ClassInfoCard from "@/components/ClassInfoCard";
import Timetable from "@/components/Timetable";
import Link from "next/link";
import Parallax from "@/components/ParallaxSection";
import SnapScrollSection from "@/components/SnapScrollSection";

export default function ClassPage() {
  return (
    <>
      <Hero overlay="rgba(185, 131, 181, 0.5)" minHeight={"100vh"}>
        <AnimateInView>
          <h1>Classes</h1>
        </AnimateInView>
      </Hero>

      {/* Dance Styles  */}
      <SnapScrollSection>
        <Box
          sx={{
            paddingY: 10,
            paddingX: { xs: 0, md: 10 },
            textAlign: "center",
          }}
        >
          <p>
            Discover our classes at Sky Dance Studio — designed to inspire every
            dancer’s passion and growth.
          </p>
          <Box
            sx={{ px: 2, width: { sm: "75%", md: "100%" }, marginX: "auto" }}
          >
            {classData.map((c) => (
              <AnimateInView key={c.title}>
                <ClassInfoCard danceClass={c} />
              </AnimateInView>
            ))}
          </Box>
        </Box>
      </SnapScrollSection>

      {/* Timetable */}
      <SnapScrollSection>
        {/* <AnimateInView> */}
        <Toolbar />
        <Timetable />
        {/* </AnimateInView> */}
      </SnapScrollSection>

      {/* Enrol or Trial Class */}
      <Hero
        backgroundImage="url('studio.webp')"
        minHeight={500}
        overlay="rgba(4, 11, 9, 0.5)"
      >
        <Box
          sx={{
            mx: 10,
            my: 5,
          }}
        >
          <h4>Enrol or Trial a Class</h4>
          <p>
            Discover the joy of dance! From Ballet and Lyrical to Hip Hop and
            Contemporary, our classes inspire creativity, build confidence, and
            let you move your way. Whether you’re a beginner or experienced,
            join us and unleash your passion for dance today!
          </p>
          <Box sx={{ my: 5 }}>
            <Link href="/enrol">
              <button className="button1">Apply Now</button>
            </Link>
          </Box>
        </Box>
      </Hero>
    </>
  );
}
