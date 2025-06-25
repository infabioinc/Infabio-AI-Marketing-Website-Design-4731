import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiUsers, FiDollarSign, FiArrowUpRight, FiFilter, FiCalendar } = FiIcons;

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'saas', label: 'SaaS' },
    { value: 'fintech', label: 'FinTech' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' }
  ];

  const services = [
    { value: 'all', label: 'All Services' },
    { value: 'ai-strategy', label: 'AI Strategy' },
    { value: 'programmatic-ads', label: 'Programmatic Ads' },
    { value: 'seo-content', label: 'SEO & Content' },
    { value: 'social-media', label: 'Social Media AI' },
    { value: 'predictive-analytics', label: 'Predictive Analytics' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Giant Transformation',
      company: 'RetailMax',
      industry: 'ecommerce',
      service: 'ai-strategy',
      duration: '12 months',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      challenge: 'Struggling with customer acquisition costs and declining ROAS across multiple channels.',
      solution: 'Implemented comprehensive AI marketing strategy with predictive analytics and automated optimization.',
      results: [
        { metric: 'Revenue Growth', value: '+340%', icon: FiDollarSign },
        { metric: 'Customer Acquisition', value: '+280%', icon: FiUsers },
        { metric: 'ROAS Improvement', value: '+125%', icon: FiTrendingUp }
      ],
      testimonial: {
        quote: "Infabio's AI strategy transformed our entire marketing approach. We've seen unprecedented growth and efficiency.",
        author: "Sarah Mitchell",
        position: "CMO, RetailMax"
      },
      featured: true
    },
    {
      id: 2,
      title: 'SaaS Startup Scale Success',
      company: 'CloudSync Pro',
      industry: 'saas',
      service: 'programmatic-ads',
      duration: '8 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      challenge: 'Limited budget for customer acquisition with high competition in the market.',
      solution: 'AI-powered programmatic advertising with intelligent audience targeting and budget optimization.',
      results: [
        { metric: 'Lead Generation', value: '+520%', icon: FiUsers },
        { metric: 'Cost Per Lead', value: '-65%', icon: FiDollarSign },
        { metric: 'Conversion Rate', value: '+180%', icon: FiTrendingUp }
      ],
      testimonial: {
        quote: "The results exceeded our expectations. We scaled from 100 to 5,000 customers in just 8 months.",
        author: "David Chen",
        position: "CEO, CloudSync Pro"
      },
      featured: true
    },
    {
      id: 3,
      title: 'FinTech Customer Journey Optimization',
      company: 'PayFlow',
      industry: 'fintech',
      service: 'predictive-analytics',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      challenge: 'High customer churn rate and difficulty in predicting user behavior patterns.',
      solution: 'Predictive analytics implementation with customer lifetime value modeling and churn prevention.',
      results: [
        { metric: 'Churn Reduction', value: '-45%', icon: FiUsers },
        { metric: 'Customer LTV', value: '+230%', icon: FiDollarSign },
        { metric: 'Retention Rate', value: '+85%', icon: FiTrendingUp }
      ],
      testimonial: {
        quote: "The predictive models helped us understand our customers like never before. Churn is now predictable and preventable.",
        author: "Maria Rodriguez",
        position: "VP Product, PayFlow"
      },
      featured: false
    },
    {
      id: 4,
      title: 'Healthcare Platform Growth',
      company: 'MedConnect',
      industry: 'healthcare',
      service: 'seo-content',
      duration: '10 months',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      challenge: 'Low organic visibility and difficulty reaching healthcare professionals online.',
      solution: 'AI-driven SEO strategy with content intelligence and medical keyword optimization.',
      results: [
        { metric: 'Organic Traffic', value: '+380%', icon: FiTrendingUp },
        { metric: 'Lead Quality', value: '+150%', icon: FiUsers },
        { metric: 'Content Engagement', value: '+220%', icon: FiDollarSign }
      ],
      testimonial: {
        quote: "Our organic presence completely transformed. We're now the go-to resource for healthcare professionals.",
        author: "Dr. James Wilson",
        position: "Founder, MedConnect"
      },
      featured: false
    },
    {
      id: 5,
      title: 'EdTech Social Media Success',
      company: 'LearnSphere',
      industry: 'education',
      service: 'social-media',
      duration: '9 months',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      challenge: 'Struggling to engage students and educators on social media platforms.',
      solution: 'AI-powered social media management with automated content creation and engagement optimization.',
      results: [
        { metric: 'Social Engagement', value: '+450%', icon: FiTrendingUp },
        { metric: 'Student Enrollment', value: '+180%', icon: FiUsers },
        { metric: 'Brand Awareness', value: '+320%', icon: FiDollarSign }
      ],
      testimonial: {
        quote: "Our social media presence went from zero to hero. Students love our content and engagement is through the roof.",
        author: "Lisa Park",
        position: "Marketing Director, LearnSphere"
      },
      featured: false
    },
    {
      id: 6,
      title: 'B2B Manufacturing Digital Transformation',
      company: 'IndustrialTech',
      industry: 'manufacturing',
      service: 'ai-strategy',
      duration: '15 months',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      challenge: 'Traditional manufacturing company needed complete digital marketing overhaul.',
      solution: 'Comprehensive AI marketing transformation including lead scoring, automation, and analytics.',
      results: [
        { metric: 'Digital Leads', value: '+600%', icon: FiUsers },
        { metric: 'Sales Cycle', value: '-40%', icon: FiTrendingUp },
        { metric: 'Marketing ROI', value: '+290%', icon: FiDollarSign }
      ],
      testimonial: {
        quote: "We went from traditional to cutting-edge. Our digital transformation exceeded all expectations.",
        author: "Robert Kim",
        position: "CEO, IndustrialTech"
      },
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesIndustry && matchesService;
  });

  const featuredStudies = filteredCaseStudies.filter(study => study.featured);
  const regularStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Client{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses. Discover how our AI marketing strategies have transformed companies across industries.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">$1B+</div>
                <div className="text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">247%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Client Retention Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFilter} className="text-gray-600" />
              <span className="font-medium text-gray-900">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                >
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
              <p className="text-xl text-gray-600">
                Our most impactful client transformations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {featuredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <SafeIcon icon={FiCalendar} className="text-gray-600 text-sm" />
                      <span className="text-sm font-medium text-gray-700">{study.duration}</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="font-medium">{study.company}</span>
                        <span>•</span>
                        <span className="capitalize">{study.industry}</span>
                        <span>•</span>
                        <span className="capitalize">{study.service.replace('-', ' ')}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center p-4 bg-white rounded-lg">
                            <SafeIcon icon={result.icon} className="text-blue-600 text-xl mx-auto mb-2" />
                            <div className="text-xl font-bold text-gray-900">{result.value}</div>
                            <div className="text-xs text-gray-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
                        "{study.testimonial.quote}"
                        <footer className="mt-2 text-sm">
                          <strong>{study.testimonial.author}</strong>, {study.testimonial.position}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Success Stories</h2>
            <p className="text-xl text-gray-600">
              Explore our complete portfolio of client transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <SafeIcon icon={FiCalendar} className="text-gray-600 text-xs" />
                    <span className="text-xs font-medium text-gray-700">{study.duration}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="font-medium">{study.company}</span>
                      <span>•</span>
                      <span className="capitalize">{study.industry}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 capitalize">
                      {study.service.replace('-', ' ')}
                    </span>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                      <span className="text-sm">Read More</span>
                      <SafeIcon icon={FiArrowUpRight} className="ml-1 text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-blue-100">
              Join hundreds of companies that have transformed their marketing with AI. Let's discuss your growth goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow"
            >
              Start Your Transformation
            </motion.button>
            <p className="text-blue-100 text-sm">
              Free consultation and strategy session • No commitment required
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;