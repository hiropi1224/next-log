'use client';
import { FC } from 'react';
import { Card, Title, LineChart } from '@tremor/react';
import { formatTime } from '@/app/utils/formatTime';

type Props = {
  chartdata: ChartData[];
};

type ChartData = {
  distance: number;
  laptime: number;
};

export const LapsChart: FC<Props> = ({ chartdata }) => {
  return (
    <Card className='mb-16'>
      <Title>Activity Laps</Title>
      <LineChart
        className='mt-6'
        data={chartdata}
        index='distance'
        categories={['laptime']}
        colors={['emerald']}
        valueFormatter={formatTime}
        yAxisWidth={40}
        autoMinValue={true}
      />
    </Card>
  );
};
