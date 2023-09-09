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
  const handleDeletePost = async () => {
    try {
      console.log("start Post deleted");
      console.log(_id);

      const res = await fetch(`/api/post/${_id}`, {
        method: "DELETE",
      });
      // make postList rerender after delteing post--FIX
      // console.log("Post deleted");
      // router.push("/");
      // router.push("/profile");
    } catch (error) {
      console.log(error);
    }
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
          <button>edit</button>
        </div>
      )}
    </li>
  );
};

export default PostCard;
