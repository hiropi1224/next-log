import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { getList } from '@/app/_libs/microcmsClient';

const card = tv(
  {
    slots: {
      base: 'mx-auto max-w-screen-md px-4 flex flex-col justify-between gap-4',
    },
  },
  {
    responsiveVariants: ['md'],
  }
);

const { base } = card();

export const PostList = async (): Promise<JSX.Element> => {
  const data = await getList({ limit: 10, offset: 0, orders: '-createdAt' });

  return (
    <main className={base()}>
      {data.contents.map((content) => (
        <div key={content.id}>
          <Link href={`/blogs/${content.id}`}>
            <h3 className='font-bold'>{content.title}</h3>
          </Link>
        </div>
      ))}
    </main>
  );
};
