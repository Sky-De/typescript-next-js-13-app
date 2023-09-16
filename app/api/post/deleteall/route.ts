import PostModel from "@models/post";
import { connectToDB } from "@utils/database";

export const DELETE = async (req: Request) => {
  try {
    connectToDB();
    await PostModel.deleteMany({});

    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Faild to get posts", { status: 500 });
  }
};
