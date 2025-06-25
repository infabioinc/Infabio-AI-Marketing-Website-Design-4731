import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ROICalculator from './ROICalculator';

const { FiUsers, FiTrendingUp, FiAward, FiGlobe, FiCalculator } = FiIcons;

const Stats = () => {
  const [showROICalculator, setShowROICalculator] = useState(false);

  const stats = [
    { icon: FiUsers, number: '500+', label: 'Clients Served', description: 'Businesses transformed' },
    { icon: FiTrendingUp, number: '247%', label: 'Average ROI', description: 'Client growth rate' },
    { icon: FiAward, number: '19', label: 'Years Experience', description: 'Industry leadership' },
    { icon: FiGlobe, number: '25+', label: 'Industries', description: 'Sectors served' }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Numbers That{' '}
              <span className="text-yellow-300">
                Speak
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our track record of success spans nearly two decades, delivering exceptional results across diverse industries and business scales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-4 bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-white/20 p-4 rounded-xl w-fit mx-auto">
                  <SafeIcon icon={stat.icon} className="text-white text-3xl" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-yellow-300">
                    {stat.label}
                  </div>
                  <div className="text-blue-100">
                    {stat.description}
                  </div>
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
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalculator} />
                <span>Calculate Your Potential ROI</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Become Our Next Success Story
              </motion.button>
            </div>
          </motion.div>
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

export default Stats;