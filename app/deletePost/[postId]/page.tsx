"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Loading from "@components/loading/Loading";
import Link from "next/link";

const page = () => {
  const router = useRouter();
  const [isDeleteing, setIsDeleteing] = useState<boolean>(false);
  const { postId } = useParams();

  const handleDeletePost = async () => {
    try {
      const res = await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });

      // if (deletePost && _id) {
      //   const postId = _id.toString();
      //   deletePost(postId);
      // }
      // WHEN THIS HAPPEN HOW TO RERENDER PROFILE PAGE
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/profile");
    }
  };
  return (
    <section>
      <h3>Are you sure about delete this post ?</h3>
      <button disabled={isDeleteing} onClick={handleDeletePost}>
        Delete
      </button>
      <Link href="/profile">Cancel</Link>
      {isDeleteing && <Loading />}
    </section>
  );
};

export default page;
