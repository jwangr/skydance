import { Box } from "@mui/material";

import Hero from "@/components/HeroImage";
import DanceEnrolment from "@/components/forms/DanceEnrolment";

export const metadata = {
  title: "Enrol in Dance Classes | Sky Dance Studio Auburn",
  description:
    "Join Sky Dance Studio in Auburn, Sydney. Enrol in ballet, jazz, hip hop, K-pop and more for kids, teens and adults.",

  alternates: {
    canonical: "/enrol",
  },

  openGraph: {
    title: "Enrol in Dance Classes",
    description:
      "Become part of Sky Dance Studio. Enrol in dance classes for all ages and levels in Auburn, Sydney.",
    url: "https://skydancestudio.com.au/enrol",
    type: "website",
  },
};

export default function EnrolPage() {
  return (
    <>
      <Hero>
        <Box sx={{ marginBottom: 5 }}>
          <h1 style={{ marginX: "auto", textAlign: "center" }}>Join Now</h1>
        </Box>
        <p>Be a part of the Sky Dance community today</p>
      </Hero>
      <DanceEnrolment />
    </>
  );
}
