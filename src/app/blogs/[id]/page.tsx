import { Bold } from '@tremor/react';
import { tv } from 'tailwind-variants';
import { TableOfContents } from '@/app/components/tableOfContents';
import { getDetail, getList } from '@/app/libs/microcmsClient';
import { renderToc } from '@/app/libs/renderToc';

const contents = tv(
  {
    slots: {
      base: 'mx-auto max-w-screen-xl w-5/6 px-4 pb-16',
      content: 'flex justify-between',
      article: 'prose prose-sm max-w-none',
      section: '',
      aside: '',
      font: 'text-3xl',
      header: 'my-10 text-center',
    },
    variants: {
      style: {
        pc: {
          section: 'w-3/4 mr-8',
          aside: 'w-1/4 block',
        },
        sp: {
          section: 'w-full',
          aside: 'hidden',
        },
      },
    },
  },
  {
    responsiveVariants: ['md'],
  }
);

const { base, article, content, section, aside, font, header } = contents({
  style: {
    initial: 'sp',
    md: 'pc',
  },
});

type PageProps = {
  params: {
    id: string;
  };
};

export const revalidate = 86400;

// build時にid一覧を取得する
export async function generateStaticParams(): Promise<
  {
    id: string;
  }[]
> {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
}

export default async function BlogDetail({
  params,
}: PageProps): Promise<JSX.Element> {
  const data = await getDetail(params.id);
  const toc = renderToc(data.content);

  return (
    <main className={base()}>
      <header className={header()}>
        <Bold className={font()}>{data.title}</Bold>
      </header>
      <div className={content()}>
        <section className={section()}>
          <article
            className={article()}
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          ></article>
        </section>
        <aside className={aside()}>
          <TableOfContents toc={toc} contentId={data.id} />
        </aside>
      </div>
    </main>
  );
}
