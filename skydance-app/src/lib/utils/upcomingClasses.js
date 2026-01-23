export default function upcomingClasses(classes, dateKey = "date") {
  const today = new Date().getTime();
  if (!classes) return [];

  return classes.filter((cl) => {
    const clDate = new Date(cl[dateKey]).getTime();
    if (!cl[dateKey]) {
      return true;
    } else if (clDate > today) {
      return true;
    }
    return false;
  });
}
