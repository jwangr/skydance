import ButtonLink1 from "@/components/ButtonLink1";
import ButtonLink2 from "@/components/ButtonLink2";
import { Box } from "@mui/material";
import React from "react";

export default function StudioPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h5>Studio Hiring Page coming soon...</h5>
      <div>
        <ButtonLink1 />
        <ButtonLink2 />
      </div>
    </Box>
  );
}
