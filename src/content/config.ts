// Import utilities from `astro:content`
import { z, defineCollection, type CollectionEntry } from "astro:content";

// Define a `type` and `schema` for each collection
// reference: https://zod.dev/?id=guides-and-concepts
const postsZodSchema = z.object({
  id: z.number(),
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }),
  tags: z.array(z.string())
})

const postsCollection = defineCollection({
  type: 'content',
  schema: postsZodSchema
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
}

// Use CollectionEntry type for proper typing including render() method
export type Post = CollectionEntry<'posts'>;
