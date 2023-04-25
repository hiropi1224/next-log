'use client';

import { FC } from 'react';
import { Card, Flex, Metric, ProgressBar, Text } from '@tremor/react';

export const CustomCard: FC = () => (
  <Card className='max-w-xs mx-auto'>
    <Text>Sales</Text>
    <Metric>$ 71,465</Metric>
    <Flex className='mt-4'>
      <Text>32% of annual target</Text>
      <Text>$ 225,000</Text>
    </Flex>
    <ProgressBar percentageValue={32} className='mt-2' />
  </Card>
);
