import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { BlogCard } from "~/components/BlogCard";

export const loader = async () => {
  return json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
        description: "This is my first post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
        description: "This is my second post",
      },
    ],
  });
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main>
      <ul className="grid gap-10 grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>
              <BlogCard title={post.title} description={post.description} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
