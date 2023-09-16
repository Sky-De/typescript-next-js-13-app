import React from "react";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div onClick={handleBack}>
      <i className="bx bx-left-arrow-alt"></i>
      <span>Back</span>
    </div>
  );
};

export default BackBtn;
