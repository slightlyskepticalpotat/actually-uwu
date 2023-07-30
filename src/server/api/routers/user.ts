import { z } from "zod";
import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const prisma = new PrismaClient();

// Define the UserPreferences interface
interface UserPreferences {
  imperial: boolean;
  commute: string;
  lightrain: string;
  heavyrain: string;
  countrycode: string;
  city: string;
}

export const router = createRouter().mutation("createUser", {
  input: {
    // Define the shape of the input data
    type: "object",
    properties: {
      id: { type: "number" },
      name: { type: "string" },
      clerk_id: { type: "string" },
      preferences: {
        type: "object",
        properties: UserPreferences,
        required: [
          "imperial",
          "commute",
          "lightrain",
          "heavyrain",
          "countrycode",
          "city",
        ],
      },
      required: ["id", "name", "clerk_id", "preferences"], // Make 'id', 'name', 'clerk_id', and 'preferences' required
    },
  },
  async resolve({ input }) {
    // Use Prisma to create the user in the database
    const newUser = await prisma.user.create({
      data: {
        id: input.id,
        name: input.name,
        clerk_id: input.clerk_id,
        prefs: input.preferences, // Save the preferences directly to the database
      },
    });

    // Return the created user data (optional)
    return newUser;
  },
});
