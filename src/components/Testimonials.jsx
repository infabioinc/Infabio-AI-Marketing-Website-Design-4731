import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ImageWithFallback from './ImageWithFallback';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      position: 'CEO, TechFlow Solutions',
      company: 'Fortune 500 Technology',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      fallbackImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'Infabio transformed our entire marketing approach. Their AI strategies increased our lead generation by 520% in just 6 months. The ROI has been phenomenal.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      position: 'CMO, HealthTech Innovations',
      company: 'Healthcare Technology',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      fallbackImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'Working with Infabio has been game-changing. Their predictive analytics helped us reduce customer acquisition costs by 45% while improving engagement by 275%.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      position: 'Founder, GreenCommerce',
      company: 'Sustainable E-commerce',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      fallbackImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: 'The team at Infabio understood our vision perfectly. Their 360° approach helped us scale from startup to market leader in sustainable e-commerce.',
      rating: 5
    },
    {
      name: 'David Kim',
      position: 'VP Marketing, FinanceForward',
      company: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      fallbackImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'Infabio\'s AI-powered strategies revolutionized our customer journey. We saw a 340% increase in conversion rates and unprecedented customer satisfaction.',
      rating: 5
    }
  ];

  const handleScheduleConsultation = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
            Client Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about their experience working with Infabio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-blue-600 opacity-20">
                <SafeIcon icon={FiQuote} className="text-4xl" />
              </div>

              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-lg fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <ImageWithFallback
                    src={testimonial.image}
                    fallbackSrc={testimonial.fallbackImage}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                    width={64}
                    height={64}
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 space-y-6"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <div className="text-3xl font-bold text-gray-900 mb-2">Ready to Join Them?</div>
            <p className="text-gray-600 mb-6">
              Experience the same transformative results that our clients have achieved. Let's discuss your AI marketing strategy today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleConsultation}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transition-shadow"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;