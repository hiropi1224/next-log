'use client';
import { FC } from 'react';
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
} from '@tremor/react';
import { formatTime } from '@/app/_utils';
import { LapData } from '@/types/strava';

type Props = {
  lapData: LapData[];
};

export const LapsTable: FC<Props> = ({ lapData }) => {
  return (
    <Card className='mb-2'>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ラップ</TableHeaderCell>
            <TableHeaderCell>ペース</TableHeaderCell>
            <TableHeaderCell>平均心拍数</TableHeaderCell>
            <TableHeaderCell>最大心拍数</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lapData.map((lap) => (
            <TableRow key={lap.distance}>
              <TableCell>{lap.distance}</TableCell>
              <TableCell>{`${formatTime(lap.laptime)}/km`}</TableCell>
              <TableCell>{lap.average_heartrate}</TableCell>
              <TableCell>{lap.max_heartrate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
