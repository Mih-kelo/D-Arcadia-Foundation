'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Education', 'Healthcare', 'Economic Empowerment'];

  const stories = [
    {
      id: 1,
      title: 'Education Transforms Lives',
      category: 'Education',
      image: '/images/stories/education.jpg',
      excerpt: 'Our education program helped 50 students achieve their dreams.',
      date: '2025-10-15',
      readTime: '5 min read',
      slug: 'education-transforms-lives',
    },
    {
      id: 2,
      title: 'Healthcare Breakthrough',
      category: 'Healthcare',
      image: '/images/stories/healthcare.jpg',
      excerpt: 'Mobile clinics bring essential healthcare to remote areas.',
      date: '2025-09-20',
      readTime: '4 min read',
      slug: 'healthcare-breakthrough',
    },
    {
      id: 3,
      title: 'Economic Success Story',
      category: 'Economic Empowerment',
      image: '/images/stories/economic.jpg',
      excerpt: 'Helping entrepreneurs start small businesses and create jobs.',
      date: '2025-08-10',
      readTime: '6 min read',
      slug: 'economic-success-story',
    },
  ];

  const filteredStories = selectedCategory === 'All' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

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
        className="relative bg-gradient-to-r from-brand-primary via-brand-primary-dark to-brand-secondary py-32 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.h1
            className="mb-6 text-5xl font-bold md:text-6xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories
          </motion.h1>
          <motion.p
            className="mb-8 max-w-2xl mx-auto text-xl text-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real stories from communities we&apos;ve impacted
          </motion.p>
        </div>
      </motion.section>

      {/* Categories Filter */}
      <motion.div
        className="sticky top-0 z-40 bg-white shadow-md py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(function(category) {
              return (
                <motion.button
                  key={category}
                  onClick={function() {
                    setSelectedCategory(category);
                  }}
                  className={`
                    relative px-6 py-2 rounded-full text-sm font-semibold transition-colors
                    ${selectedCategory === category 
                      ? 'text-brand-primary bg-brand-primary/10' 
                      : 'text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5'}
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                  {selectedCategory === category && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-brand-primary"
                      layoutId="underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Stories Grid */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {filteredStories.map(function(story) {
              return (
                <motion.article
                  key={story.id}
                  className="group rounded-2xl bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-4 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-brand-primary">
                      {story.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4">
                      <h2 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                        {story.title}
                      </h2>
                      <p className="mb-6 text-gray-600">{story.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <time dateTime={story.date}>
                          {new Date(story.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span>•</span>
                        <span>{story.readTime}</span>
                      </div>
                      <Link
                        href={`/stories/${story.slug}`}
                        className="font-semibold text-brand-primary hover:text-brand-primary-dark"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-brand-secondary py-20 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="mb-4 text-3xl font-bold">Have Your Own Success Story?</h2>
              <p className="mb-8 text-gray-100">
                Share your experience with us and inspire others to join our mission.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-brand-secondary hover:bg-gray-100"
                href="/contact"
              >
                Share Your Story
              </Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="mb-2 text-3xl font-bold">100+</div>
                    <p className="text-gray-100">Stories Shared</p>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-3xl font-bold">50K+</div>
                    <p className="text-gray-100">Views</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

