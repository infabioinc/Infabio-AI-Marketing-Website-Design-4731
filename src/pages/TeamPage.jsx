import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLinkedin, FiTwitter, FiMail, FiBrain, FiTarget, FiTrendingUp, FiUsers } = FiIcons;

const TeamPage = () => {
  const leadership = [
    {
      name: 'Sarah Chen',
      position: 'CEO & Founder',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 19+ years in AI and digital marketing. Founded Infabio in 2005 with a mission to democratize AI marketing.',
      expertise: ['AI Strategy', 'Business Innovation', 'Digital Transformation'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@infabio.com'
      }
    },
    {
      name: 'Rajesh Kumar',
      position: 'CTO & Co-Founder',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'AI pioneer and tech innovator leading our cutting-edge development team. Expert in machine learning and predictive analytics.',
      expertise: ['Machine Learning', 'Data Science', 'AI Architecture'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rajesh@infabio.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      position: 'CMO',
      location: 'New York',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Strategic marketing expert specializing in programmatic advertising and growth hacking. 15+ years driving client success.',
      expertise: ['Programmatic Ads', 'Growth Marketing', 'Campaign Strategy'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@infabio.com'
      }
    },
    {
      name: 'Priya Sharma',
      position: 'VP of Analytics',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Data science leader transforming complex data into actionable insights. PhD in Statistics with expertise in predictive modeling.',
      expertise: ['Predictive Analytics', 'Data Visualization', 'Customer Intelligence'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya@infabio.com'
      }
    }
  ];

  const departments = [
    {
      icon: FiBrain,
      name: 'AI Strategy Team',
      count: '12 Experts',
      location: 'New York & Bangalore',
      description: 'Strategic consultants specializing in AI transformation and digital marketing strategy.'
    },
    {
      icon: FiTarget,
      name: 'Campaign Specialists',
      count: '18 Experts',
      location: 'New York & Bangalore',
      description: 'Performance marketing experts managing programmatic advertising and optimization.'
    },
    {
      icon: FiTrendingUp,
      name: 'Data Scientists',
      count: '15 Experts',
      location: 'Bangalore & New York',
      description: 'PhD-level data scientists building predictive models and analytics solutions.'
    },
    {
      icon: FiUsers,
      name: 'Client Success',
      count: '8 Experts',
      location: 'New York & Bangalore',
      description: 'Dedicated account managers ensuring exceptional client outcomes and satisfaction.'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push boundaries, exploring cutting-edge AI technologies to stay ahead of industry trends.'
    },
    {
      title: 'Client Obsession',
      description: 'Every decision we make is centered around delivering exceptional value and results for our clients.'
    },
    {
      title: 'Global Excellence',
      description: 'Our US-India collaboration brings together diverse perspectives for world-class solutions.'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest heavily in team development, ensuring our experts stay at the forefront of AI marketing.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Meet the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experts
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our world-class team of AI specialists, data scientists, and marketing experts spanning New York and Bangalore, 
              united by a passion for transforming businesses through innovative AI marketing solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">2</div>
                <div className="text-gray-600">Global Offices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">25+</div>
                <div className="text-gray-600">PhD Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">19</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Visionary leaders driving innovation in AI marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{leader.position}</p>
                <p className="text-sm text-gray-500 mb-4">{leader.location}</p>
                <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Expertise:</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {leader.expertise.map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  <a href={leader.social.linkedin} className="text-gray-400 hover:text-blue-600">
                    <SafeIcon icon={FiLinkedin} />
                  </a>
                  <a href={leader.social.twitter} className="text-gray-400 hover:text-blue-600">
                    <SafeIcon icon={FiTwitter} />
                  </a>
                  <a href={`mailto:${leader.social.email}`} className="text-gray-400 hover:text-blue-600">
                    <SafeIcon icon={FiMail} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600">
              Specialized teams working in harmony across continents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                    <SafeIcon icon={dept.icon} className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {dept.count}
                      </span>
                      <span className="text-gray-500 text-sm">{dept.location}</span>
                    </div>
                    <p className="text-gray-600">{dept.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-200 rounded-xl hover:border-blue-600 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Join Our Team</h2>
            <p className="text-xl text-blue-100">
              Ready to shape the future of AI marketing? We're always looking for exceptional talent to join our global team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;