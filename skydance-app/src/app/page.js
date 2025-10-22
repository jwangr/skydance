import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box sx={{ marginBottom: 3 }}>
        <h1 style={{ margin: "auto", textAlign: "center" }}>
          Sky Dance Studio
        </h1>
      </Box>

      <Hero>
        <AnimateInView>
          <Box sx={{ display: "column", alignItems: "center", color: "white", width: '80%', margin: 'auto' }}>
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

      <h3>Sky dance heading 3</h3>
      <p>Body text</p>
    </div>
  );
}
