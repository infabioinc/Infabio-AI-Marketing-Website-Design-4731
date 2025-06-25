import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import NeedsAnalysisForm from './NeedsAnalysisForm';
import ServiceFlowRouter from './ServiceFlowRouter';

const { FiArrowLeft, FiBrain } = FiIcons;

const GetStartedComponent = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState('analysis'); // 'analysis' or 'service-flow'
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAnalysisComplete = (results) => {
    console.log('Analysis completed with results:', results);
    setAnalysisResults(results);
    setCurrentStep('service-flow');
  };

  const handleBackToAnalysis = () => {
    setCurrentStep('analysis');
    setAnalysisResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
              <SafeIcon icon={FiBrain} className="text-white text-2xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Get Started with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Infabio
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            {currentStep === 'analysis' 
              ? "Tell us about your business needs and we'll create a personalized AI marketing strategy"
              : "Your personalized marketing strategy recommendations"
            }
          </p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {currentStep === 'analysis' ? (
            <motion.div
              key="analysis"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <NeedsAnalysisForm onComplete={handleAnalysisComplete} />
            </motion.div>
          ) : (
            <motion.div
              key="service-flow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <button
                  onClick={handleBackToAnalysis}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <SafeIcon icon={FiArrowLeft} />
                  <span>Back to Analysis</span>
                </button>
              </div>
              {analysisResults && (
                <ServiceFlowRouter analysisResults={analysisResults} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GetStartedComponent;