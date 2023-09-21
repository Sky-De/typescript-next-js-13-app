import PostModel from "@models/post";
import { connectToDB } from "@utils/database";

export const POST = async (
  req: Request,
  { params }: { params: { tagName: string } }
) => {
  const countPerStep = 9;
  const { stepNumber = 1 } = await req.json();
  const skipCount = stepNumber * countPerStep - countPerStep;

  try {
    connectToDB();
    const posts = await PostModel.find({ tags: `#${params.tagName}` })
      .sort({ _id: -1 })
      .skip(skipCount)
      .limit(countPerStep);


    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Faild to get posts", { status: 500 });
  }
};
