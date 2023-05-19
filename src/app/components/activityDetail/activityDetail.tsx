'use client';
import { Card, List, ListItem, Title } from '@tremor/react';

type Props = {
  distance: string;
  moving_time: string;
  average_pace: string;
  average_heartrate: number;
  average_watts: number;
};

export const ActivityDetail: React.FC<Props> = ({
  distance,
  moving_time,
  average_pace,
  average_heartrate,
  average_watts,
}) => {
  return (
    <Card className='my-2'>
      <Title>概要</Title>
      <List>
        <ListItem>
          <span>距離</span>
          <span>{distance}</span>
        </ListItem>
        <ListItem>
          <span>時間</span>
          <span>{moving_time}</span>
        </ListItem>
        <ListItem>
          <span>平均ペース</span>
          <span>{average_pace}</span>
        </ListItem>
        <ListItem>
          <span>平均心拍数</span>
          <span>{average_heartrate}bpm</span>
        </ListItem>
        <ListItem>
          <span>平均パワー</span>
          <span>{average_watts}w</span>
        </ListItem>
      </List>
    </Card>
  );
};
