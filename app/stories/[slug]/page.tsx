'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = {
    title: 'Education Transforms Lives',
    content: 'Full story content here...',
    publishDate: '2025-10-15',
    author: 'Victor Kariuki Njiru',
    readTime: '5 min read',
    image: '/images/stories/education.jpg',
    tags: ['Education', 'Empowerment', 'Technology'],
  };

  const relatedStories = [
    {
      id: 1,
      title: 'Transforming Healthcare',
      excerpt: 'Mobile clinics bring healthcare to remote areas.',
      slug: 'transforming-healthcare',
      date: '2025-09-20',
    },
    {
      id: 2,
      title: 'Powering Small Businesses',
      excerpt: 'Supporting local entrepreneurs with mentorship.',
      slug: 'powering-small-businesses',
      date: '2025-08-10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-brand-primary to-brand-secondary py-24 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.h1
            className="mb-6 text-5xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {story.title}
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-6 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <span>{story.author}</span>
            </div>
            <div>•</div>
            <time dateTime={story.publishDate}>
              {new Date(story.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div>•</div>
            <span>{story.readTime}</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            className="mb-12 rounded-3xl overflow-hidden"
            variants={itemVariants}
          >
            <Image
              src={story.image}
              alt={story.title}
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="prose max-w-none"
            variants={itemVariants}
          >
            <div dangerouslySetInnerHTML={{ __html: story.content }} />
          </motion.div>

          <motion.div
            className="mt-12"
            variants={itemVariants}
          >
            <div className="flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Related Stories */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-brand-primary">
            Related Stories
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {relatedStories.map((relatedStory) => (
              <Link
                key={relatedStory.id}
                href={`/stories/${relatedStory.slug}`}
                className="group relative rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="mb-2 text-xl font-bold group-hover:text-brand-primary transition-colors">
                  {relatedStory.title}
                </h3>
                <p className="mb-4 text-gray-600">{relatedStory.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <time dateTime={relatedStory.date}>
                    {new Date(relatedStory.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="text-brand-primary">Read story →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-brand-secondary py-20 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            className="mb-6 text-3xl font-bold"
            variants={itemVariants}
          >
            Have Your Own Success Story?
          </motion.h2>
          <motion.p
            className="mb-8 text-gray-100"
            variants={itemVariants}
          >
            Share your experience with us and inspire others.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-brand-secondary hover:bg-gray-100"
              href="/contact"
            >
              Share Your Story
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

