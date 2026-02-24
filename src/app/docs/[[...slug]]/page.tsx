export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        This is the docs page for slug: {slug[0]} and {slug[1]}
      </h1>
    );
  }
  if (slug?.length === 1) {
    return <h1>This is the docs page for slug: {slug[0]}</h1>;
  }
  return <h1>This is the docs page</h1>;
}
