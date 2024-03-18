import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='h-screen'
    >
      <body className={`${inter.className} `}>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          Header
        </header>
        {children}
        <footer className='w-full h-12 bg-gray-900'>Footer</footer>
      </body>
    </html>
  );
}
