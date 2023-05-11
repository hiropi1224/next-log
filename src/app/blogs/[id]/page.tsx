import { tv } from 'tailwind-variants';
import { BlogShell } from '@/app/components/blogShell';
import { TableOfContents } from '@/app/components/tableOfContents';
import { client, getDetail } from '@/app/libs/microcmsClient';
import { renderToc } from '@/app/libs/renderToc';
import { BlogsResult } from '@/app/type';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-2xl px-4 md:px-8',
    article: 'prose prose-base max-w-none',
  },
});

const { base, article } = contents();

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
      <div>
        <BlogShell
          title={data.title}
          content={
            <article className={article()}>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.content,
                }}
              />
            </article>
          }
          sidebar={
            <>
              <p>sidebar</p>
              <TableOfContents toc={toc} contentId={data.id} />
            </>
          }
        />
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
