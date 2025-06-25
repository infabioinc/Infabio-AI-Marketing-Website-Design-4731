import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiTrendingUp, FiDollarSign, FiUsers, FiBarChart3, FiZap } = FiIcons;

const ProgrammaticAdsPage = () => {
  const platforms = [
    { name: 'Google Ads', audience: '90% reach', cpc: '$1.50-$3.00', features: ['Search Ads', 'Display Network', 'YouTube Ads'] },
    { name: 'Facebook/Instagram', audience: '2.9B users', cpc: '$0.80-$2.50', features: ['Feed Ads', 'Stories', 'Reels'] },
    { name: 'LinkedIn', audience: 'B2B focus', cpc: '$4.00-$8.00', features: ['Sponsored Content', 'InMail', 'Text Ads'] },
    { name: 'Amazon DSP', audience: 'Purchase intent', cpc: '$2.00-$5.00', features: ['Product Targeting', 'Audience Insights', 'Attribution'] }
  ];

  const aiFeatures = [
    {
      icon: FiTarget,
      title: 'Smart Targeting',
      description: 'AI-powered audience segmentation and lookalike modeling',
      benefits: ['30% better targeting accuracy', 'Reduced acquisition costs', 'Higher conversion rates']
    },
    {
      icon: FiTrendingUp,
      title: 'Real-time Optimization',
      description: 'Automatic bid adjustments based on performance data',
      benefits: ['24/7 campaign monitoring', 'Instant performance improvements', 'Maximized ROI']
    },
    {
      icon: FiBarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast campaign performance and budget allocation',
      benefits: ['Accurate performance predictions', 'Optimized budget distribution', 'Strategic planning insights']
    },
    {
      icon: FiZap,
      title: 'Dynamic Creative',
      description: 'Automatically generate and test ad variations',
      benefits: ['Unlimited creative testing', 'Personalized ad experiences', 'Higher engagement rates']
    }
  ];

  const results = [
    { metric: 'Average ROAS', value: '4.8x', description: 'Return on ad spend across all campaigns' },
    { metric: 'Cost Reduction', value: '45%', description: 'Lower cost per acquisition through AI optimization' },
    { metric: 'Conversion Lift', value: '127%', description: 'Increase in conversion rates vs. traditional methods' },
    { metric: 'Time Saved', value: '80%', description: 'Reduction in manual campaign management time' }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Giant',
      industry: 'Retail',
      challenge: 'Scaling ad spend while maintaining ROAS',
      solution: 'AI-powered audience expansion and dynamic bidding',
      results: ['340% revenue increase', '2.3x ROAS improvement', '60% lower CPA']
    },
    {
      title: 'SaaS Startup',
      industry: 'Technology',
      challenge: 'Limited budget for customer acquisition',
      solution: 'Predictive audience modeling and automated optimization',
      results: ['450% lead increase', '70% cost reduction', '5.2x ROAS']
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
                <SafeIcon icon={FiTarget} className="text-white text-2xl" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Programmatic{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Advertising
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage AI-powered programmatic advertising to reach your ideal customers across all digital channels with precision and efficiency.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">$50M+</div>
                <div className="text-gray-600">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.8x</div>
                <div className="text-gray-600">Average ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">15+</div>
                <div className="text-gray-600">Platforms Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">AI Optimization</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Features</h2>
            <p className="text-xl text-gray-600">
              Advanced artificial intelligence capabilities that drive superior campaign performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                    <SafeIcon icon={feature.icon} className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Supported Platforms</h2>
            <p className="text-xl text-gray-600">
              Reach your audience across all major advertising platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Audience:</span>
                    <span className="font-medium">{platform.audience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg. CPC:</span>
                    <span className="font-medium">{platform.cpc}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Features:</div>
                  <ul className="space-y-1">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">
              Measurable outcomes from our programmatic advertising campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{result.value}</div>
                <div className="font-semibold text-gray-900 mb-2">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-gray-50 rounded-2xl"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.title}</h3>
                  <span className="text-blue-600 font-medium">{study.industry}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold text-white">Ready to Scale Your Advertising?</h2>
            <p className="text-xl text-blue-100">
              Let our AI-powered programmatic advertising platform drive your next growth phase.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow"
            >
              Start Your Campaign
            </motion.button>
            <p className="text-blue-100 text-sm">
              Free campaign audit and strategy session included
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammaticAdsPage;