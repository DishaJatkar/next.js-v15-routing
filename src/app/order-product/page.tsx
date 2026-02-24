"use client";

import { useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();

  const handleClick = () => {
    // Logic to place an order for a product
    console.log("Order placed!");
    router.push("/");
  };

  return (
    <div>
      <h1>Order Product Page</h1>
      <p>This is the order product page.</p>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
