import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import UserModel from "@models/user";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await UserModel.findOne({
        email: session.user?.email,
      });

      if (session.user) {
        session.user.id = sessionUser?._id?.toString() || "";
      }

      return session;
    },
    async signIn(params: {
      user: any; // Change to 'any' type
      account: any; // Change to 'any' type
      profile?: any; // Change to 'any' type
      email?: {
        verificationRequest?: boolean;
      };
      credentials?: Record<string, any>;
    }) {
      const { profile } = params;
      console.log(profile);
      try {
        await connectToDB();

        // user exist?
        const userExist = await UserModel.findOne({ email: profile?.email });

        // create user
        if (!userExist) {
          console.log(profile?.avatar_url);

          await UserModel.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.avatar_url,
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
