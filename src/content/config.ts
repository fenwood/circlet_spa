import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string(),
      featured: z.number().min(1).optional(),
    }),
});

const recipeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    pubDate: z.date(),
    shortDescription: z.string(),
  })
})

export const collections = {
  showcase,
  recipes:recipeCollection,
};
