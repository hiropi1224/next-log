import { tv } from 'tailwind-variants';
import { getStravaActivity, getStravaToken } from '@/app/_libs/strava';
import { ActivityWrapper } from '@/app/components/activityWrapper/ActivityWrapper';

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

  return (
    <main className={base()}>
      <ActivityWrapper activityList={activityList} />
    </main>
  );
}
