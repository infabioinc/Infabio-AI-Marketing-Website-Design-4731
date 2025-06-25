import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiTrendingUp, FiDollarSign, FiUsers, FiBarChart3, FiZap, FiCheckCircle } = FiIcons;

const ProgrammaticAdsFlow = ({ analysisResults, isRecommended = true, isCondensed = false }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const { clientData } = analysisResults;

  const platforms = [
    { name: 'Google Ads', audience: '90% reach', cpc: '$1.50-$3.00' },
    { name: 'Facebook/Instagram', audience: '2.9B users', cpc: '$0.80-$2.50' },
    { name: 'LinkedIn', audience: 'B2B focus', cpc: '$4.00-$8.00' },
    { name: 'YouTube', audience: '2B users', cpc: '$0.50-$2.00' },
    { name: 'TikTok', audience: 'Gen Z/Millennial', cpc: '$0.30-$1.50' },
    { name: 'Amazon DSP', audience: 'Purchase intent', cpc: '$2.00-$5.00' }
  ];

  const campaignTypes = [
    {
      type: 'Lead Generation',
      description: 'Capture high-quality leads with AI-optimized forms',
      metrics: { cpl: '$25-$75', conversion: '12-18%' },
      recommended: clientData.primaryGoals?.includes('generate-leads')
    },
    {
      type: 'Brand Awareness',
      description: 'Increase brand visibility and recognition',
      metrics: { cpm: '$3-$8', reach: '500K-2M' },
      recommended: clientData.primaryGoals?.includes('brand-awareness')
    },
    {
      type: 'E-commerce Sales',
      description: 'Drive direct sales with dynamic product ads',
      metrics: { roas: '4:1-8:1', cpa: '$15-$45' },
      recommended: clientData.industry === 'ecommerce'
    },
    {
      type: 'App Installs',
      description: 'Mobile app promotion and user acquisition',
      metrics: { cpi: '$1.50-$4.00', retention: '25-35%' },
      recommended: clientData.primaryGoals?.includes('mobile-marketing')
    }
  ];

  const aiFeatures = [
    {
      icon: FiTarget,
      title: 'Smart Targeting',
      description: 'AI-powered audience segmentation and lookalike modeling'
    },
    {
      icon: FiTrendingUp,
      title: 'Real-time Optimization',
      description: 'Automatic bid adjustments based on performance data'
    },
    {
      icon: FiBarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast campaign performance and budget allocation'
    },
    {
      icon: FiZap,
      title: 'Dynamic Creative',
      description: 'Automatically generate and test ad variations'
    }
  ];

  const budgetTiers = [
    {
      range: '$5K - $15K/month',
      platforms: ['Google Ads', 'Facebook/Instagram'],
      focus: 'Core channels with proven ROI',
      expectedResults: '50-100 leads/month'
    },
    {
      range: '$15K - $50K/month',
      platforms: ['Google Ads', 'Facebook/Instagram', 'LinkedIn', 'YouTube'],
      focus: 'Multi-channel strategy with advanced targeting',
      expectedResults: '150-300 leads/month'
    },
    {
      range: '$50K+/month',
      platforms: ['All platforms', 'Custom DSP solutions'],
      focus: 'Full-funnel approach with advanced AI',
      expectedResults: '500+ leads/month'
    }
  ];

  if (isCondensed) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3 mb-4">
          <SafeIcon icon={FiTarget} className="text-2xl text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Programmatic Advertising</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          AI-powered advertising campaigns across all major platforms for maximum ROI.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600">4-8x</div>
            <div className="text-xs text-gray-600">ROAS</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="font-bold text-green-600">60%</div>
            <div className="text-xs text-gray-600">Lower CPA</div>
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
            <SafeIcon icon={FiTarget} className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Programmatic Advertising
          </h2>
        </div>
        
        {isRecommended && (
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Recommended for {clientData.businessName}
          </div>
        )}
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leverage AI-powered programmatic advertising to reach your ideal customers across all digital channels with precision and efficiency.
        </p>
      </div>

      {/* AI Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          AI-Powered Features
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <SafeIcon icon={feature.icon} className="text-white text-2xl" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Campaign Types */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Recommended Campaign Types
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {campaignTypes.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg border-2 transition-all ${
                campaign.recommended 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-900">{campaign.type}</h4>
                {campaign.recommended && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    Recommended
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4">{campaign.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(campaign.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-white rounded-lg">
                    <div className="font-bold text-blue-600">{value}</div>
                    <div className="text-xs text-gray-600 uppercase">{key}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Platform Selection */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Recommended Platforms
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 transition-all cursor-pointer"
              onClick={() => setSelectedPlatforms(prev => 
                prev.includes(platform.name) 
                  ? prev.filter(p => p !== platform.name)
                  : [...prev, platform.name]
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-gray-900">{platform.name}</h4>
                {selectedPlatforms.includes(platform.name) && (
                  <SafeIcon icon={FiCheckCircle} className="text-green-600" />
                )}
              </div>
              <div className="text-sm text-gray-600 mb-1">
                Audience: {platform.audience}
              </div>
              <div className="text-sm text-gray-600">
                CPC: {platform.cpc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Budget Recommendations */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Budget Recommendations
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {budgetTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-600 transition-all"
            >
              <div className="text-center mb-4">
                <div className="text-xl font-bold text-blue-600 mb-2">{tier.range}</div>
                <div className="text-sm text-gray-600">{tier.focus}</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Platforms:</div>
                  <div className="text-sm text-gray-600">{tier.platforms.join(', ')}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Expected Results:</div>
                  <div className="text-sm text-gray-600">{tier.expectedResults}</div>
                </div>
              </div>
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
          Launch Your Campaign
        </motion.button>
        <p className="text-sm text-gray-500 mt-2">
          Free campaign audit and strategy session included
        </p>
      </div>
    </div>
  );
};

export default ProgrammaticAdsFlow;