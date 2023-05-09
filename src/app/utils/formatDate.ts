export function formatDate(date: number): string {
  const year = Math.floor(date / 10000);
  const month = Math.floor((date % 10000) / 100);
  const day = date % 100;
  const formattedDate = `${year}/${month}/${day}`;

  return formattedDate;
}
