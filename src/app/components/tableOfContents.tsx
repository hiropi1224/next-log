import { Title } from '@tremor/react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { TableOfContent } from '@/app/type';

type Props = { toc: TableOfContent[]; contentId: string };

const toc = tv({
  slots: {
    base: 'sticky top-6',
    list: 'text-sm text-slate-500',
    listItem:
      'relative list-none pl-5 before:absolute before:left-0 before:top-1 before:h-2.5 before:w-2.5 before:inline-block before:rounded-full before:bg-sky-300',
  },
});

const { base, list, listItem } = toc();

export const TableOfContents: React.FC<Props> = ({ toc, contentId }) => {
  return (
    <div className={base()}>
      <Title>目次</Title>
      <ul role='list' className={list()}>
        {toc.map((item) => {
          if (item.tag === 'h1') {
            return (
              <li key={item.id} className={listItem()}>
                <Link href={`/blogs/${contentId}/#${item.id}`} scroll={false}>
                  {item.text}
                </Link>
              </li>
            );
          } else if (item.tag === 'h2') {
            return (
              <ul
                key={item.id}
                className={listItem({
                  class: 'm-3 before:h-1.5 before:w-1.5',
                })}
              >
                <li>
                  <Link href={`/blogs/${contentId}/#${item.id}`} scroll={false}>
                    {item.text}
                  </Link>
                </li>
              </ul>
            );
          } else if (item.tag === 'h3') {
            return (
              <ul key={item.id} className='m-3'>
                <ul
                  className={listItem({ class: 'm-3 before:h-1 before:w-1' })}
                >
                  <li>
                    <Link
                      href={`/blogs/${contentId}/#${item.id}`}
                      scroll={false}
                    >
                      {item.text}
                    </Link>
                  </li>
                </ul>
              </ul>
            );
          }
        })}
      </ul>
    </div>
  );
};
