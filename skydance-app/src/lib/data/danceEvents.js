// on homepage, it will display the location (caption 1) and date (caption 2)
// date: ISO date string (YYYY-MM-DD)
// can add a second date

const defaultSettings = {
  caption1: "Events",
  button: "More Events",
  link: "/events",
};

const danceEvents = [
  {
    title: "Chinese New Year at Chatswood",
    date: "2026-01-31",
    location: "Chatswood Concourse",
    img: "url('/chinesedance/Chinese6.jpg')",
    ...defaultSettings,
  },
  {
    title: "Chinese New Year at Town Hall",
    date: "2026-02-15",
    location: "Town Hall",
    img: "url('/contemporary/Contemporary6.jpg')",
    ...defaultSettings,
  },
  {
    title: "Chinese New Year Series",
    date: "2026-02-22",
    location: "Darling Harbour | Town Hall",
    img: "url('/contemporary/Contemporary8.jpg')",
    ...defaultSettings,
  },
  {
    title: "Chinese New Year at Ashfield",
    date: "2026-02-28",
    location: "Ashfield",
    img: "url('/events/CNY1.jpg')",
    ...defaultSettings,
  },
  {
    title: "Kpop Showcase",
    date: "2026-03-07",
    location: "Bankstown Sports Club",
    img: "url('/hiphop/Hiphop4.jpg')",
    ...defaultSettings,
  },
  {
    title: "Lyrical and Jazz Showcase",
    date: "2026-03-21",
    location: "Mounties, Mount Pritchard",
    img: "url('/jazz/Jazz5.jpg')",
    ...defaultSettings,
  },
  {
    title: "Buddha's Birthday Multicultural Festival",
    date: "2026-05-05",
    location: "Darling Harbour",
    img: "url('/chinesedance/Chinese10.jpg')",
    ...defaultSettings,
  },
  {
    title: "Bravery Buddies Song and Dance Challenge Troupe",
    date: "2026-05-24",
    location: "Mount St Joseph High School",
    img: "url('/lyrical/Lyrical7.jpg')",
    ...defaultSettings,
  },
  {
    title: "World of Dance Sydney Qualifier",
    date: "2026-05-31",
    location: "Hurtsville Entertainment Centre",
    ...defaultSettings,
    img: "url('/hiphop/Hiphop5.jpg')",
  },
  {
    title: "Sydney Eisteddford",
    date: "2026-06-21",
    date2: "2026-06-27",
    location: "The Concourse - Concert Hall, Chastwood",
    ...defaultSettings,
    img: "url('/generaldance/7.jpg')",
  },
  {
    title: "Youth Showcase Community Events",
    date: "2026-06-27",
    location: "Harvey Lowe Pavillon, Castle Hill",
    ...defaultSettings,
    img: "url('/ballet/Ballet7.jpg')",
  },
  {
    title: "Hills Dance Spectacular",
    date: "2026-08-22",
    date2: "2026-08-29",
    location: "Greenhalgh Theatre, Lindfield",
    img: null,
    ...defaultSettings,
  },
  {
    title: "2026 School Photo Day & Concert Dress Rehearsal ",
    date: "2026-10-03",
    location: "Sky Dance Studio",
    img: null,
    ...defaultSettings,
  },
  {
    title: "2026 Sky Showcase",
    date: "2026-10-04",
    location: "The Theatre, Bankstown Sports Club",
    img: null,
    ...defaultSettings,
  },
];

export default danceEvents;
