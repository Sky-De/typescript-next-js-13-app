import { PostType } from "../../types/global-types";
import { FC } from "react";
import Link from "next/link";

const PostCard: FC<PostType> = ({
  aiName,
  description,
  tags,
  _id,
  creatorId,
}) => {
  return (
    <li className="border p-2">
      <p>AI : {aiName}</p>
      <p>Description : {description}</p>
      <p>Tags : {tags}</p>
      <p>{creatorId}</p>
      <p>{_id}</p>
      <Link href={`/post-details/${_id}`}>DETAILS</Link>
    </li>
  );
};

export default PostCard;
