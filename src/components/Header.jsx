import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ThemeToggle from './ThemeToggle';
import ROICalculator from './ROICalculator';

const { FiMenu, FiX, FiPlay, FiCalculator } = FiIcons;

const Header = ({ onGetStartedClick, onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showROICalculator, setShowROICalculator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', action: () => handleNavigation('home') },
    { name: 'About', action: () => handleNavigation('about') },
    { name: 'Services', action: () => handleNavigation('services') },
    { name: 'Portfolio', action: () => handleNavigation('portfolio') },
    { name: 'Contact', action: () => handleNavigation('contact') }
  ];

  const handleNavigation = (section) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => scrollToSection(section), 100);
    } else {
      scrollToSection(section);
    }
    setIsOpen(false);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStartedClick = () => {
    if (onGetStartedClick) {
      onGetStartedClick();
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavigation('home')}
            >
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750858457609-infabio%20%281%29.png"
                alt="Infabio Logo"
                className="h-16 w-auto" // Made logo double size (was h-8)
              />
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Infabio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={item.action}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowROICalculator(true)}
                className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <SafeIcon icon={FiCalculator} className="text-sm" />
                <span>ROI Calculator</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStartedClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                <SafeIcon icon={FiPlay} className="text-sm" />
                <span>Get Started</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <SafeIcon icon={isOpen ? FiX : FiMenu} className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 p-4 border dark:border-gray-700"
            >
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className="block w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-2 border-t dark:border-gray-700">
                  <button
                    onClick={() => {
                      setShowROICalculator(true);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors mb-2"
                  >
                    <SafeIcon icon={FiCalculator} className="text-sm" />
                    <span>ROI Calculator</span>
                  </button>
                  
                  <button
                    onClick={handleGetStartedClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 font-medium"
                  >
                    <SafeIcon icon={FiPlay} className="text-sm" />
                    <span>Get Started</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* ROI Calculator Modal */}
      <ROICalculator 
        isOpen={showROICalculator} 
        onClose={() => setShowROICalculator(false)} 
      />
    </>
  );
};

export default Header;