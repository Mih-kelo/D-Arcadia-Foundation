import Link from 'next/link';

export default function StoryPage({ params }: { params: { slug: string } }) {
  const storyData = {
    'education-changes-lives': {
      title: 'Education Changes Lives',
      author: 'Sarah Johnson',
      publishDate: '2025-10-15',
      excerpt: 'How our education program helped 50 students achieve their dreams.',
      content: '<p>This is a placeholder story. When you integrate Contentful, the full content will be fetched from your CMS.</p><p>For now, you can see the page structure is working correctly!</p>',
    },
    'healthcare-access-initiative': {
      title: 'Healthcare Access Initiative',
      author: 'Michael Chen',
      publishDate: '2025-09-20',
      excerpt: 'Bringing quality healthcare to underserved communities.',
      content: '<p>This is a placeholder story. When you integrate Contentful, the full content will be fetched from your CMS.</p>',
    },
    'economic-empowerment-program': {
      title: 'Economic Empowerment Program',
      author: 'Amara Okafor',
      publishDate: '2025-08-10',
      excerpt: 'Helping entrepreneurs start small businesses and create jobs.',
      content: '<p>This is a placeholder story. When you integrate Contentful, the full content will be fetched from your CMS.</p>',
    },
  };

  const story = storyData[params.slug as keyof typeof storyData];

  if (!story) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-8">This story doesn't exist.</p>
          <Link href="/stories" className="text-brand-primary hover:text-brand-primary-dark font-semibold">
            ← Back to all stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-5xl font-bold">
            {story.title}
          </h1>
          <div className="flex items-center gap-4 text-sm">
            <span>{story.author}</span>
            <span>•</span>
            <time dateTime={story.publishDate}>
              {new Date(story.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          {story.excerpt}
        </p>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-700">{story.content}</p>
        </div>

        <div className="border-t pt-8">
          <Link 
            href="/stories"
            className="text-brand-primary hover:text-brand-primary-dark font-semibold"
          >
            ← Back to all stories
          </Link>
        </div>
      </div>
    </article>
  );
}
