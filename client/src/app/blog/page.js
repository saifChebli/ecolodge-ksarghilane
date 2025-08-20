'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp, Search, Filter, BookOpen, Star } from "lucide-react";
import { useTranslation } from "../../lib/i18n";
import BlogCard from "../../components/BlogCard";
import BlogNewsletter from "../../components/BlogNewsletter";
import ScrollToTop from "../../components/ScrollToTop";
import BlogNavbar from "../../components/BlogNavbar";
import LanguageSwitcher from "../../components/LanguageSwitcher";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Luxury: Redefining Modern Hotel Experiences",
    excerpt: "Discover how contemporary luxury hotels are revolutionizing the guest experience through innovative design, personalized service, and cutting-edge technology that creates unforgettable memories.",
    category: "Luxury Stays",
    author: "Emma Thompson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    featured: true,
    views: 2847,
    rating: 4.9
  },
  {
    id: 2,
    title: "Culinary Excellence: A Journey Through Our Award-Winning Restaurant",
    excerpt: "Explore the exceptional dining experience that awaits you at our Michelin-starred restaurant, where every dish tells a story of passion, creativity, and culinary mastery.",
    category: "Dining",
    author: "Chef Marcus Rodriguez",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    views: 1923,
    rating: 4.8
  },
  {
    id: 3,
    title: "Wellness Redefined: The Ultimate Spa Experience",
    excerpt: "Immerse yourself in tranquility at our world-class spa, where ancient healing traditions meet modern wellness techniques for the ultimate rejuvenation experience.",
    category: "Spa & Wellness",
    author: "Dr. Sarah Chen",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    views: 1654,
    rating: 4.7
  },
  {
    id: 4,
    title: "Architectural Marvel: The Story Behind Our Iconic Design",
    excerpt: "Take a behind-the-scenes look at the architectural vision and design philosophy that shaped our hotel's stunning contemporary aesthetic and timeless elegance.",
    category: "Luxury Stays",
    author: "David Park",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    views: 1432,
    rating: 4.6
  },
  {
    id: 5,
    title: "Hidden Gems: Exploring Local Attractions Near Our Hotel",
    excerpt: "Discover the best-kept secrets and must-visit attractions in our neighborhood, curated by our local experts to enhance your stay with authentic experiences.",
    category: "Local Attractions",
    author: "Local Concierge Team",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    views: 1234,
    rating: 4.5
  },
  {
    id: 6,
    title: "Sustainable Luxury: Our Commitment to Environmental Excellence",
    excerpt: "Learn about our innovative sustainability initiatives and how we're leading the hospitality industry towards a more environmentally conscious future.",
    category: "Luxury Stays",
    author: "Sustainability Team",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    views: 987,
    rating: 4.4
  }
];

const Blog = () => {
  const { t } = useTranslation();
  const categories = [t('all'), t('luxuryStays'), t('dining'), t('spaWellness'), t('localAttractions')];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t('all'));
  const [sortBy, setSortBy] = useState("date");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === t('all') || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(b.date) - new Date(a.date);
      case "views":
        return b.views - a.views;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const featuredPost = sortedPosts.find(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      {/* Blog Navbar */}
      <BlogNavbar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            filter : 'brightness(50%)'
            
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-amber-400" />
            </motion.div>
            <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">{t('hotelBlog')}</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('storiesOfLuxury').split(' ').slice(0, -1).join(' ')}
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text"> {t('storiesOfLuxury').split(' ').slice(-1)}</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
            {t('blogSubtitle')}
          </p>

                     {/* Search Bar and Language Switcher */}
           <div className="flex flex-col items-center gap-6">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="max-w-md mx-auto"
             >
                         <div className="relative">
               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
               <input
                 type="text"
                 placeholder={t('searchArticles')}
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-full border-0 focus:ring-2 focus:ring-amber-400 focus:outline-none text-gray-800 placeholder-gray-500"
               />
             </div>
           </motion.div>
          
         </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <BookOpen className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                           <div className="text-2xl font-bold text-gray-800">{blogPosts.length}</div>
             <div className="text-sm text-gray-600">{t('articles')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Star className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                           <div className="text-2xl font-bold text-gray-800">4.8</div>
             <div className="text-sm text-gray-600">{t('avgRating')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <TrendingUp className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                           <div className="text-2xl font-bold text-gray-800">12.5K</div>
             <div className="text-sm text-gray-600">{t('totalViews')}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                           <div className="text-2xl font-bold text-gray-800">5</div>
             <div className="text-sm text-gray-600">{t('categories')}</div>
            </div>
          </motion.div>

          {/* Filters Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                             <div className="flex items-center gap-2">
                 <Filter className="w-5 h-5 text-gray-600" />
                 <h2 className="text-xl font-semibold text-gray-800">{t('filterAndSort')}</h2>
               </div>
              
              <div className="flex flex-wrap items-center gap-4">
                {/* Category Filter */}
                                 <div className="flex items-center gap-2">
                   <span className="text-sm font-medium text-gray-600">{t('category')}:</span>
                   <select
                     value={selectedCategory}
                     onChange={(e) => setSelectedCategory(e.target.value)}
                     className="px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none text-sm"
                   >
                     {categories.map(category => (
                       <option key={category} value={category}>{category}</option>
                     ))}
                   </select>
                 </div>

                {/* Sort By */}
                                 <div className="flex items-center gap-2">
                   <span className="text-sm font-medium text-gray-600">{t('sortBy')}:</span>
                   <select
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value)}
                     className="px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none text-sm"
                   >
                     <option value="date">{t('latest')}</option>
                     <option value="views">{t('mostPopular')}</option>
                     <option value="rating">{t('highestRated')}</option>
                   </select>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Featured Post */}
            {featuredPost && (
              <motion.div variants={itemVariants} className="mb-12">
                                 <div className="mb-6">
                   <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('featuredArticle')}</h2>
                   <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                 </div>
                <BlogCard post={featuredPost} isFeatured={true} />
              </motion.div>
            )}

            {/* Regular Posts */}
            {regularPosts.length > 0 && (
              <motion.div variants={itemVariants}>
                                 <div className="mb-6">
                   <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('latestArticles')}</h2>
                   <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                 </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {regularPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <BlogCard post={post} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                                 <div className="max-w-md mx-auto">
                   <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                   <h3 className="text-xl font-semibold text-gray-600 mb-2">{t('noArticlesFound')}</h3>
                   <p className="text-gray-500 mb-6">{t('tryAdjustingSearch')}</p>
                   <button
                     onClick={() => {
                       setSearchTerm("");
                       setSelectedCategory(t('all'));
                     }}
                     className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                   >
                     {t('clearFilters')}
                   </button>
                 </div>
              </motion.div>
            )}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <BlogNewsletter />
          </motion.div>
        </div>
      </section>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Blog;