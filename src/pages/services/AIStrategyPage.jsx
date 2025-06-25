import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBrain, FiTarget, FiTrendingUp, FiCheckCircle, FiClock, FiDollarSign, FiUsers } = FiIcons;

const AIStrategyPage = () => {
  const phases = [
    {
      title: 'AI Audit & Assessment',
      duration: '1-2 weeks',
      description: 'Comprehensive analysis of your current marketing infrastructure',
      deliverables: [
        'Current system analysis',
        'AI readiness assessment',
        'Gap analysis report',
        'Opportunity identification'
      ]
    },
    {
      title: 'Strategy Development',
      duration: '2-3 weeks',
      description: 'Custom AI marketing strategy tailored to your business goals',
      deliverables: [
        'AI marketing roadmap',
        'Technology stack recommendations',
        'Implementation timeline',
        'Budget allocation plan'
      ]
    },
    {
      title: 'Implementation Planning',
      duration: '1-2 weeks',
      description: 'Detailed implementation plan with clear milestones',
      deliverables: [
        'Phase-by-phase implementation plan',
        'Resource requirements',
        'Risk mitigation strategies',
        'Success metrics definition'
      ]
    },
    {
      title: 'Launch & Optimization',
      duration: '4-6 weeks',
      description: 'Gradual rollout with continuous monitoring and optimization',
      deliverables: [
        'Phased system deployment',
        'Performance monitoring',
        'Optimization recommendations',
        'Training and support'
      ]
    }
  ];

  const benefits = [
    {
      icon: FiTrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate 60-80% of routine marketing tasks',
      metric: '60-80%'
    },
    {
      icon: FiTarget,
      title: 'Better Targeting',
      description: 'AI-powered audience segmentation and personalization',
      metric: '3x Better'
    },
    {
      icon: FiDollarSign,
      title: 'Cost Reduction',
      description: 'Reduce marketing costs through automation',
      metric: '40-50%'
    },
    {
      icon: FiUsers,
      title: 'Higher Engagement',
      description: 'Personalized experiences drive engagement',
      metric: '2.5x Higher'
    }
  ];

  const investmentTiers = [
    {
      name: 'Starter',
      price: '$15,000',
      duration: '3 months',
      features: [
        'Basic AI audit',
        'Core strategy development',
        'Single channel focus',
        'Monthly reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$35,000',
      duration: '6 months',
      features: [
        'Comprehensive AI audit',
        'Multi-channel strategy',
        'Advanced analytics setup',
        'Bi-weekly optimization',
        'Team training included'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: '$75,000+',
      duration: '12 months',
      features: [
        'Full AI transformation',
        'Custom AI development',
        'Dedicated account team',
        'Weekly optimization',
        'Advanced integrations',
        'Executive dashboard'
      ]
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                <SafeIcon icon={FiBrain} className="text-white text-2xl" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                AI Strategy &{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Consulting
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your marketing with a comprehensive AI strategy designed specifically for your business goals and challenges.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Strategies Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">247%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">19</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Client Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Roadmap</h2>
            <p className="text-xl text-gray-600">
              Our proven 4-phase approach to AI marketing transformation
            </p>
          </motion.div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-6 p-8 bg-gray-50 rounded-2xl"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <SafeIcon icon={FiClock} />
                      <span className="text-sm">{phase.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{phase.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <SafeIcon icon={FiCheckCircle} className="text-green-600" />
                        <span className="text-gray-600">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expected Results</h2>
            <p className="text-xl text-gray-600">
              Measurable outcomes from our AI strategy implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg w-fit mx-auto mb-4">
                  <SafeIcon icon={benefit.icon} className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.metric}</div>
                <div className="font-semibold text-gray-900 mb-2">{benefit.title}</div>
                <div className="text-sm text-gray-600">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Options</h2>
            <p className="text-xl text-gray-600">
              Choose the right level of AI transformation for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border-2 transition-all relative ${
                  tier.recommended
                    ? 'border-blue-600 bg-blue-50 transform scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">{tier.price}</div>
                  <div className="text-gray-500">{tier.duration}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="text-green-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    tier.recommended
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Ready to Transform Your Marketing?</h2>
            <p className="text-xl text-blue-100">
              Schedule a free strategy consultation and discover how AI can revolutionize your marketing results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow"
            >
              Schedule Free Consultation
            </motion.button>
            <p className="text-blue-100 text-sm">
              No commitment required • 30-minute strategy session
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIStrategyPage;