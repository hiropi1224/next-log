import { FC } from 'react';
import { format } from 'date-fns';
import { MicroCMSImage } from 'microcms-js-sdk';
import Image from 'next/image';
import { tv } from 'tailwind-variants';

const card = tv({
  slots: {
    base: 'md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-900 hover:bg-slate-300 hover:scale-105',
    wrapper: 'flex-1 pt-6 md:p-8 text-center md:text-left space-y-4',
    description: 'text-md font-medium',
    date: 'text-sm text-gray-700',
  },
});

const { base, wrapper, description, date } = card();

type Props = {
  title: string;
  image?: MicroCMSImage;
  createdAt: string;
};

export const ContentCard: FC<Props> = ({ title, image, createdAt }) => {
  return (
    <figure className={base()}>
      {image != null && (
        <Image src={image.url} alt={title} width='384' height='512' />
      )}
      <div className={wrapper()}>
        <blockquote>
          <p className={description()}>{title}</p>
        </blockquote>
        <div className={date()}>
          {format(new Date(createdAt), 'yyyy-MM-dd HH:mm:ss')}
        </div>
      </div>
    </figure>
  );
};
