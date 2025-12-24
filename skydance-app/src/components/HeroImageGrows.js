import { Box } from "@mui/material";

export default function HeroGrows({
  children,
  borderRadius = 0,
  minHeight = 0,
  height = "fit-content",
  backgroundImage = "url('/HeroImage.png')",
  overlay = "rgba(0, 0, 0, 0.3)",
  textShadow = "0 0 10px rgba(0,0,0,0.7)",
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingY: 5,
        minHeight: minHeight,
        height, // fixed height
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius,

        overflow: "hidden",
        // Disable hover on mobile
        "@media (hover: none)": {
          "&::before": {
            transform: "scale(1.05)",
          },
        },
        // Image grows on hover
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1)",
          transition: "transform 1s ease", // slow grow
          zIndex: 0,
        },

        "&:hover::before": {
          transform: "scale(1.08)", // subtle zoom
        },
      }}
    >
      {/* Black Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: overlay, // semi-transparent black
          zIndex: 1,
          borderRadius: borderRadius,
        }}
      />

      {/* Centered Text */}
      <Box
        sx={{
          color: "white",
          textAlign: "center",
          width: "100%",
          textShadow,
          zIndex: 2, // above image & overlay
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
