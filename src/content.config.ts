import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  news: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),

      tags: z.array(z.string()).default([]),

      version: z.string().optional(),
      draft: z.boolean().default(false),
    }),
  }),
};
