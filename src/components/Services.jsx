import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ServiceInfoModal from './modals/ServiceInfoModal';
import ROICalculator from './ROICalculator';

const { FiBrain, FiTarget, FiTrendingUp, FiSearch, FiMessageSquare, FiBarChart3, FiSmartphone, FiGlobe, FiCalculator } = FiIcons;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showROICalculator, setShowROICalculator] = useState(false);

  const services = [
    {
      id: 'ai-strategy',
      icon: FiBrain,
      title: 'AI Strategy & Consulting',
      description: 'Custom AI marketing strategies tailored to your business goals and market position.',
      features: ['AI Audit & Assessment', 'Strategy Development', 'Implementation Roadmap'],
      stats: '240% avg ROI increase'
    },
    {
      id: 'programmatic-ads',
      icon: FiTarget,
      title: 'Programmatic Advertising',
      description: 'AI-powered ad buying and optimization across all digital channels for maximum ROI.',
      features: ['Real-time Bidding', 'Audience Targeting', 'Performance Optimization'],
      stats: '4.8x average ROAS'
    },
    {
      id: 'seo-content',
      icon: FiSearch,
      title: 'SEO & Content Intelligence',
      description: 'AI-driven SEO strategies and content optimization for superior search rankings.',
      features: ['Keyword Intelligence', 'Content Optimization', 'Technical SEO'],
      stats: '300% traffic increase'
    },
    {
      id: 'social-media-ai',
      icon: FiMessageSquare,
      title: 'Social Media AI',
      description: 'Automated social media management with AI-powered content creation and scheduling.',
      features: ['Content Generation', 'Optimal Timing', 'Engagement Analytics'],
      stats: '50+ posts per week'
    },
    {
      id: 'predictive-analytics',
      icon: FiBarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced data analytics and predictive modeling for informed marketing decisions.',
      features: ['Customer Insights', 'Trend Forecasting', 'ROI Prediction'],
      stats: '90% prediction accuracy'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Marketing AI',
      description: 'AI-optimized mobile marketing campaigns for enhanced user engagement.',
      features: ['App Marketing', 'Mobile Optimization', 'Push Notifications']
    },
    {
      icon: FiGlobe,
      title: 'Digital Transformation',
      description: 'Complete digital ecosystem overhaul with AI integration across all touchpoints.',
      features: ['Process Automation', 'System Integration', 'Performance Monitoring']
    },
    {
      icon: FiTrendingUp,
      title: 'Growth Hacking',
      description: 'Rapid growth strategies using AI to identify and capitalize on growth opportunities.',
      features: ['Growth Experiments', 'Conversion Optimization', 'Scalability Planning']
    }
  ];

  const handleLearnMore = (serviceId) => {
    if (serviceId) {
      setSelectedService(serviceId);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <div className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Full-Service{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                360° AI Marketing
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered marketing solutions designed to accelerate your business growth and maximize your digital presence across all channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <SafeIcon icon={service.icon} className="text-white text-2xl" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                    {service.stats && (
                      <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium w-fit">
                        {service.stats}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLearnMore(service.id)}
                    className={`w-full mt-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      service.id 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg' 
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 cursor-not-allowed'
                    }`}
                    disabled={!service.id}
                  >
                    {service.id ? 'Learn More' : 'Coming Soon'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16 space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowROICalculator(true)}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalculator} />
                <span>Calculate Your ROI</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-shadow"
              >
                Get Custom Strategy
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Info Modal */}
      <ServiceInfoModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        serviceType={selectedService}
      />

      {/* ROI Calculator Modal */}
      <ROICalculator 
        isOpen={showROICalculator} 
        onClose={() => setShowROICalculator(false)} 
      />
    </>
  );
};

export default Services;