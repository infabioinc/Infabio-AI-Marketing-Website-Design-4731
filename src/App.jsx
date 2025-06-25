import React, { useState, Suspense, useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import './App.css'

// Contexts
import { ThemeProvider } from './contexts/ThemeContext'

// Core components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GetStartedComponent from './components/GetStartedComponent'

// New features
import AIChatbot from './components/AIChatbot'
import ExitIntentPopup from './components/ExitIntentPopup'
import ROICalculator from './components/ROICalculator'

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
)

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We apologize for the inconvenience. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  const [showGetStarted, setShowGetStarted] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [showROICalculator, setShowROICalculator] = useState(false)

  const handleGetStartedClick = () => {
    console.log('Get Started clicked')
    setShowGetStarted(true)
  }

  const handleBackToHome = () => {
    console.log('Back to Home clicked')
    setShowGetStarted(false)
    setCurrentPage('home')
  }

  const handleNavigate = (page) => {
    console.log('Navigate to:', page)
    setCurrentPage(page)
    setShowGetStarted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Listen for ROI calculator events from chatbot
  useEffect(() => {
    const handleOpenROICalculator = () => {
      setShowROICalculator(true)
    }

    window.addEventListener('openROICalculator', handleOpenROICalculator)
    return () => window.removeEventListener('openROICalculator', handleOpenROICalculator)
  }, [])

  console.log('App state:', { showGetStarted, currentPage })

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            {showGetStarted ? (
              <>
                <div className="fixed top-4 left-4 z-50">
                  <button
                    onClick={handleBackToHome}
                    className="bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    ← Back to Home
                  </button>
                </div>
                <Suspense fallback={<LoadingSpinner />}>
                  <GetStartedComponent onBack={handleBackToHome} />
                </Suspense>
              </>
            ) : (
              <>
                <Header
                  onGetStartedClick={handleGetStartedClick}
                  onNavigate={handleNavigate}
                  currentPage={currentPage}
                />
                <main>
                  <Hero onGetStartedClick={handleGetStartedClick} />
                  <About />
                  <Services />
                  <Portfolio />
                  <Stats />
                  <Testimonials />
                  <Contact />
                </main>
                <Footer onNavigate={handleNavigate} />

                {/* New Features */}
                <AIChatbot />
                <ExitIntentPopup />
                <ROICalculator
                  isOpen={showROICalculator}
                  onClose={() => setShowROICalculator(false)}
                />
              </>
            )}
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App