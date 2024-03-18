import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <h1>Details About Product {params.productId}</h1>
      <Link
        href='/products'
        className='m-5 px-4 py-2 bg-black text-white rounded'
      >
        Back
      </Link>
    </div>
  );
}
