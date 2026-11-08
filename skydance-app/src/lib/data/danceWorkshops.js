// caption1: date
// caption2: location

const defaultSettings = {
  caption1: "Workshops",
  button: "More Workshops",
  link: "/class/dance/programs",
  img: "url('/generaldance/4.jpg')",
  location: "Sky Dance Studio",
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
  {
    title: "Conditioning Masterclass with Keelia Hill",
    // caption1:
    caption2: "17th May 2026, 9am-12pm",
    dateStart: "2026-05-17",
    dateEnd: "2026-05-17",
    ...defaultSettings,
  },
  {
    title: "Hip Hop Masterclass with Jacob Yarr",
    // caption1:
    caption2: "21st May 2026, 5:30-7pm",
    dateStart: "2026-05-21",
    dateEnd: "2026-05-21",
    ...defaultSettings,
    img: "url('/generaldance/5.jpg')",
  },
  {
    title: "Hip Hop Workshop with Corey Dohmen",
    caption2: "8th–10th July 2026, 5:30–7:30pm",
    dateStart: "2026-07-08",
    dateEnd: "2026-07-10",
    ...defaultSettings,
    img: "url('/hiphop/Hiphop5.jpg')",
  },
  {
    title: "Amy Park x Chloe – 71Dance Collaboration Workshop",
    caption2: "Mon 26th – Tue 27th Oct 2026",
    dateStart: "2026-10-26",
    dateEnd: "2026-10-27",
    ...defaultSettings,
  },
  {
    title: "The Tech Lab with Bianca Erika",
    caption2: "8th Nov – 21st Dec 2026",
    dateStart: "2026-11-08",
    dateEnd: "2026-12-21",
    ...defaultSettings,
  },
];

export default danceWorkshops;
