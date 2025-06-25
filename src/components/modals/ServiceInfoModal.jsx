import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX, FiBrain, FiTarget, FiSearch, FiMessageSquare, FiBarChart3, FiTrendingUp, FiUsers, FiDollarSign, FiClock, FiZap, FiArrowRight, FiCheckCircle } = FiIcons;

const ServiceInfoModal = ({ isOpen, onClose, serviceType }) => {
  const serviceData = {
    'ai-strategy': {
      title: 'AI Strategy & Consulting',
      icon: FiBrain,
      gradient: 'from-blue-600 to-purple-600',
      description: 'Transform your marketing with comprehensive AI strategies',
      stats: [
        { value: '240%', label: 'Average ROI Increase', icon: FiTrendingUp },
        { value: '60-80%', label: 'Task Automation', icon: FiZap },
        { value: '500+', label: 'Strategies Delivered', icon: FiBrain },
        { value: '19 Years', label: 'Experience', icon: FiClock }
      ],
      phases: [
        {
          title: 'AI Audit & Assessment',
          duration: '1-2 weeks',
          description: 'Comprehensive analysis of your current marketing infrastructure',
          tasks: [
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
          tasks: [
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
          tasks: [
            'Phase-by-phase plan',
            'Resource requirements',
            'Risk mitigation strategies',
            'Success metrics definition'
          ]
        },
        {
          title: 'Launch & Optimization',
          duration: '4-6 weeks',
          description: 'Gradual rollout with continuous monitoring',
          tasks: [
            'Phased system deployment',
            'Performance monitoring',
            'Optimization recommendations',
            'Training and support'
          ]
        }
      ],
      benefits: [
        'Increase efficiency by 60-80%',
        'Better targeting accuracy',
        'Cost reduction by 40-50%',
        'Higher customer engagement'
      ]
    },
    'programmatic-ads': {
      title: 'Programmatic Advertising',
      icon: FiTarget,
      gradient: 'from-green-600 to-blue-600',
      description: 'AI-powered advertising across all digital channels',
      stats: [
        { value: '4.8x', label: 'Average ROAS', icon: FiDollarSign },
        { value: '45%', label: 'Cost Reduction', icon: FiTrendingUp },
        { value: '$50M+', label: 'Ad Spend Managed', icon: FiTarget },
        { value: '24/7', label: 'AI Optimization', icon: FiZap }
      ],
      phases: [
        {
          title: 'Platform Integration',
          duration: '1 week',
          description: 'Connect and configure all advertising platforms',
          tasks: [
            'Google Ads setup',
            'Facebook/Instagram integration',
            'LinkedIn advertising',
            'Amazon DSP connection'
          ]
        },
        {
          title: 'Audience Development',
          duration: '2 weeks',
          description: 'AI-powered audience segmentation and targeting',
          tasks: [
            'Lookalike audience creation',
            'Behavioral targeting setup',
            'Custom audience development',
            'Retargeting campaigns'
          ]
        },
        {
          title: 'Creative Optimization',
          duration: '2 weeks',
          description: 'Dynamic creative testing and optimization',
          tasks: [
            'Ad creative development',
            'A/B testing setup',
            'Dynamic creative optimization',
            'Performance tracking'
          ]
        },
        {
          title: 'Scale & Optimize',
          duration: 'Ongoing',
          description: 'Continuous optimization and scaling',
          tasks: [
            'Budget optimization',
            'Bid strategy refinement',
            'Performance monitoring',
            'ROI maximization'
          ]
        }
      ],
      benefits: [
        '4-8x return on ad spend',
        '60% lower cost per acquisition',
        'Real-time campaign optimization',
        'Cross-platform advertising'
      ]
    },
    'seo-content': {
      title: 'SEO & Content Intelligence',
      icon: FiSearch,
      gradient: 'from-purple-600 to-pink-600',
      description: 'AI-driven SEO and content optimization strategies',
      stats: [
        { value: '300%', label: 'Organic Traffic Increase', icon: FiTrendingUp },
        { value: '60%', label: 'Content Cost Reduction', icon: FiDollarSign },
        { value: '200+', label: 'Keywords Ranked', icon: FiSearch },
        { value: '50+', label: 'Content Pieces/Month', icon: FiMessageSquare }
      ],
      phases: [
        {
          title: 'SEO Audit & Analysis',
          duration: '1-2 weeks',
          description: 'Comprehensive technical and content audit',
          tasks: [
            'Technical SEO analysis',
            'Keyword gap analysis',
            'Competitor research',
            'Content audit'
          ]
        },
        {
          title: 'Content Strategy',
          duration: '2 weeks',
          description: 'AI-powered content planning and optimization',
          tasks: [
            'Content calendar creation',
            'Topic clustering',
            'Semantic optimization',
            'User intent mapping'
          ]
        },
        {
          title: 'Implementation',
          duration: '4-6 weeks',
          description: 'Execute SEO improvements and content creation',
          tasks: [
            'On-page optimization',
            'Content creation',
            'Technical improvements',
            'Link building strategy'
          ]
        },
        {
          title: 'Monitor & Optimize',
          duration: 'Ongoing',
          description: 'Continuous monitoring and optimization',
          tasks: [
            'Ranking monitoring',
            'Traffic analysis',
            'Content optimization',
            'Performance reporting'
          ]
        }
      ],
      benefits: [
        '150-300% organic traffic growth',
        '40-60% content cost reduction',
        'Improved search rankings',
        'Higher content engagement'
      ]
    },
    'social-media-ai': {
      title: 'Social Media AI',
      icon: FiMessageSquare,
      gradient: 'from-orange-600 to-red-600',
      description: 'Automated social media management with AI',
      stats: [
        { value: '300%', label: 'Engagement Increase', icon: FiUsers },
        { value: '50+', label: 'Posts per Week', icon: FiMessageSquare },
        { value: '40%', label: 'Time Savings', icon: FiClock },
        { value: '2.5x', label: 'Follower Growth', icon: FiTrendingUp }
      ],
      phases: [
        {
          title: 'Platform Setup',
          duration: '1 week',
          description: 'Connect and configure social media platforms',
          tasks: [
            'Account integration',
            'Brand voice analysis',
            'Content audit',
            'Competitor analysis'
          ]
        },
        {
          title: 'Content Strategy',
          duration: '2 weeks',
          description: 'AI-powered content planning and creation',
          tasks: [
            'Content pillar development',
            'Posting schedule optimization',
            'Visual content creation',
            'Hashtag strategy'
          ]
        },
        {
          title: 'Automation Setup',
          duration: '1-2 weeks',
          description: 'Implement AI automation and scheduling',
          tasks: [
            'Automated posting',
            'Engagement automation',
            'Response templates',
            'Analytics tracking'
          ]
        },
        {
          title: 'Optimize & Scale',
          duration: 'Ongoing',
          description: 'Continuous optimization and growth',
          tasks: [
            'Performance analysis',
            'Content optimization',
            'Community management',
            'Growth strategies'
          ]
        }
      ],
      benefits: [
        'Automated content creation',
        'Optimal posting times',
        'Higher engagement rates',
        'Brand consistency'
      ]
    },
    'predictive-analytics': {
      title: 'Predictive Analytics',
      icon: FiBarChart3,
      gradient: 'from-indigo-600 to-purple-600',
      description: 'Advanced AI models for marketing predictions',
      stats: [
        { value: '90%', label: 'Prediction Accuracy', icon: FiTarget },
        { value: '45%', label: 'Churn Reduction', icon: FiUsers },
        { value: '35%', label: 'Revenue Increase', icon: FiDollarSign },
        { value: '25+', label: 'AI Models', icon: FiBrain }
      ],
      phases: [
        {
          title: 'Data Integration',
          duration: '2-3 weeks',
          description: 'Connect and prepare all data sources',
          tasks: [
            'Data source integration',
            'Data cleaning & preparation',
            'Historical analysis',
            'Baseline establishment'
          ]
        },
        {
          title: 'Model Development',
          duration: '3-4 weeks',
          description: 'Build and train custom AI models',
          tasks: [
            'Model architecture design',
            'Algorithm training',
            'Model validation',
            'Accuracy optimization'
          ]
        },
        {
          title: 'Dashboard Creation',
          duration: '1-2 weeks',
          description: 'Build real-time analytics dashboards',
          tasks: [
            'Dashboard design',
            'Real-time data feeds',
            'Alert system setup',
            'User training'
          ]
        },
        {
          title: 'Continuous Learning',
          duration: 'Ongoing',
          description: 'Model improvement and optimization',
          tasks: [
            'Model refinement',
            'Performance monitoring',
            'Strategy adjustments',
            'ROI tracking'
          ]
        }
      ],
      benefits: [
        '85-95% prediction accuracy',
        'Proactive decision making',
        'Risk mitigation',
        'Revenue optimization'
      ]
    }
  };

  const service = serviceData[serviceType];
  if (!service || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-2xl">
                    <SafeIcon icon={service.icon} className="text-3xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                    <p className="text-white text-opacity-90 text-lg">{service.description}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all"
                >
                  <SafeIcon icon={FiX} className="text-2xl" />
                </button>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {service.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white bg-opacity-20 p-4 rounded-xl text-center"
                  >
                    <SafeIcon icon={stat.icon} className="text-2xl mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white text-opacity-80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[60vh]">
            {/* Implementation Phases */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <SafeIcon icon={FiClock} className="text-blue-600 mr-3" />
                Implementation Roadmap
              </h3>
              <div className="space-y-6">
                {service.phases.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900">{phase.title}</h4>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {phase.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <SafeIcon icon={FiCheckCircle} className="text-green-600 text-sm" />
                            <span className="text-sm text-gray-600">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Expected Benefits */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <SafeIcon icon={FiTrendingUp} className="text-green-600 mr-3" />
                Expected Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg"
                  >
                    <SafeIcon icon={FiCheckCircle} className="text-green-600 text-xl" />
                    <span className="font-medium text-gray-900">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`bg-gradient-to-r ${service.gradient} p-6 rounded-2xl text-white text-center`}
            >
              <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-white text-opacity-90 mb-4">
                Let our experts create a custom {service.title.toLowerCase()} strategy for your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-shadow flex items-center space-x-2 mx-auto"
              >
                <span>Schedule Free Consultation</span>
                <SafeIcon icon={FiArrowRight} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceInfoModal;