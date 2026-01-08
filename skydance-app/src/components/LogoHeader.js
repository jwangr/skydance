import { Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function LogoHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Button href="/">
        <Box
          sx={{
            width: { xs: "90px", md: "70px" },
            height: "auto",
          }}
        >
          <Image
            src="/logo.webp"
            alt="Logo"
            height={160}
            width={70}
            objectFit="contain"
            layout="responsive"
            style={{
              filter: "brightness(1.5)", // 1 = normal, >1 brighter, <1 darker
            }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", lg: "block" }, color: "white" }}>
          <div className="logo">Sky Dance Studio</div>
        </Box>
      </Button>
    </Box>
  );
}
