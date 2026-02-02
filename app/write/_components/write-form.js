"use clinet";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WriteForm() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "" || content.trim() === "") {
            alert("제목과 내용을 입력해주세요.");
            return;
        }

        handleAddPost();
    }

    const handleAddPost = async () => {
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ title, content }),
        });

        if (!response.ok) { return alert("글이 작성되지 않았습니다."); }

        const data = await response.json();
        alert("글이 작성되었습니다.");

        setTitle("");
        setContent("");

        router.push(`/posts/${data.id}`);
    }

    return (
        <form className='flex flex-col gap-4 justify-center items-start w-1/2' onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold'>글 작성</h2>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title">제목</label>
                <input className='border border-gray-300 rounded-md p-2' type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="content">내용</label>
                <textarea className='border border-gray-300 rounded-md p-2 h-40' id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>

            <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>작성 완료</button>
        </form>
    )
}