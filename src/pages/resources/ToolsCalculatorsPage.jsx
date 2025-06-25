import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCalculator, FiTrendingUp, FiTarget, FiDollarSign, FiUsers } = FiIcons;

const ToolsCalculatorsPage = () => {
  const tools = [
    {
      title: 'ROI Calculator',
      description: 'Calculate your potential return on investment with AI marketing.',
      icon: FiDollarSign,
      color: 'green',
      featured: true
    },
    {
      title: 'Customer Lifetime Value Calculator',
      description: 'Determine the long-term value of your customers.',
      icon: FiUsers,
      color: 'blue',
      featured: false
    },
    {
      title: 'Campaign Performance Analyzer',
      description: 'Analyze and optimize your marketing campaign performance.',
      icon: FiTrendingUp,
      color: 'purple',
      featured: false
    },
    {
      title: 'Audience Targeting Tool',
      description: 'Find and define your ideal customer segments.',
      icon: FiTarget,
      color: 'indigo',
      featured: false
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'from-green-600 to-emerald-600',
      blue: 'from-blue-600 to-cyan-600',
      purple: 'from-purple-600 to-violet-600',
      indigo: 'from-indigo-600 to-blue-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                <SafeIcon icon={FiCalculator} className="text-white text-2xl" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Tools &{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Calculators
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free AI marketing tools and calculators to help optimize your campaigns and measure success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow relative"
              >
                {tool.featured && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    Popular
                  </span>
                )}
                <div className={`bg-gradient-to-r ${getColorClasses(tool.color)} p-4 rounded-lg w-fit mb-6`}>
                  <SafeIcon icon={tool.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tool.title}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${getColorClasses(tool.color)} text-white py-3 rounded-lg font-medium hover:shadow-lg transition-shadow`}
                >
                  Use Tool
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">Need Custom Tools?</h2>
            <p className="text-xl text-gray-600">
              Our team can create custom calculators and tools tailored to your specific business needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow"
            >
              Request Custom Tool
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ToolsCalculatorsPage;