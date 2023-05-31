import { FC } from 'react';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/app/_component/radioButton/radio-group';

type Props = {
  data: {
    label: string;
    value: string;
  }[];
};

export const RadioButton: FC<Props> = ({ data }) => {
  return (
    <RadioGroup defaultValue={data[0].value} className='flex'>
      {data.map((item) => (
        <div className='flex items-center space-x-2' key={item.value}>
          <RadioGroupItem value={item.value} id={item.value} />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </RadioGroup>
  );
};
