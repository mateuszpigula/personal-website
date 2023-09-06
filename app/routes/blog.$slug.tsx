import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { marked } from "marked";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { getPostBySlug, likePostBySlug } from "~/models/post.server";
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

export async function action({ params }: ActionArgs) {
  try {
    if (!params.slug) throw new Error("Missing slug");
    await likePostBySlug(params.slug);
    return json({ success: true });
  } catch (e) {
    return json({ success: false });
  }
}

export default function BlogPost() {
  const { post, html } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  const [isLiked, setIsLiked] = useLocalStorage(`post-${post.id}`, false);

  const handleLike = () => {
    if (isLiked) return;
    setIsLiked(true);
    submit(null, { method: "post" });
  };

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
      <div className="text-end mt-8 lg:mt-0 lg:fixed top-1/2 left-[calc(50%-(48rem/2+4rem))]">
        <button
          onClick={handleLike}
          className={clsxm(
            "cursor-pointer transition-colors text-zinc-100 text-5xl drop-shadow-[0_0_1px_rgb(0,0,0)]",
            "hover:text-red-500",
            {
              "text-red-500 cursor-default": isLiked,
            }
          )}
        >
          ♥️
        </button>
        <span className="inline-block text-center text-zinc-400 translate-y-5 -translate-x-8 w-[5ch]">
          {post.likes}
        </span>
      </div>
    </article>
  );
}
