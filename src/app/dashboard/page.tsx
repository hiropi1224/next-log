import recordList from '@/app/_data/record.json';
import {
  numberToDate,
  formatTime,
  metersToKilometers,
  secondsToMinSecPerKm,
} from '@/app/_utils';
import { DashboardShell } from '@/app/components/dashboardShell';
import { PaceZoneTable } from '@/app/components/paceZoneTable';
import { PersonalRecordTable } from '@/app/components/personalRecordTable';

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
