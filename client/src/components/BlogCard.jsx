import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

const BlogCardSkeleton = ({ isFeatured = false }) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg ${
      isFeatured ? 'lg:col-span-2' : ''
    }`}>
      <div className="relative overflow-hidden">
        <div className={`relative shimmer ${
          isFeatured ? 'h-80 lg:h-96' : 'h-64'
        }`} />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-4 bg-gray-200 rounded shimmer"></div>
          <div className="w-16 h-4 bg-gray-200 rounded shimmer"></div>
          <div className="w-12 h-4 bg-gray-200 rounded shimmer"></div>
        </div>
        <div className={`mb-3 ${
          isFeatured ? 'h-8' : 'h-6'
        } bg-gray-200 rounded shimmer`}></div>
        <div className={`mb-6 ${
          isFeatured ? 'h-20' : 'h-16'
        } bg-gray-200 rounded shimmer`}></div>
        <div className="w-24 h-4 bg-gray-200 rounded shimmer"></div>
      </div>
    </div>
  );
};

const BlogCard = ({ post, isFeatured = false, isLoading = false }) => {
  const { t } = useTranslation();
  
  if (isLoading) {
    return <BlogCardSkeleton isFeatured={isFeatured} />;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Generate a placeholder image based on category
  const getPlaceholderImage = (category) => {
    const images = {
      'Luxury Stays': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Dining': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Spa & Wellness': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Local Attractions': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    };
    return images[category] || images['Luxury Stays'];
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.div
          variants={imageVariants}
          className={`relative ${
            isFeatured ? 'h-80 lg:h-96' : 'h-64'
          }`}
        >
          <img
            src={getPlaceholderImage(post.category)}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
              {post.category}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-400 to-orange-500 text-white">
                {t('featured')}
              </span>
            </div>
          )}

          {/* Stats Overlay for Featured Posts */}
          {isFeatured && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-4">
                <span>👁️ {post.views?.toLocaleString() || '2.8K'} {t('views')}</span>
                <span>⭐ {post.rating || '4.9'}</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${
          isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-6 line-clamp-3 ${
          isFeatured ? 'text-lg' : 'text-base'
        }`}>
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <motion.button
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
        >
          {t('readMore')}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default BlogCard;