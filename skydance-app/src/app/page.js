import AnimateInView from "@/components/AnimateInView";
import ButtonLink1 from "@/components/ButtonLink1";
import Hero from "@/components/HeroImage";
import HeroGrows from "@/components/HeroImageGrows";
import homeEvents from "@/lib/data/homeEvents";
import { Box, Grid, Stack } from "@mui/material";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", backgroundColor: "var(--bg2)" }}>
      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center", color: "white" }}>
          Sky Dance Studio
        </h1>
      </Box>

      {/* Opening Banner */}
      <Hero
        overlay="rgba(0, 0, 0, 0.5)"
        minHeight={500}
        backgroundImage="url('HomePage.png')"
      >
        <AnimateInView>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3.5,
              alignItems: "center",
              color: "white",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                alignItems: "center",
              }}
            >
              <h3>
                Where <span style={{ color: "var(--bg6)" }}>art</span> is the
                language
              </h3>
              <h3>
                And movement is{" "}
                <span style={{ color: "var(--bg6)" }}>expression</span>
              </h3>
            </Box>

            <h2>2026 CLASSES & TIMETABLE</h2>
            <ButtonLink1 width="50%">Explore Now</ButtonLink1>
          </Box>
        </AnimateInView>
      </Hero>

      {/* Link List Version 2 */}
      <Grid container spacing={0} sx={{ alignItems: "stretch" }}>
        {/* Row 1 (2 items)*/}
        {homeEvents.slice(0, 2).map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
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
        {/* Row 2 (3 items) */}
        {homeEvents.slice(2, 8).map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <HeroGrows
              backgroundImage={item.img}
              overlay="rgba(0, 0, 0, 0.6)"
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
    </div>
  );
}
