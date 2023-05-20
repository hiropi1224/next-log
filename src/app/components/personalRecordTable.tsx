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

type Props = {
  data: {
    type: number;
    distance: string;
    duration: string;
    avgPace: string;
    happenDay: string;
  }[];
};

export const PersonalRecordTable: React.FC<Props> = ({ data }) => {
  return (
    <Card>
      <Title>パーソナルレコード(PR)</Title>
      <Table>
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
                <Text>{item.distance}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.duration}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.avgPace}</Text>
              </TableCell>
              <TableCell>{item.happenDay}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
