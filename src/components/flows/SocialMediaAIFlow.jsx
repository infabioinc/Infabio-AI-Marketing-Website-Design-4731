import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMessageSquare, FiUsers, FiTrendingUp, FiCalendar, FiImage, FiBarChart3 } = FiIcons;

const SocialMediaAIFlow = ({ analysisResults, isRecommended = true, isCondensed = false }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const { clientData } = analysisResults;

  const platforms = [
    {
      name: 'LinkedIn',
      audience: 'B2B professionals',
      contentTypes: ['Industry insights', 'Company updates', 'Thought leadership'],
      recommended: clientData.industry === 'technology' || clientData.industry === 'finance'
    },
    {
      name: 'Instagram',
      audience: 'Visual-first consumers',
      contentTypes: ['Product showcases', 'Behind-the-scenes', 'User-generated content'],
      recommended: clientData.industry === 'ecommerce' || clientData.industry === 'healthcare'
    },
    {
      name: 'Facebook',
      audience: 'Broad demographics',
      contentTypes: ['Community building', 'Event promotion', 'Customer service'],
      recommended: true
    },
    {
      name: 'Twitter/X',
      audience: 'News and trends',
      contentTypes: ['Real-time updates', 'Industry commentary', 'Customer support'],
      recommended: clientData.industry === 'technology'
    },
    {
      name: 'TikTok',
      audience: 'Gen Z and Millennials',
      contentTypes: ['Creative videos', 'Trending challenges', 'Educational content'],
      recommended: clientData.businessSize === 'startup'
    },
    {
      name: 'YouTube',
      audience: 'Educational seekers',
      contentTypes: ['Tutorials', 'Product demos', 'Webinars'],
      recommended: clientData.primaryGoals?.includes('brand-awareness')
    }
  ];

  const aiFeatures = [
    {
      icon: FiMessageSquare,
      title: 'Content Generation',
      description: 'AI creates platform-specific posts tailored to your brand voice',
      capability: '50+ posts per week'
    },
    {
      icon: FiCalendar,
      title: 'Optimal Timing',
      description: 'AI determines best posting times based on audience behavior',
      capability: '40% higher engagement'
    },
    {
      icon: FiImage,
      title: 'Visual Content',
      description: 'AI-generated graphics, carousels, and video content',
      capability: '100+ visuals per month'
    },
    {
      icon: FiBarChart3,
      title: 'Performance Analytics',
      description: 'Real-time insights and automated optimization',
      capability: '24/7 monitoring'
    }
  ];

  const contentPillars = [
    {
      pillar: 'Educational',
      percentage: '40%',
      examples: ['How-to guides', 'Industry tips', 'Best practices'],
      engagement: 'High shares, saves'
    },
    {
      pillar: 'Promotional',
      percentage: '20%',
      examples: ['Product launches', 'Special offers', 'Case studies'],
      engagement: 'Direct conversions'
    },
    {
      pillar: 'Entertainment',
      percentage: '25%',
      examples: ['Behind-the-scenes', 'Team highlights', 'Fun facts'],
      engagement: 'High likes, comments'
    },
    {
      pillar: 'Community',
      percentage: '15%',
      examples: ['User-generated content', 'Q&A sessions', 'Polls'],
      engagement: 'Strong community building'
    }
  ];

  const results = [
    {
      metric: 'Follower Growth',
      increase: '200-400%',
      timeframe: '3-6 months'
    },
    {
      metric: 'Engagement Rate',
      increase: '150-300%',
      timeframe: '1-3 months'
    },
    {
      metric: 'Lead Generation',
      increase: '100-250%',
      timeframe: '2-4 months'
    },
    {
      metric: 'Brand Mentions',
      increase: '300-500%',
      timeframe: '4-8 months'
    }
  ];

  if (isCondensed) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3 mb-4">
          <SafeIcon icon={FiMessageSquare} className="text-2xl text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Social Media AI</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          Automated social media management with AI-powered content creation and optimization.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="font-bold text-purple-600">300%</div>
            <div className="text-xs text-gray-600">Engagement Boost</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="font-bold text-green-600">50+</div>
            <div className="text-xs text-gray-600">Posts/Week</div>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium"
        >
          Learn More
        </motion.button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
            <SafeIcon icon={FiMessageSquare} className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Social Media AI
          </h2>
        </div>
        
        {isRecommended && (
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Recommended for {clientData.businessName}
          </div>
        )}
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your social media presence with AI-powered content creation, scheduling, and optimization across all platforms.
        </p>
      </div>

      {/* Platform Selection */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Recommended Platforms
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 border-2 rounded-lg transition-all cursor-pointer ${
                platform.recommended 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-900">{platform.name}</h4>
                {platform.recommended && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Recommended
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4">{platform.audience}</p>
              
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Content Types:</div>
                <ul className="space-y-1">
                  {platform.contentTypes.map((type, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          AI-Powered Capabilities
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <SafeIcon icon={feature.icon} className="text-white text-2xl" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              <div className="text-sm font-medium text-blue-600">{feature.capability}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content Strategy */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Content Strategy Framework
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 transition-all"
            >
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">{pillar.percentage}</div>
                <h4 className="text-xl font-bold text-gray-900">{pillar.pillar}</h4>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Examples:</div>
                  <ul className="space-y-1">
                    {pillar.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2 border-t border-gray-100">
                  <div className="text-sm font-medium text-gray-700">Impact:</div>
                  <div className="text-sm text-gray-600">{pillar.engagement}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expected Results */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Expected Results
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-2xl font-bold text-gray-900 mb-2">{result.increase}</div>
              <div className="font-semibold text-gray-900 mb-2">{result.metric}</div>
              <div className="text-sm text-gray-600">{result.timeframe}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow"
        >
          Launch Social Media AI
        </motion.button>
        <p className="text-sm text-gray-500 mt-2">
          Free social media audit and content strategy included
        </p>
      </div>
    </div>
  );
};

export default SocialMediaAIFlow;