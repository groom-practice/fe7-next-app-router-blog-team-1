"use client";

import { posts } from "@/data/data";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import style from "./layout.module.css";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const keyword = searchParams.get("q") || "";
  const [input, setInput] = useState(keyword);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    if (input) {
      router.push(`/?q=${input}`);
    } else {
      router.push("/");
    }
  };

  const filterPost = posts.filter((post) =>
    post.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <div>
      <div className={style.container}>
        <h2>블로그 글 목록</h2>
        <input
          value={input}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="검색어 입력"
          className={style.input}
        />
        <button className={style.button} onClick={onSearch}>
          검색
        </button>
        <ul>
          {filterPost.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h3 className={style.title}> {post.title}</h3>{" "}
                <span className={style.category}>{post.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
