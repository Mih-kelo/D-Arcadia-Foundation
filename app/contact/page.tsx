'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      detail: 'contact@darcadia.org',
      description: 'We respond within 24 hours',
    },
    {
      icon: '📱',
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      description: 'Monday to Friday, 9AM-5PM',
    },
    {
      icon: '📍',
      title: 'Office',
      detail: 'Nairobi, Kenya',
      description: 'Visit us or send mail here',
    },
    {
      icon: '🕐',
      title: 'Availability',
      detail: '24/7 Online',
      description: 'Always here to help',
    },
  ];

  const faqs = [
    {
      q: 'How can I donate?',
      a: 'Visit our Donate page to make a one-time or monthly contribution. All donations are tax-deductible.',
    },
    {
      q: 'How do I volunteer?',
      a: 'Go to our Volunteer page to fill out an application. We review applications within 48 hours.',
    },
    {
      q: 'Can I get a donation receipt?',
      a: 'Yes! We automatically email receipts to all donors. Check your email or contact us for a copy.',
    },
    {
      q: 'Where do my donations go?',
      a: 'We provide detailed impact reports to all donors showing exactly how funds are used.',
    },
    {
      q: 'Can I sponsor a project?',
      a: 'Absolutely! Contact us about sponsoring specific programs in education, healthcare, or business.',
    },
    {
      q: 'How is D Arcadia funded?',
      a: 'We are a 501(c)(3) nonprofit funded by individual donors, corporate sponsors, and grants.',
    },
  ];

  const handleInputChange = function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = function(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-brand-primary via-brand-primary-dark to-brand-secondary py-24 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">Get In Touch</h1>
            <p className="max-w-2xl text-xl text-gray-100">
              Have questions? Want to partner with us? Ready to make an impact? We would love to hear from you!
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map(function(info, index) {
              return (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-xl transition"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 text-5xl">{info.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{info.title}</h3>
                  <p className="mb-2 text-lg font-semibold text-brand-primary">{info.detail}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Map */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <motion.div variants={itemVariants}>
              <h2 className="mb-8 text-4xl font-bold text-gray-900">Send Us a Message</h2>

              {submitted ? (
                <div className="rounded-2xl bg-green-50 p-8 text-center border-2 border-green-200">
                  <div className="mb-4 text-6xl">✅</div>
                  <h3 className="mb-2 text-2xl font-bold text-green-700">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. We will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">Inquiry Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="donation">Donation Question</option>
                      <option value="volunteer">Volunteer Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-brand-secondary to-brand-secondary-dark px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Info & Social */}
            <motion.div
              className="space-y-12"
              variants={itemVariants}
            >
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold">Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM (EAT)</p>
                  <p className="mt-4 font-semibold">Saturday & Sunday</p>
                  <p>Closed</p>
                  <p className="mt-4 font-semibold">Email Support</p>
                  <p>Available 24/7</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Follow Us</h3>
                <div className="flex gap-4">
                  {['F', 'T', 'I', 'L'].map(function(social, idx) {
                    return (
                      <motion.a
                        key={idx}
                        href="#"
                        className="h-12 w-12 rounded-full bg-brand-primary flex items-center justify-center text-white hover:bg-brand-primary-dark transition font-bold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {social}
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 p-8">
                <h3 className="mb-3 text-xl font-bold text-gray-900">Emergency Contact</h3>
                <p className="mb-3 text-gray-600">For urgent matters, please call:</p>
                <p className="text-2xl font-bold text-brand-primary">+1 (555) 123-4567</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            className="mb-16 text-center"
            variants={itemVariants}
          >
            <h2 className="mb-4 text-4xl font-bold text-brand-primary">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Cannot find the answer? Contact us directly!</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map(function(faq, index) {
              return (
                <motion.div
                  key={index}
                  className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition"
                  variants={itemVariants}
                >
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-brand-primary to-brand-secondary py-24 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            className="mb-6 text-5xl font-bold"
            variants={itemVariants}
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            className="mb-10 text-xl text-gray-100"
            variants={itemVariants}
          >
            Our team is here to help. Do not hesitate to reach out!
          </motion.p>
          <motion.a
            href="mailto:contact@darcadia.org"
            className="inline-block rounded-full bg-white px-12 py-4 text-lg font-bold text-brand-primary hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Us Now
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}

