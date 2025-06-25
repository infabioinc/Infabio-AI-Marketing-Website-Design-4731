import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import ImageWithFallback from '../ImageWithFallback';

const { FiX, FiCalendar, FiUsers, FiTarget, FiTrendingUp, FiCheckCircle, FiArrowRight } = FiIcons;

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  if (!isOpen || !caseStudy) return null;

  // Enhanced case study data
  const enhancedCaseStudy = {
    'E-commerce Giant': {
      ...caseStudy,
      company: 'RetailMax',
      industry: 'E-commerce & Retail',
      duration: '12 months',
      teamSize: '8 specialists',
      challenge: 'RetailMax was struggling with increasing customer acquisition costs and declining ROAS across multiple advertising channels. Their traditional marketing approach was becoming ineffective in the competitive e-commerce landscape.',
      solution: 'We implemented a comprehensive AI marketing transformation including predictive customer analytics, automated personalization engines, and intelligent campaign optimization across all digital touchpoints.',
      implementation: [
        'AI-powered customer segmentation and lifetime value modeling',
        'Automated personalization across website and email campaigns',
        'Predictive inventory management integrated with marketing campaigns',
        'Cross-channel attribution and optimization platform',
        'Real-time bidding optimization using machine learning'
      ],
      timeline: [
        { phase: 'Discovery & Analysis', duration: '2 weeks', status: 'completed' },
        { phase: 'AI Platform Setup', duration: '6 weeks', status: 'completed' },
        { phase: 'Personalization Engine', duration: '8 weeks', status: 'completed' },
        { phase: 'Optimization & Scale', duration: '10 weeks', status: 'completed' }
      ],
      testimonial: {
        quote: "Infabio's AI transformation completely revolutionized our marketing approach. The results exceeded our wildest expectations, and we're now the market leader in our category.",
        author: 'Sarah Mitchell',
        position: 'CEO, RetailMax',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      }
    },
    'FinTech Startup': {
      ...caseStudy,
      company: 'PayFlow',
      industry: 'Financial Technology',
      duration: '8 months',
      teamSize: '6 specialists',
      challenge: 'PayFlow needed to rapidly acquire users in a highly competitive fintech market while maintaining strict compliance requirements and limited marketing budget.',
      solution: 'We developed a data-driven growth strategy using AI-powered user acquisition, behavioral analytics, and automated compliance-friendly marketing campaigns.',
      implementation: [
        'AI-driven user acquisition and onboarding optimization',
        'Behavioral analytics for product feature adoption',
        'Automated compliance monitoring for all marketing campaigns',
        'Predictive churn modeling and retention campaigns',
        'A/B testing framework for continuous optimization'
      ],
      timeline: [
        { phase: 'Market Analysis', duration: '2 weeks', status: 'completed' },
        { phase: 'Growth Framework', duration: '4 weeks', status: 'completed' },
        { phase: 'Campaign Launch', duration: '6 weeks', status: 'completed' },
        { phase: 'Scale & Optimize', duration: '12 weeks', status: 'completed' }
      ],
      testimonial: {
        quote: "The team at Infabio understood the unique challenges of fintech marketing. Their AI-driven approach helped us scale from startup to market leader while staying compliant.",
        author: 'David Chen',
        position: 'CEO, PayFlow',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      }
    },
    'Healthcare Platform': {
      ...caseStudy,
      company: 'MedConnect',
      industry: 'Healthcare Technology',
      duration: '10 months',
      teamSize: '12 specialists',
      challenge: 'MedConnect needed to improve patient engagement and platform adoption while navigating complex healthcare regulations and building trust with medical professionals.',
      solution: 'We created a comprehensive digital health marketing strategy focusing on educational content, professional networking, and AI-powered patient journey optimization.',
      implementation: [
        'HIPAA-compliant marketing automation platform',
        'Medical professional content marketing strategy',
        'Patient journey mapping and optimization',
        'Predictive analytics for treatment outcomes',
        'Telehealth adoption campaigns'
      ],
      timeline: [
        { phase: 'Compliance Setup', duration: '4 weeks', status: 'completed' },
        { phase: 'Content Strategy', duration: '6 weeks', status: 'completed' },
        { phase: 'Platform Integration', duration: '8 weeks', status: 'completed' },
        { phase: 'Growth & Scale', duration: '16 weeks', status: 'completed' }
      ],
      testimonial: {
        quote: "Infabio's expertise in healthcare marketing was exactly what we needed. They helped us build trust with both patients and providers while driving incredible growth.",
        author: 'Dr. Maria Rodriguez',
        position: 'CMO, MedConnect',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
      }
    },
    'SaaS Enterprise': {
      ...caseStudy,
      company: 'CloudSync Pro',
      industry: 'Enterprise Software',
      duration: '14 months',
      teamSize: '10 specialists',
      challenge: 'CloudSync Pro needed to transition from product-led growth to a more sophisticated marketing approach to capture enterprise clients and improve sales velocity.',
      solution: 'We built an enterprise-grade marketing automation system with advanced lead scoring, account-based marketing, and predictive sales analytics.',
      implementation: [
        'Enterprise account-based marketing platform',
        'Advanced lead scoring and qualification system',
        'Sales and marketing alignment automation',
        'Predictive analytics for deal closure probability',
        'Customer success and expansion campaigns'
      ],
      timeline: [
        { phase: 'Platform Assessment', duration: '3 weeks', status: 'completed' },
        { phase: 'ABM Setup', duration: '8 weeks', status: 'completed' },
        { phase: 'Sales Integration', duration: '10 weeks', status: 'completed' },
        { phase: 'Enterprise Scale', duration: '20 weeks', status: 'completed' }
      ],
      testimonial: {
        quote: "The transformation from startup marketing to enterprise-grade strategy was seamless with Infabio. Our sales team now has qualified leads and clear insights.",
        author: 'Michael Thompson',
        position: 'VP Marketing, CloudSync Pro',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      }
    }
  };

  const data = enhancedCaseStudy[caseStudy.title] || caseStudy;

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
          <div className="relative">
            <ImageWithFallback
              src={data.image}
              fallbackSrc={data.fallbackImage}
              alt={data.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <SafeIcon icon={FiX} className="text-white text-xl" />
            </button>

            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-4xl font-bold mb-2">{data.title}</h2>
              <div className="flex items-center space-x-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} />
                  <span>{data.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUsers} />
                  <span>{data.teamSize}</span>
                </div>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {data.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
            {/* Company Info */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{data.company}</h3>
                <span className="text-blue-600 font-medium">{data.industry}</span>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Results</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {data.results.map((result, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <SafeIcon icon={result.icon} className="text-blue-600 text-3xl mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{result.value}</div>
                    <div className="text-gray-600">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">{data.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{data.solution}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {data.implementation?.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="text-green-600 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            {data.timeline && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Timeline</h3>
                <div className="space-y-4">
                  {data.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiCheckCircle} className="text-white text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{phase.phase}</div>
                        <div className="text-sm text-gray-600">{phase.duration}</div>
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {data.testimonial && (
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "{data.testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <ImageWithFallback
                    src={data.testimonial.image}
                    alt={data.testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-bold text-gray-900">{data.testimonial.author}</div>
                    <div className="text-gray-600">{data.testimonial.position}</div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow flex items-center space-x-2 mx-auto"
              >
                <span>Start Your Transformation</span>
                <SafeIcon icon={FiArrowRight} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;