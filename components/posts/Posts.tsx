"use client";
import { PostType, PostsListProps } from "../../types/global-types";
import React, { FC, useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [isGettingPosts, setIsGettingPosts] = useState<boolean>(false);

  useEffect(() => {
    const getAndAddTenPosts = async () => {
      setIsGettingPosts(true);
      const data = JSON.stringify({
        stepNumber: step,
      });
      try {
        const res = await fetch("api/post/posts", {
          method: "POST",
          body: data,
        });

        if (res.ok) {
          const data = await res.json();
          setPosts([...posts, ...data]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsGettingPosts(false);
        console.log(posts);
      }
    };
    getAndAddTenPosts();
  }, [step]);

  const handleSeeMore = () => {
    setStep((step) => step + 1);
  };

  return (
    <ul className="flex flex-col gap-2">
      {posts.length < 1 && isGettingPosts && <h6>Loading...</h6>}
      {posts.map((post) => (
        <PostCard key={post._id} {...post} description={post.description} />
      ))}
      {posts.length > 0 && (
        <button disabled={isGettingPosts} onClick={handleSeeMore}>
          {isGettingPosts ? "Loading..." : "see more"}
        </button>
      )}
    </ul>
  );
};

const Posts = () => {
  return (
    <section>
      <h2>Posts</h2>
      <form onSubmit={() => {}}>
        <input type="text" />
      </form>
      <PostList />
    </section>
  );
};

export default Posts;
