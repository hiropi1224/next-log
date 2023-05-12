import { Bold } from '@tremor/react';
import { tv } from 'tailwind-variants';
import { TableOfContents } from '@/app/components/tableOfContents';
import { client, getDetail } from '@/app/libs/microcmsClient';
import { renderToc } from '@/app/libs/renderToc';
import { BlogsResult } from '@/app/type';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-xl px-4 md:px-8',
    content: 'flex justify-between',
    article: 'prose prose-sm max-w-none',
    section: 'w-3/4 mr-8',
    aside: 'w-1/4',
    font: 'text-3xl',
    header: 'my-10',
  },
});

const { base, article, content, section, aside, font, header } = contents();

type PageProps = {
  params: {
    id: string;
  };
};

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
          <article className={article()}>
            <div
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            />
          </article>
        </section>
        <aside className={aside()}>
          <TableOfContents toc={toc} contentId={data.id} />
        </aside>
      </div>
    </main>
  );
}

// build時にid一覧を取得する
export async function generateStaticParams(): Promise<
  {
    blogId: string;
  }[]
> {
  const res: BlogsResult = await client.get({
    endpoint: 'blogs',
    queries: { orders: '-createdAt' },
  });

  const blogs = res.contents;

  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
}
