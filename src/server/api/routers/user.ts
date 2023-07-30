import { record, z } from "zod";
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
    }),

  postUserPrefs: publicProcedure
    .input(
      z.object({
        id: z.string(),
        clerk_id: z.string(),
        prefs: z.object({
          imperial: z.boolean(),
          commute: z.string(),
          "light-rain": z.string(),
          "heavy-rain": z.string(),
          "country-code": z.string(),
          city: z.string(),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id, clerk_id, prefs } = input;
      const { prisma } = ctx;
      return prisma.user.create({
        data: {
          id,
          clerk_id,
          prefs,
        },
      });
    }),
});
