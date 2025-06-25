import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle, FiX, FiSend, FiUser, FiBrain, FiMinus } = FiIcons;

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm Greta, your AI marketing assistant. How can I help you transform your business today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickActions = [
    { text: "Tell me about AI Strategy", action: "ai-strategy" },
    { text: "Calculate my ROI", action: "roi-calculator" },
    { text: "Get a quote", action: "get-quote" },
    { text: "Schedule consultation", action: "schedule" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // AI Strategy responses
    if (lowerMessage.includes('ai') || lowerMessage.includes('strategy') || lowerMessage.includes('artificial')) {
      return "Our AI Strategy & Consulting service helps businesses transform their marketing with custom AI solutions. We've helped 500+ companies achieve an average 240% ROI increase. Would you like to learn more about our AI audit process?";
    }
    
    // ROI Calculator responses
    if (lowerMessage.includes('roi') || lowerMessage.includes('calculator') || lowerMessage.includes('return')) {
      return "Great question! Our AI marketing strategies typically deliver 240% average ROI increase. I can help you calculate your potential ROI. What's your current monthly marketing budget?";
    }
    
    // Programmatic Ads
    if (lowerMessage.includes('ads') || lowerMessage.includes('advertising') || lowerMessage.includes('programmatic')) {
      return "Our Programmatic Advertising platform uses AI to optimize your ad spend across all channels. We achieve an average 4.8x ROAS and manage over $50M in ad spend. Would you like to see how we can improve your campaigns?";
    }
    
    // SEO and Content
    if (lowerMessage.includes('seo') || lowerMessage.includes('content') || lowerMessage.includes('organic')) {
      return "Our SEO & Content Intelligence service drives 300% average traffic increases using AI-powered optimization. We create content that ranks and converts. What's your current organic traffic situation?";
    }
    
    // Social Media
    if (lowerMessage.includes('social') || lowerMessage.includes('media') || lowerMessage.includes('instagram') || lowerMessage.includes('facebook')) {
      return "Our Social Media AI creates 50+ posts per week with 300% higher engagement rates. We automate content creation while maintaining your brand voice. Which platforms are you most interested in?";
    }
    
    // Pricing and Budget
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget') || lowerMessage.includes('expensive')) {
      return "Our pricing is customized based on your business needs. We offer packages from $15K for startups to enterprise solutions. The investment typically pays for itself within 3-6 months. Would you like a custom quote?";
    }
    
    // Getting started
    if (lowerMessage.includes('start') || lowerMessage.includes('begin') || lowerMessage.includes('how') || lowerMessage.includes('first')) {
      return "Perfect! We start with a comprehensive AI audit to understand your current marketing and identify opportunities. Then we develop a custom strategy. Would you like to begin with our free consultation?";
    }
    
    // Company information
    if (lowerMessage.includes('company') || lowerMessage.includes('about') || lowerMessage.includes('infabio') || lowerMessage.includes('experience')) {
      return "Infabio has been pioneering AI marketing since 2005. We're based in New York and Bangalore, with 50+ experts who've helped 500+ companies generate over $1B in revenue. We're the trusted AI marketing partner for businesses worldwide.";
    }
    
    // Case studies and results
    if (lowerMessage.includes('results') || lowerMessage.includes('case') || lowerMessage.includes('success') || lowerMessage.includes('clients')) {
      return "We've delivered amazing results! For example, RetailMax achieved 340% revenue growth, PayFlow reduced churn by 45%, and MedConnect increased platform usage by 380%. Our average client sees 247% ROI improvement. Would you like to see specific case studies?";
    }
    
    // Contact and consultation
    if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('meeting') || lowerMessage.includes('consultation')) {
      return "I'd love to connect you with our team! We offer free 30-minute strategy consultations where we'll analyze your business and provide custom recommendations. Would you like me to schedule one for you?";
    }
    
    // Default responses for engagement
    const defaultResponses = [
      "That's a great question! As an AI marketing agency with 19 years of experience, we've seen it all. Could you tell me more about your specific marketing challenges?",
      "Interesting! We help businesses like yours achieve breakthrough results with AI marketing. What's your biggest marketing challenge right now?",
      "I'd love to help you with that! With our 500+ successful client transformations, we've probably solved similar challenges. What industry are you in?",
      "Absolutely! Our AI-powered solutions have helped companies achieve 247% average ROI increases. What specific results are you looking to achieve?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        text: generateBotResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay 1-3 seconds
  };

  const handleQuickAction = (action, text) => {
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      let response = "";
      
      switch(action) {
        case "ai-strategy":
          response = "Our AI Strategy & Consulting transforms your marketing with custom AI solutions. We start with a comprehensive audit, develop a tailored strategy, and implement solutions that typically deliver 240% ROI increases. Would you like to schedule a free strategy session?";
          break;
        case "roi-calculator":
          response = "I can help you calculate your potential ROI! Based on our 500+ client success stories, businesses typically see 240% ROI increases. What's your current monthly marketing budget so I can give you a personalized estimate?";
          break;
        case "get-quote":
          response = "I'd be happy to get you a custom quote! Our solutions range from $15K for growing businesses to enterprise packages. To provide an accurate quote, I'll need to understand your business better. What industry are you in and what's your monthly marketing budget?";
          break;
        case "schedule":
          response = "Perfect! I can schedule a free 30-minute consultation with our AI marketing experts. During this session, we'll analyze your current marketing and provide custom recommendations. What's your preferred time zone and when works best for you?";
          break;
        default:
          response = generateBotResponse(text);
      }

      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        text: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <SafeIcon icon={FiMessageCircle} className="text-2xl" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: isMinimized ? 0.8 : 1,
              height: isMinimized ? 60 : 600 
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiBrain} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold">Greta AI</h3>
                    <p className="text-sm text-white/80">Marketing Assistant</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <SafeIcon icon={FiMinus} />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <SafeIcon icon={FiX} />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col h-[500px]"
                >
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.type === 'user' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          }`}>
                            <SafeIcon icon={message.type === 'user' ? FiUser : FiBrain} className="text-sm" />
                          </div>
                          <div className={`p-3 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-blue-600 text-white rounded-br-sm'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-sm'
                          }`}>
                            <p className="text-sm leading-relaxed">{message.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <SafeIcon icon={FiBrain} className="text-white text-sm" />
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-sm">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions */}
                  {messages.length <= 1 && (
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Quick actions:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {quickActions.map((action, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickAction(action.action, action.text)}
                            className="text-xs p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                          >
                            {action.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about AI marketing..."
                        className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 dark:text-white text-sm"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <SafeIcon icon={FiSend} className="text-sm" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;