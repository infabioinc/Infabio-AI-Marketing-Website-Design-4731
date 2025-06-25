import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ROICalculator from './ROICalculator';

const { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp, FiCalculator } = FiIcons;

const Footer = ({ onNavigate }) => {
  const [showROICalculator, setShowROICalculator] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (page) => {
    console.log('Footer navigation clicked:', page);
    if (typeof onNavigate === 'function') {
      if (['about', 'services', 'portfolio', 'contact'].includes(page)) {
        scrollToSection(page);
      } else {
        onNavigate(page);
      }
    } else {
      console.error('onNavigate is not a function or is undefined');
    }
  };

  const footerLinks = {
    Services: [
      { name: 'AI Strategy & Consulting', action: () => scrollToSection('services') },
      { name: 'Programmatic Advertising', action: () => scrollToSection('services') },
      { name: 'SEO & Content Intelligence', action: () => scrollToSection('services') },
      { name: 'Social Media AI', action: () => scrollToSection('services') },
      { name: 'Predictive Analytics', action: () => scrollToSection('services') },
      { name: 'ROI Calculator', action: () => setShowROICalculator(true) }
    ],
    Company: [
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Our Team', action: () => handleNavigation('team') },
      { name: 'Careers', action: () => handleNavigation('careers') },
      { name: 'Case Studies', action: () => scrollToSection('portfolio') },
      { name: 'Blog', action: () => handleNavigation('blog') },
      { name: 'Press', action: () => handleNavigation('press') }
    ],
    Resources: [
      { name: 'AI Marketing Guide', action: () => handleNavigation('ai-marketing-guide') },
      { name: 'Industry Reports', action: () => handleNavigation('industry-reports') },
      { name: 'Webinars', action: () => handleNavigation('webinars') },
      { name: 'White Papers', action: () => handleNavigation('white-papers') },
      { name: 'Tools & Calculators', action: () => handleNavigation('tools-calculators') },
      { name: 'Support Center', action: () => scrollToSection('contact') }
    ]
  };

  const socialLinks = [
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' }
  ];

  return (
    <>
      <footer className="bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750858457609-infabio%20%281%29.png"
                  alt="Infabio Logo"
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-bold">Infabio</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                AI Marketing Agency delivering full-service 360° digital marketing solutions since 2005. Transform your business with cutting-edge AI strategies.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <SafeIcon icon={FiMapPin} className="text-blue-400" />
                  <div>
                    <div>Manhattan, NY 10001</div>
                    <div>Bangalore, India</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <SafeIcon icon={FiPhone} className="text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <SafeIcon icon={FiMail} className="text-blue-400" />
                  <span>hello@infabio.com</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-3 rounded-lg transition-all duration-300"
                  >
                    <SafeIcon icon={social.icon} className="text-lg" />
                  </motion.a>
                ))}
              </div>
              
              <div className="text-sm text-gray-500">
                Proudly based in US and India
              </div>
            </motion.div>

            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log('Footer button clicked:', link.name);
                          link.action();
                        }}
                        className="text-gray-400 hover:text-white transition-colors text-left w-full cursor-pointer flex items-center space-x-2 group"
                      >
                        {link.name === 'ROI Calculator' && (
                          <SafeIcon icon={FiCalculator} className="text-sm group-hover:text-blue-400" />
                        )}
                        <span>{link.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-t border-gray-800 mt-16 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Infabio, Inc. All rights reserved. | Privacy Policy | Terms of Service
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowROICalculator(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow flex items-center space-x-2"
                >
                  <SafeIcon icon={FiCalculator} />
                  <span>ROI Calculator</span>
                </motion.button>
                
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <SafeIcon icon={FiArrowUp} className="text-lg" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* ROI Calculator Modal */}
      <ROICalculator 
        isOpen={showROICalculator} 
        onClose={() => setShowROICalculator(false)} 
      />
    </>
  );
};

export default Footer;