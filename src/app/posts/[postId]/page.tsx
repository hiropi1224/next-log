import { Bold } from '@tremor/react';
import { tv } from 'tailwind-variants';
import { getDetail, getList } from '@/app/_libs/microcmsClient';

const contents = tv(
  {
    slots: {
      base: 'max-w-screen-xl',
      content: 'flex justify-between',
      article: 'prose prose-sm max-w-none',
      font: 'text-3xl',
      header: 'my-10',
    },
  },
  {
    responsiveVariants: ['md'],
  }
);

const { base, article, content, font, header } = contents();

type PageProps = {
  params: {
    postId: string;
  };
};

export const revalidate = 86400;

// build時にid一覧を取得する
export async function generateStaticParams(): Promise<
  {
    postId: string;
  }[]
> {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function BlogDetail({
  params,
}: PageProps): Promise<JSX.Element> {
  const data = await getDetail(params.postId);

  return (
    <main className={base()}>
      <header className={header()}>
        <Bold className={font()}>{data.title}</Bold>
      </header>
      <div className={content()}>
        <article
          className={article()}
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        />
      </div>
    </main>
  );
}
