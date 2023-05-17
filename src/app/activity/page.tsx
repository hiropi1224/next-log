import { tv } from 'tailwind-variants';
import { StravaResult } from '@/app/type';
import { formatTime } from '@/app/utils/formatTime';
import { metersToKilometers } from '@/app/utils/metersToKilometers';
import { StravaActivity } from '@/types/strava';

async function getData() {
  const tokenRes = await fetch(
    `${process.env.stravaEndpoint}?client_id=${process.env.stravaClientId}&client_secret=${process.env.stravaClientSecret}&grant_type=refresh_token&refresh_token=${process.env.stravaRefreshToken}`,
    {
      method: 'POST',
      cache: 'no-store',
    }
  );
  const data: StravaResult = await tokenRes.json();

  const activity = await fetch(
    `${process.env.stravaActivityEndpoint}/9051278548`,
    {
      headers: new Headers({
        Authorization: `${data.token_type} ${data.access_token}`,
      }),
      next: { revalidate: 3600 },
    }
  );

  const activityRes: StravaActivity = await activity.json();

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
  const data = await getData();

  return (
    <main className={base()}>
      <p>{data.name}</p>
      <p>{data.type}</p>
      <p>{`距離：${metersToKilometers(data.distance)}km`}</p>
      <p>{`時間：${formatTime(data.moving_time)}`}</p>
    </main>
  );
}
