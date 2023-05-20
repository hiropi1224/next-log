import { tv } from 'tailwind-variants';
import { DashboardShell } from '@/app/components/dashboardShell';
import { HealthChart } from '@/app/components/healthChart';
import { PaceZoneTable } from '@/app/components/paceZoneTable';
import { PersonalRecordTable } from '@/app/components/personalRecordTable';
import { Health } from '@/app/type';
import { getHealthChartData } from '@/app/utils/getHealthChartData';

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

  return (
    <main className={base()}>
      <DashboardShell>
        <PersonalRecordTable />
        <PaceZoneTable />
        <HealthChart title='体重' data={weightdata} category='weight' />
        <HealthChart title='体脂肪' data={bodyfatdata} category='bodyfat' />
      </DashboardShell>
    </main>
  );
}
