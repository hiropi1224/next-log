import { tv } from 'tailwind-variants';
import { client } from '@/app/libs/client';
import { BlogsResult } from '@/app/type';
import { ContentCard } from '@/app/components/ContentCard';

async function getData() {
  const res: BlogsResult = await client.get({
    endpoint: 'blogs',
    queries: { limit: 10, offset: 0, orders: '-createdAt' },
  });

  return res;
}

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
    area: 'm-2',
  },
});

const { base, area } = contents();

export default async function Blogs(): Promise<JSX.Element> {
  const data = await getData();

  return (
    <main className={base()}>
      {data.contents.map((content) => (
        <div key={content.id} className={area()}>
          <ContentCard
            title={content.title}
            image={content.eyecatch.url}
            createdAt={content.createdAt}
          />
        </div>
      ))}
    </main>
  );
}
