import { FC } from 'react';
import { format } from 'date-fns';
import { tv } from 'tailwind-variants';

const card = tv(
  {
    slots: {
      base: 'p-2 dark:bg-gray-900 hover:bg-slate-100',
      wrapper: 'm-auto',
      description: 'text-lg font-medium py-2',
      date: 'text-base text-gray-700 py-2',
    },
  },
  {
    responsiveVariants: ['md'],
  }
);

const { base, wrapper, description, date } = card();

type Props = {
  title: string;
  createdAt: string;
};

export const ContentCard: FC<Props> = ({ title, createdAt }) => {
  return (
    <figure className={base()}>
      <div className={wrapper()}>
        <div className={date()}>
          {format(new Date(createdAt), 'yyyy-MM-dd')}
        </div>
        <div className={description()}>{title}</div>
      </div>
    </figure>
  );
};
