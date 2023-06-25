import { FC } from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  data: {
    label: string;
    value: string;
  }[];
  id: string;
};

const contents = tv({
  slots: {
    radio:
      'ml-2 h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600',
    label: 'm-2 text-sm font-medium text-gray-900 dark:text-gray-300',
  },
});

const { radio, label } = contents();

export const RadioButton: FC<Props> = ({ data, id }) => {
  return (
    <div className='flex'>
      {data.map((item) => (
        <div className='flex items-center space-x-2' key={item.value}>
          <input
            id={id}
            type='radio'
            value={item.value}
            name={id}
            className={radio()}
          />
          <label id={id} className={label()}>
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};
