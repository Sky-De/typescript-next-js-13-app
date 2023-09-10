"use client";
import Form from "@components/form/Form";
import { PostType } from "../../types/global-types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const INITIAL_POST_STATE: PostType = {
  aiName: "",
  description: "",
  tags: "",
};

const CreatePost = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [post, setPost] = useState<PostType>(INITIAL_POST_STATE);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = JSON.stringify({
      aiName: post.aiName,
      description: post.description,
      // tags: post.tags, make this array of tags
      tags: post.tags,
      creatorId: session?.user.id,
    });

    try {
      const res = await fetch("api/post/new", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        console.log(res);

        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        post={post}
        setPost={setPost}
        type="Create"
      />
    </div>
  );
};

export default CreatePost;
