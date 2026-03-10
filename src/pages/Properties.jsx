import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import PropertyCard from '@/components/PropertyCard';

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

const heroVariants = {
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

const searchVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3
    }
  }
};

const resultsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + custom * 0.1,
      ease: "easeOut"
    }
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const emptyStateVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3
    }
  }
};

export default function Properties() {
  const [search, setSearch] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [status, setStatus] = useState('all');

  // MOCK DATA - Replace this with your actual API call when it's working
  const mockProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa in Lekki",
      price: 250000000,
      location: "Lekki Phase 1, Lagos",
      image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      status: "available",
      featured: true,
      bedrooms: 4,
      bathrooms: 3,
      size: "350 sqm",
      property_type: "house"
    },
    {
      id: 2,
      title: "Cozy Family Home in Ikeja",
      price: 85000000,
      location: "Ikeja GRA, Lagos",
      image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      status: "available",
      featured: false,
      bedrooms: 3,
      bathrooms: 2,
      size: "200 sqm",
      property_type: "house"
    },
    {
      id: 3,
      title: "Luxury Apartment in Victoria Island",
      price: 120000000,
      location: "Victoria Island, Lagos",
      image_url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      status: "pending",
      featured: true,
      bedrooms: 2,
      bathrooms: 2,
      size: "150 sqm",
      property_type: "apartment"
    },
    {
      id: 4,
      title: "Spacious Duplex in Banana Island",
      price: 450000000,
      location: "Banana Island, Lagos",
      image_url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      status: "sold",
      featured: false,
      bedrooms: 5,
      bathrooms: 4,
      size: "500 sqm",
      property_type: "duplex"
    },
    {
      id: 5,
      title: "Modern Apartment in Ikoyi",
      price: 180000000,
      location: "Ikoyi, Lagos",
      image_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      status: "available",
      featured: false,
      bedrooms: 3,
      bathrooms: 2,
      size: "180 sqm",
      property_type: "apartment"
    },
    {
      id: 6,
      title: "Beachfront Mansion in Eko Atlantic",
      price: 750000000,
      location: "Eko Atlantic, Lagos",
      image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      status: "available",
      featured: true,
      bedrooms: 6,
      bathrooms: 5,
      size: "600 sqm",
      property_type: "mansion"
    }
  ];

  // Use mock data instead of API call for now
  const { data: properties, isLoading } = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      // Try API first, but if it fails, return mock data
      try {
        const result = await base44.entities.Property.list('-created_date');
        console.log('API Response:', result);
        return result;
      } catch (error) {
        console.log('API failed, using mock data:', error);
        return mockProperties; // Return mock data if API fails
      }
    },
    initialData: [],
  });

  // Extract properties - adjust based on your API response structure
  // For mock data, properties is already an array
  const propertiesList = Array.isArray(properties) ? properties : properties?.data || properties?.results || [];

  const filteredProperties = propertiesList.filter((property) => {
    const matchesSearch = !search || 
      (property.title?.toLowerCase().includes(search.toLowerCase()) ||
      property.location?.toLowerCase().includes(search.toLowerCase()));
    
    const matchesType = propertyType === 'all' || property.property_type === propertyType;
    const matchesStatus = status === 'all' || property.status === status;
    
    let matchesPrice = true;
    if (priceRange !== 'all' && property.price) {
      const [min, max] = priceRange.split('-').map(Number);
      matchesPrice = property.price >= min && (max ? property.price <= max : true);
    }

    return matchesSearch && matchesType && matchesStatus && matchesPrice;
  });

  // FilterContent component with dark mode support
  const FilterContent = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Property Type
        </label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="duplex">Duplex</SelectItem>
            <SelectItem value="mansion">Mansion</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Price Range
        </label>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <SelectValue placeholder="All Prices" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-50000000">Under ₦50M</SelectItem>
            <SelectItem value="50000000-100000000">₦50M - ₦100M</SelectItem>
            <SelectItem value="100000000-200000000">₦100M - ₦200M</SelectItem>
            <SelectItem value="200000000-500000000">₦200M - ₦500M</SelectItem>
            <SelectItem value="500000000-">Above ₦500M</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Status
        </label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="sold">Sold</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button 
          variant="outline" 
          className="w-full dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
          onClick={() => {
            setPropertyType('all');
            setPriceRange('all');
            setStatus('all');
          }}
        >
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Hero */}
      <motion.div 
        variants={heroVariants}
        className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Properties
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-purple-200 dark:text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Browse through our extensive collection of premium properties across Nigeria
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <motion.div 
          variants={searchVariants}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative flex-1"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
            <Input
              placeholder="Search by title or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 py-6 rounded-full bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:placeholder:text-gray-500"
            />
          </motion.div>
          
          {/* Desktop Filters */}
          <motion.div 
            variants={searchVariants}
            className="hidden lg:flex gap-4"
          >
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-40 dark:bg-gray-800 dark:text-white dark:border-gray-700">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="duplex">Duplex</SelectItem>
                <SelectItem value="mansion">Mansion</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-40 dark:bg-gray-800 dark:text-white dark:border-gray-700">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-50000000">Under ₦50M</SelectItem>
                <SelectItem value="50000000-100000000">₦50M - ₦100M</SelectItem>
                <SelectItem value="100000000-200000000">₦100M - ₦200M</SelectItem>
                <SelectItem value="200000000-500000000">₦200M - ₦500M</SelectItem>
                <SelectItem value="500000000-">Above ₦500M</SelectItem>
              </SelectContent>
            </Select>

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-40 dark:bg-gray-800 dark:text-white dark:border-gray-700">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="lg:hidden dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent className="dark:bg-gray-900 dark:text-white dark:border-gray-800">
              <SheetHeader>
                <SheetTitle className="dark:text-white">Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>

        {/* Results Count */}
        <motion.p 
          variants={resultsVariants}
          className="text-gray-600 dark:text-gray-400 mb-6"
        >
          Showing {filteredProperties.length} properties
        </motion.p>

        {/* Properties Grid */}
        {isLoading ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                custom={i}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg animate-pulse"
              >
                <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {filteredProperties.length > 0 ? (
              <motion.div 
                key="results"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    variants={cardVariants}
                    custom={index}
                    layout
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                variants={emptyStateVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="inline-block mb-4"
                >
                  <Search className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto" />
                </motion.div>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No properties found matching your criteria
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearch('');
                    setPropertyType('all');
                    setPriceRange('all');
                    setStatus('all');
                  }}
                  className="mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                >
                  Clear all filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}