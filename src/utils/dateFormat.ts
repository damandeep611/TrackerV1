export const dateFormat = (date: Date | string): string => {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }
  return parsedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};
