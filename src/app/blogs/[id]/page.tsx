import { tv } from 'tailwind-variants';
import { client } from '@/app/libs/client';
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
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
    area: 'm-2',
  },
});

const { base } = contents();

type PageProps = {
  params: {
    id: string;
  };
};

export default async function BlogDetail({
  params,
}: PageProps): Promise<JSX.Element> {
  const data = await getBlogDetail(params.id);

  return (
    <main className={base()}>
      {data.contents.map((content) => (
        <p key={content.id}>{content.title}</p>
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
