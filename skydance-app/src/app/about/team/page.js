import AnimateInView from "@/components/AnimateInView";
import { Avatar, Box, Grid, Stack } from "@mui/material";
import staffData from "@/lib/data/staff";
import HeroGrows from "@/components/HeroImageGrows";
import ButtonLink1 from "@/components/ButtonLink1";
import Hero from "@/components/HeroImage";

export default function AboutTeam() {
  return (
    <>
      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center", color: "white" }}>
          About Us
        </h1>
      </Box>

      <Hero
        backgroundImage="url('/abstractbackground.jpg')"
        overlay="rgba(0, 0, 0, 0.2)"
        backgroundPosition="top center"
      >
        {/* Meet Our Team   */}
        <Box
          sx={{
            paddingY: 10,
            maxWidth: 1200,
            marginX: "auto",
            paddingX: 5,
            textAlign: "left",
            color: "white",
          }}
        >
          <h2>Meet Our Team</h2>
          <p>
            Our team of world-class teachers include international performers,
            artistic directors and industry professionals. With decades of
            experience, our teachers can build passion, discipline and
            confidence.
          </p>

          <Grid
            container
            spacing={3}
            marginY={3}
            gap={3}
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {staffData.map((staff) => (
              <Grid key={staff.title} size={{ xs: 6, sm: 4 }}>
                <Stack
                  direction={"column"}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt={staff.title}
                    src={`/staff/${staff.src}`}
                    sx={{
                      width: { xs: 80, sm: 150, md: 200 },
                      height: { xs: 80, sm: 150, md: 200 },
                      marginTop: 3,
                      marginBottom: 1,
                    }}
                  />
                  <AnimateInView>
                    <h4>{staff.title}</h4>
                  </AnimateInView>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Hero>

      {/* Link to Our Story */}
      <HeroGrows
        backgroundImage="url('/ballet/Ballet7.jpg')"
        minHeight={{ xs: 300, sm: 500 }}
      >
        <h2>
          Our story began over one{" "}
          <span style={{ color: "var(--bg6)" }}>decade</span> ago...
        </h2>
        <ButtonLink1 width="50%" href="/about/story">
          Learn more
        </ButtonLink1>
      </HeroGrows>
    </>
  );
}
