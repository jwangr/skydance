import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const buttonStyle = {
  color: "white",
  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
  mr: 1,
  display: { xs: "none", md: "inline-flex" },
};

export function NextButton({ swiperRef, disabled = false }) {
  return (
    <IconButton
      onClick={() => swiperRef.current?.slideNext()}
      sx={{
        ...buttonStyle,
        opacity: disabled ? 0.4 : 1, // fade if disabled
        pointerEvents: disabled ? "none" : "auto", // disable click
      }}
    >
      <ArrowForwardIos fontSize="small" />
    </IconButton>
  );
}

export function PreviousButton({ swiperRef, disabled = false }) {
  return (
    <IconButton
      onClick={() => swiperRef.current?.slidePrev()}
      sx={{
        ...buttonStyle,
        opacity: disabled ? 0.4 : 1, // fade if disabled
        pointerEvents: disabled ? "none" : "auto", // disable click
      }}
    >
      <ArrowBackIosNew fontSize="small" />
    </IconButton>
  );
}
