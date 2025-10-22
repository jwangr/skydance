import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box, Grid, Link, ListItemButton } from "@mui/material";

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
    <div>
      <Box sx={{ marginBottom: 5 }}>
        <h1 style={{ margin: "auto", textAlign: "center" }}>
          Sky Dance Studio
        </h1>
      </Box>

      <Hero overlay="rgba(185, 131, 181, 0.5)">
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

      <Grid container spacing={1} sx={{ margin: 8 }}>
        {navLinks.map((link) => (
          <Grid
            size={{ xs: 12, md: 6 }}
            key={link.title}
            sx={{ borderRadius: 10 }}
          >
            <AnimateInView>
              <ListItemButton>
                <Hero borderRadius={5} backgroundImage={link.img}>
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

      <h3>Sky dance heading 3</h3>
      <p>Body text</p>
    </div>
  );
}
