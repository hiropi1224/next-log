import { Grid } from '@tremor/react';
import { tv } from 'tailwind-variants';
import { PaceZoneTable } from '@/app/_component/paceZoneTable';
import { PersonalRecordTable } from '@/app/_component/personalRecordTable';
import recordList from '@/app/_data/record.json';
import {
  metersToKilometers,
  formatTime,
  secondsToMinSecPerKm,
  numberToDate,
} from '@/app/_utils';

const contents = tv({
  slots: {
    base: 'space-x-2 mb-2',
  },
});

const { base } = contents();

export default async function Activity(): Promise<JSX.Element> {
  const personalRecord = recordList.map((record) => {
    return {
      type: record.type,
      distance:
        typeof record.distance === 'string'
          ? record.distance
          : `${metersToKilometers(record.distance)}km`,
      duration: formatTime(record.duration),
      avgPace: secondsToMinSecPerKm(record.avgPace),
      happenDay: numberToDate(record.happenDay),
    };
  });

  return (
    <Grid numColsMd={2} className={base()}>
      <PersonalRecordTable data={personalRecord} />
      <PaceZoneTable />
    </Grid>
  );
}
