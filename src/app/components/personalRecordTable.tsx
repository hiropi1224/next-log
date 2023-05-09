'use client';
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Title,
  Text,
  Card,
} from '@tremor/react';
import data from '@/app/data/record.json';
import { formatDate } from '@/app/utils/formatDate';
import { formatTime } from '@/app/utils/formatTime';
import { metersToKilometers } from '@/app/utils/metersToKilometers';
import { secondsToMinSecPerKm } from '@/app/utils/secondsToMinSecPerKm';

export const PersonalRecordTable: React.FC = () => {
  return (
    <Card>
      <Title>パーソナルレコード(PR)</Title>
      <Table className='mt-5'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>距離</TableHeaderCell>
            <TableHeaderCell>タイム</TableHeaderCell>
            <TableHeaderCell>平均ペース</TableHeaderCell>
            <TableHeaderCell>日付</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.type}>
              <TableCell>
                <Text>
                  {typeof item.distance === 'string'
                    ? item.distance
                    : `${metersToKilometers(item.distance)}km`}
                </Text>
              </TableCell>
              <TableCell>
                <Text>{formatTime(item.duration)}</Text>
              </TableCell>
              <TableCell>
                <Text>{secondsToMinSecPerKm(item.avgPace)}</Text>
              </TableCell>
              <TableCell>{formatDate(item.happenDay)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
