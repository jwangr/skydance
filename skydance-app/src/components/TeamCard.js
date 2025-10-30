import { Box, Card, Divider, Stack } from "@mui/material";
import staffData from "@/lib/data/staff.json";
import Image from "next/image";
import AnimateInView from "./AnimateInView";

export default function TeamCard({ staff = staffData[0] }) {
  return (
    <AnimateInView once={true}>
      <Box
        sx={{
          borderRadius: 4,
          background: "linear-gradient(135deg, #f8f8f8, #fbfbfb)", // soft neutral gradient          color: "white",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignContent: "stretch",
          textAlign: "left",
          overflow: "hidden",
          marginY: 5,
          gap: 2,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            color: "black",
            paddingLeft: 8,
            paddingY: 8,
            flex: 2.5,
          }}
        >
          {/* Vertical accent divider */}
          <h2 style={{color: "var(--bg2)"}}>{staff.title}</h2>

          <p>
            <b>{staff.role}</b>
          </p>
          <Box component="ul" sx={{ pl: 2, m: 0, listStyle: "disc" }}>
            {staff.bulletPoints.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            position: "relative",
            flex: 1,
            minHeight: { xs: 400, sm: 600, md: 0 }, // ensures image visible on mobile
            aspectRatio: { xs: "1.6/1", md: "auto" }, // maintains height/width ratio
          }}
        >
          <Image
            src={`/staff${staff.src}` ?? "logo.webp"}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            alt={staff.title}
          />
        </Box>
      </Box>
    </AnimateInView>
  );
}
