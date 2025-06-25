import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBriefcase, FiMapPin, FiClock, FiDollarSign, FiUsers, FiTrendingUp, FiGlobe, FiHeart } = FiIcons;

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'ai-strategy', label: 'AI Strategy' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'client-success', label: 'Client Success' }
  ];

  const openPositions = [
    {
      title: 'Senior AI Marketing Strategist',
      department: 'ai-strategy',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120k - $150k',
      experience: '5+ years',
      description: 'Lead AI marketing transformations for Fortune 500 clients. Develop comprehensive strategies that drive measurable business growth.',
      requirements: [
        'MBA or equivalent experience in marketing strategy',
        '5+ years in digital marketing leadership roles',
        'Experience with AI/ML marketing applications',
        'Proven track record of client success',
        'Excellent communication and presentation skills'
      ],
      benefits: ['Equity participation', 'Health & dental', 'Flexible PTO', 'Learning budget']
    },
    {
      title: 'Principal Data Scientist',
      department: 'data-science',
      location: 'Bangalore, India',
      type: 'Full-time',
      salary: '₹25L - ₹35L',
      experience: '6+ years',
      description: 'Build cutting-edge predictive models and analytics solutions. Lead a team of data scientists in developing AI-powered marketing insights.',
      requirements: [
        'PhD in Statistics, Computer Science, or related field',
        '6+ years in data science with marketing applications',
        'Expert in Python, R, SQL, and ML frameworks',
        'Experience with big data technologies (Spark, Hadoop)',
        'Strong leadership and mentoring skills'
      ],
      benefits: ['Stock options', 'Health insurance', 'Flexible hours', 'Conference budget']
    },
    {
      title: 'Programmatic Advertising Manager',
      department: 'marketing',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $120k',
      experience: '4+ years',
      description: 'Manage multi-million dollar programmatic campaigns across all major platforms. Optimize performance using AI-driven insights.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '4+ years in programmatic advertising',
        'Expert in DSPs, DMPs, and ad tech platforms',
        'Strong analytical and optimization skills',
        'Google Ads and Facebook Blueprint certifications'
      ],
      benefits: ['Performance bonuses', 'Health coverage', 'Remote options', 'Career development']
    },
    {
      title: 'Full-Stack AI Engineer',
      department: 'engineering',
      location: 'Bangalore, India / Remote',
      type: 'Full-time',
      salary: '₹18L - ₹28L',
      experience: '3+ years',
      description: 'Develop and maintain AI-powered marketing platforms. Work with cutting-edge technologies to build scalable solutions.',
      requirements: [
        'Bachelor\'s in Computer Science or Engineering',
        '3+ years in full-stack development',
        'Experience with React, Node.js, Python',
        'Knowledge of ML/AI frameworks (TensorFlow, PyTorch)',
        'Cloud platforms experience (AWS, GCP, Azure)'
      ],
      benefits: ['Flexible work', 'Health insurance', 'Learning stipend', 'Equity options']
    },
    {
      title: 'Client Success Manager',
      department: 'client-success',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80k - $100k',
      experience: '3+ years',
      description: 'Ensure exceptional client outcomes and satisfaction. Work closely with clients to maximize their AI marketing ROI.',
      requirements: [
        'Bachelor\'s degree in Business or Marketing',
        '3+ years in account management or consulting',
        'Strong relationship building skills',
        'Understanding of digital marketing metrics',
        'Excellent communication and problem-solving abilities'
      ],
      benefits: ['Commission structure', 'Health benefits', 'Professional development', 'Flexible PTO']
    },
    {
      title: 'Marketing Automation Specialist',
      department: 'marketing',
      location: 'Remote (US/India)',
      type: 'Full-time',
      salary: '$70k - $90k / ₹15L - ₹22L',
      experience: '2+ years',
      description: 'Design and implement marketing automation workflows. Optimize customer journeys using AI-powered personalization.',
      requirements: [
        'Bachelor\'s in Marketing, Business, or related field',
        '2+ years in marketing automation',
        'Expert in HubSpot, Marketo, or Pardot',
        'Understanding of customer journey mapping',
        'Strong analytical and creative thinking skills'
      ],
      benefits: ['Remote work', 'Health coverage', 'Learning budget', 'Flexible schedule']
    }
  ];

  const benefits = [
    {
      icon: FiDollarSign,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries, equity participation, and performance bonuses'
    },
    {
      icon: FiHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage for you and your family'
    },
    {
      icon: FiTrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths, mentorship programs, and leadership development'
    },
    {
      icon: FiGlobe,
      title: 'Global Impact',
      description: 'Work with international clients and collaborate across US and India offices'
    },
    {
      icon: FiUsers,
      title: 'Learning Culture',
      description: 'Conference attendance, certification programs, and continuous skill development'
    },
    {
      icon: FiClock,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policies'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(pos => pos.department === selectedDepartment);

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
              Shape the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our world-class team of innovators, data scientists, and marketing experts. 
              Work on cutting-edge AI solutions that transform businesses globally.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{openPositions.length}</div>
                <div className="text-gray-600">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">2</div>
                <div className="text-gray-600">Global Offices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">19</div>
                <div className="text-gray-600">Years Growing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Infabio?</h2>
            <p className="text-xl text-gray-600">
              We believe in creating an environment where exceptional talent thrives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mx-auto mb-4">
                  <SafeIcon icon={benefit.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Find your perfect role and join our mission
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.value}
                onClick={() => setSelectedDepartment(dept.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedDepartment === dept.value
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiBriefcase} />
                            <span>{position.department.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiMapPin} />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiClock} />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <SafeIcon icon={FiDollarSign} />
                            <span>{position.salary}</span>
                          </div>
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {position.experience}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">{position.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.benefits.map((benefit) => (
                            <span key={benefit} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-8 flex-shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Don't See Your Role?</h2>
            <p className="text-xl text-blue-100">
              We're always looking for exceptional talent. Send us your resume and let's start a conversation about how you can contribute to our mission.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow"
            >
              Send Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;