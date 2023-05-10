import { tv } from 'tailwind-variants';
import { BlogShell } from '@/app/components/blogShell';
import { TableOfContents } from '@/app/components/tableOfContents';
import { client } from '@/app/libs/client';
import { renderToc } from '@/app/libs/renderToc';
import { BlogsResult } from '@/app/type';
async function getBlogDetail(id: string) {
  const res: BlogsResult = await client.get({
    endpoint: 'blogs',
    queries: { ids: id },
  });

  return res;
}

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
  const data = await getBlogDetail(params.id);
  const toc = renderToc(data.contents[0].content);

  return (
    <main className={base()}>
      {data.contents.map((content) => (
        <div key={content.id}>
          <BlogShell
            title={content.title}
            content={
              <article className={article()}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.content,
                  }}
                />
              </article>
            }
            sidebar={
              <>
                <p>sidebar</p>
                <TableOfContents toc={toc} contentId={content.id} />
              </>
            }
          />
        </div>
      ))}
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
