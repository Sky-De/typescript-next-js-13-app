"use client";
import { PostType, PostsListProps } from "../../types/global-types";
import React, { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import PostCard from "./PostCard";

type PostListProps = {
  isProfile?: boolean;
};
export const PostList: FC<PostListProps> = ({ isProfile }) => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [isGettingPosts, setIsGettingPosts] = useState<boolean>(false);

  useEffect(() => {
    const getAndAddTenPosts = async () => {
      setIsGettingPosts(true);
      const data = JSON.stringify({
        stepNumber: step,
        userId: session?.user.id,
      });
      try {
        if (!isProfile) {
          const res = await fetch("api/post/posts", {
            method: "POST",
            body: data,
          });

          if (res.ok) {
            const data = await res.json();
            setPosts([...posts, ...data]);
          }
        } else {
          const res = await fetch("api/post/user/posts", {
            method: "POST",
            body: data,
          });
          if (res.ok) {
            const data = await res.json();
            setPosts([...posts, ...data]);
          }
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
        <PostCard
          key={post._id}
          _id={post._id}
          aiName={post.aiName}
          tags={post.tags}
          creatorId={post.creatorId}
          description={post.description}
          isProfile={isProfile}
        />
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
