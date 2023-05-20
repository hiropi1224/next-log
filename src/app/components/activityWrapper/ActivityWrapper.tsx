'use client';
import { FC, useState } from 'react';
import {
  Button,
  DateRangePicker,
  DateRangePickerValue,
  Title,
} from '@tremor/react';
import { ja } from 'date-fns/locale';
import { tv } from 'tailwind-variants';
import {
  stringToDate,
  metersToKilometers,
  formatTime,
  convertToPace,
} from '@/app/_utils';
import { dateToStringUnixtime } from '@/app/_utils/dateToStringUnixtime';
import { fetchStrava } from '@/app/_utils/fetchStrava';
import { ActivityTable } from '@/app/components/activityTable';
import { TableData } from '@/app/components/activityTable/activityTable';
import { StravaActivity } from '@/types/strava';

const wrapper = tv({
  slots: {
    form: 'flex justify-start gap-4 mx-auto max-w-xl',
  },
});

const { form } = wrapper();
type Props = {
  activityList: StravaActivity[];
};

export const ActivityWrapper: FC<Props> = ({ activityList }) => {
  const [currentActivityList, setCurrentActivityList] = useState(activityList);
  const [value, setValue] = useState<DateRangePickerValue | undefined>([
    null,
    null,
  ]);

  const tableData: TableData[] = currentActivityList.map((activity) => {
    return {
      id: activity.id,
      date: stringToDate(activity.start_date),
      distance: `${metersToKilometers(activity.distance)}km`,
      time: formatTime(activity.moving_time),
      aveTime: convertToPace(activity.distance, activity.moving_time),
    };
  });

  return (
    <>
      <Title>ワークアウト一覧</Title>

      <form
        className={form()}
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await fetchStrava({
            after: dateToStringUnixtime(value, 'after'),
            before: dateToStringUnixtime(value, 'before'),
          });
          setCurrentActivityList(res);
        }}
      >
        <DateRangePicker
          value={value}
          onValueChange={setValue}
          locale={ja}
          dropdownPlaceholder='Seleccionar'
        />
        <Button type='submit'>検索</Button>
      </form>
      <ActivityTable data={tableData} />
    </>
  );
};
