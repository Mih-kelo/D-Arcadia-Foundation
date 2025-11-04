'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(function() {
    const handleScroll = function() {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return function() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Stories', href: '/stories' },
    { label: 'Volunteer', href: '/volunteer' },
  ];

  const isActive = function(href: string) {
    return pathname === href;
  };

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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-md' 
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Logo className={isScrolled ? "text-brand-primary" : "text-white"} />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(function(item, index) {
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm font-semibold transition-colors duration-300 ${
                      isScrolled
                        ? isActive(item.href)
                          ? 'text-brand-primary'
                          : 'text-gray-700 hover:text-brand-primary'
                        : isActive(item.href)
                        ? 'text-white'
                        : 'text-gray-100 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-brand-primary' : 'bg-white'
                        }`}
                        layoutId="underline"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Donate Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="px-6 py-2 bg-brand-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Donate
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            onClick={function() {
              setIsOpen(!isOpen);
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-brand-primary' : 'bg-white'
              }`}
              animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
            />
            <motion.div
              className={`h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-brand-primary' : 'bg-white'
              }`}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div
              className={`h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-brand-primary' : 'bg-white'
              }`}
              animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="md:hidden mt-6 space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map(function(item) {
                return (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'bg-brand-primary text-white'
                          : isScrolled
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-white hover:bg-white/10'
                      }`}
                      onClick={function() {
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={itemVariants}
              >
                <Link
                  href="/donate"
                  className="block w-full px-4 py-2 bg-brand-secondary text-white font-semibold rounded-lg text-center"
                  onClick={function() {
                    setIsOpen(false);
                  }}
                >
                  Donate
                </Link>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

