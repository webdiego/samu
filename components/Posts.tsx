import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { getPosts } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import TextBlock from "@/components/TextBlock";
const builder = imageUrlBuilder(client);

export default async function Posts() {
  const { data: posts } = await sanityFetch({ query: getPosts });
  console.log(posts);
  return (
    <div>
      {posts.map((post, i) => {
        return (
          <div key={i} className="max-w-4xl mx-auto">
            <h1>{post.title}</h1>
            <TextBlock value={post.content} />
            <Image
              priority
              src={builder.image(post.image).url()}
              alt={post.title}
              width={100}
              height={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              className=" rounded-xl rounded-b-none md:rounded-bl-xl md:rounded-r-none w-full h-[200px] md:h-[220px]"
            />
          </div>
        );
      })}
    </div>
  );
}
