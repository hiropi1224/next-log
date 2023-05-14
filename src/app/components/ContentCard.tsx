import { FC } from 'react';
import { format } from 'date-fns';
import { MicroCMSImage } from 'microcms-js-sdk';
import Image from 'next/image';
import { tv } from 'tailwind-variants';

const card = tv(
  {
    slots: {
      base: 'rounded-xl p-2 bg-slate-100 p-0 dark:bg-gray-900 hover:bg-slate-300 hover:scale-105',
      wrapper: 'flex-1 py-4 px-4 text-left',
      description: 'text-md font-medium',
      date: 'text-sm text-gray-700',
    },
    variants: {
      style: {
        pc: {
          base: '',
        },
        sp: {
          base: 'flex',
          description: 'text-sm',
          date: 'text-xs text-gray-700',
        },
      },
    },
  },
  {
    responsiveVariants: ['md'],
  }
);

const { base, wrapper, description, date } = card({
  style: {
    initial: 'sp',
    md: 'pc',
  },
});

type Props = {
  title: string;
  image?: MicroCMSImage;
  createdAt: string;
};

export const ContentCard: FC<Props> = ({ title, image, createdAt }) => {
  return (
    <figure className={base()}>
      {image != null && (
        <Image
          src={image.url}
          alt={title}
          width='96'
          height='72'
          objectFit='content'
        />
      )}
      <div className={wrapper()}>
        <div className={description()}>{title}</div>
        <div className={date()}>
          {format(new Date(createdAt), 'yyyy-MM-dd HH:mm:ss')}
        </div>
      </div>
    </figure>
  );
};
