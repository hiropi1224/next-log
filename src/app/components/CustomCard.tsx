'use client';

import { FC } from 'react';
import { Card, Metric, Text } from '@tremor/react';

export const CustomCard: FC = () => (
  <Card className='max-w-xs mx-auto'>
    <Text>Sales</Text>
    <Metric>$ 34,743</Metric>
  </Card>
);
