import { PostType } from "../../types/global-types";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostCard: FC<PostType> = ({
  isProfile,
  aiName,
  description,
  tags,
  _id,
  creatorId,
  deletePost,
}) => {
  const router = useRouter();
  const handleGoToUpdatePage = async () => {
    router.push(`/update-post/${_id}`);
  };

  const limit = 150;
  const descSummary =
    description.length < limit
      ? description
      : `${description.slice(0, limit)} ...`;
  return (
    <li className="postCard bg-slate-100 border rounded-lg flex flex-col gap-6 w-full md:w-[350px] p-5 min-h-[300px]">
      <div className="postCard__title flex gap-3 items-center">
        <i
          title="AI Name"
          className="postCard__icon postCard__icon--name bx bx-brain"
        ></i>
        <p className="capitalize font-bold"> {aiName}</p>
      </div>
      <div className="postCard__desc flex gap-3">
        <i
          title="AI Description"
          className="postCard__icon postCard__icon--name bx bx-info-circle"
        ></i>
        <p>{descSummary}</p>
      </div>
      <div className="postCard__tags flex gap-3 mt-auto">
        <i
          title="AI Tags"
          className="postCard__icon postCard__icon--name bx bx-purchase-tag-alt"
        ></i>
        <p className="text-[#3cbcab]">{tags}</p>
      </div>
      <Link className="text-[#e75fbc] self-end" href={`/post-details/${_id}`}>
        Details
      </Link>
      {isProfile && (
        <div className="flex gap-2">
          <Link href={`/deletePost/${_id}`}>Delete</Link>
          <button onClick={handleGoToUpdatePage}>edit</button>
        </div>
      )}
    </li>
  );
};

export default PostCard;
