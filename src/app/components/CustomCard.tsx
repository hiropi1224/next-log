'use client';

import { FC } from 'react';
import { Card, Text } from '@tremor/react';
import Image from 'next/image';

type Props = {
  title: string;
  image: string;
};

export const CustomCard: FC<Props> = ({ title, image }) => (
  <Card className='max-w-xs mx-auto hover:bg-sky-200 hover:scale-105'>
    <Text className='text-base text-gray-700 font-bold'>{title}</Text>
    <Image src={image} alt={title} width={320} height={240} />
  </Card>
);
