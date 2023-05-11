import { List, ListItem, Title, Text } from '@tremor/react';
import Link from 'next/link';

type Props = { toc: { text: string; id: string }[]; contentId: string };

export const TableOfContents: React.FC<Props> = ({ toc, contentId }) => {
  return (
    <>
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
    </>
  );
};
