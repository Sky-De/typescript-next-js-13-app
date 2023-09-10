"use client";
import { PostListNew } from "@components/posts/PostList";
import { useGetPost } from "@hooks/useGetPost";
import { useState } from "react";

const page = () => {
  const [step, setStep] = useState<number>(1);
  const { isLoading, posts } = useGetPost({ step: step, type: "allPosts" });

  return (
    <div>
      <PostListNew isLoading={isLoading} posts={posts} setStep={setStep} />
    </div>
  );
};

export default page;
