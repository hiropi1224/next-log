'use client';
import { Metric, Grid, Col } from '@tremor/react';
import { tv } from 'tailwind-variants';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-2xl px-4 md:px-8',
    grid: 'gap-2  p-4',
    blog: 'p-4',
    side: 'p-4',
  },
});

const { base, grid, blog, side } = contents();

type Props = {
  title: string;
  content: React.ReactNode;
  sidebar: React.ReactNode;
};

export const BlogShell: React.FC<Props> = ({ title, content, sidebar }) => {
  return (
    <main className={base()}>
      <Grid numCols={1} numColsSm={2} numColsLg={3} className={grid()}>
        <Col numColSpan={1} numColSpanLg={2} className={blog()}>
          <Metric>{title}</Metric>
          {content}
        </Col>
        <Col className={side()}>{sidebar}</Col>
      </Grid>
    </main>
  );
};
