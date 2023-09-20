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
    setIsDeleteing(true);
    try {
      const res = await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleteing(false);
      router.push("/profile");
    }
  };
  return (
    <section className="h-[75vh] flex justify-center items-center gap-10 flex-col">
      <h3 className=" text-2xl font-bold text-center">
        Are you sure about delete this post ?
      </h3>
      <div className="flex gap-10">
        <Link
          className="text-emerald-500 text-xl border px-2 py-1 border-emerald-500 rounded hover:opacity-50"
          href="/profile"
        >
          Cancel
        </Link>
        <button
          className="text-red-500 text-xl border px-2 py-1 border-red-500 rounded hover:opacity-50"
          disabled={isDeleteing}
          onClick={handleDeletePost}
        >
          Delete
        </button>
      </div>
      {isDeleteing && <Loading />}
    </section>
  );
};

export default page;
