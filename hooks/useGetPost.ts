import { PostType } from "../types/global-types";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type GetPostHookProps = {
  type: "allPosts" | "userPosts" | "onePost" | "searchedPosts";
  step: number;
  setStep?: Dispatch<SetStateAction<number>>;
  search?: string;
};

export const useGetPost = ({
  step,
  type,
  setStep,
  search,
}: GetPostHookProps) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: session } = useSession();

  const deletePost = (postId: string) => {
    const newPosts = posts.filter((post) => post._id !== postId);
    setPosts(newPosts);
  };

  const getAndAddTenPostsUser = async () => {
    setIsLoading(true);
    const bodyData = JSON.stringify({
      stepNumber: step,
      userId: session?.user.id,
    });
    try {
      const res = await fetch("api/post/user/posts", {
        method: "POST",
        body: bodyData,
      });

      if (res.ok) {
        const data = await res.json();
        setPosts([...posts, ...data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAndAddTenPostsAll = async () => {
    setIsLoading(true);
    const bodyData = JSON.stringify({
      stepNumber: step,
      userId: session?.user.id,
    });
    try {
      const res = await fetch("api/post/posts", {
        method: "POST",
        body: bodyData,
      });

      if (res.ok) {
        const data = await res.json();
        setPosts([...posts, ...data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAndAddTenPostsSearch = async (search: string) => {
    setIsLoading(true);
    const bodyData = JSON.stringify({
      stepNumber: step,
      userId: session?.user.id,
    });
    try {
      const res = await fetch("api/post/posts", {
        method: "POST",
        body: bodyData,
      });

      if (res.ok) {
        const data = await res.json();
        setPosts([...posts, ...data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // ALL----------
    if (type === "allPosts") {
      getAndAddTenPostsAll();
    }

    // User's----------
    if (type === "userPosts") {
      getAndAddTenPostsUser();
    }

    // Search----------
    if (type === "searchedPosts" && search) {
      getAndAddTenPostsSearch(search);
    }
  }, [step]);

  return { isLoading, posts, deletePost };
};
