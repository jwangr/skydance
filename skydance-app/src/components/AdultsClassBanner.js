import { Box, Typography, Button, Stack } from "@mui/material";
import Hero from "./HeroImage";

export default function AdultsClassBanner() {
  return (
    <Hero
      overlay="rgba(0, 0, 0, 0.5)"
      //   minHeight={300}
      backgroundImage="url('/adults/Chinese5.jpg')"
      backgroundPosition="bottom"
    >
      <Box
        sx={{
          width: "100%",
          color: "white",
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          mb: 6,
        }}
      >
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, opacity: 0.8 }}
          >
            NEW CLASSES
          </Typography>

          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Adult Dance Classes Now Open
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 600, opacity: 0.9 }}>
            Whether you're returning to dance or trying it for the first time,
            our adult classes are welcoming, fun, and suitable for all levels.
          </Typography>
        </Stack>
      </Box>
    </Hero>
  );
}
