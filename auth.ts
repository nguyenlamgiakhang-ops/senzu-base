import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { initDB } from "@/lib/db";

export type AdminRole = "owner" | "member";

declare module "next-auth" {
  interface Session {
    user: {
      role?: AdminRole;
    } & DefaultSession["user"];
  }
}

// next-auth v5 beta's "next-auth/jwt" subpath isn't reliably resolvable for type
// augmentation across versions — cast at the two call sites below instead.
type TokenWithRole = { email?: string | null; role?: AdminRole };

async function getAdminRole(email: string): Promise<AdminRole | null> {
  const sql = await initDB();
  const rows = await sql`SELECT role FROM admin_users WHERE email = ${email}`;
  if (rows.length === 0) return null;
  return rows[0].role as AdminRole;
}

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
      const email = profile?.email;
      if (!email) return false;
      const role = await getAdminRole(email);
      return role !== null;
    },
    async jwt({ token }) {
      const t = token as TokenWithRole;
      if (t.email) {
        t.role = (await getAdminRole(t.email)) ?? undefined;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = (token as TokenWithRole).role;
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
});
