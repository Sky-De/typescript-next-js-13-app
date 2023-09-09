export type PostType = {
  aiName: string;
  _id?: string;
  creatorId?: string;
  description: string;
  tags: string;
};

export type PostsListProps = {
  posts: PostType[];
};
