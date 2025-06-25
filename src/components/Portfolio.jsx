import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ImageWithFallback from './ImageWithFallback';
import CaseStudyModal from './modals/CaseStudyModal';

const { FiTrendingUp, FiUsers, FiDollarSign, FiArrowUpRight } = FiIcons;

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const cases = [
    {
      title: 'E-commerce Giant',
      category: 'Retail Technology',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      results: [
        { metric: 'Revenue Growth', value: '+340%', icon: FiDollarSign },
        { metric: 'Conversion Rate', value: '+125%', icon: FiTrendingUp },
        { metric: 'Customer Acquisition', value: '+280%', icon: FiUsers }
      ],
      description: 'Complete AI transformation of customer journey and personalization engine.'
    },
    {
      title: 'FinTech Startup',
      category: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      results: [
        { metric: 'User Acquisition', value: '+450%', icon: FiUsers },
        { metric: 'App Downloads', value: '+320%', icon: FiTrendingUp },
        { metric: 'Revenue Per User', value: '+190%', icon: FiDollarSign }
      ],
      description: 'AI-powered customer acquisition and retention strategy launch.'
    },
    {
      title: 'Healthcare Platform',
      category: 'Healthcare Technology',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      fallbackImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
      results: [
        { metric: 'Patient Engagement', value: '+275%', icon: FiUsers },
        { metric: 'Platform Usage', value: '+380%', icon: FiTrendingUp },
        { metric: 'Cost Reduction', value: '-45%', icon: FiDollarSign }
      ],
      description: 'Predictive analytics implementation for patient care optimization.'
    },
    {
      title: 'SaaS Enterprise',
      category: 'Software Solutions',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      results: [
        { metric: 'Lead Generation', value: '+520%', icon: FiTrendingUp },
        { metric: 'Sales Velocity', value: '+240%', icon: FiDollarSign },
        { metric: 'Customer Retention', value: '+165%', icon: FiUsers }
      ],
      description: 'Full-funnel AI marketing automation and lead scoring system.'
    }
  ];

  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Proven{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real outcomes from our AI marketing strategies. These case studies showcase the transformative power of our 360° approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={caseStudy.image}
                    fallbackSrc={caseStudy.fallbackImage}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">{caseStudy.title}</h3>
                    <p className="text-gray-600">{caseStudy.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="text-center space-y-2">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg w-fit mx-auto">
                          <SafeIcon icon={result.icon} className="text-white text-lg" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow"
                  >
                    <span>View Case Study</span>
                    <SafeIcon icon={FiArrowUpRight} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        caseStudy={selectedCase}
      />
    </>
  );
};

export default Portfolio;