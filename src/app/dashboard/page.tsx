import { tv } from 'tailwind-variants';
import recordList from '@/app/_data/record.json';
import {
  numberToDate,
  formatTime,
  getHealthChartData,
  metersToKilometers,
  secondsToMinSecPerKm,
} from '@/app/_utils';
import { DashboardShell } from '@/app/components/dashboardShell';
import { HealthChart } from '@/app/components/healthChart';
import { PaceZoneTable } from '@/app/components/paceZoneTable';
import { PersonalRecordTable } from '@/app/components/personalRecordTable';
import { Health } from '@/app/type';

async function getData() {
  const res = await fetch(
    `${process.env.healthplanetEndpoint}?access_token=${process.env.healthplanetAccessToken}&data=0`,
    { next: { revalidate: 86400 } }
  );
  const data: Health = await res.json();

  return data;
}

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
  },
});

const { base } = contents();

export default async function Blogs(): Promise<JSX.Element> {
  const data = await getData();

  const { weightdata, bodyfatdata } = getHealthChartData(data);

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
    <main className={base()}>
      <DashboardShell>
        <PersonalRecordTable data={personalRecord} />
        <PaceZoneTable />
        <HealthChart title='体重' data={weightdata} category='weight' />
        <HealthChart title='体脂肪' data={bodyfatdata} category='bodyfat' />
      </DashboardShell>
    </main>
  );
}
