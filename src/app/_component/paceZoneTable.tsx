'use client';
import { FireIcon } from '@heroicons/react/24/solid';
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
  Flex,
} from '@tremor/react';
import { tv } from 'tailwind-variants';
import data from '@/app/_data/pacezone.json';

const table = tv({
  slots: {
    icon: 'h-4 w-4',
    iconStyle: 'justify-start',
  },
});

const { icon, iconStyle } = table();

export const PaceZoneTable: React.FC = () => {
  const color = [
    'text-sky-500',
    'text-cyan-500',
    'text-green-500',
    'text-orange-500',
    'text-red-500',
  ];

  return (
    <Card>
      <Title>閾値ペースゾーン</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ペースゾーン</TableHeaderCell>
            <TableHeaderCell>ペースレンジ(/km)</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={item.zone}>
              <TableCell>
                <Flex className={iconStyle()}>
                  <FireIcon className={icon({ className: `${color[i]}` })} />
                  <Text>{`Zone ${item.zone}`}</Text>
                </Flex>
              </TableCell>
              <TableCell>{item.pace}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
