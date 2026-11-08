// Returns classes whose date is today or later (classes without a date are kept)
export default function upcomingClasses(classes, dateKey = "date") {
  if (!classes) return [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return classes.filter((cl) => {
    if (!cl[dateKey]) return true;
    // "YYYY-MM-DD" alone parses as UTC midnight; add a time so it's read in local time
    return new Date(`${cl[dateKey]}T00:00:00`) >= today;
  });
}
