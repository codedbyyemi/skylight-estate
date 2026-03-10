// src/components/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Building2, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.2 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/20 dark:bg-violet-700/20 rounded-full blur-3xl"
      />

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#10B981"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
            >
              <motion.span 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-sm text-purple-100 dark:text-gray-300">Premium Real Estate Solutions</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Find Your
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Dream Property
              </span>
              <br />
              With Skylight
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-purple-200 dark:text-gray-300 mb-8 max-w-lg leading-relaxed"
            >
              Your trusted partner in Nigerian real estate. We help you discover, invest in, and own properties that match your dreams and lifestyle.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to={createPageUrl('Properties')}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-6 rounded-full text-lg shadow-xl">
                    View Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <a 
                href="https://wa.me/2348000000000?text=Hello%20Skylight%20Real%20Estate%2C%20I%27m%20interested%20in%20your%20properties" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg bg-transparent hover:text-white dark:border-gray-400 dark:hover:bg-gray-800"
                  >
                    Make Enquiry
                  </Button>
                </motion.div>
              </a>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Building2, value: '500+', label: 'Properties Listed' },
                { icon: Shield, value: '100%', label: 'Secure Transactions' },
                { icon: Award, value: '10+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-purple-300 dark:text-gray-300 text-sm leading-tight">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop"
                alt="Luxury Property"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">₦50M+</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Property Value Sold</p>
                </div>
              </motion.div>
              
              {/* Small Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ scale: 1.06 }}
                className="absolute -bottom-12 -right-6 w-40 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-700"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&auto=format&fit=crop"
                  alt="Property Interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}