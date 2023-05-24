import './globals.css';
import { Inter } from 'next/font/google';
import { FixedFooter } from '@/app/_component/fixedFooter';
import { Header } from '@/app/_component/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next log',
  description: '技術系備忘録とアクティビティトラッキング',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Header />
        {children}
        <FixedFooter />
      </body>
    </html>
  );
}
