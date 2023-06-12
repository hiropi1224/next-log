import { FC } from 'react';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { Blog } from '@/app/_libs/microcmsClient';

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

type Props = {
  data: MicroCMSListResponse<Blog>;
};

export const PostList: FC<Props> = ({ data }) => (
  <main className={base()}>
    <h1 className='text-lg font-bold'>記事一覧</h1>
    {data.contents.map((content) => (
      <div key={content.id}>
        <Link href={`/posts/${content.id}`}>
          <h3>{content.title}</h3>
        </Link>
      </div>
    ))}
  </main>
);
