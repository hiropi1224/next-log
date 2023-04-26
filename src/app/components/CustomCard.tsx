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
  <Card className='max-w-xs mx-auto hover:bg-sky-200 hover:scale-105'>
    <Text className='text-base text-gray-700 font-bold'>{title}</Text>
    <Image src={image} alt={title} width={320} height={240} />
    <Text className='text-sm text-gray-700 text-right'>
      {format(new Date(createdAt), 'yyyy-MM-dd HH:mm:ss')}
    </Text>
  </Card>
);
