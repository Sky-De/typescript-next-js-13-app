import { AIs } from "@data";
import PostModel from "@models/post";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";
// FIX-remove this

export const POST = async (req: Request) => {
  try {
    connectToDB();
    const newPosts = await PostModel.insertMany(AIs);

    return new Response(JSON.stringify(newPosts), { status: 201 });
  } catch (error) {
    console.log(error);

    return new Response("Faild to create new post", { status: 500 });
  }
};
