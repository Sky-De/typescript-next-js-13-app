import { Dispatch, SetStateAction } from "react";

export type PostType = {
  isProfile?: boolean;
  aiName: string;
  _id?: string;
  creatorId?: string;
  description: string;
  tags: string[];
  deletePost?: (postId: string) => void;
};

export type PostsListProps = {
  posts: PostType[];
};
