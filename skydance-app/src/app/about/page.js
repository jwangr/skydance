import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import TeamCard from "@/components/TeamCard";
import { Box, Toolbar } from "@mui/material";
import Link from "next/link";
import staffData from "@/lib/data/staff.json";
import SnapScrollSection from "@/components/SnapScrollSection";

export default function AboutPage() {
  return (
    <>
      <Hero overlay="rgba(185, 131, 181, 0.5)" minHeight={"100vh"}>
        <AnimateInView>
          <h1>About us</h1>
        </AnimateInView>
      </Hero>

      {/* Our Story */}
      <SnapScrollSection visibility={1.0}>
        <AnimateInView>
          <Box sx={{marginTop: 10, paddingX: { xs: 0, md: 10 } }}>
            <Box
              sx={{
                borderRadius: 4,
                backgroundColor: "var(--bg3)",
                paddingX: { xs: 5, md: 20 },
                paddingY: 8,
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 3,
                minHeight: '100vh'
              }}
            >
              <h3>Our story began over one decade ago...</h3>
              <p>
                Since our establishment in 2009, Sky Dance has grown from 4
                students to a thriving community of over 300 dancers, ranging in
                ages from three to adult.
              </p>
              <p>
                Originally dedicated to Royal Ballet, our studio has now evolved
                into a comprehensive dance school with over 20 classes. We offer
                a wide range of styles including jazz, modern, lyrical,
                contemporary, acrobatics, musical theatre, Chinese, and
                character dance. The studio also proudly supports students in
                preparing for all levels of the Royal Academy of Dance (RAD)
                examinations.
              </p>
              <p>
                We offer daily classes, as well as on-demand or private classes.
              </p>
              <Link href="/contact" style={{ width: "100%" }}>
                <button className="button1">Get In Touch</button>
              </Link>
            </Box>
          </Box>
        </AnimateInView>
      </SnapScrollSection>

      {/* Meet Our Team   */}
      <SnapScrollSection visibility={0.95} >
        <Box
          sx={{
            my: 10,
            paddingX: { xs: 0, md: 10 },
            textAlign: "center",
          }}
        >
          <h2>Meet Our Team</h2>
          <Box
            sx={{ px: 2, width: { sm: "75%", md: "100%" }, marginX: "auto" }}
          >
            {staffData.map((staff) => (
              <TeamCard staff={staff} key={staff.title} />
            ))}
          </Box>
        </Box>
      </SnapScrollSection>
    </>
  );
}
