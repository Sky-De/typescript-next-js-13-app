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
  const handleDeletePost = async () => {
    try {
      console.log("start Post deleted");
      console.log(_id);

      const res = await fetch(`/api/post/${_id}`, {
        method: "DELETE",
      });

      console.log("Post deleted");
      if (deletePost && _id) {
        const postId = _id.toString();
        deletePost(postId);
      }
      // WHEN THIS HAPPEN HOW TO RERENDER PROFILE PAGE
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoToUpdatePage = async () => {
    router.push(`/update-post/${_id}`);
  };
  return (
    <li className="postCard border rounded-lg flex flex-col gap-4 w-full md:w-[350px] p-4">
      <div className="postCard__title flex gap-2">
        <i>icon</i>
        <p> {aiName}</p>
      </div>
      <div className="postCard__desc flex gap-2">
        <i>icon</i>
        <p>{description}</p>
      </div>
      <div className="postCard__tags flex gap-2 mt-auto">
        <i>icon</i>
        <p className="text-[#3cbcab]">{tags}</p>
      </div>
      <Link className="text-[#e75fbc] self-end" href={`/post-details/${_id}`}>
        Details
      </Link>
      {isProfile && (
        <div className="flex gap-2">
          <button onClick={handleDeletePost}>delete</button>
          <button onClick={handleGoToUpdatePage}>edit</button>
        </div>
      )}
    </li>
  );
};

export default PostCard;
