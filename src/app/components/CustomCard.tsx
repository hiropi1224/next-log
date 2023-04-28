'use client';

import { FC } from 'react';
import { Card, Text } from '@tremor/react';
import { format } from 'date-fns';
import Image from 'next/image';

type Props = {
  title: string;
  image: string;
  createdAt: string;
};

export const CustomCard: FC<Props> = ({ title, image, createdAt }) => (
  <Card className='mx-auto max-w-xs hover:scale-105 hover:bg-sky-200'>
    <Text className='text-base font-bold text-gray-700'>{title}</Text>
    <Image src={image} alt={title} width={320} height={240} />
    <Text className='text-right text-sm text-gray-700'>
      {format(new Date(createdAt), 'yyyy-MM-dd HH:mm:ss')}
    </Text>
  </Card>
);
