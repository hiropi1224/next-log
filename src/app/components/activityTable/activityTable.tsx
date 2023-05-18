'use client';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Title,
} from '@tremor/react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { convertToPace } from '@/app/utils/convertToPace';
import { stringToDate } from '@/app/utils/formatDate';
import { formatTime } from '@/app/utils/formatTime';
import { metersToKilometers } from '@/app/utils/metersToKilometers';

export type TableData = {
  id: number;
  date: string;
  distance: number;
  time: number;
  aveTime: number;
};

type Props = {
  data: TableData[];
};

const activityTable = tv({
  slots: {
    table: 'mt-5',
    icon: 'h-6 w-6',
  },
});

const { table, icon } = activityTable();

export const ActivityTable: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Title>最近のワークアウト</Title>
      <Table className={table()}>
        <TableHead>
          <TableRow>
            <TableHeaderCell>日付</TableHeaderCell>
            <TableHeaderCell>距離</TableHeaderCell>
            <TableHeaderCell>時間</TableHeaderCell>
            <TableHeaderCell>平均ペース</TableHeaderCell>
            <TableHeaderCell>詳細</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{stringToDate(item.date)}</TableCell>
              <TableCell>{`${metersToKilometers(item.distance)}km`}</TableCell>
              <TableCell>{formatTime(item.time)}</TableCell>
              <TableCell>{convertToPace(item.distance, item.time)}</TableCell>
              <TableCell>
                <Link href={`/activity/${String(item.id)}`}>
                  <DocumentDuplicateIcon className={icon()} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
