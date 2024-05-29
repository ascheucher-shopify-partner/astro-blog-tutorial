// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

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

// get the type of the Post
type Post = {
  id: string
  slug: string
  body: string;
  collection: string
  data: z.infer<typeof postsZodSchema>
}

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
}

export type { Post }
