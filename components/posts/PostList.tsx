"use client";
import { PostType } from "../../types/global-types";
import React, { Dispatch, FC, SetStateAction } from "react";
import PostCard from "./PostCard";
import Loading from "@components/loading/Loading";

type PostListProps = {
  isProfile?: boolean;
  isLoading: boolean;
  posts: PostType[];
  setStep: Dispatch<SetStateAction<number>>;
  deletePost?: (postId: string) => void;
};
export const PostListNew: FC<PostListProps> = ({
  isProfile,
  setStep,
  isLoading,
  posts,
}) => {
  const handleSeeMore = () => {
    setStep((pre) => pre + 1);
  };

  return (
    <>
      <ul className="flex flex-wrap gap-3 justify-center">
        {/* {posts.length < 1 && isLoading && <h6>Loading...</h6>} */}
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
      </ul>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {posts.length > 0 ? (
            <button
              className="ml-auto mt-12 text-lg border-b border-b-white hover:border-b-[#84f5e6] w-fit mx-auto block py-1 text-[#e75fbc]"
              disabled={isLoading}
              onClick={handleSeeMore}
            >
              see more
            </button>
          ) : (
            <span>There is no post yet!</span>
          )}
        </>
      )}
    </>
  );
};
