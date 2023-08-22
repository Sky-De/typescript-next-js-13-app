import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import UserModel from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    // async session({ session }) {
    //     const sessionUser = await UserModel.findOne({
    //         email: session.user?.email
    //     })
    //     session.user.id = sessionUser._id.toString();

    // },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // user exist?
        const userExist = await UserModel.findOne({ email: profile?.email });

        // create user
        if (!userExist) {
          await UserModel.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.image,
          });
        }

        return true;
      } catch (error) {
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
