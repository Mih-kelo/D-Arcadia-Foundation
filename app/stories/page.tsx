import Link from 'next/link';

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: 'Education Changes Lives',
      slug: 'education-changes-lives',
      excerpt: 'How our education program helped 50 students achieve their dreams.',
      author: 'Sarah Johnson',
      publishDate: '2025-10-15',
    },
    {
      id: 2,
      title: 'Healthcare Access Initiative',
      slug: 'healthcare-access-initiative',
      excerpt: 'Bringing quality healthcare to underserved communities.',
      author: 'Michael Chen',
      publishDate: '2025-09-20',
    },
    {
      id: 3,
      title: 'Economic Empowerment Program',
      slug: 'economic-empowerment-program',
      excerpt: 'Helping entrepreneurs start small businesses and create jobs.',
      author: 'Amara Okafor',
      publishDate: '2025-08-10',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-4 text-4xl font-bold text-brand-primary">
          Impact Stories
        </h1>
        <p className="mb-12 text-lg text-gray-600">
          Real stories of change from our community
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map(function(story) {
            return (
              <article 
                key={story.id}
                className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
              >
                <div className="h-48 w-full bg-gradient-to-br from-brand-primary to-brand-secondary" />

                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold text-gray-900">
                    {story.title}
                  </h2>
                  
                  <p className="mb-4 text-gray-600 line-clamp-3">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{story.author}</span>
                    <time dateTime={story.publishDate}>
                      {new Date(story.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <Link 
                    href={'/stories/' + story.slug}
                    className="text-brand-primary hover:text-brand-primary-dark font-semibold"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
