import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  // Vai trò được gán trong callback jwt/session của auth.ts — nếu Owner đã xoá
  // thành viên khỏi admin_users, session cũ vẫn còn nhưng role sẽ rỗng, coi như
  // chưa đăng nhập để chặn truy cập ngay, không cần đợi hết hạn cookie.
  const isLoggedIn = !!req.auth?.user?.role;
  const isLoginPage = pathname === "/admin/login";
  const isAdminPage = pathname.startsWith("/admin") && !isLoginPage;
  const isAdminApi = pathname.startsWith("/api/admin");

  if ((isAdminPage || isAdminApi) && !isLoggedIn) {
    if (isAdminApi) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
