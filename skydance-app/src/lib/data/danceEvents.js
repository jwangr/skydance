// on homepage, it will display the location (caption 1) and date (caption 2)
// date: ISO date string (YYYY-MM-DD)

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
    title: "2026 School Concert",
    date: "2026-10-26",
    location: "The Theatre, Bankstown Sports Club",
    img: "url('/contemporary/contemporary10.jpg')",
    ...defaultSettings,
  },
];

export default danceEvents;
