function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (getRandomInt(2) === 1) {
    throw new Error("Random error occurred in layout");
  }

  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
}
