import PostModel from "@models/post";
import { connectToDB } from "@utils/database";

export const POST = async (req: Request) => {
  const countPerStep = 2;
  const { stepNumber = 1, userId } = await req.json();
  const skipCount = stepNumber * countPerStep - countPerStep;
  try {
    connectToDB();
    const userPosts = await PostModel.find({ creatorId: userId })
      .sort({ _id: -1 })
      .skip(skipCount)
      .limit(countPerStep);

    return new Response(JSON.stringify(userPosts), { status: 200 });
  } catch (error) {
    return new Response("Faild to get posts", { status: 500 });
  }
};
