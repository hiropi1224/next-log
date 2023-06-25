'use client';
import { PropsWithChildren } from 'react';
import { Title, Text, Grid } from '@tremor/react';
import { tv } from 'tailwind-variants';

const contents = tv({
  slots: {
    grid: 'mt-6 gap-6',
  },
});

const { grid } = contents();

export const DashboardShell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Title>Dashboard</Title>
      <Text>Activity Dashboard</Text>

      <Grid numColsMd={2} className={grid()}>
        {children}
      </Grid>
    </main>
  );
};
