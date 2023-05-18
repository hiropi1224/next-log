import { tv } from 'tailwind-variants';
import { ActivityTable } from '@/app/components/activityTable';
import { TableData } from '@/app/components/activityTable/activityTable';
import { getStravaActivity, getStravaToken } from '@/app/libs/strava';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
    area: 'm-2',
  },
});

const { base } = contents();

export default async function Page(): Promise<JSX.Element> {
  const token = await getStravaToken();
  const activityList = await getStravaActivity({
    token_type: token.token_type,
    access_token: token.access_token,
  });
  const tableData: TableData[] = activityList.map((activity) => {
    return {
      id: activity.id,
      date: activity.start_date,
      distance: activity.distance,
      time: activity.moving_time,
      aveTime: activity.average_speed,
    };
  });

  return (
    <main className={base()}>
      <ActivityTable data={tableData} />
    </main>
  );
}
