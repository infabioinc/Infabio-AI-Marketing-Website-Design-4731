import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSearch, FiEdit, FiTrendingUp, FiTarget } = FiIcons;

const SEOContentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            SEO & Content Intelligence
          </h1>
          <p className="text-xl text-gray-600">Coming Soon - Advanced AI-driven SEO solutions</p>
        </div>
      </section>
    </div>
  );
};

export default SEOContentPage;