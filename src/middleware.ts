import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import { Database } from "@/lib/database.types";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/account", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/likes")) {
    // const requestHeaders = new Headers(req.headers);
    // console.log(req.nextUrl.searchParams.get("query"));
    //send query to server component
  }

  return res;
}

export const config = {
  matcher: [
    "/characters/:path*",
    "/episodes/:path*",
    "/quotes/:path*",
    "/locations/:path*",
    "/likes/:path*",
  ],
};
