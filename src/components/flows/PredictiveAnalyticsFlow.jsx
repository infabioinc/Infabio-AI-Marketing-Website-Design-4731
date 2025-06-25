import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBarChart3, FiTrendingUp, FiTarget, FiUsers, FiDollarSign, FiZap, FiClock } = FiIcons;

const PredictiveAnalyticsFlow = ({ analysisResults, isRecommended = true, isCondensed = false }) => {
  const [selectedModels, setSelectedModels] = useState([]);
  const { clientData } = analysisResults;

  const analyticsModels = [
    {
      icon: FiUsers,
      title: 'Customer Lifetime Value',
      description: 'Predict CLV to optimize acquisition and retention strategies',
      accuracy: '85-92%',
      impact: 'Increase CLV by 25-40%',
      recommended: clientData.primaryGoals?.includes('customer-retention')
    },
    {
      icon: FiTarget,
      title: 'Churn Prevention',
      description: 'Identify at-risk customers before they leave',
      accuracy: '88-94%',
      impact: 'Reduce churn by 30-50%',
      recommended: clientData.biggestChallenges?.includes('customer-retention')
    },
    {
      icon: FiTrendingUp,
      title: 'Demand Forecasting',
      description: 'Predict future demand for better inventory and marketing',
      accuracy: '80-90%',
      impact: 'Optimize inventory by 35%',
      recommended: clientData.industry === 'ecommerce'
    },
    {
      icon: FiDollarSign,
      title: 'Revenue Prediction',
      description: 'Forecast revenue streams and growth opportunities',
      accuracy: '82-89%',
      impact: 'Improve planning accuracy by 40%',
      recommended: clientData.primaryGoals?.includes('increase-revenue')
    },
    {
      icon: FiZap,
      title: 'Lead Scoring',
      description: 'AI-powered lead qualification and prioritization',
      accuracy: '90-95%',
      impact: 'Increase conversion by 45%',
      recommended: clientData.primaryGoals?.includes('generate-leads')
    },
    {
      icon: FiClock,
      title: 'Optimal Timing',
      description: 'Predict best times for campaigns and communications',
      accuracy: '75-85%',
      impact: 'Improve engagement by 30%',
      recommended: true
    }
  ];

  const implementationPhases = [
    {
      phase: 'Data Integration',
      duration: '2-3 weeks',
      activities: [
        'Connect all data sources',
        'Data cleaning and preparation',
        'Historical data analysis',
        'Baseline metrics establishment'
      ]
    },
    {
      phase: 'Model Development',
      duration: '3-4 weeks',
      activities: [
        'Custom model creation',
        'Algorithm training',
        'Model validation',
        'Accuracy optimization'
      ]
    },
    {
      phase: 'Dashboard Setup',
      duration: '1-2 weeks',
      activities: [
        'Real-time dashboard creation',
        'Alert system configuration',
        'User training',
        'Access permissions setup'
      ]
    },
    {
      phase: 'Optimization',
      duration: 'Ongoing',
      activities: [
        'Continuous model improvement',
        'Performance monitoring',
        'Strategy adjustments',
        'ROI tracking'
      ]
    }
  ];

  const dashboardFeatures = [
    {
      feature: 'Real-time Predictions',
      description: 'Live predictions updated every hour',
      value: '24/7 monitoring'
    },
    {
      feature: 'Custom Alerts',
      description: 'Automated notifications for key events',
      value: 'Instant notifications'
    },
    {
      feature: 'Scenario Planning',
      description: 'What-if analysis for strategic decisions',
      value: 'Multiple scenarios'
    },
    {
      feature: 'ROI Calculator',
      description: 'Real-time ROI tracking and projections',
      value: 'Live ROI metrics'
    }
  ];

  const businessImpact = [
    {
      area: 'Marketing Efficiency',
      improvement: '40-60%',
      description: 'Better targeting and timing'
    },
    {
      area: 'Customer Retention',
      improvement: '25-45%',
      description: 'Proactive churn prevention'
    },
    {
      area: 'Revenue Growth',
      improvement: '20-35%',
      description: 'Optimized pricing and offers'
    },
    {
      area: 'Cost Reduction',
      improvement: '30-50%',
      description: 'Eliminate wasteful spending'
    }
  ];

  if (isCondensed) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3 mb-4">
          <SafeIcon icon={FiBarChart3} className="text-2xl text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Predictive Analytics</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          Advanced AI models to predict customer behavior and optimize marketing performance.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="font-bold text-green-600">90%</div>
            <div className="text-xs text-gray-600">Accuracy</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="font-bold text-purple-600">45%</div>
            <div className="text-xs text-gray-600">Conversion Boost</div>
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
            <SafeIcon icon={FiBarChart3} className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Predictive Analytics
          </h2>
        </div>
        
        {isRecommended && (
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Recommended for {clientData.businessName}
          </div>
        )}
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Harness the power of AI to predict customer behavior, optimize campaigns, and make data-driven decisions that drive growth.
        </p>
      </div>

      {/* Analytics Models */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          AI Prediction Models
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 border-2 rounded-lg transition-all cursor-pointer ${
                model.recommended 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <SafeIcon icon={model.icon} className="text-white text-xl" />
                </div>
                {model.recommended && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Recommended
                  </span>
                )}
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-2">{model.title}</h4>
              <p className="text-gray-600 mb-4">{model.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2 bg-white rounded">
                  <div className="text-sm font-medium text-blue-600">{model.accuracy}</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="text-center p-2 bg-white rounded">
                  <div className="text-sm font-medium text-green-600">{model.impact}</div>
                  <div className="text-xs text-gray-500">Impact</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Implementation Timeline
        </h3>
        
        <div className="space-y-6">
          {implementationPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start space-x-6 p-6 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{phase.phase}</h4>
                  <span className="text-sm text-gray-500">{phase.duration}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-2">
                  {phase.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dashboard Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Analytics Dashboard Features
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
            >
              <h4 className="font-bold text-gray-900 mb-2">{feature.feature}</h4>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              <div className="text-sm font-medium text-blue-600">{feature.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Business Impact */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Expected Business Impact
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessImpact.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 transition-all"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{impact.improvement}</div>
              <div className="font-semibold text-gray-900 mb-2">{impact.area}</div>
              <div className="text-sm text-gray-600">{impact.description}</div>
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
          Start Predictive Analytics
        </motion.button>
        <p className="text-sm text-gray-500 mt-2">
          Free data audit and custom model consultation included
        </p>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsFlow;