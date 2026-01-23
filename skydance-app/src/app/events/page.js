import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import SnapScrollSection from "@/components/SnapScrollSection";
import HeroGrows from "@/components/HeroImageGrows";
import danceEvents from "@/lib/data/danceEvents";
import formatDate from "@/lib/utils/formatDate";

const events = danceEvents;

export default function DanceEvents() {
  return (
    <>
      {/* <Hero minHeight={"100vh"} backgroundImage="url('/jazzclass.png')">
        <AnimateInView>
          <h1>Dance Events</h1>
        </AnimateInView>
      </Hero> */}

      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center", color: "white" }}>
          Dance Events
        </h1>
      </Box>

      <Box maxWidth={"xl"} margin={"auto"}>
        <Grid container spacing={0} sx={{ alignItems: "stretch" }}>
          {/* Row 1 (3 items) */}
          {events.map((item, index) => {
            // Medium screens: grid items in the last row automatically resize
            const columnsSm = 2; // number of columns in md size
            const columnsMd = 3; // number of columns in md size
            const isLast = index === events.length - 1;
            const itemsInLastMdRow = events.length % columnsMd || columnsMd;
            const itemsInLastSmRow = events.length % columnsSm;
            const isAloneSm = isLast && itemsInLastSmRow === 1;
            const isAloneMd = isLast && itemsInLastMdRow === 1;
            const isLastButNotAlone = isLast && itemsInLastMdRow !== 1;

            return (
              <Grid
                key={item.title}
                size={{
                  xs: 12,
                  sm: isAloneSm ? 12 : 6,
                  md: isAloneMd ? 12 : isLastButNotAlone ? "grow" : 4,
                }}
              >
                <HeroGrows
                  backgroundImage={item.img}
                  overlay="rgba(0, 0, 0, 0.6)"
                  textShadow="0"
                  height="100%"
                >
                  <Stack gap={2.5} paddingY={8} width={"inherit"}>
                    <h4 style={{ color: "var(--bg6)" }}>{item.location}</h4>
                    <h2>{item.title} </h2>
                    <h4>
                      {formatDate(item.date, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </h4>
                  </Stack>
                </HeroGrows>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
