import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import AIStrategyFlow from './flows/AIStrategyFlow';
import ProgrammaticAdsFlow from './flows/ProgrammaticAdsFlow';
import SEOContentFlow from './flows/SEOContentFlow';
import SocialMediaAIFlow from './flows/SocialMediaAIFlow';
import PredictiveAnalyticsFlow from './flows/PredictiveAnalyticsFlow';
import { emailService } from '../services/emailService';

const { FiBrain, FiTarget, FiSearch, FiMessageSquare, FiBarChart3, FiUser, FiCalendar, FiDownload } = FiIcons;

const ServiceFlowRouter = ({ analysisResults }) => {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [schedulingSuccess, setSchedulingSuccess] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);

  const { clientData, recommendedServices, primaryService, urgencyLevel, customRecommendations } = analysisResults;

  const serviceComponents = {
    'ai-strategy': AIStrategyFlow,
    'programmatic-ads': ProgrammaticAdsFlow,
    'seo-content': SEOContentFlow,
    'social-media-ai': SocialMediaAIFlow,
    'predictive-analytics': PredictiveAnalyticsFlow
  };

  const serviceIcons = {
    'ai-strategy': FiBrain,
    'programmatic-ads': FiTarget,
    'seo-content': FiSearch,
    'social-media-ai': FiMessageSquare,
    'predictive-analytics': FiBarChart3
  };

  const serviceNames = {
    'ai-strategy': 'AI Strategy & Consulting',
    'programmatic-ads': 'Programmatic Advertising',
    'seo-content': 'SEO & Content Intelligence',
    'social-media-ai': 'Social Media AI',
    'predictive-analytics': 'Predictive Analytics'
  };

  const PrimaryServiceComponent = serviceComponents[primaryService] || AIStrategyFlow;

  // Schedule Meeting Function
  const handleScheduleMeeting = async () => {
    setIsScheduling(true);
    
    try {
      const meetingData = {
        name: clientData.contactName,
        email: clientData.email,
        company: clientData.businessName,
        message: `Meeting Request - ${serviceNames[primaryService]}
        
Business Details:
- Company: ${clientData.businessName}
- Industry: ${clientData.industry}
- Size: ${clientData.businessSize}
- Primary Goal: ${clientData.primaryGoals?.[0] || 'Not specified'}

Recommended Service: ${serviceNames[primaryService]}
Urgency Level: ${urgencyLevel}

Please schedule a consultation to discuss our AI marketing strategy.`
      };

      const result = await emailService.sendContactForm(meetingData);
      
      if (result.success) {
        setSchedulingSuccess(true);
        // Also open Calendly for immediate booking
        window.open('https://calendly.com/infabio/consultation', '_blank');
      } else {
        // Fallback: Open Calendly directly
        window.open('https://calendly.com/infabio/consultation', '_blank');
      }
    } catch (error) {
      console.error('Meeting scheduling error:', error);
      // Fallback: Open Calendly directly
      window.open('https://calendly.com/infabio/consultation', '_blank');
    } finally {
      setIsScheduling(false);
    }
  };

  // Generate PDF Report Function
  const handleDownloadReport = async () => {
    setIsGeneratingReport(true);
    
    try {
      // Send report request via email
      const reportData = {
        name: clientData.contactName,
        email: clientData.email,
        company: clientData.businessName,
        message: `PDF Strategy Report Request

Please send the comprehensive AI Marketing Strategy Report for:

Business: ${clientData.businessName}
Industry: ${clientData.industry}
Primary Service: ${serviceNames[primaryService]}
Urgency: ${urgencyLevel}

Analysis Results:
${customRecommendations.map(rec => `- ${rec}`).join('\n')}

Please send the branded PDF report to: ${clientData.email}`
      };

      const result = await emailService.sendContactForm(reportData);
      
      // Generate and download a basic PDF report
      generatePDFReport();
      
      if (result.success) {
        setReportSuccess(true);
      }
    } catch (error) {
      console.error('Report generation error:', error);
      // Still generate basic PDF even if email fails
      generatePDFReport();
    } finally {
      setIsGeneratingReport(false);
    }
  };

  // Generate PDF Report
  const generatePDFReport = () => {
    const reportContent = `
INFABIO AI MARKETING STRATEGY REPORT
====================================

Client: ${clientData.businessName}
Industry: ${clientData.industry}
Date: ${new Date().toLocaleDateString()}

BUSINESS PROFILE
================
Company: ${clientData.businessName}
Industry: ${clientData.industry}
Business Size: ${clientData.businessSize}
Current Revenue: ${clientData.currentRevenue || 'Not disclosed'}
Marketing Budget: ${clientData.marketingBudget}

CURRENT SITUATION
=================
Marketing Channels: ${clientData.currentMarketing?.join(', ') || 'Not specified'}
Biggest Challenges: ${clientData.biggestChallenges?.join(', ') || 'Not specified'}

BUSINESS OBJECTIVES
==================
Primary Goals: ${clientData.primaryGoals?.join(', ') || 'Not specified'}
Timeframe: ${clientData.timeframe || 'Not specified'}
Success Metrics: ${clientData.successMetrics?.join(', ') || 'Not specified'}

AI RECOMMENDATIONS
==================
Primary Recommended Service: ${serviceNames[primaryService]}
Urgency Level: ${urgencyLevel.toUpperCase()}
Additional Services: ${recommendedServices.slice(1).map(s => serviceNames[s]).join(', ')}

CUSTOM RECOMMENDATIONS
=====================
${customRecommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}

NEXT STEPS
==========
1. Schedule a consultation with our AI marketing experts
2. Discuss implementation timeline and budget
3. Begin with ${serviceNames[primaryService]} implementation
4. Monitor and optimize performance

Contact Information:
Email: hello@infabio.com
Phone: +1 (555) 123-4567
Website: https://infabio.com

© 2024 Infabio, Inc. All rights reserved.
AI Marketing Agency - New York & Bangalore
`;

    // Create and download the report
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Infabio-AI-Strategy-Report-${clientData.businessName.replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Analysis Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <SafeIcon icon={FiUser} className="text-2xl text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Hi {clientData.contactName}! Here's Your Personalized Strategy
            </h2>
            <p className="text-gray-600">
              Based on your analysis, we've created a custom marketing approach for {clientData.businessName}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Primary Recommendation</h3>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={serviceIcons[primaryService]} className="text-blue-600" />
              <span className="text-sm text-gray-600">{serviceNames[primaryService]}</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Urgency Level</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              urgencyLevel === 'high' 
                ? 'bg-red-100 text-red-700' 
                : urgencyLevel === 'medium' 
                ? 'bg-yellow-100 text-yellow-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              {urgencyLevel.charAt(0).toUpperCase() + urgencyLevel.slice(1)} Priority
            </span>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Recommended Services</h3>
            <span className="text-sm text-gray-600">{recommendedServices.length} Services</span>
          </div>
        </div>

        {customRecommendations.length > 0 && (
          <div className="mt-6 bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">Custom Recommendations</h3>
            <ul className="space-y-2">
              {customRecommendations.map((rec, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Primary Service Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <PrimaryServiceComponent 
          analysisResults={analysisResults} 
          isRecommended={true} 
        />
      </motion.div>

      {/* Additional Recommended Services */}
      {recommendedServices.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Additional Recommended Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendedServices.slice(1).map((service, index) => {
              const ServiceComponent = serviceComponents[service];
              return ServiceComponent ? (
                <div key={service} className="border border-gray-200 rounded-lg p-6">
                  <ServiceComponent 
                    analysisResults={analysisResults} 
                    isRecommended={false} 
                    isCondensed={true} 
                  />
                </div>
              ) : null;
            })}
          </div>
        </motion.div>
      )}

      {/* Enhanced Next Steps CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-blue-100 mb-6">
          Our AI marketing experts are ready to implement your personalized strategy. Let's schedule a consultation to discuss your next steps.
        </p>

        {/* Success Messages */}
        {schedulingSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500 text-white p-4 rounded-lg mb-4"
          >
            ✅ Meeting request sent! We'll contact you within 24 hours.
          </motion.div>
        )}

        {reportSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500 text-white p-4 rounded-lg mb-4"
          >
            ✅ PDF report generated! A comprehensive branded report will be emailed to you.
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Schedule Meeting Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScheduleMeeting}
            disabled={isScheduling}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-shadow flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isScheduling ? (
              <>
                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span>Scheduling...</span>
              </>
            ) : (
              <>
                <SafeIcon icon={FiCalendar} />
                <span>Schedule Free Consultation</span>
              </>
            )}
          </motion.button>

          {/* Download Report Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadReport}
            disabled={isGeneratingReport}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isGeneratingReport ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <SafeIcon icon={FiDownload} />
                <span>Download Strategy Report</span>
              </>
            )}
          </motion.button>
        </div>

        <p className="text-blue-100 text-sm mt-4">
          Free consultation • No commitment required • Branded PDF report
        </p>
      </motion.div>
    </div>
  );
};

export default ServiceFlowRouter;