import AnimateInView from "@/components/AnimateInView";
import ButtonLink1 from "@/components/ButtonLink1";
import Hero from "@/components/HeroImage";
import HeroGrows from "@/components/HeroImageGrows";
import homeEvents from "@/lib/data/homeEvents";
import formatDate from "@/lib/utils/formatDate";
import { Box, Grid, Stack } from "@mui/material";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: "Sky Dance Studio",
    url: "https://skydancestudio.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8/219 Parramatta Rd",
      addressLocality: "Auburn",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: "Sydney",
    description:
      "Dance studio in Auburn Sydney offering ballet, jazz, hip hop, Chinese dance, K-pop and acrobatics classes for children and adults.",
  };

  return (
    <>
      <Script
        id="dance-school-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <div style={{ overflowX: "hidden", backgroundColor: "var(--bg2)" }}>
          {/* Heading */}
          <Box sx={{ margin: 5 }}>
            <h1
              style={{ marginX: "auto", textAlign: "center", color: "white" }}
            >
              Sky Dance Studio
            </h1>
          </Box>

          {/* Opening Banner */}
          <Hero
            overlay="rgba(0, 0, 0, 0.5)"
            minHeight={700}
            backgroundImage="url('/ballet/Ballet7.jpg')"
          >
            <AnimateInView>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3.5,
                  alignItems: "center",
                  color: "white",
                  maxWidth: "md",
                  margin: "auto",
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
                    Where <span style={{ color: "var(--bg6)" }}>art</span> is
                    the language
                  </h3>
                  <h3>
                    And movement is{" "}
                    <span style={{ color: "var(--bg6)" }}>expression</span>
                  </h3>
                </Box>

                <h2>2026 CLASSES & TIMETABLE</h2>
                <ButtonLink1 width="50%" href="/class/dance">
                  Explore Now
                </ButtonLink1>
              </Box>
            </AnimateInView>
          </Hero>

          {/* Link List */}
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
                  <Stack
                    gap={2.5}
                    paddingY={8}
                    width={"inherit"}
                    sx={{ justifyContent: "center" }}
                  >
                    <h4 style={{ color: "var(--bg6)" }}>{item.caption1}</h4>
                    <h2>{item.title} </h2>
                    <h4>{item.date ? formatDate(item.date) : item.caption2}</h4>
                    <ButtonLink1 href={item.link}>{item.button}</ButtonLink1>
                  </Stack>
                </HeroGrows>
              </Grid>
            ))}
            {/* Row 2 (3 items) - can add more if wanted */}
            {homeEvents.slice(2, 8).map((item, index) => {
              const numberEvents = 3;
              // Sm + Medium screens: grid items in the last row automatically resize
              const columnsSm = 2; // number of columns in Sm size
              const columnsMd = 3; // number of columns in md size
              const isLast = index === numberEvents - 1;
              const itemsInLastMdRow = numberEvents % columnsMd || columnsMd;
              const itemsInLastSmRow = numberEvents % columnsSm;
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
                      <h4 style={{ color: "var(--bg6)" }}>{item.caption1}</h4>
                      <h2>{item.title} </h2>
                      <h4>
                        {item.date ? formatDate(item.date) : item.caption2}
                      </h4>
                      <ButtonLink1 href={item.link}>{item.button}</ButtonLink1>
                    </Stack>
                  </HeroGrows>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </main>
    </>
  );
}
