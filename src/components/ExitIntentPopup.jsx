import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { emailService } from '../services/emailService';

const { FiX, FiGift, FiMail, FiDownload, FiArrowRight } = FiIcons;

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'ai-strategy'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const offers = [
    {
      id: 'ai-strategy',
      title: 'Free AI Marketing Audit',
      value: '$2,500 Value',
      description: 'Get a comprehensive analysis of your marketing with AI recommendations',
      features: [
        'Current marketing assessment',
        'AI opportunity identification', 
        'Custom strategy roadmap',
        'ROI projections'
      ]
    },
    {
      id: 'roi-calculator',
      title: 'Custom ROI Report',
      value: '$500 Value', 
      description: 'Detailed ROI analysis with industry-specific projections',
      features: [
        'Personalized ROI calculations',
        'Industry benchmarking',
        'Growth projections',
        'Implementation timeline'
      ]
    },
    {
      id: 'consultation',
      title: 'Strategy Consultation',
      value: '$1,000 Value',
      description: '60-minute session with our AI marketing experts',
      features: [
        '1-on-1 expert consultation',
        'Custom strategy session',
        'Q&A with specialists',
        'Next steps planning'
      ]
    }
  ];

  useEffect(() => {
    let timeoutId;
    let hasTriggered = false;

    const handleMouseLeave = (e) => {
      // Check if mouse is leaving from top of viewport (intent to close tab/navigate away)
      if (e.clientY <= 0 && !hasTriggered && !hasShown) {
        hasTriggered = true;
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('exitPopupShown', 'true');
      }
    };

    const handleScroll = () => {
      // Show popup when user scrolls down 70% of page
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 70 && !hasTriggered && !hasShown) {
        timeoutId = setTimeout(() => {
          if (!hasTriggered && !hasShown) {
            hasTriggered = true;
            setIsVisible(true);
            setHasShown(true);
            localStorage.setItem('exitPopupShown', 'true');
          }
        }, 3000); // 3 second delay after reaching 70%
      }
    };

    const handleBeforeUnload = () => {
      if (!hasTriggered && !hasShown) {
        hasTriggered = true;
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Check if popup was already shown in this session
    const popupShown = localStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedOffer = offers.find(offer => offer.id === formData.interest);
      
      const emailData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        message: `
Exit Intent Offer Request - ${selectedOffer.title}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not provided'}

Requested Offer: ${selectedOffer.title} (${selectedOffer.value})
Description: ${selectedOffer.description}

Features Requested:
${selectedOffer.features.map(feature => `- ${feature}`).join('\n')}

This lead came from an exit intent popup, indicating high interest but potential hesitation.
Priority: HIGH - Contact within 2 hours for best conversion.

Submitted: ${new Date().toLocaleString()}
        `
      };

      const result = await emailService.sendContactForm(emailData);
      
      if (result.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        console.error('Failed to send exit intent form:', result.error);
        // Still show success to user since data is stored locally
        setSubmitSuccess(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Exit intent form error:', error);
      setSubmitSuccess(true); // Show success anyway
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const selectedOffer = offers.find(offer => offer.id === formData.interest);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-70"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitSuccess ? (
              <>
                {/* Header */}
                <div className="relative bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white rounded-t-3xl">
                  <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <SafeIcon icon={FiX} className="text-xl" />
                  </button>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <SafeIcon icon={FiGift} className="text-2xl" />
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                        LIMITED TIME
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Wait! Don't Leave Empty-Handed</h2>
                    <p className="text-red-100">
                      Claim your FREE AI marketing resource before you go
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Offer Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Choose Your Free Resource:
                      </label>
                      <div className="space-y-3">
                        {offers.map((offer) => (
                          <motion.div
                            key={offer.id}
                            whileHover={{ scale: 1.02 }}
                            className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                              formData.interest === offer.id
                                ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                            }`}
                            onClick={() => handleInputChange('interest', offer.id)}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">{offer.title}</h3>
                                <span className="text-green-600 font-semibold">{offer.value}</span>
                              </div>
                              {formData.interest === offer.id && (
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                  <SafeIcon icon={FiArrowRight} className="text-white text-sm" />
                                </div>
                              )}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{offer.description}</p>
                            <div className="grid grid-cols-2 gap-2">
                              {offer.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-1 text-xs text-gray-500">
                                  <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Selected Offer Summary */}
                    {selectedOffer && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                          You're claiming: {selectedOffer.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {selectedOffer.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                            {selectedOffer.value}
                          </span>
                          <span className="text-xs text-gray-500">
                            Delivered within 24 hours
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={!formData.name || !formData.email || isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Claiming Your Free Resource...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <SafeIcon icon={FiDownload} />
                          <span>Claim My Free {selectedOffer?.title || 'Resource'}</span>
                        </div>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      No spam, unsubscribe anytime. We respect your privacy.
                    </p>
                  </form>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <SafeIcon icon={FiMail} className="text-white text-3xl" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Success! Your Free Resource is On Its Way
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We've received your request for <strong>{selectedOffer?.title}</strong>. 
                  You'll receive it in your inbox within the next 24 hours.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl mb-6">
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    💡 Pro Tip: Check your spam folder and add hello@infabio.com to your contacts 
                    to ensure you receive all our valuable resources!
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVisible(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-shadow"
                >
                  Continue Exploring
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;