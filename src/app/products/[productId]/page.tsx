import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product Details - ${productId}`);
    }, 1000);
  });
  return {
    title: `${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  return <h1>This is the product details page for product ID: {productId}</h1>;
}
