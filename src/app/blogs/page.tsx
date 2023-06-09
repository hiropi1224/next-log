import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { ContentCard } from '@/app/_component/contentCard';
import { getList } from '@/app/_libs/microcmsClient';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 flex flex-wrap flex-col gap-4',
    area: 'm-2',
  },
});

const { base, area } = contents();

export const revalidate = 86400;

export default async function Blogs(): Promise<JSX.Element> {
  const data = await getList({ limit: 10, offset: 0, orders: '-createdAt' });

  return (
    <main className={base()}>
      {data.contents.map((content) => (
        <div key={content.id} className={area()}>
          <Link href={`/blogs/${content.id}`}>
            <ContentCard title={content.title} createdAt={content.createdAt} />
          </Link>
        </div>
      ))}
    </main>
  );
}
