export default function previousClasses(classes, dateKey = "date") {
  const today = new Date().getTime();
  if (!classes) return []

  return classes.filter((cl) => {
    const clDate = new Date(cl[dateKey]).getTime();
    if (!cl[dateKey]) {
      return false;
    } else if (clDate > today) {
      return false;
    }
    return true;
  });
}
