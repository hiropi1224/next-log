export function convertToPace(distance: number, time: number): string {
  const pace = (time / distance) * 1000; // s/kmで表したペースを計算

  const minutes = Math.floor(pace / 60);
  const seconds = Math.floor(pace % 60);

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${paddedMinutes}'${paddedSeconds}"/km`;
}
