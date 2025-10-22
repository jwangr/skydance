import { Box } from "@mui/material";

export default function Hero({ children }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingY: 5,
        minHeight: 500,
        height: "fit content", // fixed height
        backgroundImage: "url('/HeroImage.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Black Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(185, 131, 181, 0.5)", // semi-transparent black
          zIndex: 1,
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
