import { DashboardShell } from '@/app/_component/dashboardShell';
import { PaceZoneTable } from '@/app/_component/paceZoneTable';
import { PersonalRecordTable } from '@/app/_component/personalRecordTable';
import recordList from '@/app/_data/record.json';
import {
  numberToDate,
  formatTime,
  metersToKilometers,
  secondsToMinSecPerKm,
} from '@/app/_utils';

export default async function Blogs(): Promise<JSX.Element> {
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
    <DashboardShell>
      <PersonalRecordTable data={personalRecord} />
      <PaceZoneTable />
    </DashboardShell>
  );
}
