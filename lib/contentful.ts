interface Story {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  author: string;
  featuredImage: {
    url: string;
  };
}

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStories(): Promise<Story[]> {
  const response = await client.getEntries({
    content_type: 'story',
  });

  return response.items.map(function(item: any) {
    return {
      title: item.fields.title || '',
      slug: item.fields.slug || '',
      excerpt: item.fields.excerpt || '',
      content: item.fields.content || '',
      publishDate: item.fields.publishDate || new Date().toISOString(),
      author: item.fields.author || 'Anonymous',
      featuredImage: {
        url: item.fields.featuredImage?.fields?.file?.url || '',
      },
    };
  });
}

export async function getStoryBySlug(slug: string): Promise<Story | null> {
  const response = await client.getEntries({
    content_type: 'story',
    'fields.slug': slug,
  });

  if (response.items.length === 0) {
    return null;
  }

  const item = response.items[0];
  return {
    title: item.fields.title || '',
    slug: item.fields.slug || '',
    excerpt: item.fields.excerpt || '',
    content: item.fields.content || '',
    publishDate: item.fields.publishDate || new Date().toISOString(),
    author: item.fields.author || 'Anonymous',
    featuredImage: {
      url: item.fields.featuredImage?.fields?.file?.url || '',
    },
  };
}
