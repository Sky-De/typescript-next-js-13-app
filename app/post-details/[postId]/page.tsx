"use client";
import PostCard from "@components/posts/PostCard";
import { PostType } from "../../../types/global-types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const page = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType | null>(null);
  useEffect(() => {
    const getPostById = async () => {
      try {
        const res = await fetch(`/api/post/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPostById();
  }, [postId]);
  return <div>{post ? <PostCard {...post} /> : "Loading..."}</div>;
};

export default page;
