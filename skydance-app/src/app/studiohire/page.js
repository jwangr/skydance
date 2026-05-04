import StudioHireForm from "@/components/forms/StudioHire";
import Hero from "@/components/HeroImage";
import StudioCard from "@/components/StudioCard";
import studiosForHire from "@/lib/data/studiosForHire";
import { Box, Grid } from "@mui/material";

export const metadata = {
  title: "Dance Studio Hire Auburn Sydney | Sky Dance Studio",
  description:
    "Hire professional dance studio spaces in Auburn, Sydney. Ideal for rehearsals, workshops, events, parties and classes.",

  alternates: {
    canonical: "/studiohire",
  },

  openGraph: {
    title: "Studio Hire Sydney",
    description:
      "Rent fully equipped dance studio spaces in Auburn, Sydney for events, rehearsals and workshops.",
    url: "https://skydancestudio.com.au/studiohire",
    type: "website",
  },
};

export default function StudioHirePage() {
  return (
    <>
      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1
          style={{
            marginX: "auto",
            color: "white",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Studio Hire
        </h1>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginY: 5,
          }}
        >
          <h2>The perfect space for your next event</h2>
        </Box>
      </Box>

      <Grid container spacing={0} maxWidth={"xl"} sx={{ margin: "auto" }}>
        {studiosForHire.map((studio) => (
          <Grid key={studio.title} size={{ xs: 12, sm: 6, lg: 4 }}>
            <StudioCard key={studio.title} studio={studio} />
          </Grid>
        ))}
      </Grid>

      <StudioHireForm />
    </>
  );
}
