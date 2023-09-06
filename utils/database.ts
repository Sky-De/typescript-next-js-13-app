import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB is already connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.DB_URL || "", {
      dbName: "AI-Share",
    });
    isConnected = true;
    console.log("DB connected now!");
  } catch (error) {
    console.log(error);
  }
};
