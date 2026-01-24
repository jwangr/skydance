// import danceEvents from "./danceWorkshops";

import danceEvents from "./danceEvents";
import danceIntensives from "./danceIntensives";
import danceWorkshops from "./danceWorkshops";

const homeEvents = [
  // Add 3 events / workshops
  danceEvents[0],
  danceEvents[1],
  danceIntensives[0],
  {
    title: "Get Qualified",
    caption1: "Learn. Certify. Teach",
    caption2: "2026 expressions of interest now open",
    button: "Apply Now",
    link: "/",
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
  {
    title: "Art Classes",
    caption1: "",
    caption2: "Drawing, Painting, and More",
    button: "Apply Now",
    link: "/class/art",
    img: "url('/stockimages/stock1.jpg')",
  },
  {
    title: "Music",
    caption1: "",
    caption2: "Violin, Piano, Singing",
    button: "Apply Now",
    link: "/class/music",
    img: "url('/studios/StudioMusic.jpg')",
  },
  {
    title: "Tutoring",
    caption1: "",
    caption2: "K - 12",
    button: "Apply Now",
    link: "/class/tutoring",
    img: "url('/stockimages/Stock2.jpg')",
  },
];

export default homeEvents;
