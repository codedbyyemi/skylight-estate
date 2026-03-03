import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function PropertyCard({ property }) {
  const formatPrice = (price) => {
    if (price >= 1000000000) {
      return `₦${(price / 1000000000).toFixed(1)}B`;
    }
    if (price >= 1000000) {
      return `₦${(price / 1000000).toFixed(0)}M`;
    }
    return `₦${price?.toLocaleString()}`;
  };

  return (
    <Link 
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
            <Badge className={`${property.status === 'available' ? 'bg-green-500' : property.status === 'sold' ? 'bg-red-500' : 'bg-yellow-500'} text-white`}>
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
  );
}