import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import titleStyle from "./linkTitleStyle";

const accordianStyle = {
  bgcolor: "var(--bg2)",
  color: "white",
  boxShadow: "none",
  "&::before": { display: "none" }, // removes MUI divider line
};

export default function MobileAccordian({
  link = {
    title: "ABOUT US",
    link: "/about",
    children: [
      { title: "OUR TEAM", link: "/about/team" },
      { title: "OUR STORY", link: "/about/story" },
    ],
  },
  expanded,
  onChange,
}) {
  // Ensure only one Accordian opens at a time
  const panelId = `panel-${link.title}`;

  return (
    <>
      <Accordion
        sx={accordianStyle}
        expanded={expanded === panelId}
        onChange={onChange(panelId)}
        disableGutters
      >
        <AccordionSummary
          aria-controls={`${panelId}-content`}
          id={`${panelId}-header`}
          expandIcon={<ExpandMore sx={{ color: "white" }} />}
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: "relative",

            "& .MuiAccordionSummary-content": {
              justifyContent: "center",
              margin: 0,
            },

            "& .MuiAccordionSummary-expandIconWrapper": {
              position: "absolute",
              right: 16, // or theme spacing
            },
          }}
        >
          <Typography component="span" sx={titleStyle}>
            {link.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {link.children.map((child) => (
            <ListItemButton
              key={child.title}
              href={child.link}
              sx={{ justifyContent: "center" }}
            >
              <Typography
                sx={{
                  ...titleStyle,
                  fontSize: "0.8rem",
                  textAlign: "center",
                }}
              >
                {child.title}
              </Typography>
            </ListItemButton>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
