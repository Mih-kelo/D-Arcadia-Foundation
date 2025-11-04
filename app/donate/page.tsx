'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [activeImpact, setActiveImpact] = useState(100);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const impactMap: { [key: number]: { title: string; description: string; icon: string; color: string } } = {
    25: {
      title: '25 School Meals',
      description: 'Nutrition for students in remote communities',
      icon: '🍱',
      color: 'from-orange-400 to-orange-600',
    },
    50: {
      title: 'Healthcare Checkups',
      description: 'Basic medical care for 10 community members',
      icon: '🏥',
      color: 'from-red-400 to-red-600',
    },
    100: {
      title: 'Vocational Training',
      description: 'Skills training for 5 entrepreneurs',
      icon: '🛠️',
      color: 'from-blue-400 to-blue-600',
    },
    250: {
      title: 'Monthly Health Program',
      description: 'Complete healthcare for 50 people for one month',
      icon: '💊',
      color: 'from-green-400 to-green-600',
    },
    500: {
      title: 'Full Scholarship',
      description: 'Annual education for 2 students',
      icon: '🎓',
      color: 'from-purple-400 to-purple-600',
    },
    1000: {
      title: 'Community Center',
      description: 'Monthly operations of community hub serving 200+ people',
      icon: '🏛️',
      color: 'from-indigo-400 to-indigo-600',
    },
  };

  const customAmountInt = customAmount ? parseInt(customAmount) : activeImpact;
  const currentImpact = impactMap[customAmountInt] || {
    title: `Custom Impact`,
    description: `Your donation of $${customAmountInt} will create direct impact in our communities`,
    icon: '💝',
    color: 'from-pink-400 to-pink-600',
  };

  const handleInputChange = function(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCustomAmountChange = function(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && impactMap[parseInt(value)]) {
      setActiveImpact(parseInt(value));
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Premium */}
      <motion.section
        className="relative min-h-screen bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-secondary overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 h-72 w-72 rounded-full bg-white opacity-5 blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <motion.div
            className="max-w-4xl text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-block rounded-full bg-white/10 px-6 py-2 backdrop-blur-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-semibold text-white">Every Dollar Makes a Difference</span>
            </motion.div>

            <h1 className="mb-6 text-6xl md:text-7xl font-bold text-white leading-tight">
              Change Lives
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
                Starting Today
              </span>
            </h1>

            <p className="mb-12 max-w-2xl mx-auto text-xl md:text-2xl text-gray-100">
              Your donation fuels direct action in communities. No overhead, just real impact. See exactly where your money goes.
            </p>

            <motion.a
              href="#donate-form"
              className="inline-block rounded-full bg-white text-brand-primary px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      {/* Impact Visualization */}
      <motion.section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Your Impact in Real-Time</h2>
          </motion.div>

          {/* Impact Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {predefinedAmounts.map(function(amount) {
              const impact = impactMap[amount];
              return (
                <motion.button
                  key={amount}
                  onClick={function() {
                    setActiveImpact(amount);
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`relative rounded-2xl p-8 text-white transition transform hover:scale-105 cursor-pointer ${
                    activeImpact === amount ? 'ring-4 ring-white shadow-2xl' : 'shadow-lg'
                  } bg-gradient-to-br ${impact.color}`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="mb-4 text-6xl">{impact.icon}</div>
                  <div className="text-4xl font-bold mb-2">${amount}</div>
                  <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                  <p className="text-sm text-white/90">{impact.description}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Main Donation Section */}
      <section className="py-20 bg-white" id="donate-form">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left - Live Impact Preview */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
                style={{
                  background: 
                    currentImpact.color === 'from-orange-400 to-orange-600'
                      ? 'linear-gradient(135deg, #fb923c 0%, #d97706 100%)'
                      : currentImpact.color === 'from-red-400 to-red-600'
                      ? 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)'
                      : currentImpact.color === 'from-blue-400 to-blue-600'
                      ? 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)'
                      : currentImpact.color === 'from-green-400 to-green-600'
                      ? 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)'
                      : currentImpact.color === 'from-purple-400 to-purple-600'
                      ? 'linear-gradient(135deg, #c084fc 0%, #9333ea 100%)'
                      : currentImpact.color === 'from-indigo-400 to-indigo-600'
                      ? 'linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)'
                      : 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-semibold text-white/80 mb-3">YOUR DONATION IMPACT</p>
                  <div className="mb-8">
                    <div className="text-7xl font-bold mb-3">${customAmount || selectedAmount}</div>
                    <div className="text-2xl font-bold">{currentImpact.title}</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-lg text-white/90">{currentImpact.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <p className="text-sm text-white/80">Tax Deductible</p>
                    </div>
                    <div className="text-center border-l border-r border-white/20">
                      <div className="text-2xl font-bold">0%</div>
                      <p className="text-sm text-white/80">Admin Costs</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <p className="text-sm text-white/80">Impact</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Donation Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-4xl font-bold text-gray-900">Make Your Donation</h2>

              <form className="space-y-8">
                {/* Donation Type Toggle */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">Choose Donation Type</label>
                  <div className="flex gap-4">
                    {['one-time', 'monthly'].map(function(type) {
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={function() {
                            setDonationType(type);
                          }}
                          className={`flex-1 py-3 px-6 rounded-lg font-bold transition ${
                            donationType === type
                              ? 'bg-brand-primary text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type === 'one-time' ? '🎯 One-Time' : '📅 Monthly'}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Amount Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">Select or Customize Amount</label>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {predefinedAmounts.slice(0, 6).map(function(amount) {
                      return (
                        <button
                          key={amount}
                          type="button"
                          onClick={function() {
                            setSelectedAmount(amount);
                            setActiveImpact(amount);
                            setCustomAmount('');
                          }}
                          className={`py-2 px-3 rounded-lg font-bold transition ${
                            selectedAmount === amount && customAmount === ''
                              ? 'bg-brand-primary text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          ${amount}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Or enter custom amount"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                  />
                </div>

                {/* Donor Info */}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-brand-primary focus:outline-none"
                  />
                </div>

                {/* Donate Button */}
                <motion.button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-brand-secondary to-brand-secondary-dark text-white py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  💳 Donate ${customAmount || selectedAmount} {donationType === 'monthly' ? '/Month' : 'Now'}
                </motion.button>

                <p className="text-center text-xs text-gray-600">
                  🔒 Secure encrypted payment | 501(c)(3) nonprofit | Tax-deductible
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <motion.section
        className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-primary">1,000+</div>
              <p className="text-gray-600">Active Donors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">$50M+</div>
              <p className="text-gray-600">Distributed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">100K+</div>
              <p className="text-gray-600">Lives Touched</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary">50+</div>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold text-brand-primary">From Our Donors</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: 'I see exact reports of my impact monthly. This is the most transparent charity I\'ve supported.',
                author: 'Michael R.',
              },
              {
                quote: 'Amazing work! My $100/month is changing 5 lives. Worth every penny.',
                author: 'Sarah L.',
              },
              {
                quote: '10 years of giving here. They deliver real results, period.',
                author: 'James T.',
              },
            ].map(function(testimonial, i) {
              return (
                <motion.div
                  key={i}
                  className="rounded-xl bg-gray-50 p-6 border-l-4 border-brand-primary"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="mb-4 text-gray-700 italic">"{testimonial.quote}"</p>
                  <p className="font-bold text-gray-900">⭐⭐⭐⭐⭐ {testimonial.author}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        className="bg-gradient-to-r from-brand-primary to-brand-secondary py-24 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-5xl font-bold">Ready to Change Lives?</h2>
          <p className="mb-10 text-xl text-gray-100">Join 1,000+ donors making real impact today.</p>
          <motion.a
            href="#donate-form"
            className="inline-block rounded-full bg-white text-brand-primary px-12 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}

