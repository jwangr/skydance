// Returns classes whose date is before today (classes without a date are excluded)
export default function previousClasses(classes, dateKey = "date") {
  if (!classes) return [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return classes.filter((cl) => {
    if (!cl[dateKey]) return false;
    // "YYYY-MM-DD" alone parses as UTC midnight; add a time so it's read in local time
    return new Date(`${cl[dateKey]}T00:00:00`) < today;
  });
}
