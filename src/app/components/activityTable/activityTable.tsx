'use client';
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Title,
} from '@tremor/react';
import { stringToDate } from '@/app/utils/formatDate';
import { formatTime } from '@/app/utils/formatTime';
import { metersToKilometers } from '@/app/utils/metersToKilometers';

export type TableData = {
  id: number;
  date: string;
  distance: number;
  time: number;
};

type Props = {
  data: TableData[];
};

export const ActivityTable: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Title>最近のワークアウト</Title>
      <Table className='mt-5'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>日付</TableHeaderCell>
            <TableHeaderCell>距離</TableHeaderCell>
            <TableHeaderCell>時間</TableHeaderCell>
            {/* <TableHeaderCell>平均ペース</TableHeaderCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{stringToDate(item.date)}</TableCell>
              <TableCell>{`${metersToKilometers(item.distance)}km`}</TableCell>
              <TableCell>{formatTime(item.time)}</TableCell>
              {/* <TableCell>{item.aveTime}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
