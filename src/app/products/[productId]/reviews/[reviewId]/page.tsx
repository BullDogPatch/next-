'use client';
import { notFound } from 'next/navigation';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  // const random = getRandomInt(3);
  // if (random === 1) {
  //   throw new Error('Error Loading Review');
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} About Product {params.productId}
    </h1>
  );
}
