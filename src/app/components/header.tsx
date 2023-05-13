import Link from 'next/link';
import { tv } from 'tailwind-variants';

const header = tv(
  {
    slots: {
      base: 'flex items-center justify-between py-4 md:py-8',
      logo: 'text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl',
      svg: 'h-auto w-6 text-indigo-500',
      nav: 'gap-12 mx-4',
      navItem:
        'text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700',
      menu: '',
    },
    variants: {
      style: {
        pc: {
          nav: 'flex',
          menu: 'hidden',
        },
        sp: {
          nav: 'hidden',
          menu: '',
        },
      },
    },
  },
  {
    responsiveVariants: ['md'],
  }
);

const { base, logo, svg, nav, navItem, menu } = header({
  style: {
    initial: 'sp',
    md: 'pc',
  },
});

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
          role='img'
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
        <Link href='/dashboard' className={navItem()}>
          Dashboard
        </Link>
        <Link href='/' className={navItem()}>
          Activity
        </Link>
        <Link href='/' className={navItem()}>
          About
        </Link>
      </nav>
      <div className={menu()}>
        <button>...</button>
      </div>
    </header>
  );
};
