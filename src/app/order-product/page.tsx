'use client';

import { useRouter } from 'next/navigation';

export default function OrdderProductPage() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Placing your order');
    // router.back();
    // router.replace('/');
    router.push('/');
    console.log('Order complete');
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
