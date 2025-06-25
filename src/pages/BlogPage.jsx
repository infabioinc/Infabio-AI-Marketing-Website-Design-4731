import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowRight, FiTrendingUp, FiBrain, FiTarget, FiSearch } = FiIcons;

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'ai-strategy', label: 'AI Strategy' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'marketing-trends', label: 'Marketing Trends' },
    { value: 'case-studies', label: 'Case Studies' },
    { value: 'industry-insights', label: 'Industry Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Marketing: 10 Trends That Will Shape 2024',
      category: 'ai-strategy',
      excerpt: 'Discover the cutting-edge AI marketing trends that forward-thinking businesses are already implementing to stay ahead of the competition.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How Predictive Analytics Increased Our Client\'s Revenue by 340%',
      category: 'case-studies',
      excerpt: 'A deep dive into how we transformed a struggling e-commerce business using advanced predictive modeling and AI-driven insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      author: 'Priya Sharma',
      date: '2024-01-12',
      readTime: '12 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Programmatic Advertising: The Complete Guide for 2024',
      category: 'marketing-trends',
      excerpt: 'Everything you need to know about programmatic advertising, from basic concepts to advanced optimization strategies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '15 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Building Customer Lifetime Value Models with Machine Learning',
      category: 'data-science',
      excerpt: 'Learn how to create sophisticated CLV models that help businesses optimize their customer acquisition and retention strategies.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      author: 'Rajesh Kumar',
      date: '2024-01-08',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 5,
      title: 'SEO in the Age of AI: How Search is Evolving',
      category: 'industry-insights',
      excerpt: 'Explore how artificial intelligence is revolutionizing search engine optimization and what it means for content creators.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
      author: 'Emily Watson',
      date: '2024-01-05',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media AI: Automating Engagement Without Losing Authenticity',
      category: 'ai-strategy',
      excerpt: 'Discover how to leverage AI for social media management while maintaining genuine connections with your audience.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 7,
      title: 'Data Privacy and AI Marketing: Navigating the New Landscape',
      category: 'industry-insights',
      excerpt: 'Understanding how privacy regulations are shaping AI marketing strategies and best practices for compliance.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      author: 'Sarah Chen',
      date: '2024-01-01',
      readTime: '11 min read',
      featured: false
    },
    {
      id: 8,
      title: 'From Startup to Scale: An AI Marketing Transformation Journey',
      category: 'case-studies',
      excerpt: 'How a fintech startup grew from $1M to $50M ARR using our comprehensive AI marketing framework.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      author: 'Michael Rodriguez',
      date: '2023-12-28',
      readTime: '13 min read',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryIcon = (category) => {
    const icons = {
      'ai-strategy': FiBrain,
      'data-science': FiTrendingUp,
      'marketing-trends': FiTarget,
      'case-studies': FiUser,
      'industry-insights': FiSearch
    };
    return icons[category] || FiBrain;
  };

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
              AI Marketing{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, case studies, and actionable strategies 
              from our team of AI marketing specialists.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50k+</div>
                <div className="text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">15+</div>
                <div className="text-gray-600">Expert Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Weekly</div>
                <div className="text-gray-600">New Content</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                      <SafeIcon icon={getCategoryIcon(post.category)} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiUser} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                    <span>Read More</span>
                    <SafeIcon icon={FiArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-xl text-gray-600">
              Explore our complete library of AI marketing insights
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                      <SafeIcon icon={getCategoryIcon(post.category)} className="text-white text-sm" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiUser} className="text-xs" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="text-xs" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                      <span className="text-sm">Read More</span>
                      <SafeIcon icon={FiArrowRight} className="ml-1 text-sm group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Stay Updated</h2>
            <p className="text-xl text-blue-100">
              Get the latest AI marketing insights delivered to your inbox every week. 
              Join 10,000+ marketing professionals who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-shadow"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm text-blue-100">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;