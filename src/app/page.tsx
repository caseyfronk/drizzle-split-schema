import { db } from "@/db";

export default async function Home() {
  const posts = await db.query.posts.findMany({
    with: { comments: true },
  });

  return (
    <div className="container whitespace-pre-wrap flex flex-col gap-2 p-2">
      {JSON.stringify(posts, null, "\t")}
    </div>
  );
}
