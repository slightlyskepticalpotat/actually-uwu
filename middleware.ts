import { authMiddleware } from "@clerk/nextjs/server";

/*export default authMiddleware(() => {
  return NextResponse.next();
});*/
export default authMiddleware({ publicRoutes: ["/"] });

export const clerkConfig = {
  autoRedirect: false,
  publicRoutes: ["/"],
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/",
  ],
};
