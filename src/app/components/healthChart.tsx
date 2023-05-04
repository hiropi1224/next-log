'use client';
import { FC } from 'react';
import { Card, Title, AreaChart } from '@tremor/react';
import { Health } from '@/app/type';

type Props = {
  data: Health;
};

export const HealthChart: FC<Props> = ({ data }) => {
  const weight = data.data.filter((d) => d.tag === '6021').reverse();
  const weightdata = weight.map((x) => ({
    date: `${x.date.slice(0, 4)}/${x.date.slice(4, 6)}/${x.date.slice(6, 8)}`,
    weight: x.keydata,
  }));

  const bodyfat = data.data.filter((d) => d.tag === '6022').reverse();
  const bodyfatdata = bodyfat.map((x) => ({
    date: `${x.date.slice(0, 4)}/${x.date.slice(4, 6)}/${x.date.slice(6, 8)}`,
    bodyfat: x.keydata,
  }));

  return (
    <div>
      <Card>
        <Title>体重</Title>
        <AreaChart
          className='mt-4 h-72'
          data={weightdata}
          index='date'
          categories={['weight']}
          colors={['indigo']}
          autoMinValue={true}
        />
      </Card>
      <Card>
        <Title>体脂肪率</Title>
        <AreaChart
          className='mt-4 h-72'
          data={bodyfatdata}
          index='date'
          categories={['bodyfat']}
          colors={['blue']}
          autoMinValue={true}
        />
      </Card>
    </div>
  );
};
