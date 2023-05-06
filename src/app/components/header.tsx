import Link from 'next/link';
import { tv } from 'tailwind-variants';

const header = tv({
  slots: {
    base: 'flex items-center justify-between py-4 md:py-8',
    logo: 'text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl',
    svg: 'h-auto w-6 text-indigo-500',
    nav: 'hidden gap-12 lg:flex mx-4',
    navItem:
      'text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700',
  },
});

const { base, logo, svg, nav, navItem } = header();

export const Header: React.FC = () => {
  return (
    <header className={base()}>
      <div className={logo()}>
        <svg
          width='95'
          height='94'
          viewBox='0 0 95 94'
          className={svg()}
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M96 0V47L48 94H0V47L48 0H96Z' />
        </svg>
        Next log
      </div>
      <nav className={nav()}>
        <Link href='/' className={navItem()}>
          Home
        </Link>
        <Link href='/blogs' className={navItem()}>
          Tech
        </Link>
        <Link href='/health' className={navItem()}>
          Health
        </Link>
        <Link href='/activity' className={navItem()}>
          Activity
        </Link>
        <Link href='/' className={navItem()}>
          About
        </Link>
      </nav>
    </header>
  );
};
