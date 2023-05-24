'use client';
import { useState } from 'react';
import { DateRangePicker, DateRangePickerValue } from '@tremor/react';
import { ja } from 'date-fns/locale';

export const DatePicker: React.FC = () => {
  const [value, setValue] = useState<DateRangePickerValue>([null, null]);

  return (
    <>
      <input
        className='hidden'
        name='after'
        value={value[0] ? value[0].toString() : ''}
        defaultValue=''
      />
      <input
        className='hidden'
        name='before'
        value={value[1] ? value[1].toString() : ''}
        defaultValue=''
      />
      <DateRangePicker
        className='mx-auto max-w-md'
        value={value}
        onValueChange={setValue}
        locale={ja}
        dropdownPlaceholder='Seleccionar'
      />
    </>
  );
};
