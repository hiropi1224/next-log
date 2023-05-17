import {
  MicroCMSContentId,
  MicroCMSListResponse,
  createClient,
} from 'microcms-js-sdk';

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from 'microcms-js-sdk';

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

const cacheType: RequestCache = 'no-store';

export const client = createClient({
  serviceDomain: process.env.serviceDomain ?? '', // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.apiKey ?? '',
  customFetch: (input, init) => {
    const customInit = {
      ...init,
      cache: cacheType,
    };

    return fetch(input, customInit);
  },
});

// ブログ一覧を取得
export const getList = async (
  queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<Blog>> => {
  const listData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries,
  });

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<
  {
    id: string;
    title: string;
    content: string;
    eyecatch?: MicroCMSImage | undefined;
  } & MicroCMSDate &
    MicroCMSContentId
> => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
  });

  return detailData;
};
