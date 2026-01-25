import { Box } from "@mui/material";

export default function StudioCard({ studio }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: 200,
        height: "fit-content",
        backgroundImage: studio.image,
        backgroundSize: "cover",
        backgroundPosition: "center",

        "&:hover .overlay": {
          opacity: 1,
        },

        "&:hover .title": {
          transform: "translateY(0)",
          opacity: 0,
        },

        "&:hover .description": {
          transform: "translateY(0)",
          opacity: 1,
        },
      }}
    >
      {/* Black Overlay */}
      <Box
        classname="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent black
          opacity: 0,
        }}
      />

      {/* Centered Text */}
      <Box
        sx={{
          color: "white",
          textAlign: "center",
          width: "100%",
          height: "fit-content",
        }}
      >
        <h3 style={{ opacity: 1 }}>{studio.title}</h3>
        <Box
          classname="description"
          sx={{
            mt: 1,
            opacity: 1,
            transform: "translateY(8px)",
            transition: "all 0.3s ease",
          }}
        >
          {studio.description}
        </Box>
      </Box>
    </Box>
  );
}
