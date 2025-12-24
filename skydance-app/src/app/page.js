import AnimateInView from "@/components/AnimateInView";
import ButtonLink1 from "@/components/ButtonLink1";
import ButtonLink2 from "@/components/ButtonLink2";
import Hero from "@/components/HeroImage";
import Timetable from "@/components/Timetable";
import { Box, Grid, Link, ListItemButton, Toolbar } from "@mui/material";

export default function Home() {
  const navLinks = [
    { title: "About Us", link: "/about", img: "url('/logo.webp')" },
    {
      title: "Classes & Timetable",
      link: "/class",
      img: "url('/jazzclass.png')",
    },
    { title: "Join Now", link: "/enrol", img: "url('/aerobics.png')" },
    { title: "Studio Hire", link: "/hire", img: "url('/studio.webp')" },
    { title: "Contact Us", link: "/contact", img: "url('/balletshoes.jpg')" },
  ];

  return (
    <div style={{ overflowX: "hidden", backgroundColor: "var(--bg2)" }}>
      {/* Heading */}
      <Box sx={{ marginY: 5 }}>
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
            <ButtonLink1>Explore Now</ButtonLink1>
          </Box>
        </AnimateInView>
      </Hero>

      {/* Link List */}
      <Grid
        container
        spacing={1}
        sx={{ marginX: "auto", maxWidth: 1200, marginY: 8 }}
      >
        {navLinks.map((link, index) => {
          const isLast = index === navLinks.length - 1;
          const isOdd = navLinks.length % 2 !== 0;
          const mdSize = isLast && isOdd ? 12 : 6;

          return (
            <Grid
              size={{ xs: 12, md: mdSize }}
              key={link.title}
              sx={{ borderRadius: 10 }}
            >
              <AnimateInView>
                <ListItemButton>
                  <Hero
                    borderRadius={5}
                    backgroundImage={link.img}
                    minHeight={{ xs: 0, md: 400 }}
                  >
                    <Box
                      sx={{
                        display: "column",
                        alignItems: "center",
                        color: "white",
                        width: "80%",
                        margin: "auto",
                      }}
                    >
                      <Link href={link.link} color="white" underline="none">
                        <h3>{link.title}</h3>
                      </Link>
                    </Box>
                  </Hero>
                </ListItemButton>
              </AnimateInView>
            </Grid>
          );
        })}
      </Grid>

      {/* Link List Version 2 */}
      

      {/* Timetable */}
      <Timetable />
    </div>
  );
}
