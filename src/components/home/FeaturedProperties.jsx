// src/components/home/FeaturedProperties.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';

// Complete mock data with 6 properties
const mockProperties = [
  {
    id: 1,
    title: "Luxury Villa with Ocean View",
    price: 45000000,
    location: "Lagos, Nigeria",
    bedrooms: 4,
    bathrooms: 3,
    size: "350 sqm",
    status: "available",
    featured: true,
    image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Modern Apartment in City Center",
    price: 25000000,
    location: "Abuja, Nigeria",
    bedrooms: 3,
    bathrooms: 2,
    size: "200 sqm",
    status: "available",
    featured: true,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Spacious Family Home",
    price: 38000000,
    location: "Port Harcourt, Nigeria",
    bedrooms: 5,
    bathrooms: 4,
    size: "450 sqm",
    status: "available",
    featured: true,
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Spacious Duplex in Banana Island",
    price: 450000000,
    location: "Banana Island, Lagos",
    bedrooms: 5,
    bathrooms: 4,
    size: "500 sqm",
    status: "sold",
    featured: false,
    image_url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Modern Apartment in Ikoyi",
    price: 180000000,
    location: "Ikoyi, Lagos",
    bedrooms: 3,
    bathrooms: 2,
    size: "180 sqm",
    status: "available",
    featured: false,
    image_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Beachfront Mansion in Eko Atlantic",
    price: 750000000,
    location: "Eko Atlantic, Lagos",
    bedrooms: 6,
    bathrooms: 5,
    size: "600 sqm",
    status: "available",
    featured: true,
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function FeaturedProperties() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          variants={headerVariants}
          className="text-center mb-12"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.05em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-purple-600 dark:text-purple-400 font-semibold mb-2 uppercase tracking-widest text-sm"
          >
            Featured Properties
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Premium Properties
          </h2>
          <motion.p 
            variants={headerVariants}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our handpicked selection of exceptional properties across Nigeria's most desirable locations.
          </motion.p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {mockProperties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/properties">
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 px-8 py-3 text-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl"
            >
              View All Properties
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}