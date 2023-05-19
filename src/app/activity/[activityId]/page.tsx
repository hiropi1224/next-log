import React from 'react';
import { tv } from 'tailwind-variants';
import { ActivityDetail } from '@/app/components/activityDetail';
import { LapsChart } from '@/app/components/lapsChart';
import {
  getStravaToken,
  getStravaActivity,
  getStravaActivityDetail,
  getStravaActivityLaps,
} from '@/app/libs/strava';
import { convertToPace } from '@/app/utils/convertToPace';
import { formatTime } from '@/app/utils/formatTime';
import { metersToKilometers } from '@/app/utils/metersToKilometers';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
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
  const laps = await getStravaActivityLaps({
    token_type: token.token_type,
    access_token: token.access_token,
    activityId: params.activityId,
  });

  const lapsChart = laps.map((lap) => {
    return {
      distance: lap.lap_index,
      laptime:
        lap.distance === 1000
          ? lap.moving_time
          : Math.trunc((1000 * lap.moving_time) / lap.distance),
    };
  });

  return (
    <main className={base()}>
      <ActivityDetail
        distance={`${metersToKilometers(data.distance)}km`}
        moving_time={formatTime(data.moving_time)}
        average_heartrate={data.average_heartrate}
        average_watts={data.average_watts}
        average_pace={convertToPace(data.distance, data.moving_time)}
      />
      <LapsChart chartdata={lapsChart} />
    </main>
  );
}
