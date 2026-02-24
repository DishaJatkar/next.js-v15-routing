import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Random error occurred");
  // }
  const { productId, reviewId } = await params;
  if (parseInt(productId) > 1000) {
    // notFound();
    redirect("/products");
  }
  return (
    <h1>
      This is the review details page for product ID: {productId} and review ID:{" "}
      {reviewId}
    </h1>
  );
}
