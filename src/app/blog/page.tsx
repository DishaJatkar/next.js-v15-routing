export const metadata = {
  title: {
    absolute: "Blog Page",
  },
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay for loading
  return <h1>This is the blog page.</h1>;
}
