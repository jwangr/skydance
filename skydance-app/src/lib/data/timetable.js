// Add new timetables at the bottom
const timetables = [
  {
    title: "Term 4, 2025 (13/10/25 - 21/12/2025)",
    url: "/timetables/2025Term4.png",
  },
  {
    title: "Term 1, 2026 (27/01/26 - 02/04/26)",
    url: "/timetables/2026Term1.jpg",
  },
  {
    title: "Autumn Holiday Classes (07/04/26 - 11/04/26)",
    url: "/timetables/2026AutumnHolidays.jpg",
  },
  {
    title: "Term 2, 2026 (20/04/26 - 05/07/26)",
    url: "/timetables/2026Term2.jpg",
  },
  {
    title: "Winter Holiday Classes (06/07/26 - 10/07/26)",
    url: "/timetables/2026WinterHolidays.jpg",
  },
  {
    title: "Term 3, 2026 (20/07/26 - 27/09/26)",
    url: "/timetables/2026Term3.png",
  },
];

const newestTimetable =
  timetables.length > 0 ? timetables[timetables.length - 1] : { title: "" };
export default newestTimetable;
export { timetables };
