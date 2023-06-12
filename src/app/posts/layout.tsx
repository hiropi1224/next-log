import { PostList } from '@/app/_component/postList/postList';
import { getList } from '@/app/_libs/microcmsClient';

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const data = await getList({ limit: 10, offset: 0, orders: '-createdAt' });

  return (
    <section className='flex'>
      <aside className={`h-[calc(100vh-56px)] w-1/4 p-2`}>
        <PostList data={data} />
      </aside>
      <main className='flex flex-1 justify-center'>{children}</main>
    </section>
  );
}
