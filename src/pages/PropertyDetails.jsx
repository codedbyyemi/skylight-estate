// src/pages/PropertyDetails.jsx
import React from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Maximize, MapPin, MessageCircle, Phone, Check } from 'lucide-react';

// Mock data (same as in FeaturedProperties)
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
    description: "Experience luxury living in this stunning villa with panoramic ocean views. This property features modern architecture, high-end finishes, and spacious living areas perfect for entertaining.",
    amenities: ["Swimming Pool", "Home Theater", "Gym", "Smart Home System", "24/7 Security"],
    image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop"
    ]
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
    description: "Contemporary apartment in the heart of the city. Close to all amenities, with modern finishes and excellent security.",
    amenities: ["Parking", "Security", "Generator", "Water Treatment"],
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop"
    ]
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
    description: "Perfect family home with plenty of space. Features include a large garden, modern kitchen, and multiple living areas.",
    amenities: ["Garden", "Parking", "Security", "Playground"],
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
    ]
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
    description: "Luxurious duplex in the prestigious Banana Island. Features high-end finishes, spacious rooms, and excellent security.",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Smart Home"],
    image_url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
    ]
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
    description: "Contemporary apartment in the heart of Ikoyi. Close to schools, shopping centers, and major business districts.",
    amenities: ["Parking", "Security", "Generator", "Elevator"],
    image_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
    ]
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
    description: "Spectacular beachfront mansion with breathtaking ocean views. Features include private beach access, infinity pool, and smart home technology.",
    amenities: ["Private Beach", "Infinity Pool", "Home Theater", "Gym", "Smart Home", "24/7 Security"],
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop"
    ]
  }
];

export default function PropertyDetails() {
  const { id: pathId } = useParams();
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get('id');
  
  const propertyId = pathId || queryId;
  
  // Find the property by ID (convert to number for comparison)
  const property = mockProperties.find(p => p.id === parseInt(propertyId));

  const formatPrice = (price) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'available':
        return 'bg-green-500';
      case 'sold':
        return 'bg-red-500';
      default:
        return 'bg-yellow-500';
    }
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Property Not Found</h2>
          <Link 
            to="/properties"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hello Skylight Real Estate, I'm interested in the property: ${property.title} at ${property.location}. Price: ₦${formatPrice(property.price)}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Image */}
      <div className="relative h-[500px]">
        <img 
          src={property.image_url} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <Link to="/properties">
            <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-lg">
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </Link>
        </div>

        <div className="absolute bottom-6 left-6 flex gap-2">
          <span className={`${getStatusColor(property.status)} text-white text-lg px-4 py-2 rounded-full`}>
            {property.status === 'available' ? 'For Sale' : property.status}
          </span>
          {property.featured && (
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-lg px-4 py-2 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg mb-8 transition-colors duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <MapPin className="h-5 w-5" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  ₦{formatPrice(property.price)}
                </p>
              </div>

              {/* Property Features */}
              <div className="flex flex-wrap gap-6 py-6 border-y border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <Bed className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{property.bedrooms}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <Bath className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{property.bathrooms}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <Maximize className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{property.size}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Total Area</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Description</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500 dark:text-green-400" />
                        <span className="text-gray-600 dark:text-gray-400">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gallery */}
            {property.gallery && property.gallery.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-40 object-cover rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg sticky top-24 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Interested in this property?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Contact us now to schedule a viewing or get more information about this property.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/2348000000000?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-full text-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </button>
                </a>
                
                <a href="tel:+2348000000000" className="block">
                  <button className="w-full border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white py-3 rounded-full text-lg font-medium flex items-center justify-center gap-2 transition-all">
                    <Phone className="h-5 w-5" />
                    Call Us Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}