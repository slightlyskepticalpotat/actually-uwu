import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
        clerk_id: z.string(),
        prefs: z.record(z.unknown()),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id, clerk_id } = input;
      const { prisma } = ctx;

      return prisma.user.create({
        data: {
          id,
          clerk_id,
        },
      });
    }), // good luckkk
  // im gonna go back to codingg byeeee
});
