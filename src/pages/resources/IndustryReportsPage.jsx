import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBarChart3, FiDownload, FiCalendar, FiTrendingUp } = FiIcons;

const IndustryReportsPage = () => {
  const reports = [
    {
      title: 'State of AI Marketing 2024',
      description: 'Comprehensive analysis of AI marketing adoption and trends across industries.',
      date: '2024-01-15',
      pages: '45 pages',
      type: 'Annual Report',
      featured: true
    },
    {
      title: 'E-commerce AI Transformation Report',
      description: 'How AI is revolutionizing online retail and customer experience.',
      date: '2023-12-10',
      pages: '32 pages',
      type: 'Industry Focus',
      featured: false
    },
    {
      title: 'B2B Marketing Automation Trends',
      description: 'Latest trends in B2B marketing automation and lead generation.',
      date: '2023-11-20',
      pages: '28 pages',
      type: 'Trend Analysis',
      featured: false
    }
  ];

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
                <SafeIcon icon={FiBarChart3} className="text-white text-2xl" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Industry{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Reports
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth industry analysis and market insights from our team of AI marketing experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                {report.featured && (
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{report.title}</h3>
                <p className="text-gray-600 mb-4">{report.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} />
                    <span>{new Date(report.date).toLocaleDateString()}</span>
                  </div>
                  <span>{report.pages}</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{report.type}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiDownload} />
                  <span>Download Report</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryReportsPage;