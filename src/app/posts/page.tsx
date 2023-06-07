import { tv } from 'tailwind-variants';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-md px-4 flex flex-col justify-between gap-4',
  },
});

const { base } = contents();

export const revalidate = 86400;

export default async function Blogs(): Promise<JSX.Element> {
  return (
    <main className={base()}>
      <p>post内容</p>
    </main>
  );
}
