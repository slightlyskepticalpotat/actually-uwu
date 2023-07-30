import { z } from "zod";
import type { User } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const prefsRouter = createTRPCRouter({
  getUserPrefs: publicProcedure.query(async ({ ctx }) => {
    const { prisma } = ctx;
    if (ctx.auth.userId === null) {
      return {};
    }
    const userId: User["id"] = ctx.auth.userId;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { prefs: true },
    });
    return user?.prefs ?? null;
  }),
});
