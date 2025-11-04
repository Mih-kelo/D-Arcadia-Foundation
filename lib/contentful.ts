import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface Story {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  content: string;
  publishDate: string;
  author: string;
}

// Fetch all stories
export async function getAllStories(): Promise<Story[]> {
  const response = await client.getEntries({
    content_type: 'impactStory', // This matches your CMS content type
    order: ['-fields.publishDate'], // Sort by newest first
  });

  return response.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    featuredImage: {
      url: https:${item.fields.featuredImage?.fields?.file?.url},
      alt: item.fields.featuredImage?.fields?.title || item.fields.title,
    },
    content: item.fields.content,
    publishDate: item.fields.publishDate,
    author: item.fields.author,
  }));
}

// Fetch single story by slug
export async function getStoryBySlug(slug: string): Promise<Story | null> {
  const response = await client.getEntries({
    content_type: 'impactStory',
    'fields.slug': slug,
    limit: 1,
  });

  if (response.items.length === 0) return null;

  const item = response.items[0];
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    featuredImage: {
      url: https:${item.fields.featuredImage?.fields?.file?.url},
      alt: item.fields.featuredImage?.fields?.title || item.fields.title,
    },
    content: item.fields.content,
    publishDate: item.fields.publishDate,
    author: item.fields.author,
  };
}

// Get all slugs for static generation
export async function getAllStorySlugs(): Promise<string[]> {
  const response = await client.getEntries({
    content_type: 'impactStory',
    select: ['fields.slug'],
  });

  return response.items.map((item: any) => item.fields.slug);
}
