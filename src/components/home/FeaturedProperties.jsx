import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function FeaturedProperties({ properties, isLoading }) {
  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(0)}M`;
    }
    return `₦${price?.toLocaleString()}`;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold mb-2">Featured Properties</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Discover Premium
              <br />
              <span className="text-purple-600">Properties</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">Featured Properties</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Discover Premium
            <br />
            <span className="text-purple-600">Properties</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our handpicked selection of exceptional properties that offer the perfect blend of luxury, comfort, and value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.slice(0, 6).map((property) => (
            <Link 
              key={property.id} 
              to={createPageUrl(`PropertyDetails?id=${property.id}`)}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image_url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-green-500 text-white">
                      {property.status}
                    </Badge>
                    {property.featured && (
                      <Badge className="bg-purple-600 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-2xl font-bold drop-shadow-lg">
                      {formatPrice(property.price)}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-600 border-t pt-4">
                    {property.bedrooms && (
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span className="text-sm">{property.bedrooms}</span>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span className="text-sm">{property.bathrooms}</span>
                      </div>
                    )}
                    {property.size && (
                      <div className="flex items-center gap-1">
                        <Maximize className="h-4 w-4" />
                        <span className="text-sm">{property.size}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={createPageUrl('Properties')}>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}