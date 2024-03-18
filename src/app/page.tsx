import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-5/6 bg-slate-500 flex items-center justify-center'>
      <div className='flex flex-col text-center'>
        <h1 className='text-white'>Home Page</h1>
        <Link
          href='/blog'
          className='m-5 px-4 py-2 bg-black text-white rounded'
        >
          Blog
        </Link>
        <Link
          href='/products'
          className='m-5 px-4 py-2 bg-black text-white rounded'
        >
          Products
        </Link>
      </div>
    </div>
  );
}
