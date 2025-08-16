// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const SECRET = process.env.NEXTAUTH_SECRET ?? "";           // must be set in Vercel
const SALT = process.env.AUTH_SALT ?? "next-auth";          // safe default if not provided

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAdminPath = pathname.startsWith("/admin");
  const isLogin = pathname === "/admin/login";

  if (isAdminPath && !isLogin) {
    // v5 types expect secret + salt; pass both & cast to satisfy strict types
    const token = await getToken({ req: req as any, secret: SECRET, salt: SALT } as any);
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
