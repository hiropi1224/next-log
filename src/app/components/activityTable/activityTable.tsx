'use client';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Callout,
  Title,
  Text,
} from '@tremor/react';
import Link from 'next/link';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
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
  if (data.length === 0)
    return (
      <Callout
        className='mt-4'
        title='ワークアウトがありません。'
        icon={AiOutlineExclamationCircle}
        color='rose'
      >
        指定された期間のワークアウトがありません。期間を変更してもう一度検索してください。
      </Callout>
    );

  return (
    <>
      <div className='flex justify-between'>
        <Title>アクティビティ一覧</Title>
        <Text>件数: {data.length}</Text>
      </div>
      <Table className={table()}>
        <TableHead className='text-gray-900'>
          <TableRow className='text-blue-900'>
            <TableHeaderCell>日付</TableHeaderCell>
            <TableHeaderCell>距離</TableHeaderCell>
            <TableHeaderCell>時間</TableHeaderCell>
            <TableHeaderCell>平均ペース</TableHeaderCell>
            <TableHeaderCell>詳細</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className='text-blue-900'>
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
