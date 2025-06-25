import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiTrendingUp, FiZap } = FiIcons;

const About = () => {
  const features = [
    {
      icon: FiAward,
      title: 'Industry Leaders',
      description: 'Pioneering AI marketing solutions since 2005, setting industry standards.'
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Top-tier marketers, data scientists, and AI specialists in New York.'
    },
    {
      icon: FiTrendingUp,
      title: 'Proven Results',
      description: 'Consistent growth and ROI improvements across all client portfolios.'
    },
    {
      icon: FiZap,
      title: 'Cutting-Edge Tech',
      description: 'Latest AI tools and proprietary algorithms for maximum impact.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg"
              >
                <div className="text-2xl font-bold text-gray-900">New York HQ</div>
                <div className="text-gray-600">Manhattan • Est. 2005</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                About Infabio
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold text-gray-900"
              >
                Nearly Two Decades of{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Founded in 2005 in the heart of New York, Infabio has been at the forefront of digital marketing evolution. 
                We've witnessed and shaped the transformation from traditional marketing to AI-powered strategies, 
                helping businesses thrive in the digital age.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Our full-service 360° approach combines cutting-edge AI technology with human creativity, 
                delivering personalized marketing solutions that drive measurable results for businesses of all sizes.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit">
                    <SafeIcon icon={feature.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;