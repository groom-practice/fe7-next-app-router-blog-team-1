"use client";
import { notFound } from "next/navigation";
import EditForm from "../_components/edit-form";
import { useState, useEffect, use } from "react";

export default function Page({ params }) {
    const [post, setPost] = useState(null);
    const { id } = use(params);

    useEffect(() => {
        fetch(`/api/posts/${id}`).then(async (response) => {
            if (!response.ok) { return notFound(); }
            const data = await response.json();
            setPost(data);
        });
    }, [id]);

    if (!post) {
        return <div className='flex flex-col gap-4 justify-center items-center h-screen'>Loading...</div>
    }

    return (
        <div className='flex flex-col gap-4 justify-center items-center h-screen'>
            <EditForm post={post} />
        </div>
    );
}