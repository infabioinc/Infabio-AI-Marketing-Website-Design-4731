import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { emailService } from '../services/emailService';

const { FiX, FiCalendar, FiClock, FiUser, FiMail, FiPhone } = FiIcons;

const ScheduleMeetingModal = ({ isOpen, onClose, clientData, recommendedService }) => {
  const [formData, setFormData] = useState({
    preferredDate: '',
    preferredTime: '',
    timezone: 'EST',
    meetingType: 'video',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const timezones = [
    { value: 'EST', label: 'Eastern Time (EST)' },
    { value: 'PST', label: 'Pacific Time (PST)' },
    { value: 'CST', label: 'Central Time (CST)' },
    { value: 'MST', label: 'Mountain Time (MST)' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
    { value: 'IST', label: 'India Standard Time (IST)' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const meetingRequest = {
        name: clientData.contactName,
        email: clientData.email,
        company: clientData.businessName,
        message: `
MEETING REQUEST - AI Marketing Consultation

Client Information:
- Name: ${clientData.contactName}
- Company: ${clientData.businessName}
- Email: ${clientData.email}
- Phone: ${clientData.phone || 'Not provided'}

Business Details:
- Industry: ${clientData.industry}
- Business Size: ${clientData.businessSize}
- Recommended Service: ${recommendedService}

Meeting Preferences:
- Preferred Date: ${formData.preferredDate}
- Preferred Time: ${formData.preferredTime} ${formData.timezone}
- Meeting Type: ${formData.meetingType}
- Timezone: ${formData.timezone}

Additional Notes:
${formData.additionalNotes || 'None'}

Please schedule this consultation and send calendar invite to: ${clientData.email}
        `
      };

      const result = await emailService.sendContactForm(meetingRequest);
      
      if (result.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Meeting scheduling error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <SafeIcon icon={FiCalendar} className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Schedule Your Consultation</h2>
                <p className="text-gray-600">Free 30-minute AI marketing strategy session</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2"
            >
              <SafeIcon icon={FiX} className="text-xl" />
            </button>
          </div>

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <SafeIcon icon={FiCalendar} className="text-green-600 text-3xl mx-auto mb-2" />
                <h3 className="text-xl font-bold text-green-800">Meeting Request Sent!</h3>
                <p className="text-green-700">We'll send you a calendar invite within 2 hours.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Client Info Display */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Meeting For:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUser} className="text-gray-400" />
                    <span>{clientData.contactName} - {clientData.businessName}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMail} className="text-gray-400" />
                    <span>{clientData.email}</span>
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  required
                />
              </div>

              {/* Time and Timezone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleChange('preferredTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timezone *
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => handleChange('timezone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    {timezones.map(tz => (
                      <option key={tz.value} value={tz.value}>{tz.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Meeting Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meeting Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'video', label: 'Video Call (Zoom)' },
                    { value: 'phone', label: 'Phone Call' }
                  ].map(type => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => handleChange('meetingType', type.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.meetingType === type.value
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleChange('additionalNotes', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  placeholder="Any specific topics you'd like to discuss or questions you have..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-shadow disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Scheduling...</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiCalendar} />
                    <span>Schedule Meeting</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                We'll send you a calendar invite and meeting details within 2 hours
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ScheduleMeetingModal;