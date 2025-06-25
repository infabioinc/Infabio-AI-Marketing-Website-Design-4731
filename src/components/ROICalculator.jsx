import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalculator, FiDollarSign, FiTrendingUp, FiTarget, FiUsers, FiX, FiDownload } = FiIcons;

const ROICalculator = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    monthlyBudget: '',
    currentROAS: '',
    monthlyLeads: '',
    conversionRate: '',
    avgOrderValue: '',
    industry: 'ecommerce',
    businessSize: 'medium'
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industries = [
    { value: 'ecommerce', label: 'E-commerce & Retail', multiplier: 1.2 },
    { value: 'saas', label: 'SaaS & Technology', multiplier: 1.4 },
    { value: 'healthcare', label: 'Healthcare & Medical', multiplier: 1.1 },
    { value: 'finance', label: 'Finance & Banking', multiplier: 1.3 },
    { value: 'education', label: 'Education & Training', multiplier: 1.0 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.1 },
    { value: 'services', label: 'Professional Services', multiplier: 1.2 }
  ];

  const businessSizes = [
    { value: 'startup', label: 'Startup (<$1M revenue)', multiplier: 1.5 },
    { value: 'small', label: 'Small Business ($1M-$10M)', multiplier: 1.3 },
    { value: 'medium', label: 'Medium Business ($10M-$100M)', multiplier: 1.2 },
    { value: 'enterprise', label: 'Enterprise ($100M+)', multiplier: 1.0 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const budget = parseFloat(formData.monthlyBudget) || 0;
      const currentROAS = parseFloat(formData.currentROAS) || 2;
      const leads = parseFloat(formData.monthlyLeads) || 0;
      const conversionRate = parseFloat(formData.conversionRate) || 2;
      const avgOrderValue = parseFloat(formData.avgOrderValue) || 100;

      // Get industry and business size multipliers
      const industryData = industries.find(i => i.value === formData.industry);
      const businessData = businessSizes.find(b => b.value === formData.businessSize);
      
      const industryMultiplier = industryData?.multiplier || 1.2;
      const businessMultiplier = businessData?.multiplier || 1.2;
      const totalMultiplier = industryMultiplier * businessMultiplier;

      // Current performance
      const currentRevenue = budget * currentROAS;
      const currentConversions = leads * (conversionRate / 100);
      const currentOrderRevenue = currentConversions * avgOrderValue;
      const totalCurrentRevenue = Math.max(currentRevenue, currentOrderRevenue);

      // Projected improvements with AI
      const aiImprovements = {
        roasIncrease: 2.4 * totalMultiplier, // 240% base improvement
        conversionIncrease: 1.5 * totalMultiplier, // 150% base improvement
        leadQualityIncrease: 1.8 * totalMultiplier, // 180% base improvement
        costReduction: 0.4 * totalMultiplier // 40% cost reduction
      };

      // Calculate new performance
      const newROAS = currentROAS * aiImprovements.roasIncrease;
      const newConversionRate = conversionRate * aiImprovements.conversionIncrease;
      const newLeads = leads * aiImprovements.leadQualityIncrease;
      const reducedBudget = budget * (1 - aiImprovements.costReduction);

      const newRevenue = Math.max(
        reducedBudget * newROAS,
        newLeads * (newConversionRate / 100) * avgOrderValue
      );

      const monthlyIncrease = newRevenue - totalCurrentRevenue;
      const annualIncrease = monthlyIncrease * 12;
      const roiPercentage = ((newRevenue - totalCurrentRevenue) / totalCurrentRevenue) * 100;

      // Implementation timeline
      const implementationMonths = formData.businessSize === 'enterprise' ? 6 : 
                                 formData.businessSize === 'medium' ? 4 : 3;

      setResults({
        current: {
          revenue: totalCurrentRevenue,
          roas: currentROAS,
          conversions: currentConversions,
          leads: leads
        },
        projected: {
          revenue: newRevenue,
          roas: newROAS,
          conversions: newLeads * (newConversionRate / 100),
          leads: newLeads,
          conversionRate: newConversionRate
        },
        improvements: {
          monthlyIncrease,
          annualIncrease,
          roiPercentage,
          costSavings: budget - reducedBudget,
          paybackMonths: implementationMonths
        },
        timeline: {
          implementation: implementationMonths,
          fullResults: implementationMonths + 3
        }
      });

      setIsCalculating(false);
    }, 2000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(number));
  };

  const downloadReport = () => {
    if (!results) return;

    const reportContent = `
INFABIO ROI CALCULATOR REPORT
============================
Generated: ${new Date().toLocaleDateString()}

BUSINESS PROFILE
================
Industry: ${industries.find(i => i.value === formData.industry)?.label}
Business Size: ${businessSizes.find(b => b.value === formData.businessSize)?.label}
Monthly Marketing Budget: ${formatCurrency(formData.monthlyBudget)}

CURRENT PERFORMANCE
===================
Monthly Revenue: ${formatCurrency(results.current.revenue)}
ROAS: ${results.current.roas.toFixed(2)}x
Monthly Leads: ${formatNumber(results.current.leads)}
Monthly Conversions: ${formatNumber(results.current.conversions)}

PROJECTED WITH AI MARKETING
============================
Monthly Revenue: ${formatCurrency(results.projected.revenue)}
ROAS: ${results.projected.roas.toFixed(2)}x
Monthly Leads: ${formatNumber(results.projected.leads)}
Monthly Conversions: ${formatNumber(results.projected.conversions)}

EXPECTED IMPROVEMENTS
=====================
Monthly Revenue Increase: ${formatCurrency(results.improvements.monthlyIncrease)}
Annual Revenue Increase: ${formatCurrency(results.improvements.annualIncrease)}
ROI Improvement: ${results.improvements.roiPercentage.toFixed(1)}%
Monthly Cost Savings: ${formatCurrency(results.improvements.costSavings)}

IMPLEMENTATION TIMELINE
========================
Implementation Period: ${results.timeline.implementation} months
Time to Full Results: ${results.timeline.fullResults} months
Payback Period: ${results.improvements.paybackMonths} months

NEXT STEPS
==========
1. Schedule a free consultation with our AI marketing experts
2. Receive a custom strategy designed for your business
3. Begin implementation with our proven methodology
4. Track results with real-time analytics and reporting

Contact Information:
Email: hello@infabio.com
Phone: +1 (555) 123-4567
Website: https://infabio.com

© 2024 Infabio, Inc. All rights reserved.
AI Marketing Agency - New York & Bangalore
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Infabio-ROI-Report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <SafeIcon icon={FiCalculator} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">AI Marketing ROI Calculator</h2>
                <p className="text-blue-100">Calculate your potential return on investment</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <SafeIcon icon={FiX} className="text-xl" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {!results ? (
            /* Input Form */
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Marketing Budget *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={formData.monthlyBudget}
                      onChange={(e) => handleInputChange('monthlyBudget', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="10000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current ROAS (Return on Ad Spend)
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiTrendingUp} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      step="0.1"
                      value={formData.currentROAS}
                      onChange={(e) => handleInputChange('currentROAS', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="2.5"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">e.g., 3.0 means $3 revenue for every $1 spent</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Leads
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={formData.monthlyLeads}
                      onChange={(e) => handleInputChange('monthlyLeads', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Conversion Rate (%)
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiTarget} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      step="0.1"
                      value={formData.conversionRate}
                      onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="2.5"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Average Order Value
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      value={formData.avgOrderValue}
                      onChange={(e) => handleInputChange('avgOrderValue', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="150"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                  >
                    {industries.map((industry) => (
                      <option key={industry.value} value={industry.value}>
                        {industry.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Business Size
                  </label>
                  <select
                    value={formData.businessSize}
                    onChange={(e) => handleInputChange('businessSize', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                  >
                    {businessSizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={calculateROI}
                  disabled={!formData.monthlyBudget || isCalculating}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCalculating ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Calculating...</span>
                    </div>
                  ) : (
                    'Calculate ROI'
                  )}
                </motion.button>
              </div>
            </div>
          ) : (
            /* Results Display */
            <div className="space-y-8">
              {/* Current vs Projected */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current Performance</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Monthly Revenue:</span>
                      <span className="font-semibold">{formatCurrency(results.current.revenue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">ROAS:</span>
                      <span className="font-semibold">{results.current.roas.toFixed(2)}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Monthly Conversions:</span>
                      <span className="font-semibold">{formatNumber(results.current.conversions)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Projected with AI</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Monthly Revenue:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(results.projected.revenue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">ROAS:</span>
                      <span className="font-semibold text-green-600">{results.projected.roas.toFixed(2)}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Monthly Conversions:</span>
                      <span className="font-semibold text-green-600">{formatNumber(results.projected.conversions)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Improvements */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {formatCurrency(results.improvements.monthlyIncrease)}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Monthly Increase</div>
                </div>
                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {formatCurrency(results.improvements.annualIncrease)}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Annual Increase</div>
                </div>
                <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {results.improvements.roiPercentage.toFixed(1)}%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">ROI Improvement</div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Implementation Timeline</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{results.timeline.implementation} months</div>
                    <div className="text-gray-600 dark:text-gray-400">Implementation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">{results.timeline.fullResults} months</div>
                    <div className="text-gray-600 dark:text-gray-400">Full Results</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">{results.improvements.paybackMonths} months</div>
                    <div className="text-gray-600 dark:text-gray-400">Payback Period</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setResults(null)}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Recalculate
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadReport}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <SafeIcon icon={FiDownload} />
                  <span>Download Report</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ROICalculator;