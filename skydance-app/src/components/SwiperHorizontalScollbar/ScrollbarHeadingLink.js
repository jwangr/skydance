import { ArrowForwardIos } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React from "react";
import ButtonLink2 from "../ButtonLink2";

export default function ScrollbarHeadingLink({ title = "Heading", link }) {
  return (
    <Stack
      gap={5}
      // direction={"row"}
      alignItems={"center"}
      paddingX={1}
      paddingTop={1}
    >
      <Button
        sx={{
          color: "white",
        }}
        href={link}
      >
        <h3>{title}</h3>
        <ArrowForwardIos />
      </Button>
    </Stack>
  );
}
