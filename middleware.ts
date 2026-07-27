import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
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
