import { Title } from '@tremor/react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { TableOfContent } from '@/types/type';

type Props = { toc: TableOfContent[]; contentId: string };

const toc = tv({
  slots: {
    base: 'sticky top-6',
    list: 'text-sm text-slate-500',
    listItem: 'p-1 hover:bg-slate-100',
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
              <ul key={item.id} className='m-2'>
                <Link href={`/blogs/${contentId}/#${item.id}`} scroll={false}>
                  <li className={listItem()}>{item.text}</li>
                </Link>
              </ul>
            );
          } else if (item.tag === 'h3') {
            return (
              <ul key={item.id} className='m-4'>
                <ul>
                  <Link href={`/blogs/${contentId}/#${item.id}`} scroll={false}>
                    <li className={listItem()}>{item.text}</li>
                  </Link>
                </ul>
              </ul>
            );
          }
        })}
      </ul>
    </div>
  );
};
