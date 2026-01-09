// formatDate("2026-01-31"); // set day, month, year as 2-digit
// formatDate("2026-01-31", { month: "long", year: "numeric" }); // January 2026

export default function formatDate(
  iso,
  options = { day: "numeric", month: "short", year: "numeric" }
) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-AU", options);
}
