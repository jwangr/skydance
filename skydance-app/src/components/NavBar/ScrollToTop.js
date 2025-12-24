import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, CssBaseline, Fab, Fade } from "@mui/material";
import React from "react";

function BacktoTop({ children }) {
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  };
  return <></>;
}

export default function ScrollToTop() {
  return (
      <BacktoTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp sx={{bgcolor: "white"}} />
        </Fab>
      </BacktoTop>
  );
}
