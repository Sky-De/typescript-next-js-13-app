"use client";
import BackBtn from "@components/btn/BackBtn";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useGetPost } from "@hooks/useGetPost";
import Loading from "@components/loading/Loading";
import { PostListNew } from "@components/posts/PostList";

const page = () => {
  const { tagName } = useParams();
  // add type of post here
  const [step, setStep] = useState<number>(1);
  const { posts, isLoading } = useGetPost({
    type: "searchedPosts",
    tagName,
    step: step,
    setStep: setStep,
  });
  useEffect(() => {
    console.log("render");
  }, [tagName]);
  return (
    <section className="searchReslts">
      <BackBtn />
      <h2>Results for {tagName} :</h2>
      <PostListNew isLoading={isLoading} posts={posts} setStep={setStep} />
    </section>
  );
};

export default page;
