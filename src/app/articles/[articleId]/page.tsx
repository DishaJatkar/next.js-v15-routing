"use client";

import Link from "next/link";
import { use } from "react";

export default function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <>
      <h1>Article ID: {articleId}</h1>
      <p>Language: {lang || "Not specified"}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </>
  );
}
