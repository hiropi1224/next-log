export function metersToKilometers(meters: number): number {
  const kilometers = Math.floor((meters / 1000) * 100) / 100;

  return kilometers;
}
