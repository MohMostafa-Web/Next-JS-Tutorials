/* Import NextAuth, GithubProvider from "next-auth" library */
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../mongodb";

/* 
  Passing Configuration Object to NextAuth({}), then export it as default.
    Config. Object contains below:
    - providers: it refers to the services than can be used to sign in a user and services could be GitHub, Google, Facebook, ..
*/
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
