import { ActivityLaps, LapData } from '@/types/strava';

export function getLaps(laps: ActivityLaps[]): LapData[] {
  const data = laps.map((lap) => {
    return {
      distance: lap.lap_index,
      laptime:
        lap.distance === 1000
          ? lap.moving_time
          : Math.trunc((1000 * lap.moving_time) / lap.distance),
    };
  });

  return data;
}
