'use client';

export default function ErrorBoundry({ error }: { error: Error }) {
  return <h1 className='text-4xl text-red-500'>{error.message}</h1>;
}
