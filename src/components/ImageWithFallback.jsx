import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc, 
  className = '', 
  width, 
  height, 
  loading = 'lazy',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Default fallback images for different contexts
  const defaultFallbacks = {
    person: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    business: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    technology: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    healthcare: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    logo: '/favicon.ico'
  };

  const getFallbackSrc = () => {
    if (fallbackSrc) return fallbackSrc;
    
    if (alt?.toLowerCase().includes('person') || alt?.toLowerCase().includes('team')) {
      return defaultFallbacks.person;
    }
    if (alt?.toLowerCase().includes('logo')) {
      return defaultFallbacks.logo;
    }
    if (alt?.toLowerCase().includes('healthcare')) {
      return defaultFallbacks.healthcare;
    }
    if (alt?.toLowerCase().includes('technology')) {
      return defaultFallbacks.technology;
    }
    
    return defaultFallbacks.business;
  };

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    const fallback = getFallbackSrc();
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
      setIsLoading(true);
    }
  };

  // If even fallback fails, show placeholder
  if (hasError && imgSrc === getFallbackSrc()) {
    return (
      <div 
        className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}
        style={{ width, height, minHeight: height || '200px' }}
        {...props}
      >
        <div className="text-center text-gray-500">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-xs">Image unavailable</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
          style={{ width, height, minHeight: height || '200px' }}
        >
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
      
      <motion.img
        src={imgSrc}
        alt={alt || 'Image'}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        width={width}
        height={height}
        loading={loading}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;