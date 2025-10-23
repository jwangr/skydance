import Hero from "@/components/HeroImage";
import { Toolbar } from "@mui/material";

export default function AboutPage() {
  return (
    <>
      <Hero overlay="rgba(185, 131, 181, 0.5)" minHeight={500}>
        <h1>About us</h1>
      </Hero>
    </>
  );
}
