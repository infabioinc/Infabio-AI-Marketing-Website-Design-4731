import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiExternalLink, FiAward, FiTrendingUp, FiUsers, FiGlobe } = FiIcons;

const PressPage = () => {
  const pressReleases = [
    {
      date: '2024-01-15',
      title: 'Infabio Raises $25M Series B to Accelerate AI Marketing Innovation',
      excerpt: 'Funding will be used to expand AI capabilities and strengthen presence in US and Indian markets.',
      link: '#',
      featured: true
    },
    {
      date: '2024-01-10',
      title: 'Infabio Named "AI Marketing Agency of the Year" by MarTech Awards',
      excerpt: 'Recognition for outstanding innovation in artificial intelligence marketing solutions.',
      link: '#',
      featured: true
    },
    {
      date: '2023-12-18',
      title: 'Infabio Expands Global Operations with New Bangalore Innovation Center',
      excerpt: 'New facility will house 100+ engineers and data scientists focused on cutting-edge AI development.',
      link: '#',
      featured: false
    },
    {
      date: '2023-11-22',
      title: 'Infabio Client Portfolio Surpasses $1B in Combined Revenue Growth',
      excerpt: 'Milestone achievement demonstrates the transformative impact of AI marketing strategies.',
      link: '#',
      featured: false
    },
    {
      date: '2023-10-15',
      title: 'Partnership Announcement: Infabio and Google Cloud Collaborate on AI Solutions',
      excerpt: 'Strategic partnership to deliver advanced AI marketing capabilities to enterprise clients.',
      link: '#',
      featured: false
    },
    {
      date: '2023-09-08',
      title: 'Infabio CEO Sarah Chen Named to Forbes "40 Under 40" in Marketing',
      excerpt: 'Recognition for leadership in AI marketing innovation and business transformation.',
      link: '#',
      featured: false
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logos',
      description: 'High-resolution logos in various formats',
      items: ['PNG (Transparent)', 'SVG (Vector)', 'EPS (Print Ready)']
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of leadership team',
      items: ['High Resolution', 'Multiple Angles', 'Various Backgrounds']
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key statistics and company information',
      items: ['Company Overview', 'Key Metrics', 'Timeline & Milestones']
    },
    {
      title: 'Product Screenshots',
      description: 'Platform interfaces and dashboard views',
      items: ['Analytics Dashboards', 'Campaign Interfaces', 'Reporting Views']
    }
  ];

  const awards = [
    {
      year: '2024',
      award: 'AI Marketing Agency of the Year',
      organization: 'MarTech Awards',
      icon: FiAward
    },
    {
      year: '2023',
      award: 'Best AI Innovation in Marketing',
      organization: 'AdTech Excellence Awards',
      icon: FiTrendingUp
    },
    {
      year: '2023',
      award: 'Top 50 AI Companies to Watch',
      organization: 'AI Business Magazine',
      icon: FiGlobe
    },
    {
      year: '2022',
      award: 'Digital Marketing Agency of the Year',
      organization: 'Marketing Excellence Awards',
      icon: FiUsers
    }
  ];

  const mediaContacts = [
    {
      name: 'Jennifer Walsh',
      title: 'VP of Communications',
      email: 'press@infabio.com',
      phone: '+1 (555) 123-4567',
      location: 'New York'
    },
    {
      name: 'Amit Patel',
      title: 'Communications Manager',
      email: 'media.india@infabio.com',
      phone: '+91 80 2345 6789',
      location: 'Bangalore'
    }
  ];

  const companyStats = [
    { label: 'Founded', value: '2005' },
    { label: 'Employees', value: '50+' },
    { label: 'Clients Served', value: '500+' },
    { label: 'Revenue Growth', value: '$1B+' },
    { label: 'Global Offices', value: '2' },
    { label: 'Awards Won', value: '15+' }
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
              Press &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Media
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest news, press releases, and media resources from Infabio. 
              Stay updated on our AI marketing innovations and company milestones.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-12">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">
              Recent press releases and company announcements
            </p>
          </motion.div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <motion.article
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl transition-shadow cursor-pointer ${
                  release.featured 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 hover:shadow-xl' 
                    : 'bg-gray-50 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <SafeIcon icon={FiCalendar} />
                        <span>{new Date(release.date).toLocaleDateString()}</span>
                      </div>
                      {release.featured && (
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  </div>
                  <div className="ml-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <SafeIcon icon={FiExternalLink} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">
              Industry recognition for our AI marketing innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.award}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg w-fit mx-auto mb-4">
                  <SafeIcon icon={award.icon} className="text-white text-2xl" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{award.year}</div>
                <h3 className="font-bold text-gray-900 mb-2">{award.award}</h3>
                <p className="text-gray-600 text-sm">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Kit</h2>
            <p className="text-xl text-gray-600">
              Download brand assets and company information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaKit.map((kit, index) => (
              <motion.div
                key={kit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{kit.title}</h3>
                <p className="text-gray-600 mb-4">{kit.description}</p>
                <ul className="space-y-2 mb-6">
                  {kit.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  Download
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Media Contacts</h2>
            <p className="text-xl text-blue-100">
              Get in touch with our communications team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{contact.name}</h3>
                <p className="text-blue-100 mb-4">{contact.title}</p>
                <div className="space-y-2 text-blue-100">
                  <p>Email: <a href={`mailto:${contact.email}`} className="text-white hover:underline">{contact.email}</a></p>
                  <p>Phone: <a href={`tel:${contact.phone}`} className="text-white hover:underline">{contact.phone}</a></p>
                  <p>Location: {contact.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;