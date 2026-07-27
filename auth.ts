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
type TokenWithRole = { email?: string | null; role?: AdminRole; roleCheckedAt?: number };

// Tra lại admin_users mỗi request làm chậm hẳn việc điều hướng (mỗi request đều
// cộng thêm 1 round-trip lên Neon). Chỉ tra lại lúc đăng nhập, hoặc định kỳ vài
// phút/lần để nếu Owner xoá quyền ai đó thì vẫn có hiệu lực sau một lúc, thay vì
// tra lại y hệt trên MỌI request.
const ROLE_REVALIDATE_MS = 5 * 60 * 1000;

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
    async jwt({ token, trigger }) {
      const t = token as TokenWithRole;
      const stale = !t.roleCheckedAt || Date.now() - t.roleCheckedAt > ROLE_REVALIDATE_MS;
      if (t.email && (trigger === "signIn" || stale)) {
        t.role = (await getAdminRole(t.email)) ?? undefined;
        t.roleCheckedAt = Date.now();
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
