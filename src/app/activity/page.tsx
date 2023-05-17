import { tv } from 'tailwind-variants';
import { ActivityTable } from '@/app/components/activityTable';
import { TableData } from '@/app/components/activityTable/activityTable';
import { StravaResult } from '@/app/type';
import { StravaActivity } from '@/types/strava';

async function getData() {
  const tokenRes = await fetch(
    `${process.env.stravaEndpoint}?client_id=${process.env.stravaClientId}&client_secret=${process.env.stravaClientSecret}&grant_type=refresh_token&refresh_token=${process.env.stravaRefreshToken}`,
    {
      method: 'POST',
      next: { revalidate: 3600 },
    }
  );
  const data: StravaResult = await tokenRes.json();

  const activity = await fetch(`${process.env.stravaActivityEndpoint}`, {
    headers: new Headers({
      Authorization: `${data.token_type} ${data.access_token}`,
    }),
    next: { revalidate: 3600 },
  });

  const activityRes: StravaActivity[] = await activity.json();

  return activityRes;
}

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
    area: 'm-2',
  },
});

const { base } = contents();

export default async function Page(): Promise<JSX.Element> {
  const dataList = await getData();
  const tableData: TableData[] = dataList.map((data) => {
    return {
      id: data.id,
      date: data.start_date,
      distance: data.distance,
      time: data.moving_time,
    };
  });

  return (
    <main className={base()}>
      <ActivityTable data={tableData} />
    </main>
  );
}
