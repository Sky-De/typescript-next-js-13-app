"use client";
import { useParams } from "next/navigation";

const page = () => {
  const { search } = useParams();
  return <div>page</div>;
};

export default page;
