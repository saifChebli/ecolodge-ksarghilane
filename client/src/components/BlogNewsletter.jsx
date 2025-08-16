import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

const BlogNewsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">{t('successfullySubscribed')}</h3>
        <p className="text-green-600 mb-4">
          {t('thankYouSubscribe')}
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          {t('subscribeAnotherEmail')}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 lg:p-12"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
          <Mail className="w-8 h-8 text-amber-600" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          {t('stayUpdated')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('newsletterSubtitle')}
        </p>
      </motion.div>

      <motion.form variants={itemVariants} onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="email"
              placeholder={t('enterEmail')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none text-gray-800 placeholder-gray-500"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading || !email}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
                              <>
                  <Send className="w-4 h-4" />
                  {t('subscribe')}
                </>
            )}
          </motion.button>
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          {t('privacyNotice')}
        </p>
      </motion.form>

      {/* Benefits */}
      <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-amber-600 font-bold">📰</span>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">{t('weeklyUpdates')}</h4>
          <p className="text-sm text-gray-600">{t('weeklyUpdatesDesc')}</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-amber-600 font-bold">🎁</span>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">{t('exclusiveContent')}</h4>
          <p className="text-sm text-gray-600">{t('exclusiveContentDesc')}</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-amber-600 font-bold">🔒</span>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">{t('privacyFirst')}</h4>
          <p className="text-sm text-gray-600">{t('privacyFirstDesc')}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogNewsletter;
