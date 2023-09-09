"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// seperate PostList from Posts
import { PostList } from "@components/posts/Posts";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("now");
  }, [PostList]);
  useEffect(() => {
    if (!session?.user) {
      router.push("/", { scroll: false });
    }
  }, [session?.user]);
  return (
    <section>
      <h2>Profile</h2>
      <PostList isProfile={true} />
    </section>
  );
};

export default page;
