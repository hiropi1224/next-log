import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.serviceDomain ?? '', // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.apiKey ?? '',
});
