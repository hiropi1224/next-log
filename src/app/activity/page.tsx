import { tv } from 'tailwind-variants';
import { getStravaActivity, getStravaToken } from '@/app/_libs/strava';
import {
  convertToPace,
  stringToDate,
  formatTime,
  metersToKilometers,
} from '@/app/_utils';
import { ActivityTable } from '@/app/components/activityTable';
import { TableData } from '@/app/components/activityTable/activityTable';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
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
      date: stringToDate(activity.start_date),
      distance: `${metersToKilometers(activity.distance)}km`,
      time: formatTime(activity.moving_time),
      aveTime: convertToPace(activity.distance, activity.moving_time),
    };
  });

  return (
    <main className={base()}>
      <ActivityTable data={tableData} />
    </main>
  );
}
