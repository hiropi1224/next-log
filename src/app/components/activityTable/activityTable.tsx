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

export type TableData = {
  id: number;
  date: string;
  distance: string;
  time: string;
  aveTime: string;
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
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.distance}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.aveTime}</TableCell>
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
