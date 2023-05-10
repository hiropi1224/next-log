import * as cheerio from 'cheerio';

export const renderToc = (body: string): { text: string; id: string }[] => {
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3').toArray();

  const toc = headings.map((data) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    text: data.children[0].data,
    id: data.attribs.id,
  }));

  return toc;
};
