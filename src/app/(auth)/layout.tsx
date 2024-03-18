'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className='mt-4 '>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive
                ? 'm-5  px-4 py-2 bg-green-500 text-white rounded'
                : 'm-5  px-4 py-2 bg-blue-400 text-white rounded'
            }
          >
            {link.name}
          </Link>
        );
      })}
      <main className='mt-8'>{children}</main>
    </div>
  );
}
