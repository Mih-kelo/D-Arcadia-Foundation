'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { useState } from 'react';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    message: '',
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleChange = function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function(e: React.FormEvent) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-brand-primary via-brand-primary-dark to-brand-secondary py-28 text-white"
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
            className="mb-6 text-5xl font-bold md:text-6xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Be the Change
          </motion.h1>
          <motion.p
            className="max-w-2xl text-xl text-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our community of volunteers creating real impact in communities worldwide.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="mb-8 text-4xl font-bold text-brand-primary">Why Volunteer?</h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Make Real Impact</h3>
                <p className="text-lg text-gray-600">
                  Your skills and time directly contribute to improving lives and strengthening communities. Whether you mentor students, support healthcare initiatives, or help entrepreneurs, your work makes a tangible difference.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Grow With Us</h3>
                <p className="text-lg text-gray-600">
                  Develop new skills, expand your network, and gain valuable experience working with passionate changemakers. We provide mentorship and support every step of the way.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Flexible & Rewarding</h3>
                <p className="text-lg text-gray-600">
                  Choose opportunities that fit your schedule and skills. Whether you can contribute a few hours weekly or more, we have roles that work for you. Receive recognition and certificates for your service.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-brand-primary/5 p-6 text-center">
                <div className="text-3xl font-bold text-brand-primary">1,000+</div>
                <p className="mt-2 text-gray-600">Active Volunteers</p>
              </div>
              <div className="rounded-lg bg-brand-primary/5 p-6 text-center">
                <div className="text-3xl font-bold text-brand-primary">50K+</div>
                <p className="mt-2 text-gray-600">Hours Served</p>
              </div>
              <div className="rounded-lg bg-brand-primary/5 p-6 text-center">
                <div className="text-3xl font-bold text-brand-primary">100+</div>
                <p className="mt-2 text-gray-600">Communities</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="rounded-3xl bg-gray-50 p-10 shadow-lg">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Get Started</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Skills */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Skills & Interests
                  </label>
                  <select
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                    required
                  >
                    <option value="">Select an area</option>
                    <option value="education">Education & Mentoring</option>
                    <option value="healthcare">Healthcare Support</option>
                    <option value="business">Business Advisory</option>
                    <option value="community">Community Organization</option>
                    <option value="technology">Digital Skills</option>
                    <option value="content">Content Creation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Weekly Availability
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                    required
                  >
                    <option value="">Select hours</option>
                    <option value="1-3">1-3 hours per week</option>
                    <option value="3-6">3-6 hours per week</option>
                    <option value="6-10">6-10 hours per week</option>
                    <option value="10+">10+ hours per week</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-900">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                    placeholder="Share your motivation and experience..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full rounded-lg bg-brand-secondary px-6 py-3 font-semibold text-white transition hover:bg-brand-secondary-dark"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Application
                </motion.button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">
                We&apos;ll get back to you within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Footer */}
      <motion.section
        className="bg-brand-primary py-16 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Have Questions?</h2>
          <p className="mb-6 text-lg text-gray-100">
            Reach out to our volunteer coordinator at <span className="font-semibold">volunteers@darcadia.org</span>
          </p>
          <Button
            variant="secondary"
            size="lg"
            href="/contact"
          >
            Contact Us
          </Button>
        </div>
      </motion.section>
    </main>
  );
}

