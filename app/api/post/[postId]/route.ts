import PostModel from "@models/post";
import UserModel from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (
  req: Request,
  { params }: { params: { postId: string } }
) => {
  try {
    connectToDB();
    const post = await PostModel.findById(params.postId);
    const owner = await UserModel.findById(post.creatorId);

    return new Response(JSON.stringify({ post: post, owner: owner }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Faild to get post", { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { postId: string } }
) => {
  try {
    connectToDB();
    await PostModel.findByIdAndRemove(params.postId);

    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Faild to delete post", { status: 500 });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { postId: string } }
) => {
  const { aiName, description, tags } = await req.json();
  try {
    connectToDB();
    const updatedPost = await PostModel.findByIdAndUpdate(params.postId, {
      aiName,
      description,
      tags,
    });

    return new Response(updatedPost, { status: 200 });
  } catch (error) {
    return new Response("Faild to update post", { status: 500 });
  }
};
