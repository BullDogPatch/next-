export default function ProductDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Details About Product {params.productId}</h1>;
}
