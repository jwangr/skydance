// import danceEvents from "./danceWorkshops";

import danceEvents from "./danceEvents";
import danceIntensives from "./danceIntensives";
import danceWorkshops from "./danceWorkshops";

const homeEvents = [
  danceEvents[0],
  danceEvents[1],
  danceIntensives[0],
  {
    title: "Get Qualified",
    caption1: "Learn. Certify. Teach",
    caption2: "2026 expressions of interest now open",
    button: "Apply Now",
    link: "/",
    img: "url('/lyrical/image.png')",
  },
  {
    title: "Dance Classes",
    caption1: "Ballet, Hip Hop, And More",
    caption2: "For All Ages",
    button: "Explore",
    link: "/class/dance",
    img: "url('/lyrical/image copy 2.png')",
  },
  {
    title: "Art Classes",
    caption1: "",
    caption2: "Drawing, Painting, and More",
    button: "Apply Now",
    link: "/class/art",
    img: "url('/logo.webp')",
  },
  {
    title: "Music",
    caption1: "",
    caption2: "Violin, Piano, Singing",
    button: "Apply Now",
    link: "/class/music",
    img: "url('/logo.webp')",
  },
  {
    title: "Tutoring",
    caption1: "",
    caption2: "K - 12",
    button: "Apply Now",
    link: "/class/tutoring",
    img: "url('/jazzclass.png')",
  },
];

export default homeEvents;
