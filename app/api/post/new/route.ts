import PostModel from "@models/post";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { aiName, description, tags, creatorId } = await req.json();
  console.log(tags);

  try {
    const newPost = new PostModel({
      aiName,
      description,
      tags: tags,
      creatorId,
    });
    console.log(newPost);

    connectToDB();
    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.log(error);

    return new Response("Faild to create new post", { status: 500 });
  }
};
