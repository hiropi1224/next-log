'use client';
import { Card, Text, Title } from '@tremor/react';
import { tv } from 'tailwind-variants';

const activityDetail = tv({
  slots: {
    base: 'mb-2 flex flex-wrap items-start justify-between gap-4',
    sub: 'flex flex-wrap items-start gap-4',
  },
});
const { base, sub } = activityDetail();

type Props = {
  distance: string;
  moving_time: string;
  average_pace: string;
  average_heartrate: number;
  average_watts: number;
  average_cadence: number;
};

export const ActivityDetail: React.FC<Props> = ({
  distance,
  moving_time,
  average_pace,
  average_heartrate,
  average_watts,
  average_cadence,
}) => {
  return (
    <Card className='mb-2'>
      <div className={base()}>
        <div>
          <Title>{distance}</Title>
          <Text>距離</Text>
        </div>

        <div>
          <Title>{moving_time}</Title>
          <Text>時間</Text>
        </div>

        <div>
          <Title>{average_pace}</Title>
          <Text>平均ペース</Text>
        </div>
      </div>
      <div className={sub()}>
        <div>
          <Text>{`平均心拍数: ${average_heartrate}bpm`}</Text>
        </div>
        <div>
          <Text>{`平均パワー: ${average_watts}w`}</Text>
        </div>
        <div>
          <Text>{`平均ピッチ: ${average_cadence}spm`}</Text>
        </div>
      </div>
    </Card>
  );
};
