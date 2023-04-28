import { Fragment } from 'react';
import { client } from '@/app/libs/client';
import { BlogsResult } from '@/app/type';
import { ContentCard } from '@/app/components/ContentCard';
import { CustomCard } from '@/app/components/CustomCard';

async function getData() {
  const res: BlogsResult = await client.get({
    endpoint: 'blogs',
  });

  return res;
}

export default async function Blogs(): Promise<JSX.Element> {
  const data = await getData();

  return (
    <div>
      <main>
        {data.contents.map((content) => (
          <Fragment key={content.id}>
            <CustomCard
              title={content.title}
              image={content.eyecatch.url}
              createdAt={content.createdAt}
            />
            <ContentCard
              title={content.title}
              image={content.eyecatch.url}
              createdAt={content.createdAt}
            />
          </Fragment>
        ))}
      </main>
    </div>
  );
}
