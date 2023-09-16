"use client";
import PostCard from "@components/posts/PostCard";
import { PostType } from "../../../types/global-types";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import BackBtn from "@components/btn/BackBtn";
import Loading from "@components/loading/Loading";
import Image from "next/image";
import Avatar from "@public/img/Avatar.png";

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
    <div>
      <BackBtn />
      <div className="content">
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <Image
              className="rounded-full"
              src={owner?.image || Avatar}
              alt="avatar"
              width={30}
              height={30}
            />
            <h4>{owner?.username}</h4>
            <h4>{owner?.email}</h4>
            <h4>{post?.aiName}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
