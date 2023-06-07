import 'server-only';
import { Text } from '@tremor/react';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { tv } from 'tailwind-variants';
import { ActivityTable } from '@/app/_component/activityTable';
import { TableData } from '@/app/_component/activityTable/activityTable';
import { DatePicker } from '@/app/_component/datePicker';
import { RadioButton } from '@/app/_component/radioButton';
import { viewCount } from '@/app/_data/viewCount';
import { getStravaActivity, getStravaToken } from '@/app/_libs/strava';
import {
  stringToDate,
  metersToKilometers,
  formatTime,
  convertToPace,
} from '@/app/_utils';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
    form: 'gap-4 mx-auto max-w-xl',
    button:
      'mt-2 w-2/3 bg-blue-300 hover:bg-blue-200 text-white rounded px-4 py-2',
    buttonwrap: 'flex justify-center',
  },
});

const { base, form, button, buttonwrap } = contents();

async function handleSubmit(formData: FormData) {
  'use server';
  const beforeDate = formData.get('before') as string;
  const afterDate = formData.get('after') as string;
  const page = formData.get('page') as string;

  const beforeUnixtime = Math.floor(
    new Date(beforeDate).getTime() / 1000
  ).toString();
  const afterUnixtime = Math.floor(
    new Date(afterDate).getTime() / 1000
  ).toString();

  cookies().set('before', beforeUnixtime);
  cookies().set('after', afterUnixtime);
  cookies().set('page', page);

  revalidateTag('activity');
}

const oneWeekAgoDate = new Date();
oneWeekAgoDate.setDate(oneWeekAgoDate.getDate() - 7);

export default async function Page(): Promise<JSX.Element> {
  const cookieStore = cookies();
  const beforeDate = cookieStore.get('before');
  const afterDate = cookieStore.get('after');
  const prePage = cookieStore.get('page');
  const token = await getStravaToken();
  const activityList = await getStravaActivity({
    token_type: token.token_type,
    access_token: token.access_token,
    before:
      beforeDate != null
        ? beforeDate.value
        : Math.floor(Date.now() / 1000).toString(),
    after:
      afterDate != null
        ? afterDate.value
        : Math.floor(oneWeekAgoDate.getTime() / 1000).toString(),
    pre_page: prePage != null ? Number(prePage.value) : 10,
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
      <form action={handleSubmit} className={form()}>
        <DatePicker />
        <div className='flex items-center justify-center'>
          <Text className='mr-2'>表示件数:</Text>
          <RadioButton data={viewCount} id='page' />
        </div>
        <div className={buttonwrap()}>
          <button type='submit' className={button()}>
            検索
          </button>
        </div>
      </form>
      <ActivityTable data={tableData} />
    </main>
  );
}
