import { Box } from "@mui/material";

export default function StudioCard({ studio }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: 200,
        height: "fit-content",
        backgroundImage: `url(${studio.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "end",

        "&:hover .overlay": {
          opacity: 1,
        },

        "&:hover .title": {
          transform: "translateY(-8px)",
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
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)", // semi-transparent black
          opacity: 0,
        }}
      />

      {/* Bottom Right Title */}
      <Box
        className="title"
        sx={{
          position: "absolute",
          bottom: "0px",
          right: "5px",
          color: "white",

          opacity: 1,
          transition: "all 0.3s ease",
        }}
      >
        <h3>{studio.title}</h3>
      </Box>
      <Box
        className="description"
        sx={{
          color: "white",
          textAlign: "center",
          width: "100%",

          mt: 1,
          opacity: 0,
          transform: "translateY(8px)",
          transition: "all 0.3s ease",
        }}
      >
        {studio.description}
      </Box>
    </Box>
  );
}
