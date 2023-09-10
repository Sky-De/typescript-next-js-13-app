"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PostListNew } from "@components/posts/PostList";
import { useGetPost } from "@hooks/useGetPost";

const Profile = () => {
  const { data: session } = useSession();
  const [step, setStep] = useState<number>(1);
  const router = useRouter();

  const { isLoading, posts, deletePost } = useGetPost({
    type: "userPosts",
    step: step,
    setStep: setStep,
  });

  useEffect(() => {
    if (!session?.user) {
      router.push("/", { scroll: false });
    }
  }, [session?.user]);

  return (
    <section>
      <h2>Profile</h2>
      <PostListNew
        setStep={setStep}
        isLoading={isLoading}
        posts={posts}
        isProfile
        deletePost={deletePost}
      />
    </section>
  );
};

export default Profile;
