import AnimateInView from "@/components/AnimateInView";
import AdultsClassBanner from "@/components/AdultsClassBanner";
import Hero from "@/components/HeroImage";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Timetable from "@/components/Timetable";
import ButtonLink2 from "@/components/ButtonLink2";
import danceWorkshops from "@/lib/data/danceWorkshops";
import SwiperDanceStyles from "@/components/SwiperHorizontalScollbar/SwiperDanceStyles";
import ScrollbarHeading from "@/components/SwiperHorizontalScollbar/ScrollbarHeading";
import SwiperDanceEvents from "@/components/SwiperHorizontalScollbar/SwiperDanceEvents";
import danceIntensives from "@/lib/data/danceIntensives";
import danceEvents from "@/lib/data/danceEvents";
import { timetables } from "@/lib/data/timetable";
import CompetitionTeamAuditionForm from "@/components/forms/CompetitionTeamAuditionForm";
import competitionPictureSeries from "@/lib/data/competitionPictureSeries";

export const metadata = {
  title: "Sky Competition Team and Training in Auburn Sydney | Kids & Adults",
  description:
    "Sky Dance Studio offers ballet, jazz, hip hop, K-pop, and Chinese dance classes in Auburn, Sydney for kids, teens, and adults of all levels.",

  alternates: {
    canonical: "/class/dance/competition-team-training",
  },

  openGraph: {
    title: "Dance Competition Team and Training in Auburn Sydney",
    description:
      "Explore dance classes for all ages including ballet, jazz, hip hop, K-pop, and acrobatics at Sky Dance Studio.",
    url: "https://skydancestudio.com.au/class/dance/competition-team-training",
    type: "website",
  },
};

export default function CompetitionTeamAndTrainingPage() {
  return (
    <>
      {/* Heading */}
      <Box sx={{ margin: 5 }}>
        <h1 style={{ marginX: "auto", textAlign: "center", color: "white" }}>
          Sky Competition Team and Training
        </h1>
      </Box>

      <Box maxWidth={"xl"} margin={"auto"}>
        {/* Dance Styles Info */}
        <SwiperDanceStyles
          pictureSeries={competitionPictureSeries}
          showCaption={false}
        />
        <Box
          sx={{
            marginY: 5,
            paddingX: { xs: 2, md: 5 },
            textAlign: "left",
          }}
        >
          <p>
            Our Competition Teams proudly represent Sky Performing Arts
            (Previously known as Sky Dance Studio) at major competitions and
            performances throughout NSW and internationally. Over the years, our
            dancers have achieved outstanding success, earning numerous titles,
            trophies, scholarships, and special awards. Through dedicated
            training, teamwork, and passion, our competition program provides
            dancers with valuable performance experience while fostering
            confidence, discipline, and excellence both on and off the stage.
          </p>
        </Box>
      </Box>

      <Box maxWidth={"xl"} margin={"auto"}>
        <CompetitionTeamAuditionForm />
      </Box>
    </>
  );
}
