export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let formattedTime: string;
  if (hours === 0) {
    formattedTime = `${String(minutes)}:${String(remainingSeconds).padStart(
      2,
      '0'
    )}`;
  } else {
    formattedTime = `${String(hours)}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  return formattedTime;
}
