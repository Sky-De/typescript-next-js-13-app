import React from "react";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div
      className="cursor-pointer hover:opacity-50 flex items-center gap-1 mb-2"
      onClick={handleBack}
    >
      <i className="bx bx-left-arrow-alt text-2xl"></i>
      <span className="text-xl">Back</span>
    </div>
  );
};

export default BackBtn;
