import { Grid } from '@tremor/react';
import { tv } from 'tailwind-variants';
import { HealthChart } from '@/app/_component/healthChart';
import { getHealthChartData } from '@/app/_utils';
import { Health } from '@/types/type';

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
    base: 'mt-6 gap-6',
  },
});

const { base } = contents();

export default async function Blogs(): Promise<JSX.Element> {
  const data = await getData();

  const { weightdata, bodyfatdata } = getHealthChartData(data);

  return (
    <Grid numColsMd={2} className={base()}>
      <HealthChart title='体重' data={weightdata} category='weight' />
      <HealthChart title='体脂肪' data={bodyfatdata} category='bodyfat' />
    </Grid>
  );
}
