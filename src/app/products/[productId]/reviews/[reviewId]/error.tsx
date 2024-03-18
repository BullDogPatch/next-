'use client';

export default function ErrorBoundry({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1 className='text-4xl text-red-500'>{error.message}</h1>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
