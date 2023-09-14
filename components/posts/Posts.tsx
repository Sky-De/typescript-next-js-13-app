"use client";
import { PostType, PostsListProps } from "../../types/global-types";
import React, { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import PostCard from "./PostCard";
import { useGetPost } from "@hooks/useGetPost";
import { PostListNew } from "./PostList";

const Posts: FC = () => {
  const [step, setStep] = useState<number>(1);
  const { isLoading, posts } = useGetPost({ step: step, type: "allPosts" });
  return (
    <section className="">
      <h2 className="hero__title text-2xl  text-gray-900 text-start lg:text-center mb-8">
        Explore shared <span className="hero__title__gradiant">AIs</span> by
        Users
      </h2>
      <form onSubmit={() => {}}>
        <input type="text" />
      </form>
      <PostListNew isLoading={isLoading} posts={posts} setStep={setStep} />
    </section>
  );
};

export default Posts;
