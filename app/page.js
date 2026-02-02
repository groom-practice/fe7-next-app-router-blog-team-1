import { posts } from "@/data/data";
import Link from "next/link";

export default function Home({ searchParams }) {
  return (
    <div>
      <div></div>
      <h2>글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
