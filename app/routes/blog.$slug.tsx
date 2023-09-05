import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import { getPostBySlug } from "~/models/post.server";
import { clsxm } from "~/utils/clsxm";

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
    <article className="pb-40 w-full">
      <h1 className="text-2xl text-green-500 my-4 font-semibold">
        {post.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="flex flex-col gap-4"
        id="blog-content"
      />
      <div
        className={clsxm(
          "fixed cursor-pointer transition-colors top-1/2 left-[calc(50%-(48rem/2+4rem))] text-zinc-100 text-5xl drop-shadow-[0_0_1px_rgb(0,0,0)]",
          "hover:text-red-500",
          {
            "text-red-500 hover:text-red-600": false,
          }
        )}
      >
        ♥️
      </div>
    </article>
  );
}
