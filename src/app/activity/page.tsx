import 'server-only';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { tv } from 'tailwind-variants';
import { getStravaActivity, getStravaToken } from '@/app/_libs/strava';
import {
  stringToDate,
  metersToKilometers,
  formatTime,
  convertToPace,
} from '@/app/_utils';
import { ActivityTable } from '@/app/components/activityTable';
import { TableData } from '@/app/components/activityTable/activityTable';
import { DatePicker } from '@/app/components/datePicker/DatePicker';

const contents = tv(
  {
    slots: {
      base: 'mx-auto max-w-screen-lg px-4 md:px-8',
      form: 'md:flex justify-start gap-4 mx-auto max-w-xl',
      button: ' bg-blue-300 hover:bg-blue-200 text-white rounded px-4 py-2',
      buttonwrap: 'flex justify-center',
    },
    variants: {
      style: {
        pc: {
          button: 'mt-0 w-full',
        },
        sp: {
          button: 'mt-2 w-2/3',
        },
      },
    },
  },
  {
    responsiveVariants: ['md'],
  }
);

const { base, form, button, buttonwrap } = contents({
  style: {
    initial: 'sp',
    md: 'pc',
  },
});

async function handleSubmit(formData: FormData) {
  'use server';
  const beforeDate = formData.get('before') as string;
  const afterDate = formData.get('after') as string;

  const beforeUnixtime = Math.floor(
    new Date(beforeDate).getTime() / 1000
  ).toString();
  const afterUnixtime = Math.floor(
    new Date(afterDate).getTime() / 1000
  ).toString();

  cookies().set('before', beforeUnixtime);
  cookies().set('after', afterUnixtime);

  revalidateTag('activity');
}

const oneWeekAgoDate = new Date();
oneWeekAgoDate.setDate(oneWeekAgoDate.getDate() - 7);

export default async function Page(): Promise<JSX.Element> {
  const cookieStore = cookies();
  const beforeDate = cookieStore.get('before');
  const afterDate = cookieStore.get('after');
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
      {/* @ts-expect-error Async Server Component */}
      <form action={handleSubmit} className={form()}>
        <DatePicker />
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
