import React from 'react';
import { tv } from 'tailwind-variants';
import { ActivityDetail } from '@/app/_component/activityDetail';
import { LapsChart } from '@/app/_component/lapsChart';
import { LapsTable } from '@/app/_component/lapsTable';
import {
  getStravaToken,
  getStravaActivity,
  getStravaActivityDetail,
  getStravaActivityLaps,
} from '@/app/_libs/strava';
import {
  convertToPace,
  formatTime,
  getLaps,
  metersToKilometers,
} from '@/app/_utils';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 pb-16',
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

  const lapData = getLaps(laps);

  return (
    <main className={base()}>
      <ActivityDetail
        distance={`${metersToKilometers(data.distance)}km`}
        moving_time={formatTime(data.moving_time)}
        average_heartrate={data.average_heartrate}
        average_watts={data.average_watts}
        average_cadence={data.average_cadence}
        average_pace={convertToPace(data.distance, data.moving_time)}
      />
      <LapsTable lapData={lapData} />
      <LapsChart lapData={lapData} />
    </main>
  );
}
