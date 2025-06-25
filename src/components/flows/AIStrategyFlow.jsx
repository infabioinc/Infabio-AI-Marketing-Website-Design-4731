import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import ServiceInfoModal from '../modals/ServiceInfoModal';

const { FiBrain, FiTarget, FiTrendingUp, FiCheckCircle, FiClock, FiDollarSign, FiUsers, FiInfo } = FiIcons;

const AIStrategyFlow = ({ analysisResults, isRecommended = true, isCondensed = false }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const { clientData } = analysisResults;

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
      ],
      recommended: clientData.businessSize === 'startup' || clientData.businessSize === 'small'
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
      recommended: clientData.businessSize === 'medium'
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
      ],
      recommended: clientData.businessSize === 'large'
    }
  ];

  if (isCondensed) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiBrain} className="text-2xl text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">AI Strategy & Consulting</h3>
          </div>
          <button
            onClick={() => setShowInfoModal(true)}
            className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors"
          >
            <SafeIcon icon={FiInfo} className="text-xl" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          Comprehensive AI marketing transformation tailored to your business needs.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <SafeIcon icon={benefit.icon} className="text-blue-600" />
              <div>
                <div className="font-semibold text-sm">{benefit.title}</div>
                <div className="text-xs text-gray-500">{benefit.metric}</div>
              </div>
            </div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowInfoModal(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium"
        >
          Learn More
        </motion.button>

        <ServiceInfoModal
          isOpen={showInfoModal}
          onClose={() => setShowInfoModal(false)}
          serviceType="ai-strategy"
        />
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
              <SafeIcon icon={FiBrain} className="text-white text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              AI Strategy & Consulting
            </h2>
            <button
              onClick={() => setShowInfoModal(true)}
              className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors"
            >
              <SafeIcon icon={FiInfo} className="text-xl" />
            </button>
          </div>
          {isRecommended && (
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ✨ Recommended for {clientData.businessName}
            </div>
          )}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your marketing with a comprehensive AI strategy designed specifically for your business goals and challenges.
          </p>
        </div>

        {/* Implementation Phases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Implementation Roadmap
          </h3>
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  currentPhase === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setCurrentPhase(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    currentPhase === index ? 'bg-blue-600' : 'bg-gray-400'
                  }`}>
                    <SafeIcon icon={FiCheckCircle} className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{phase.title}</h4>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <SafeIcon icon={FiClock} />
                        <span className="text-sm">{phase.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expected Benefits */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Expected Results
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mx-auto mb-4">
                  <SafeIcon icon={benefit.icon} className="text-white text-2xl" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{benefit.metric}</div>
                <div className="font-semibold text-gray-900 mb-2">{benefit.title}</div>
                <div className="text-sm text-gray-600">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Investment Options */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Investment Options
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {investmentTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-lg border-2 transition-all relative ${
                  tier.recommended
                    ? 'border-blue-600 bg-blue-50 transform scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{tier.price}</div>
                  <div className="text-sm text-gray-500">{tier.duration}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="text-green-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    tier.recommended
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </motion.button>
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
            Schedule Strategy Session
          </motion.button>
          <p className="text-sm text-gray-500 mt-2">
            Free 30-minute consultation to discuss your AI marketing needs
          </p>
        </div>
      </div>

      <ServiceInfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        serviceType="ai-strategy"
      />
    </>
  );
};

export default AIStrategyFlow;