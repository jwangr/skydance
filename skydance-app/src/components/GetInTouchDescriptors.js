import {
  EmailOutlined,
  PhoneOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";

const iconMap = {
  Address: <PlaceOutlined sx={{ color: "white" }} />,
  Email: <EmailOutlined sx={{ color: "white" }} />,
  Phone: <PhoneOutlined sx={{ color: "white" }} />,
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
    <Stack direction={"row"} justifyContent={"left"} alignItems={'stretch'} gap={2} marginBottom={2}>
      {iconMap[title]}
      <Stack direction={"column"} alignItems={"flex-start"} gap={0}>
        <strong>{title}</strong>
        <a
          style={{
            color: "light grey",
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
