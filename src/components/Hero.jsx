import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ImageWithFallback from './ImageWithFallback';
import ROICalculator from './ROICalculator';

const { FiArrowRight, FiPlay, FiTrendingUp, FiZap, FiTarget, FiCalculator } = FiIcons;

const Hero = ({ onGetStartedClick }) => {
  const [showROICalculator, setShowROICalculator] = useState(false);

  const handleGetStartedClick = () => {
    if (onGetStartedClick) {
      onGetStartedClick();
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
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <SafeIcon icon={FiZap} className="text-sm" />
                  <span>AI-Powered Marketing Since 2005</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Transform Your Business with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI Marketing
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  Full-service 360° AI & Digital Marketing solutions from New York's premier agency. Nearly two decades of innovation, driving results that matter.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStartedClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-shadow"
                >
                  <span>Start Your Journey</span>
                  <SafeIcon icon={FiArrowRight} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowROICalculator(true)}
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center space-x-2 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                >
                  <SafeIcon icon={FiCalculator} />
                  <span>ROI Calculator</span>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">19</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                  alt="AI Marketing Dashboard"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  fallbackSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                />
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg">
                      <SafeIcon icon={FiTrendingUp} className="text-green-600 dark:text-green-400 text-xl" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">ROI Increase</div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">+247%</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
                      <SafeIcon icon={FiTarget} className="text-blue-600 dark:text-blue-400 text-xl" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">18.5%</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-3 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      <ROICalculator 
        isOpen={showROICalculator} 
        onClose={() => setShowROICalculator(false)} 
      />
    </>
  );
};

export default Hero;