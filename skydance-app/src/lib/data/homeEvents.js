// import danceEvents from "./danceWorkshops";

import danceEvents from "./danceEvents";
import danceIntensives from "./danceIntensives";
import danceWorkshops from "./danceWorkshops";

const homeEvents = [
  // Add 3 events / workshops
  danceEvents[0],
  danceEvents[1],
  danceIntensives[0],

  // Home Cards
  {
    title: "Classes for Adults",
    caption1: "Learn to Dance",
    caption2: "All Levels Welcome",
    button: "Explore",
    link: "/class/dance",
    img: "url('/jazz/Jazz1.jpg')",
  },
  {
    title: "Dance Classes",
    caption1: "Ballet, Hip Hop, And More",
    caption2: "For All Ages",
    button: "Explore",
    link: "/class/dance",
    img: "url('/lyrical/Lyrical11.jpg')",
  },
];

export default homeEvents;
