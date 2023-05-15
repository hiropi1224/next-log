import { Cog6ToothIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { FaRunning } from 'react-icons/fa';
import { tv } from 'tailwind-variants';

const footer = tv(
  {
    slots: {
      base: 'bg-slate-50 opacity-80 fixed bottom-[0vh] w-full py-2',
      nav: 'gap-6 mx-4 flex justify-around',
      navItem: 'text-lg font-semibold text-gray-600 transition duration-100',
      area: 'flex flex-col items-center text-sm',
      icon: 'h-6 w-6',
    },
    variants: {
      style: {
        pc: {
          nav: 'hidden',
        },
        sp: {
          nav: 'fix',
        },
      },
    },
  },
  {
    responsiveVariants: ['md'],
  }
);

const { base, nav, navItem, area, icon } = footer({
  style: {
    initial: 'sp',
    md: 'pc',
  },
});

export const FixedFooter: React.FC = () => {
  return (
    <footer className={base()}>
      <nav className={nav()}>
        <Link href='/' className={navItem()}>
          <div className={area()}>
            <HomeIcon className={icon()} />
            Home
          </div>
        </Link>
        <Link href='/blogs' className={navItem()}>
          <div className={area()}>
            <Cog6ToothIcon className={icon()} />
            Tech
          </div>
        </Link>
        <Link href='/dashboard' className={navItem()}>
          <div className={area()}>
            <FaRunning className={icon()} />
            Dashboard
          </div>
        </Link>
        <Link href='/' className={navItem()}>
          <div className={area()}>
            <UserIcon className={icon()} />
            About
          </div>
        </Link>
      </nav>
    </footer>
  );
};
