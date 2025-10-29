import AnimateInView from "@/components/AnimateInView";
import Hero from "@/components/HeroImage";
import { Box } from "@mui/material";
import React from "react";
import classData from "@/lib/data/classdescriptions.json"
import ClassInfoCard from "@/components/ClassInfoCard";

export default function ClassPage() {
  return (
    <>
      <Hero overlay="rgba(185, 131, 181, 0.5)" minHeight={"100vh"}>
        <AnimateInView>
          <h1>Classes</h1>
        </AnimateInView>
      </Hero>

      {/* Dance Styles  */}
      <Box
        sx={{ paddingY: 10, paddingX: { xs: 0, md: 10 }, textAlign: "center" }}
      >
        <p>
          Discover our classes at Sky Dance Studio — designed to inspire every
          dancer’s passion and growth.
        </p>
        <Box sx={{ px: 2, width: { sm: "75%", md: "100%" }, marginX: "auto" }}>
          {classData.map((c) => (
            <ClassInfoCard key={c.title}/>
          ))}
        </Box>
      </Box>
    </>
  );
}
