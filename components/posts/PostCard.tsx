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
    <li className="border p-2">
      <p>AI : {aiName}</p>
      <p>Description : {description}</p>
      <p>Tags : {tags}</p>
      <p>{creatorId}</p>
      <p>{_id}</p>
      <Link href={`/post-details/${_id}`}>DETAILS</Link>
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
