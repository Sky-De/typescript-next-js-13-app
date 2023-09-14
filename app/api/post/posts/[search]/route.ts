import PostModel from "@models/post";
import { connectToDB } from "@utils/database";
import { useParams } from "next/navigation";

export const POST = async (req: Request) => {
  const countPerStep = 2;
  const { stepNumber = 1 } = await req.json();
  const skipCount = stepNumber * countPerStep - countPerStep;
  const { search } = useParams();
  console.log(search);
  
  try {
    connectToDB();
    const posts = await PostModel.find({})
      .sort({ _id: -1 })
      .skip(skipCount)
      .limit(countPerStep);

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Faild to get posts", { status: 500 });
  }
};
