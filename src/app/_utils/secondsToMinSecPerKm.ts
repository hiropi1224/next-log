export function secondsToMinSecPerKm(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const pace = `${minutes}'${String(remainingSeconds).padStart(2, '0')}"/km`;

  return pace;
}
