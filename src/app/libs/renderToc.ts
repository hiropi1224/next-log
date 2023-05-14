import * as cheerio from 'cheerio';
import { TableOfContent } from '@/app/type';

export const renderToc = (body: string): TableOfContent[] => {
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3').toArray();

  const toc = headings.map((data) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    text: data.children[0].data,
    id: data.attribs.id,
    tag: data.tagName,
  }));

  return toc;
};
