import React from "react";
import { Metadata } from "next";
import { ErrorWrapper } from "./error-wrapper";

export const metadata: Metadata = {
  title: {
    default: "Next.js 15 Routing Demo",
    template: "%s | Next.js 15 Routing Demo",
  },
  description: "A demo of the new routing features in Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>
        <ErrorWrapper>{children}</ErrorWrapper>
        <footer
          style={{
            backgroundColor: "lightgray",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
