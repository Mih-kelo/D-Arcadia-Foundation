'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/stories', label: 'Stories' },
    { href: '/volunteer', label: 'Volunteer' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-12 text-lg md:flex">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`relative font-semibold transition-colors ${
                    isScrolled ? 'text-gray-800 hover:text-brand-primary' : 'text-white hover:text-brand-primary'
                  }`}
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-primary transition-all"
                    initial={false}
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/donate"
                className={`px-6 py-2 text-sm font-semibold transition-colors ${
                  isScrolled
                    ? 'text-white hover:text-brand-secondary'
                    : 'text-brand-secondary hover:text-brand-secondary-dark'
                }`}
              >
                Donate
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/volunteer"
                className={`rounded-lg px-6 py-2 text-sm font-semibold shadow-md transition-colors ${
                  isScrolled
                    ? 'bg-brand-primary text-white hover:bg-brand-primary-dark'
                    : 'bg-white text-brand-primary hover:bg-brand-secondary'
                }`}
              >
                Volunteer
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-white/90 backdrop-blur-md"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="py-2 text-lg font-semibold text-gray-800 hover:text-brand-primary transition"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="mt-4 w-full rounded-lg bg-brand-primary px-6 py-3 text-center text-white shadow-md"
              >
                Donate
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/volunteer"
                className="w-full rounded-lg bg-brand-secondary px-6 py-3 text-center text-white shadow-md"
              >
                Volunteer
              </Link>
            </motion.div>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}

