import { PostType } from "../types/global-types";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type GetPostHookProps = {
  type: "allPosts" | "userPosts" | "onePost" | "searchedPosts";
  step: number;
  setStep?: Dispatch<SetStateAction<number>>;
  tagName?: string | undefined | string[];
};

export const useGetPost = ({
  step,
  type,
  setStep,
  tagName,
}: GetPostHookProps) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data: session } = useSession();

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

  const getSearchedPosts = async (tagName: string | undefined | string[]) => {
    setIsLoading(true);
    const bodyData = JSON.stringify({
      stepNumber: step,
    });
    try {
      const res = await fetch(`/api/post/posts/${tagName}`, {
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
    if (type === "searchedPosts" && tagName) {
      getSearchedPosts(tagName);
    }
  }, [step, session?.user]);

  return { isLoading, posts };
};
