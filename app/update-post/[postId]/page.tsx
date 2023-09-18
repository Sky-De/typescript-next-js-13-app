"use client";
import Form from "@components/form/Form";
import { PostType } from "../../../types/global-types";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Loading from "@components/loading/Loading";

const UpdatePost = () => {
  const router = useRouter();
  const { postId } = useParams();
  const [isSubmitting, setIsSubmittng] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [post, setPost] = useState<PostType>({
    aiName: "",
    description: "",
    tags: [],
    _id: "",
  });

  useEffect(() => {
    const getPostById = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/post/${postId}`);
        if (res.ok) {
          const data = await res.json();

          setPost(data.post);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPostById();
  }, [postId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatePost = async () => {
      setIsSubmittng(true);
      const bodyData = JSON.stringify({
        aiName: post.aiName,
        description: post.description,
        tags: post.tags,
      });
      try {
        const res = await fetch(`/api/post/${post._id}`, {
          method: "PATCH",
          body: bodyData,
        });

        if (res.ok) {
          router.push("/profile");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmittng(false);
      }
    };

    updatePost();
  };
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Form
          post={post}
          setPost={setPost}
          type="Edit"
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default UpdatePost;
