import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const ALLOWED_EMAIL_DOMAIN = "@senzu.co.jp";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      return !!profile?.email?.endsWith(ALLOWED_EMAIL_DOMAIN);
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
});
