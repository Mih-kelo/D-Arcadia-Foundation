'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import HeroSection from '@/components/HeroSection';
import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    { value: '50,000+', label: 'Lives Impacted' },
    { value: '250+', label: 'Communities Served' },
    { value: '$5M+', label: 'Funds Distributed' }
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
    <main className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <HeroSection />

      {/* Impact Stats Section */}
      <motion.section 
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map(function(stat) {
              return (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-3 text-5xl font-bold text-brand-primary">
                    {stat.value}
                  </div>
                  <p className="text-lg text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="bg-brand-neutral-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <motion.h2 
              className="mb-4 text-4xl font-bold text-brand-primary"
              variants={itemVariants}
            >
              Our Mission
            </motion.h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div 
              className="rounded-lg bg-white p-8 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
            >
              <h3 className="mb-3 text-2xl font-bold text-brand-primary">Our Vision</h3>
              <p className="text-gray-700">A world where every individual has access to quality education, healthcare, and economic opportunities regardless of their socioeconomic background.</p>
            </motion.div>

            <motion.div 
              className="rounded-lg bg-white p-8 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
            >
              <h3 className="mb-3 text-2xl font-bold text-brand-secondary">Our Values</h3>
              <div className="space-y-2 text-gray-700">
                <p>🤝 Community-Driven: We listen and partner with local communities</p>
                <p>✨ Transparent: We operate with full accountability</p>
                <p>🌱 Sustainable: Long-term impact is our priority</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section 
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <motion.h2 
              className="mb-4 text-4xl font-bold text-brand-primary"
              variants={itemVariants}
            >
              Our Programs
            </motion.h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div 
              className="rounded-lg bg-white shadow-md overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}
            >
              <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600" />
              <div className="p-8">
                <div className="mb-4 text-4xl">📚</div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Education</h3>
                <p className="mb-6 text-gray-600">Providing quality education and scholarships to underserved communities.</p>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-lg bg-white shadow-md overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}
            >
              <div className="h-32 bg-gradient-to-br from-red-500 to-red-600" />
              <div className="p-8">
                <div className="mb-4 text-4xl">💊</div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Healthcare</h3>
                <p className="mb-6 text-gray-600">Ensuring essential healthcare services reach those in need.</p>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-lg bg-white shadow-md overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}
            >
              <div className="h-32 bg-gradient-to-br from-green-500 to-green-600" />
              <div className="p-8">
                <div className="mb-4 text-4xl">💼</div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Economic Empowerment</h3>
                <p className="mb-6 text-gray-600">Creating economic opportunities and sustainable development.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="bg-gradient-to-br from-brand-primary to-brand-primary-dark py-20 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <motion.h2 
              className="mb-4 text-4xl font-bold"
              variants={itemVariants}
            >
              What People Say
            </motion.h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div 
              className="rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-md"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="mb-6 text-lg italic">The D Arcadia Foundation changed my life. Their education program gave me the opportunity I never thought I would have.</p>
              <div>
                <p className="font-bold">Maria Santos</p>
                <p className="text-brand-accent">Program Graduate</p>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-md"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="mb-6 text-lg italic">Working with this foundation has been transformative. They genuinely care about the communities they serve.</p>
              <div>
                <p className="font-bold">Dr. James Chen</p>
                <p className="text-brand-accent">Healthcare Partner</p>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-md"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <p className="mb-6 text-lg italic">I now run a successful business thanks to their economic empowerment program. Truly grateful.</p>
              <div>
                <p className="font-bold">Kofi Mensah</p>
                <p className="text-brand-accent">Entrepreneur</p>
              </div>
            </motion.div>
          </div>
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
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2 
            className="mb-6 text-4xl font-bold"
            variants={itemVariants}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            className="mb-8 text-xl"
            variants={itemVariants}
          >
            Join thousands of supporters making real impact in communities around the world.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-brand-secondary hover:bg-gray-100"
                href="/donate"
              >
                Donate Now
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" size="lg" href="/volunteer">
                Get Involved
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

