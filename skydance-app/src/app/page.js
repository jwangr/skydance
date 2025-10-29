import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import ParallaxSection from "@/components/ParallaxSection";
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
    { title: "Enrol Now", link: "/enrol", img: "url('/aerobics.png')" },
    { title: "Trial Lesson", link: "/trial", img: "url('/aerobics.png')" },
    { title: "Studio Hire", link: "/hire", img: "url('/studio.webp')" },
    { title: "Contact Us", link: "/contact", img: "url('/balletshoes.jpg')" },
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      <Toolbar />
      <Box sx={{ marginBottom: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center" }}>
          Sky Dance Studio
        </h1>
      </Box>

      {/* Opening Banner */}
      <Hero overlay="rgba(185, 131, 181, 0.5)" minHeight={500}>
        <AnimateInView>
          <Box
            sx={{
              display: "column",
              alignItems: "center",
              color: "white",
              width: "80%",
              margin: "auto",
            }}
          >
            <h2>WHERE GRACE MEETS STRENGTH</h2>
            <p>
              At Sky Dance Studio, we nurture artistry and discipline through
              professional dance education. Our certified instructors blend the
              Royal Academy of Dance (RAD) syllabus with many forms of dance,
              including Jazz, Lyrical, and Traditional Chinese Dance.
            </p>
          </Box>
        </AnimateInView>
      </Hero>

      {/* Link List */}
      <Grid
        container
        spacing={1}
        sx={{ marginX: "auto", maxWidth: 1200, marginY: 8 }}
      >
        {navLinks.map((link) => (
          <Grid
            size={{ xs: 12, md: 6 }}
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
        ))}
      </Grid>

      {/* Timetable */}
      <Timetable />
    </div>
  );
}
