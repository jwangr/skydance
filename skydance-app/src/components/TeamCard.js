import { Box, Card } from "@mui/material";
import staffData from "@/lib/data/staff.json";
import Image from "next/image";
import AnimateInView from "./AnimateInView";

export default function TeamCard({ staff = staffData[0] }) {
  return (
    <AnimateInView>
      <Box
        sx={{
          borderRadius: 4,
          backgroundColor: "var(--bg4)",
          color: "white",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignContent: "stretch",
          textAlign: "left",
          overflow: "hidden",
          marginY: 5,
          gap: 2,
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
          <h2>{staff.title}</h2>
          <h3>{staff.role}</h3>
          <ul
            style={{ listStyle: "disc", textAlign: "left", fontSize: "32px" }}
          >
            {staff.bulletPoints.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
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
            src={staff.src}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            alt={staff.title}
          />
        </Box>
      </Box>
    </AnimateInView>
  );
}
