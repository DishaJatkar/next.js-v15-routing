import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <Link href="/blog">Go to Blog Page</Link>
      <Link href="/products">Go to Products Page</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
