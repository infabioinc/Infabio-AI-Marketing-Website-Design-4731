import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiVideo, FiPlay, FiCalendar, FiClock } = FiIcons;

const WebinarsPage = () => {
  const webinars = [
    {
      title: 'AI Marketing Fundamentals',
      description: 'Learn the basics of AI marketing and how to get started.',
      date: '2024-02-15',
      duration: '45 min',
      status: 'upcoming',
      featured: true
    },
    {
      title: 'Programmatic Advertising Masterclass',
      description: 'Advanced strategies for programmatic advertising success.',
      date: '2024-01-20',
      duration: '60 min',
      status: 'recorded',
      featured: false
    },
    {
      title: 'Predictive Analytics in Marketing',
      description: 'Using data to predict customer behavior and optimize campaigns.',
      date: '2023-12-10',
      duration: '50 min',
      status: 'recorded',
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
                <SafeIcon icon={FiVideo} className="text-white text-2xl" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Expert{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Webinars
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our AI marketing experts for live sessions and recorded masterclasses.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                {webinar.featured && (
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiCalendar} />
                    <span>{new Date(webinar.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} />
                    <span>{webinar.duration}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    webinar.status === 'upcoming' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiPlay} />
                  <span>{webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;