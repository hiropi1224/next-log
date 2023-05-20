'use server';

import { getStravaActivity, getStravaToken } from '@/app/_libs/strava';
import { StravaActivity } from '@/types/strava';

export async function fetchStrava({
  before,
  after,
}: {
  before: string;
  after: string;
}): Promise<StravaActivity[]> {
  const token = await getStravaToken();
  const res = await getStravaActivity({
    token_type: token.token_type,
    access_token: token.access_token,
    before: before,
    after: after,
  });

  return res;
}
