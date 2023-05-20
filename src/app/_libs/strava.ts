import { ActivityLaps, StravaActivity, StravaResult } from '@/types/strava';

export const getStravaToken = async (): Promise<StravaResult> => {
  const res = await fetch(
    `${process.env.stravaEndpoint}?client_id=${process.env.stravaClientId}&client_secret=${process.env.stravaClientSecret}&grant_type=refresh_token&refresh_token=${process.env.stravaRefreshToken}`,
    {
      method: 'POST',
      next: { revalidate: 3600 },
    }
  );
  const data: StravaResult = await res.json();

  return data;
};

type ActivityParams = {
  token_type: string;
  access_token: string;
  pre_page?: number;
  page?: number;
  before?: string;
  after?: string;
};
type DetailParams = {
  token_type: string;
  access_token: string;
  activityId: string;
};

export const getStravaActivity = async ({
  token_type,
  access_token,
  page = 1,
  pre_page = 10,
  before = '',
  after = '',
}: ActivityParams): Promise<StravaActivity[]> => {
  let endpoint = `${process.env.stravaActivityEndpoint}?page=${page}&per_page=${pre_page}`;
  if (before !== '' && after !== '') {
    endpoint = `${process.env.stravaActivityEndpoint}?page=${page}&per_page=${pre_page}&before=${before}&after=${after}`;
  }

  const res = await fetch(endpoint, {
    headers: new Headers({
      Authorization: `${token_type} ${access_token}`,
    }),
    next: { revalidate: 3600 },
  });

  const data: StravaActivity[] = await res.json();

  return data;
};

export const getStravaActivityDetail = async ({
  token_type,
  access_token,
  activityId,
}: DetailParams): Promise<StravaActivity> => {
  const res = await fetch(
    `${process.env.stravaActivityEndpoint}/${activityId}`,
    {
      headers: new Headers({
        Authorization: `${token_type} ${access_token}`,
      }),
      next: { revalidate: 3600 },
    }
  );

  const data: StravaActivity = await res.json();

  return data;
};

export const getStravaActivityLaps = async ({
  token_type,
  access_token,
  activityId,
}: DetailParams): Promise<ActivityLaps[]> => {
  const res = await fetch(
    `${process.env.stravaActivityEndpoint}/${activityId}/laps`,
    {
      headers: new Headers({
        Authorization: `${token_type} ${access_token}`,
      }),
      next: { revalidate: 3600 },
    }
  );

  const data: ActivityLaps[] = await res.json();

  return data;
};
