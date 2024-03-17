export default function AboutDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex h-[500px]'>
        <div className='text-red-500 w-18 bg-slate-500 p-8'>about side bar</div>
        <div className='flex-grow bg-orange-500 p-8 text-center'>
          {children}
        </div>
      </div>
    </>
  );
}
