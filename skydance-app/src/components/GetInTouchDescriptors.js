import {
  EmailOutlined,
  PhoneOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";

const iconMap = {
  Address: <PlaceOutlined sx={{ color: "var(--accent-1)" }} />,
  Email: <EmailOutlined sx={{ color: "var(--accent-1)" }} />,
  Phone: <PhoneOutlined sx={{ color: "var(--accent-1)" }} />,
};

const example = {
  title: "Phone",
  description: "(02) 8957 9170",
  link: "tel:+61289579170",
};
export default function GetInTouchDescriptors({
  title = example.title,
  description = example.description,
  link = example.link,
}) {
  return (
    <Stack direction={"row"} justifyContent={"left"} gap={2} marginBottom={2}>
      {iconMap[title]}
      <Stack direction={"column"} alignItems={"flex-start"} gap={0}>
        <strong>{title}</strong>
        <a
          style={{
            color: "grey",
            lineHeight: "1.6",
            textAlign: "left",
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      </Stack>
    </Stack>
  );
}
