import previousClasses from "../utils/previousClasses";
import upcomingClasses from "../utils/upcomingClasses";

const danceIntensives = [
  {
    title: "Autumn Holiday Program",
    caption1: "Intensives",
    caption2: "7 - 11 Apr 2026",
    dateStart: "2026-04-07",
    dateEnd: "2026-04-11",
    button: "Explore Programs",
    link: "/class/dance/programs",
    img: "url('/chinesedance/Chinese1.jpg')",
  },
  {
    title: "Winter Holiday Program",
    caption1: "Intensives",
    caption2: "6 - 10 July 2026",
    dateStart: "2026-07-06",
    dateEnd: "2026-07-10",
    button: "Explore Programs",
    link: "/class/dance/programs",
    img: "url('/chinesedance/Chinese1.jpg')",
  },
  {
    title: "Spring Holiday Program",
    caption1: "Intensives",
    caption2: "28 Sep - 3 Oct 2026",
    dateStart: "2026-09-28",
    dateEnd: "2026-10-03",
    button: "Explore Programs",
    link: "/class/dance/programs",
    img: "url('/chinesedance/Chinese1.jpg')",
  },
  {
    title: "Korea and China Exchange Program",
    caption1: "Intensives",
    caption2: "Dec 2026 TBC",
    button: "Explore Programs",
    link: "/class/dance/programs",
    img: "url('/chinesedance/Chinese1.jpg')",
  },
];

const upcomingIntensives = upcomingClasses(danceIntensives, "dateEnd");
const previousIntensives = previousClasses(danceIntensives, "dateEnd");
export { upcomingIntensives, previousIntensives };
export default danceIntensives;
