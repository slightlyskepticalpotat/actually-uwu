import { prefsRouter } from "~/server/api/routers/prefs";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  prefs: prefsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
