import { ArrowForwardIos } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";

export default function ScrollbarHeading({ title = "Heading" }) {
  return (
    <Stack
      gap={5}
      direction={"row"}
      alignItems={"center"}
      paddingX={1}
      paddingTop={3}
    >
      <h3>{title}</h3>
      <ArrowForwardIos />
    </Stack>
  );
}
