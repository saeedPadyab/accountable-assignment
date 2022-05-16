export function isInTheFuture(date: Date) {
  if (!date) return false;
  const today = new Date();

  return date > today;
}

export function isInLastTwoMonths(date: Date) {
  if (!date) return false;
  const now = new Date();

  const sixtyDaysInMs = 60 * 24 * 60 * 60 * 1000;

  const timeDiffInMs = now.getTime() - date.getTime();
  return timeDiffInMs < sixtyDaysInMs;
}
