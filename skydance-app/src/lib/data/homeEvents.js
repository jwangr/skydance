import danceEvents from "./danceEvents";
import danceIntensives from "./danceIntensives";
import danceWorkshops from "./danceWorkshops";

const homeEvents = [
  // Home Cards
  {
    title: "Fun recreational classes",
    caption1: "Ballet, Hip Hop, And More",
    caption2: "For All Ages",
    button: "Explore",
    link: "/class/dance",
    img: "url('/generaldance/2.jpg')",
  },
  {
    title: "Competition Teams & Training",
    caption1: "Competition & Performance",
    caption2: "Group & Private Classes",
    button: "Explore",
    link: "/class/dance/competition-team-training",
    img: "url('/generaldance/3.jpg')",
  },
  danceWorkshops[2],
  {
    title: "Workshops",
    caption1: "",
    caption2: "",
    button: "Explore",
    link: "/class/dance/programs",
    img: "url('/hiphop/Hiphop5.jpg')",
  },
  danceIntensives[1],
  {
    title: "Venue Hire",
    caption1: "Studio spaces",
    caption2: "Perfect for parties, workshops and more",
    button: "Explore",
    link: "/studiohire",
    img: "url('/studios/TheatreRoom.jpg')",
  },
];

export default homeEvents;
