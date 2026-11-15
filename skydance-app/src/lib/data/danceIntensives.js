import previousClasses from "../utils/previousClasses";
import upcomingClasses from "../utils/upcomingClasses";

const defaultSettings = {
  link: "/class/dance/programs",
  img: "url('/chinesedance/Chinese1.jpg')",
};

const danceIntensives = [
  {
    title: "Autumn Holiday Program 2026",
    caption2: "7 - 11 Apr 2026",
    dateStart: "2026-04-07",
    dateEnd: "2026-04-11",
    ...defaultSettings,
  },
  {
    title: "Winter Holiday Program 2026",
    caption2: "6 - 10 July 2026",
    dateStart: "2026-07-06",
    dateEnd: "2026-07-10",
    ...defaultSettings,
    img: "url('/generaldance/8.jpg')",
  },
  {
    title: "Spring Holiday Program 2026",
    caption2: "28 Sep - 3 Oct 2026",
    dateStart: "2026-09-28",
    dateEnd: "2026-10-03",
    ...defaultSettings,
  },
  {
    title: "December Dance Intensive with Jake Connell",
    ...defaultSettings,
    caption2: "7 - 11 & 14 - 18 Dec 2026, 10am - 1pm",
    dateStart: "2026-12-07",
    dateEnd: "2026-12-18",
  },
  {
    title: "Summer Holiday Program 2027",
    caption2: "18 - 29 Jan 2027",
    dateStart: "2027-01-18",
    dateEnd: "2027-01-29",
    ...defaultSettings,
    img: "url('/generaldance/7.jpg')",
  },
  {
    title: "Korea and China Exchange Program 2026",
    caption2: "Dec 2026 TBC",
    ...defaultSettings,
  },
];

const upcomingIntensives = upcomingClasses(danceIntensives, "dateEnd");
const previousIntensives = previousClasses(danceIntensives, "dateEnd");
export { upcomingIntensives, previousIntensives };
export default danceIntensives;
