"use client";
import { useParams } from "next/navigation";
const page = () => {
  const { postId } = useParams();
  return <div>{postId}</div>;
};

export default page;
