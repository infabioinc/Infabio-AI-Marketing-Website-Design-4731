import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSearch, FiEdit, FiTrendingUp, FiTarget, FiFileText, FiBarChart3 } = FiIcons;

const SEOContentFlow = ({ analysisResults, isRecommended = true, isCondensed = false }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const { clientData } = analysisResults;

  const seoServices = [
    {
      icon: FiSearch,
      title: 'Keyword Intelligence',
      description: 'AI-powered keyword research and opportunity identification',
      features: ['Competitor analysis', 'Search intent mapping', 'Long-tail opportunities'],
      timeline: '2-3 weeks'
    },
    {
      icon: FiEdit,
      title: 'Content Optimization',
      description: 'AI-driven content creation and optimization for search',
      features: ['Content gap analysis', 'Topic clustering', 'Semantic optimization'],
      timeline: 'Ongoing'
    },
    {
      icon: FiTrendingUp,
      title: 'Technical SEO',
      description: 'Complete technical audit and optimization',
      features: ['Site speed optimization', 'Core Web Vitals', 'Schema markup'],
      timeline: '4-6 weeks'
    },
    {
      icon: FiTarget,
      title: 'Local SEO',
      description: 'Location-based optimization for local businesses',
      features: ['Google My Business', 'Local citations', 'Review management'],
      timeline: '3-4 weeks'
    }
  ];

  const contentTypes = [
    { type: 'Blog Posts', volume: '8-12/month', cpc_reduction: '40-60%' },
    { type: 'Landing Pages', volume: '4-6/month', conversion_lift: '25-35%' },
    { type: 'Product Pages', volume: '10-15/month', sales_lift: '30-50%' },
    { type: 'FAQ Content', volume: '15-20/month', support_reduction: '20-30%' }
  ];

  const expectedResults = [
    {
      metric: 'Organic Traffic',
      increase: '150-300%',
      timeframe: '6-12 months',
      icon: FiTrendingUp
    },
    {
      metric: 'Keyword Rankings',
      increase: '200-500%',
      timeframe: '3-6 months',
      icon: FiTarget
    },
    {
      metric: 'Content Engagement',
      increase: '80-150%',
      timeframe: '2-4 months',
      icon: FiFileText
    },
    {
      metric: 'Lead Generation',
      increase: '100-250%',
      timeframe: '4-8 months',
      icon: FiBarChart3
    }
  ];

  if (isCondensed) {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3 mb-4">
          <SafeIcon icon={FiSearch} className="text-2xl text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">SEO & Content Intelligence</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          AI-driven SEO strategy and content optimization for maximum organic visibility.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="font-bold text-green-600">200%</div>
            <div className="text-xs text-gray-600">Traffic Increase</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="font-bold text-blue-600">60%</div>
            <div className="text-xs text-gray-600">Cost Reduction</div>
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
            <SafeIcon icon={FiSearch} className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            SEO & Content Intelligence
          </h2>
        </div>
        
        {isRecommended && (
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Recommended for {clientData.businessName}
          </div>
        )}
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dominate search results with AI-powered SEO strategies and content that drives organic traffic and conversions.
        </p>
      </div>

      {/* SEO Services */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Core SEO Services
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {seoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-600 transition-all cursor-pointer"
              onClick={() => setSelectedServices(prev => 
                prev.includes(service.title) 
                  ? prev.filter(s => s !== service.title)
                  : [...prev, service.title]
              )}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <SafeIcon icon={service.icon} className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                  <div className="text-sm text-gray-500">{service.timeline}</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content Strategy */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Content Strategy & Volume
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentTypes.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-xl font-bold text-gray-900 mb-2">{content.type}</div>
              <div className="text-2xl font-bold text-blue-600 mb-2">{content.volume}</div>
              <div className="text-sm text-gray-600">
                {content.cpc_reduction && `${content.cpc_reduction} CPC reduction`}
                {content.conversion_lift && `${content.conversion_lift} conversion lift`}
                {content.sales_lift && `${content.sales_lift} sales lift`}
                {content.support_reduction && `${content.support_reduction} support reduction`}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expected Results */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Expected Results Timeline
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expectedResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <SafeIcon icon={result.icon} className="text-white text-2xl" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{result.increase}</div>
              <div className="font-semibold text-gray-900 mb-2">{result.metric}</div>
              <div className="text-sm text-gray-600">{result.timeframe}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI-Powered Tools */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          AI-Powered SEO Tools
        </h3>
        
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Content Intelligence</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Automated content optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Real-time SEO scoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-600">Competitor content analysis</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Performance Tracking</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">Automated ranking monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">Traffic attribution analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-600">ROI calculation and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow"
        >
          Start SEO Audit
        </motion.button>
        <p className="text-sm text-gray-500 mt-2">
          Free comprehensive SEO audit and content strategy session
        </p>
      </div>
    </div>
  );
};

export default SEOContentFlow;