'use client';
import { FC } from 'react';
import { Card, Title, LineChart } from '@tremor/react';
import { formatTime } from '@/app/utils/formatTime';
import { LapData } from '@/types/strava';

type Props = {
  lapData: LapData[];
};

export const LapsChart: FC<Props> = ({ lapData }) => {
  return (
    <Card>
      <Title>Activity Laps</Title>
      <LineChart
        data={lapData}
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
