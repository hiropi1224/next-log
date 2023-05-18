import { tv } from 'tailwind-variants';
import {
  getStravaToken,
  getStravaActivity,
  getStravaActivityDetail,
} from '@/app/libs/strava';
import { formatTime } from '@/app/utils/formatTime';
import { metersToKilometers } from '@/app/utils/metersToKilometers';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
    area: 'm-2',
  },
});

const { base } = contents();

export async function generateStaticParams(): Promise<
  {
    acitvityId: string;
  }[]
> {
  const token = await getStravaToken();
  const activityList = await getStravaActivity({
    token_type: token.token_type,
    access_token: token.access_token,
  });

  const paths = activityList.map((activity) => {
    return {
      acitvityId: String(activity.id),
    };
  });

  return [...paths];
}

type PageProps = {
  params: {
    activityId: string;
  };
};

export default async function Page({
  params,
}: PageProps): Promise<JSX.Element> {
  const token = await getStravaToken();
  const data = await getStravaActivityDetail({
    token_type: token.token_type,
    access_token: token.access_token,
    activityId: params.activityId,
  });

  return (
    <main className={base()}>
      <p>activity</p>
      <p>{data.name}</p>
      <p>{`${metersToKilometers(data.distance)}km`}</p>
      <p>{formatTime(data.moving_time)}</p>
    </main>
  );
}
