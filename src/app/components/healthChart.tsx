'use client';
import { FC } from 'react';
import { Card, Title, AreaChart } from '@tremor/react';
import { Bodyfat, Weight } from '@/app/type';

type Props = {
  title: string;
  category: 'weight' | 'bodyfat';
  data: Weight[] | Bodyfat[];
};

export const HealthChart: FC<Props> = ({ title, data, category }) => {
  return (
    <div>
      <Card>
        <Title>{title}</Title>
        <AreaChart
          data={data}
          index='date'
          categories={[`${category}`]}
          colors={[`${category === 'weight' ? 'indigo' : 'blue'}`]}
          autoMinValue={true}
        />
      </Card>
    </div>
  );
};
