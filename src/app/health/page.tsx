import { tv } from 'tailwind-variants';
import { HealthChart } from '@/app/components/healthChart';
import { Health } from '@/app/type';

async function getData() {
  const res = await fetch(
    `${process.env.healthplanetEndpoint}?access_token=${process.env.healthplanetAccessToken}&data=0`
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

export const revalidate = 3600;

export default async function Blogs(): Promise<JSX.Element> {
  const data = await getData();

  return (
    <main className={base()}>
      <HealthChart data={data} />
    </main>
  );
}
