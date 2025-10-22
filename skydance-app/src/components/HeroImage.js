import { Box } from "@mui/material";

export default function Hero({
  children,
  borderRadius = 0,
  minHeight = 0,
  backgroundImage = "url('/HeroImage.png')",
  overlay = "rgba(0, 0, 0, 0.2)",
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingY: 5,
        minHeight: minHeight,
        height: "fit content", // fixed height
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius,
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
          textShadow: "0 0 10px rgba(0,0,0,0.7)",
          zIndex: 2, // above image & overlay
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
