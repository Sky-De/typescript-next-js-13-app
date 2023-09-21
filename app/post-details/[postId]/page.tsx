"use client";
import PostCard from "@components/posts/PostCard";
import { PostType } from "../../../types/global-types";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import BackBtn from "@components/btn/BackBtn";
import Loading from "@components/loading/Loading";
import Image from "next/image";
import Avatar from "@public/img/Avatar.png";
import Link from "next/link";

export type UserType = {
  email: string;
  username: string;
  image: string;
  id: string;
};
const page: FC = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType | null>(null);
  const [owner, setOwner] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPostById = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/post/${postId}`);
        if (res.ok) {
          const data = await res.json();

          setPost(data.post);
          setOwner(data.owner);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPostById();
  }, [postId]);

  useEffect(() => {
    console.log(post, owner);
  }, [post, owner]);
  return (
    <>
      <BackBtn />
      <section className="postDetails min-h-[70vh] flex flex-col items-center justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="postDetails__content md:flex items-center justify-evenly w-full my-auto">
            <div className="postDetails__owner mb-6">
              <h3 className="postDetails__owner--title my-4 font-bold text-2xl titleGradiant">
                This post created by :
              </h3>
              <div className="postDetails__owner--info flex gap-2">
                <Image
                  className="rounded-full h-[3rem] w-[3rem]"
                  src={owner?.image || Avatar}
                  alt="avatar"
                  width={30}
                  height={30}
                />
                <div>
                  <h4 className="text-gray-500">{owner?.username}</h4>
                  <h4 className="text-gray-500">{owner?.email}</h4>
                </div>
              </div>
            </div>
            {post && (
              <PostCard
                aiName={post.aiName}
                description={post.description}
                tags={post.tags}
              />
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default page;
