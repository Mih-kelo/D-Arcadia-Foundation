'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    '/images/heroSlides/slide1.png',  // Replace with your own images
    '/images/heroSlides/slide2.png',
    '/images/heroSlides/slide3.png',
  ];

  useEffect(function() {
    const interval = setInterval(function() {
      setCurrentSlide(function(prev) {
        return (prev + 1) % backgroundImages.length;
      });
    }, 6000);  // Increased for better viewing
    return function() {
      clearInterval(interval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow */}
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6"
        style={{
          transform: 'translateY(-20vh)', // Adjust this value based on your Header height
        }}
      >
        {/* Main Text */}
        <h1 className="mb-6 text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Empowering Communities,
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
            Changing Lives
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto">
          Join the D Arcadia Foundation in our mission to create sustainable change through education, healthcare, and economic empowerment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" href="/volunteer">
            Volunteer Now
          </Button>
          <Button 
            variant="primary" 
            size="lg" 
            href="/donate"
            className="bg-white text-brand-primary hover:bg-gray-100"
          >
            Make a Donation
          </Button>
        </div>
      </div>

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
  );
}

