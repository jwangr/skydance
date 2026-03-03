// caption1: date
// caption2: location

const defaultSettings = {
  caption1: "Workshops",
  button: "More Workshops",
  link: "/class/dance/programs",
  img: "url('/lyrical/Lyrical10.jpg')",
};

const danceWorkshops = [
  {
    title: "Open Week",
    caption1: "Workshop",
    caption2: "23 - 29 March 2026",
    dateStart: "2026-03-23",
    dateEnd: "2026-03-29",
    ...defaultSettings,
  },
  {
    title: "Ballet with Vicki Attard",
    caption1: "Internationally Recognised Teacher",
    caption2: "7th Apr 2026, 12-3pm",
    dateStart: "2026-04-07",
    dateEnd: "2026-04-07",
    ...defaultSettings,
  },
];

export default danceWorkshops;
