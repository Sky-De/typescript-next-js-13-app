"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PostListNew } from "@components/posts/PostList";
import { useGetPost } from "@hooks/useGetPost";
import BackBtn from "@components/btn/BackBtn";

const Profile = () => {
  const { data: session } = useSession();
  const [step, setStep] = useState<number>(1);
  const router = useRouter();

  const { isLoading, posts } = useGetPost({
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
    <section className="">
      <BackBtn />
      <h2 className="titleGradiant text-2xl font-bold mx-auto mb-16 w-fit">
        Your Posts
      </h2>
      <PostListNew
        setStep={setStep}
        isLoading={isLoading}
        posts={posts}
        isProfile
      />
    </section>
  );
};

export default Profile;
