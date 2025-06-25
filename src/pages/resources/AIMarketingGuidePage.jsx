import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBrain, FiDownload, FiCheckCircle, FiTrendingUp, FiTarget, FiBarChart3 } = FiIcons;

const AIMarketingGuidePage = () => {
  const chapters = [
    {
      number: '01',
      title: 'Introduction to AI Marketing',
      topics: ['What is AI Marketing?', 'Benefits and ROI', 'Common Misconceptions', 'Getting Started'],
      duration: '15 min read'
    },
    {
      number: '02',
      title: 'AI Strategy Development',
      topics: ['Assessment Framework', 'Goal Setting', 'Technology Stack', 'Implementation Planning'],
      duration: '25 min read'
    },
    {
      number: '03',
      title: 'Programmatic Advertising',
      topics: ['AI-Powered Bidding', 'Audience Targeting', 'Creative Optimization', 'Performance Tracking'],
      duration: '20 min read'
    },
    {
      number: '04',
      title: 'Predictive Analytics',
      topics: ['Customer Behavior Prediction', 'Churn Prevention', 'LTV Modeling', 'Forecasting'],
      duration: '30 min read'
    },
    {
      number: '05',
      title: 'Marketing Automation',
      topics: ['Workflow Design', 'Personalization', 'Lead Scoring', 'Campaign Optimization'],
      duration: '22 min read'
    },
    {
      number: '06',
      title: 'Measuring Success',
      topics: ['KPI Framework', 'Attribution Models', 'ROI Calculation', 'Continuous Optimization'],
      duration: '18 min read'
    }
  ];

  const benefits = [
    {
      icon: FiTrendingUp,
      title: 'Increase Revenue',
      description: 'Learn strategies that have generated $1B+ in client revenue',
      stat: '240% avg increase'
    },
    {
      icon: FiTarget,
      title: 'Improve Targeting',
      description: 'Master AI-powered audience segmentation and personalization',
      stat: '3x better accuracy'
    },
    {
      icon: FiBarChart3,
      title: 'Optimize Performance',
      description: 'Implement data-driven optimization across all channels',
      stat: '60% efficiency gain'
    }
  ];

  const testimonials = [
    {
      quote: "This guide transformed our approach to marketing. We implemented the strategies and saw immediate results.",
      author: "Sarah Mitchell",
      position: "CMO, TechCorp",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "Finally, a comprehensive resource that explains AI marketing in practical terms. Highly recommended.",
      author: "David Chen",
      position: "Marketing Director",
      company: "Growing SaaS Startup"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <SafeIcon icon={FiBrain} className="text-white text-2xl" />
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Free Download
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Complete{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Marketing Guide
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                The definitive 120-page guide to AI marketing transformation. Learn the strategies that have generated over $1 billion in client revenue.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">120</div>
                  <div className="text-gray-600 text-sm">Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600 text-sm">Case Studies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">25+</div>
                  <div className="text-gray-600 text-sm">Templates</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 hover:shadow-xl transition-shadow"
              >
                <SafeIcon icon={FiDownload} />
                <span>Download Free Guide</span>
              </motion.button>
              
              <p className="text-sm text-gray-500">
                No email required • Instant download • 4.8/5 rating from 10,000+ marketers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=600&fit=crop"
                  alt="AI Marketing Guide Preview"
                  className="w-full rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold">
                  FREE
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Inside</h2>
            <p className="text-xl text-gray-600">
              6 comprehensive chapters covering everything from strategy to implementation
            </p>
          </motion.div>

          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg font-bold text-xl min-w-[80px] text-center">
                    {chapter.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{chapter.title}</h3>
                      <span className="text-sm text-gray-500">{chapter.duration}</span>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {chapter.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <SafeIcon icon={FiCheckCircle} className="text-green-600 text-sm" />
                          <span className="text-gray-600 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This Guide Works</h2>
            <p className="text-xl text-gray-600">
              Based on 19 years of experience and $1B+ in client results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg w-fit mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="text-white text-3xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Marketers Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by 10,000+ marketing professionals worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-gray-50 rounded-2xl"
              >
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Start Your AI Marketing Journey Today</h2>
            <p className="text-xl text-blue-100">
              Download the complete guide and transform your marketing with AI. Completely free, no strings attached.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow flex items-center space-x-2 mx-auto"
            >
              <SafeIcon icon={FiDownload} />
              <span>Download Complete Guide</span>
            </motion.button>
            <div className="flex items-center justify-center space-x-6 text-blue-100 text-sm">
              <span>✓ Instant Download</span>
              <span>✓ No Email Required</span>
              <span>✓ 120 Pages</span>
              <span>✓ $0 Cost</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIMarketingGuidePage;