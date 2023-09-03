import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { BlogCard } from "~/components/BlogCard";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  if (!posts?.length) return <div>No posts yet</div>;

  return (
    <main>
      <ul className="grid gap-10 grid-cols-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`${post.slug}`}>
              <BlogCard title={post.title} description={post.desc} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
