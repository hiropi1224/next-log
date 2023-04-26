import { client } from '@/app/libs/client';
import { BlogsResult } from '@/app/type';
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
          <CustomCard
            key={content.id}
            title={content.title}
            image={content.eyecatch.url}
            createdAt={content.createdAt}
          />
        ))}
      </main>
    </div>
  );
}
