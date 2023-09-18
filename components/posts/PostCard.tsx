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
    <li className="postCard bg-[#262626] border rounded-lg flex flex-col gap-6 w-full md:w-[350px] p-5 min-h-[300px]">
      <div className="postCard__title flex gap-3 items-center text-white">
        <i
          title="AI Name"
          className="postCard__icon postCard__icon--name bx bx-brain"
        ></i>
        <p className="capitalize font-bold text-2xl"> {aiName}</p>
      </div>
      <div className="postCard__desc flex gap-3 text-white">
        <i
          title="AI Description"
          className="postCard__icon postCard__icon--desc bx bx-info-circle"
        ></i>
        <p>{descSummary}</p>
      </div>
      <div className="postCard__tags flex gap-3 mt-auto text-white">
        <i
          title="AI Tags"
          className="postCard__icon postCard__icon--tags bx bx-purchase-tag-alt"
        ></i>
        {/* FIX- replace i with uuid */}
        <ul className="flex gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <Link
              key={i}
              href={`/search-result/${tag.slice(1, tag.length)}`}
              className="text-[#3cbcab] hover:text-[#e75fbc]"
            >
              {tag}
            </Link>
          ))}
        </ul>
      </div>
      {!isProfile && (
        <Link
          className="text-[#3cbcab] border border-[#3cbcab] self-end px-2 py-1 hover:border-[#e75fbc] hover:text-[#e75fbc] transition-colors rounded"
          href={`/post-details/${_id}`}
        >
          Details
        </Link>
      )}
      {isProfile && (
        <div className="flex gap-2 justify-end">
          <Link
            className="text-red-600 border border-red-600 rounded py-1 px-3 hover:opacity-50"
            href={`/deletePost/${_id}`}
          >
            Delete
          </Link>
          <button
            className=" rounded py-1 px-3 hover:opacity-50 text-[#3cbcab] border border-[#3cbcab]"
            onClick={handleGoToUpdatePage}
          >
            Edit
          </button>
        </div>
      )}
    </li>
  );
};

export default PostCard;
