import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as FiIcons from 'react-icons/fi'
import SafeIcon from '../common/SafeIcon'

const { FiMessageCircle, FiX, FiSend, FiUser, FiBot, FiMail, FiCalendar, FiCalculator } = FiIcons

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "👋 Hi! I'm Aria, Infabio's AI marketing assistant. I can help you with:\n\n• ROI calculations\n• Service recommendations\n• Pricing information\n• Scheduling consultations\n\nHow can I help you today?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickActions = [
    { label: 'Calculate ROI', action: 'roi-calculator', icon: FiCalculator },
    { label: 'Book Meeting', action: 'book-meeting', icon: FiCalendar },
    { label: 'Get Pricing', action: 'pricing', icon: FiMail },
    { label: 'AI Strategy', action: 'ai-strategy', icon: FiBot }
  ]

  const responses = {
    greeting: [
      "Hello! I'm here to help you discover how AI marketing can transform your business. What would you like to know?",
      "Hi there! Ready to explore AI marketing solutions? I can help with ROI calculations, service info, or scheduling a consultation.",
      "Welcome! I'm Aria, your AI marketing guide. How can I assist you today?"
    ],
    
    roi: [
      "Great question! Our AI marketing solutions typically deliver:\n\n📈 240% average ROI increase\n💰 35% cost reduction\n⚡ 60% efficiency improvement\n\nWould you like me to calculate your specific ROI potential?",
      "ROI varies by industry, but our clients typically see 4-8x returns. I can run a custom calculation for your business - what's your current monthly marketing budget?"
    ],

    pricing: [
      "Our AI marketing packages start at:\n\n🥉 Starter: $15K (3 months)\n🥈 Professional: $35K (6 months)\n🥇 Enterprise: $75K+ (12 months)\n\nEach includes strategy, implementation, and ongoing optimization. Would you like detailed pricing for your specific needs?",
      "Pricing depends on your business size and goals. Our most popular package is $35K for 6 months and includes full AI transformation. Shall I connect you with our team for a custom quote?"
    ],

    services: [
      "Infabio offers comprehensive AI marketing services:\n\n🧠 AI Strategy & Consulting\n🎯 Programmatic Advertising\n🔍 SEO & Content Intelligence\n📱 Social Media AI\n📊 Predictive Analytics\n\nWhich service interests you most?",
      "We're a full-service AI marketing agency specializing in transformation strategies. Our 360° approach covers everything from strategy to execution. What's your biggest marketing challenge?"
    ],

    consultation: [
      "I'd love to connect you with our experts! We offer free 30-minute strategy sessions where we:\n\n✅ Analyze your current marketing\n✅ Identify AI opportunities\n✅ Provide custom recommendations\n✅ Calculate potential ROI\n\nShould I help you schedule one?",
      "Perfect! Our consultation includes a comprehensive business analysis and custom AI strategy recommendations. The best way to schedule is through our contact form. Would you like me to guide you there?"
    ],

    'ai-strategy': [
      "Our AI Strategy & Consulting service is our flagship offering:\n\n📋 Comprehensive AI audit (1-2 weeks)\n🎯 Custom strategy development (2-3 weeks)\n📈 Implementation planning (1-2 weeks)\n🚀 Launch & optimization (4-6 weeks)\n\nTypical results: 240% ROI increase, 60% task automation. Want to learn more?",
      "AI Strategy is perfect for businesses ready to transform their marketing. We analyze your current setup, identify opportunities, and create a custom roadmap. Most clients see results within 60 days. Interested in a strategy session?"
    ],

    help: [
      "I can help you with:\n\n💡 Understanding our AI services\n📊 Calculating potential ROI\n💰 Getting pricing information\n📅 Scheduling consultations\n🎯 Finding the right solution\n\nWhat specific information do you need?",
      "No problem! I'm here to answer any questions about:\n\n• Our AI marketing services\n• Pricing and packages\n• ROI calculations\n• Scheduling meetings\n• Success stories\n\nWhat would you like to know?"
    ]
  }

  const getRandomResponse = (category) => {
    const categoryResponses = responses[category] || responses.help
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
  }

  const analyzeMessage = (message) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('roi') || lowerMessage.includes('return') || lowerMessage.includes('calculate')) {
      return 'roi'
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return 'pricing'
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offerings')) {
      return 'services'
    }
    if (lowerMessage.includes('meet') || lowerMessage.includes('consultation') || lowerMessage.includes('call') || lowerMessage.includes('schedule')) {
      return 'consultation'
    }
    if (lowerMessage.includes('ai strategy') || lowerMessage.includes('strategy')) {
      return 'ai-strategy'
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'greeting'
    }
    
    return 'help'
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI processing time
    setTimeout(() => {
      const responseCategory = analyzeMessage(inputValue)
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: getRandomResponse(responseCategory),
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickAction = (action) => {
    let message = ''
    
    switch (action) {
      case 'roi-calculator':
        message = 'I want to calculate my potential ROI with AI marketing'
        // Trigger ROI calculator
        setTimeout(() => {
          setIsOpen(false)
          window.dispatchEvent(new CustomEvent('openROICalculator'))
        }, 1000)
        break
      case 'book-meeting':
        message = 'I want to schedule a consultation'
        break
      case 'pricing':
        message = 'What are your pricing options?'
        break
      case 'ai-strategy':
        message = 'Tell me about AI Strategy & Consulting'
        break
      default:
        message = 'I need help with my marketing'
    }

    setInputValue(message)
    handleSendMessage()
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl z-50 hover:shadow-3xl transition-shadow"
        style={{ zIndex: 1000 }}
      >
        <SafeIcon icon={isOpen ? FiX : FiMessageCircle} className="text-2xl" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
            style={{ zIndex: 999 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiBot} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold">Aria - AI Assistant</h3>
                    <p className="text-sm text-blue-100">Online • Ready to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                >
                  <SafeIcon icon={FiX} />
                </button>
              </div>
            </div>

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
                      <SafeIcon icon={message.type === 'user' ? FiUser : FiBot} className="text-sm" />
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-md'
                    }`}>
                      <p className="whitespace-pre-line text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
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
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <SafeIcon icon={FiBot} className="text-sm text-white" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl rounded-bl-md">
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
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.action}
                      onClick={() => handleQuickAction(action.action)}
                      className="flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-xs transition-colors"
                    >
                      <SafeIcon icon={action.icon} className="text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white dark:bg-gray-800 dark:text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-shadow disabled:opacity-50"
                >
                  <SafeIcon icon={FiSend} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIChatbot