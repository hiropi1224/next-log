import { List, ListItem, Title, Text } from '@tremor/react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

type Props = { toc: { text: string; id: string }[]; contentId: string };

const toc = tv({
  slots: {
    base: 'sticky top-6',
  },
});

const { base } = toc();

export const TableOfContents: React.FC<Props> = ({ toc, contentId }) => {
  return (
    <div className={base()}>
      <Title>目次</Title>
      <List>
        {toc.map((item) => (
          <ListItem key={item.id}>
            <Link href={`/blogs/${contentId}/#${item.id}`} scroll={false}>
              <Text> {item.text}</Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
