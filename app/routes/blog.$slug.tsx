import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import { getPostBySlug } from "~/models/post.server";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.slug) throw new Error("Missing slug");

  const post = await getPostBySlug(params.slug);
  if (!post) {
    throw new Response(null, {
      status: 404,
      statusText: `Post with slug "${params.slug}" not found`,
    });
  }

  const html = marked(post.content);
  return json({ post, html });
};

export default function BlogPost() {
  const { post, html } = useLoaderData<typeof loader>();

  if (!post) return <div>Not found</div>;

  return (
    <article>
      <h1 className="text-2xl text-green-500 mb-8 font-semibold">
        {post.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="flex flex-col gap-4 [&_img]:mx-auto"
      />
    </article>
  );
}
