import NextAuth from 'next-auth';
import RedditProvider from "next-auth/providers/reddit";

export default NextAuth({
    // configure one or more authentication p
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
  ],
});
