import danceEvents from "./danceWorkshops";

const homeEvents = [
  ...danceEvents.slice(0, 3),
  {
    title: "Get Qualified",
    caption1: "Learn. Certify. Teach",
    caption2: "2026 expressions of interest now open",
    button: "Apply Now",
    link: "/events/open-day",
    img: "url('/lyrical/image.png')",
  },
  {
    title: "Dance Classes",
    caption1: "Ballet, Hip Hop, And More",
    caption2: "For All Ages",
    button: "Explore",
    link: "/classes/dance",
    img: "url('/lyrical/image copy 2.png')",
  },
  {
    title: "Art Classes",
    caption1: "",
    caption2: "Drawing, Painting, and More",
    button: "Apply Now",
    link: "/events/open-day",
    img: "url('/logo.webp')",
  },
  {
    title: "Music",
    caption1: "",
    caption2: "Violin, Piano, Singing",
    button: "Apply Now",
    link: "/events/open-day",
    img: "url('/logo.webp')",
  },
  {
    title: "Tutoring",
    caption1: "",
    caption2: "K - 12",
    button: "Apply Now",
    link: "/events/open-day",
    img: "url('/jazzclass.png')",
  },
];

export default homeEvents;
