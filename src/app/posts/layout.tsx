import PostList from '@/app/_component/postList/postList';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <section className='flex'>
      <aside className={`h-[calc(100vh-56px)] w-1/4 p-2`}>
        {/* @ts-expect-error Async Server Component */}
        <PostList />
      </aside>
      <main className='flex flex-1 justify-center'>{children}</main>
    </section>
  );
}
