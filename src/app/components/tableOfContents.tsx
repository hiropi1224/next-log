import Link from 'next/link';

type Props = { toc: { text: string; id: string }[]; contentId: string };

export const TableOfContents: React.FC<Props> = ({ toc, contentId }) => {
  return (
    <div>
      <p>目次</p>
      <ul>
        {toc.map((data) => (
          <li key={data.id}>
            <Link href={`/blogs/${contentId}/#${data.text}`}>{data.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
