"use client";
import { PostType } from "../../types/global-types";
import React, { Dispatch, FC, SetStateAction } from "react";
import PostCard from "./PostCard";

type PostListProps = {
  isProfile?: boolean;
  isLoading: boolean;
  posts: PostType[];
  setStep: Dispatch<SetStateAction<number>>;
  deletePost?: (postId: string) => void;
};
export const PostListNew: FC<PostListProps> = ({
  isProfile,
  setStep,
  isLoading,
  posts,
  deletePost,
}) => {
  const handleSeeMore = () => {
    setStep((pre) => pre + 1);
  };

  return (
    <ul className="flex flex-col gap-2">
      {posts.length < 1 && isLoading && <h6>Loading...</h6>}
      {posts.map((post) => (
        <PostCard
          key={post._id}
          _id={post._id}
          aiName={post.aiName}
          tags={post.tags}
          creatorId={post.creatorId}
          description={post.description}
          isProfile={isProfile}
          deletePost={deletePost}
        />
      ))}

      <button disabled={isLoading} onClick={handleSeeMore}>
        {isLoading ? "Loading..." : "see more"}
      </button>
    </ul>
  );
};

// const Posts = () => {
//   const [posts, setPosts] = useState<PostType[]>([]);
//   const [step, setStep] = useState<number>(1);
//   const [isGettingPosts, setIsGettingPosts] = useState<boolean>(false);
//   const { data: session } = useSession();

//     useEffect(() => {
//       const getAndAddTenPosts = async () => {
//         setIsGettingPosts(true);
//         const data = JSON.stringify({
//           stepNumber: step,
//           userId: session?.user.id,
//         });
//         try {
//           if (1) {
//             const res = await fetch("api/post/posts", {
//               method: "POST",
//               body: data,
//             });

//             if (res.ok) {
//               const data = await res.json();
//               setPosts([...posts, ...data]);
//             }
//           } else {
//             const res = await fetch("api/post/user/posts", {
//               method: "POST",
//               body: data,
//             });
//             if (res.ok) {
//               const data = await res.json();
//               setPosts([...posts, ...data]);
//             }
//           }
//         } catch (error) {
//           console.log(error);
//         } finally {
//           setIsGettingPosts(false);
//           console.log(posts);
//         }
//       };
//       getAndAddTenPosts();
//     }, [step]);

//   return (
//     <section>
//       <h2>Posts</h2>
//       <form onSubmit={() => {}}>
//         <input type="text" />
//       </form>
//       <PostList posts={posts} setStep={setStep} />
//     </section>
//   );
// };

// export default Posts;
