import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { emailService } from '../services/emailService';

const {
  FiBrain, FiTarget, FiSearch, FiMessageSquare, FiBarChart3, FiSmartphone, FiGlobe, FiTrendingUp,
  FiUsers, FiDollarSign, FiBuilding, FiShoppingCart, FiHeart, FiTool, FiBookOpen, FiArrowRight,
  FiCheck, FiMail
} = FiIcons;

const NeedsAnalysisForm = ({ onComplete }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    industry: '',
    businessSize: '',
    currentRevenue: '',
    
    // Current Marketing Situation
    currentMarketing: [],
    marketingBudget: '',
    biggestChallenges: [],
    
    // Goals and Objectives
    primaryGoals: [],
    timeframe: '',
    successMetrics: [],
    
    // Service Preferences
    priorityServices: [],
    previousExperience: '',
    
    // Contact Information
    contactName: '',
    email: '',
    phone: '',
    preferredContact: ''
  });

  const sections = [
    {
      title: 'Business Information',
      subtitle: 'Tell us about your business',
      fields: ['businessName', 'industry', 'businessSize', 'currentRevenue']
    },
    {
      title: 'Current Marketing',
      subtitle: 'What are you doing now?',
      fields: ['currentMarketing', 'marketingBudget', 'biggestChallenges']
    },
    {
      title: 'Goals & Objectives',
      subtitle: 'What do you want to achieve?',
      fields: ['primaryGoals', 'timeframe', 'successMetrics']
    },
    {
      title: 'Service Preferences',
      subtitle: 'What interests you most?',
      fields: ['priorityServices', 'previousExperience']
    },
    {
      title: 'Contact Details',
      subtitle: 'How can we reach you?',
      fields: ['contactName', 'email', 'phone', 'preferredContact']
    }
  ];

  const industries = [
    { value: 'technology', label: 'Technology & Software', icon: FiTool },
    { value: 'ecommerce', label: 'E-commerce & Retail', icon: FiShoppingCart },
    { value: 'healthcare', label: 'Healthcare & Medical', icon: FiHeart },
    { value: 'finance', label: 'Finance & Banking', icon: FiDollarSign },
    { value: 'education', label: 'Education & Training', icon: FiBookOpen },
    { value: 'manufacturing', label: 'Manufacturing', icon: FiBuilding },
    { value: 'other', label: 'Other', icon: FiGlobe }
  ];

  const businessSizes = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small Business (11-50 employees)' },
    { value: 'medium', label: 'Medium Business (51-200 employees)' },
    { value: 'large', label: 'Large Enterprise (200+ employees)' }
  ];

  const revenueRanges = [
    { value: 'under-100k', label: 'Under $100K' },
    { value: '100k-500k', label: '$100K - $500K' },
    { value: '500k-1m', label: '$500K - $1M' },
    { value: '1m-5m', label: '$1M - $5M' },
    { value: '5m-plus', label: '$5M+' }
  ];

  const marketingChannels = [
    { value: 'social-media', label: 'Social Media', icon: FiMessageSquare },
    { value: 'seo', label: 'SEO & Content', icon: FiSearch },
    { value: 'paid-ads', label: 'Paid Advertising', icon: FiTarget },
    { value: 'email', label: 'Email Marketing', icon: FiMessageSquare },
    { value: 'analytics', label: 'Analytics & Data', icon: FiBarChart3 },
    { value: 'mobile', label: 'Mobile Marketing', icon: FiSmartphone },
    { value: 'none', label: 'No Current Marketing', icon: FiGlobe }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5K/month' },
    { value: '5k-15k', label: '$5K - $15K/month' },
    { value: '15k-50k', label: '$15K - $50K/month' },
    { value: '50k-plus', label: '$50K+/month' }
  ];

  const challenges = [
    { value: 'low-traffic', label: 'Low Website Traffic', icon: FiTrendingUp },
    { value: 'poor-conversion', label: 'Poor Conversion Rates', icon: FiTarget },
    { value: 'lead-generation', label: 'Lead Generation', icon: FiUsers },
    { value: 'brand-awareness', label: 'Brand Awareness', icon: FiMessageSquare },
    { value: 'customer-retention', label: 'Customer Retention', icon: FiHeart },
    { value: 'roi-tracking', label: 'ROI Tracking', icon: FiBarChart3 },
    { value: 'competition', label: 'Competitive Pressure', icon: FiTarget }
  ];

  const primaryGoals = [
    { value: 'increase-revenue', label: 'Increase Revenue', icon: FiDollarSign },
    { value: 'generate-leads', label: 'Generate More Leads', icon: FiUsers },
    { value: 'brand-awareness', label: 'Build Brand Awareness', icon: FiMessageSquare },
    { value: 'improve-conversion', label: 'Improve Conversion Rates', icon: FiTarget },
    { value: 'expand-market', label: 'Expand Market Reach', icon: FiGlobe },
    { value: 'customer-retention', label: 'Improve Customer Retention', icon: FiHeart }
  ];

  const timeframes = [
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: '12-months', label: '12 Months' },
    { value: '18-months', label: '18+ Months' }
  ];

  const successMetrics = [
    { value: 'revenue-growth', label: 'Revenue Growth', icon: FiDollarSign },
    { value: 'lead-volume', label: 'Lead Volume', icon: FiUsers },
    { value: 'website-traffic', label: 'Website Traffic', icon: FiTrendingUp },
    { value: 'conversion-rate', label: 'Conversion Rate', icon: FiTarget },
    { value: 'brand-mentions', label: 'Brand Mentions', icon: FiMessageSquare },
    { value: 'customer-lifetime', label: 'Customer Lifetime Value', icon: FiHeart }
  ];

  const priorityServices = [
    { value: 'ai-strategy', label: 'AI Strategy & Consulting', icon: FiBrain },
    { value: 'programmatic-ads', label: 'Programmatic Advertising', icon: FiTarget },
    { value: 'seo-content', label: 'SEO & Content Intelligence', icon: FiSearch },
    { value: 'social-media-ai', label: 'Social Media AI', icon: FiMessageSquare },
    { value: 'predictive-analytics', label: 'Predictive Analytics', icon: FiBarChart3 },
    { value: 'mobile-marketing', label: 'Mobile Marketing AI', icon: FiSmartphone },
    { value: 'digital-transformation', label: 'Digital Transformation', icon: FiGlobe },
    { value: 'growth-hacking', label: 'Growth Hacking', icon: FiTrendingUp }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const validateCurrentSection = () => {
    const currentFields = sections[currentSection].fields;
    
    switch (currentSection) {
      case 0: // Business Information
        return formData.businessName && formData.industry && formData.businessSize;
      case 1: // Current Marketing
        return formData.marketingBudget && formData.biggestChallenges.length > 0;
      case 2: // Goals & Objectives
        return formData.primaryGoals.length > 0 && formData.timeframe;
      case 3: // Service Preferences
        return formData.priorityServices.length > 0;
      case 4: // Contact Details
        return formData.contactName && formData.email;
      default:
        return true;
    }
  };

  const nextSection = () => {
    if (!validateCurrentSection()) {
      alert('Please fill in all required fields before continuing.');
      return;
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      handleSubmit();
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.businessName || !formData.contactName || !formData.email) {
        alert('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      // Analyze the form data to determine primary service recommendations
      const analysis = analyzeNeeds(formData);
      
      console.log('Submitting form with data:', formData);
      console.log('Analysis results:', analysis);

      // Send email with form data
      const emailResult = await emailService.sendFormData(formData, analysis);
      
      if (emailResult.success) {
        setSubmitSuccess(true);
        console.log('Form data sent successfully via', emailResult.method);
      } else {
        console.warn('Email sending failed, but data was stored locally');
      }

      // Complete the form process
      onComplete(analysis);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still proceed with analysis even if email fails
      const analysis = analyzeNeeds(formData);
      onComplete(analysis);
    } finally {
      setIsSubmitting(false);
    }
  };

  const analyzeNeeds = (data) => {
    let recommendedServices = [];
    let urgencyLevel = 'medium';
    let estimatedBudget = data.marketingBudget;

    // Analyze priority services and challenges to recommend specific flows
    if (data.priorityServices.includes('ai-strategy') || data.biggestChallenges.includes('roi-tracking')) {
      recommendedServices.push('ai-strategy');
    }
    
    if (data.priorityServices.includes('programmatic-ads') || data.biggestChallenges.includes('lead-generation')) {
      recommendedServices.push('programmatic-ads');
    }
    
    if (data.priorityServices.includes('seo-content') || data.biggestChallenges.includes('low-traffic')) {
      recommendedServices.push('seo-content');
    }
    
    if (data.priorityServices.includes('social-media-ai') || data.biggestChallenges.includes('brand-awareness')) {
      recommendedServices.push('social-media-ai');
    }
    
    if (data.priorityServices.includes('predictive-analytics') || data.biggestChallenges.includes('customer-retention')) {
      recommendedServices.push('predictive-analytics');
    }

    // Determine urgency based on timeframe
    if (data.timeframe === '3-months') urgencyLevel = 'high';
    else if (data.timeframe === '18-months') urgencyLevel = 'low';

    return {
      clientData: data,
      recommendedServices,
      primaryService: recommendedServices[0] || 'ai-strategy',
      urgencyLevel,
      estimatedBudget,
      customRecommendations: generateCustomRecommendations(data)
    };
  };

  const generateCustomRecommendations = (data) => {
    const recommendations = [];
    
    if (data.businessSize === 'startup') {
      recommendations.push('Focus on cost-effective growth hacking strategies');
      recommendations.push('Implement AI-powered lead generation systems');
    }
    
    if (data.industry === 'ecommerce') {
      recommendations.push('Programmatic advertising for product campaigns');
      recommendations.push('Predictive analytics for inventory and pricing');
    }
    
    if (data.primaryGoals.includes('increase-revenue')) {
      recommendations.push('Conversion rate optimization through AI');
      recommendations.push('Customer lifetime value enhancement programs');
    }

    return recommendations;
  };

  const renderBusinessInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Name *
        </label>
        <input
          type="text"
          value={formData.businessName}
          onChange={(e) => handleInputChange('businessName', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
          placeholder="Your business name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Industry *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {industries.map((industry) => (
            <motion.button
              key={industry.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleInputChange('industry', industry.value)}
              className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                formData.industry === industry.value
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <SafeIcon icon={industry.icon} className="text-xl" />
              <span className="font-medium">{industry.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Business Size *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {businessSizes.map((size) => (
            <motion.button
              key={size.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleInputChange('businessSize', size.value)}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.businessSize === size.value
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium">{size.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Annual Revenue
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {revenueRanges.map((range) => (
            <motion.button
              key={range.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleInputChange('currentRevenue', range.value)}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.currentRevenue === range.value
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium">{range.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrentMarketing = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Current Marketing Channels (Select all that apply)
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {marketingChannels.map((channel) => (
            <motion.button
              key={channel.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMultiSelect('currentMarketing', channel.value)}
              className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                formData.currentMarketing.includes(channel.value)
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <SafeIcon icon={channel.icon} className="text-xl" />
              <span className="font-medium">{channel.label}</span>
              {formData.currentMarketing.includes(channel.value) && (
                <SafeIcon icon={FiCheck} className="text-blue-600 ml-auto" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Monthly Marketing Budget *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {budgetRanges.map((budget) => (
            <motion.button
              key={budget.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleInputChange('marketingBudget', budget.value)}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.marketingBudget === budget.value
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium">{budget.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Biggest Marketing Challenges (Select all that apply) *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {challenges.map((challenge) => (
            <motion.button
              key={challenge.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMultiSelect('biggestChallenges', challenge.value)}
              className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                formData.biggestChallenges.includes(challenge.value)
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <SafeIcon icon={challenge.icon} className="text-xl" />
              <span className="font-medium">{challenge.label}</span>
              {formData.biggestChallenges.includes(challenge.value) && (
                <SafeIcon icon={FiCheck} className="text-blue-600 ml-auto" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGoalsObjectives = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Primary Goals (Select all that apply) *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {primaryGoals.map((goal) => (
            <motion.button
              key={goal.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMultiSelect('primaryGoals', goal.value)}
              className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                formData.primaryGoals.includes(goal.value)
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <SafeIcon icon={goal.icon} className="text-xl" />
              <span className="font-medium">{goal.label}</span>
              {formData.primaryGoals.includes(goal.value) && (
                <SafeIcon icon={FiCheck} className="text-blue-600 ml-auto" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Desired Timeframe for Results *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {timeframes.map((timeframe) => (
            <motion.button
              key={timeframe.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleInputChange('timeframe', timeframe.value)}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.timeframe === timeframe.value
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium">{timeframe.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Success Metrics (Select all that apply)
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {successMetrics.map((metric) => (
            <motion.button
              key={metric.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMultiSelect('successMetrics', metric.value)}
              className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                formData.successMetrics.includes(metric.value)
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <SafeIcon icon={metric.icon} className="text-xl" />
              <span className="font-medium">{metric.label}</span>
              {formData.successMetrics.includes(metric.value) && (
                <SafeIcon icon={FiCheck} className="text-blue-600 ml-auto" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderServicePreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Priority Services (Select your top 3) *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {priorityServices.map((service) => (
            <motion.button
              key={service.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMultiSelect('priorityServices', service.value)}
              className={`p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                formData.priorityServices.includes(service.value)
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              disabled={!formData.priorityServices.includes(service.value) && formData.priorityServices.length >= 3}
            >
              <SafeIcon icon={service.icon} className="text-xl" />
              <span className="font-medium">{service.label}</span>
              {formData.priorityServices.includes(service.value) && (
                <SafeIcon icon={FiCheck} className="text-blue-600 ml-auto" />
              )}
            </motion.button>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Selected: {formData.priorityServices.length}/3
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Previous AI/Marketing Experience
        </label>
        <textarea
          value={formData.previousExperience}
          onChange={(e) => handleInputChange('previousExperience', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Tell us about your previous experience with AI marketing tools, agencies, or campaigns..."
        />
      </div>
    </div>
  );

  const renderContactDetails = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            value={formData.contactName}
            onChange={(e) => handleInputChange('contactName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Preferred Contact Method
        </label>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { value: 'email', label: 'Email' },
            { value: 'phone', label: 'Phone' },
            { value: 'both', label: 'Both' }
          ].map((method) => (
            <motion.button
              key={method.value}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleInputChange('preferredContact', method.value)}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.preferredContact === method.value
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium">{method.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 0: return renderBusinessInfo();
      case 1: return renderCurrentMarketing();
      case 2: return renderGoalsObjectives();
      case 3: return renderServicePreferences();
      case 4: return renderContactDetails();
      default: return renderBusinessInfo();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-600">
            Step {currentSection + 1} of {sections.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(((currentSection + 1) / sections.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
          />
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {sections[currentSection].title}
        </h2>
        <p className="text-gray-600">
          {sections[currentSection].subtitle}
        </p>
      </div>

      {/* Section Content */}
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        {renderSection()}
      </motion.div>

      {/* Success Message */}
      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
        >
          <SafeIcon icon={FiMail} className="text-green-600" />
          <span className="text-green-700">
            Your information has been sent to our team. We'll contact you within 24 hours!
          </span>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSection}
          disabled={currentSection === 0}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            currentSection === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSection}
          disabled={isSubmitting}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center space-x-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>{currentSection === sections.length - 1 ? 'Complete Analysis' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default NeedsAnalysisForm;