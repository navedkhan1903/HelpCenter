import bcryptjs from "bcryptjs";
import NextAuth from "next-auth/next";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any) {
        const { email, pass } = credentials;

        try {
          await connect();
          const user = await User.findOne({ email });
          if (!user) throw new Error("Invalid Email or Password");

          const validPass = await bcryptjs.compare(pass, user.pass);
          if (!validPass) throw new Error("Invalid Email or Password");

          return user;
        } catch (err: any) {
          throw new Error(err.message || "Something went wrong");
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      session.user = token.user;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
