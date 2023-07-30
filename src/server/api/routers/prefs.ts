import { z } from "zod";
import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
const prisma = new PrismaClient();

export const appRouter = createTRPCRouter({
  createUser: publicProcedure.query(async ({ ctx }) => {
    if (ctx.auth.userId === null) {
      return {};
    }
    const userId: User["id"] = ctx.auth.userId;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user?.prefs ?? null;
  }),

  postUserPrefs: publicProcedure.query(async ({ ctx }) => {
    if (ctx.auth.userId === null) {
      return {};
    }
    const userId: User["id"] = ctx.auth.userId;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user?.prefs ?? null;
  }),

  getUserPrefs: publicProcedure.query(async ({ ctx }) => {
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

  // .input(z.object({ userId: z.string() }))
  // .query (({input}) => {
  //     // Fetch the user by ID from the database
  //     const user = await prisma.user.findUnique({
  //       where: { id: userId },
  //       select: { prefs: true },
  //     })
  //   };

  //     return user?.prefs ?? null;
  //   },
});
