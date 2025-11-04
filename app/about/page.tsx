'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    '/images/aboutBg/slide1.jpg',
    '/images/aboutBg/slide2.jpg',
    '/images/aboutBg/slide3.jpg',
  ];

  useEffect(function() {
    const interval = setInterval(function() {
      setCurrentSlide(function(prev) {
        return (prev + 1) % backgroundImages.length;
      });
    }, 6000);
    return function() {
      clearInterval(interval);
    };
  }, []);

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

  const team = [
    {
      name: 'Victor Kariuki Njiru',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in nonprofit leadership, Victor founded D Arcadia Foundation with a vision to make impact accessible to all communities.',
      image: '/images/team/who.jpg',
    },
    {
      name: 'Linet Wairimu',
      role: 'Executive Director',
      bio: 'Linet brings 12 years of experience in nonprofit management and community development, leading our program initiatives.',
      image: '/images/team/mike.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Programs Director',
      bio: 'Sarah oversees our core programs with a focus on sustainable development and community empowerment.',
      image: '/images/team/dee.jpg',
    },
  ];

  const values = [
    {
      icon: '🤝',
      title: 'Community-Driven',
      description: 'We listen and partner with local communities to understand their unique needs.',
    },
    {
      icon: '✨',
      title: 'Transparent',
      description: 'We operate with full accountability and openly share our impact.',
    },
    {
      icon: '🌱',
      title: 'Sustainable',
      description: 'Long-term impact is our priority for lasting change.',
    },
    {
      icon: '💡',
      title: 'Innovative',
      description: 'We embrace creative approaches to development challenges.',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Lives Impacted' },
    { value: '15+', label: 'Communities Served' },
    { value: '5+', label: 'Years of Service' },
    { value: '50+', label: 'Programs Implemented' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION - CENTERED IN MIDDLE */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Slideshow */}
        {backgroundImages.map(function(bg, index) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
            />
          );
        })}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />

        {/* Content - CENTERED */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl md:text-7xl font-extrabold text-white leading-tight">
            About D Arcadia
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
              Foundation
            </span>
          </h1>
          <p className="mb-8 text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto">
            Creating lasting positive change in communities worldwide
          </p>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {backgroundImages.map(function(_, index) {
            return (
              <button
                key={index}
                onClick={function() {
                  setCurrentSlide(index);
                }}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50 w-3'
                }`}
              />
            );
          })}
        </div>
      </section>

      {/* Mission & Vision - Perfectly Spaced */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-20 text-center"
            variants={itemVariants}
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-brand-primary">
              Our Foundation
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-4" />
          </motion.div>

          <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
            {/* Mission */}
            <motion.div
              className="flex flex-col justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-12 shadow-2xl backdrop-blur-md">
                <div className="mb-6 text-6xl">🎯</div>
                <h3 className="mb-4 text-3xl font-bold text-brand-primary">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create sustainable positive change in communities through strategic interventions in education, healthcare, and economic development. We empower communities to build their own futures.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="flex flex-col justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 p-12 shadow-2xl backdrop-blur-md">
                <div className="mb-6 text-6xl">🌍</div>
                <h3 className="mb-4 text-3xl font-bold text-brand-secondary">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where every individual has access to quality education, healthcare, and economic opportunities regardless of socioeconomic background. Thriving, self-reliant communities everywhere.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-20 text-center"
            variants={itemVariants}
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-brand-primary">
              Our Core Values
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-4" />
            <p className="text-lg text-gray-600">The principles guiding everything we do</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map(function(value, index) {
              return (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-lg border-2 border-transparent hover:border-brand-primary"
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
                >
                  <div className="mb-4 text-5xl">{value.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Impact Statistics */}
      <motion.section
        className="py-24 bg-gradient-to-r from-brand-primary via-brand-primary-dark to-brand-secondary text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-16 text-center"
            variants={itemVariants}
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-bold">Our Impact</h2>
            <div className="h-1 w-20 bg-white mx-auto" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(function(stat, index) {
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-3 text-5xl font-bold text-yellow-300">{stat.value}</div>
                  <p className="text-lg text-gray-100">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team - RESPONSIVE IMAGES */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-20 text-center"
            variants={itemVariants}
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-brand-primary">
              Leadership Team
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-4" />
            <p className="text-lg text-gray-600">Passionate professionals creating real impact</p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3">
            {team.map(function(member, index) {
              return (
                <motion.div
                  key={member.name}
                  className="rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  {/* Team Member Image - RESPONSIVE */}
                  <div className="relative w-full h-80 bg-gradient-to-br from-brand-primary to-brand-secondary overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top responsive-image"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23667eea%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22white%22%3E👤%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-8">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="mb-4 text-lg font-semibold text-brand-secondary">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-brand-secondary to-brand-secondary-dark py-24 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            className="mb-6 text-4xl md:text-5xl font-bold"
            variants={itemVariants}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p
            className="mb-10 text-xl text-gray-100"
            variants={itemVariants}
          >
            Join us in creating lasting positive change in communities worldwide.
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

