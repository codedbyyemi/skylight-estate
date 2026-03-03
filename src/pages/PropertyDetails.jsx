import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Bed, Bath, Maximize, MapPin, MessageCircle, Phone, Check, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function PropertyDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get('id');

  const { data: property, isLoading } = useQuery({
    queryKey: ['property', propertyId],
    queryFn: async () => {
      const properties = await base44.entities.Property.filter({ id: propertyId });
      return properties[0];
    },
    enabled: !!propertyId,
  });

  const formatPrice = (price) => {
    return `₦${price?.toLocaleString()}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-[500px] rounded-3xl mb-8" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-40" />
            </div>
            <Skeleton className="h-80" />
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
          <Link to={createPageUrl('Properties')}>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hello Skylight Real Estate, I'm interested in the property: ${property.title} at ${property.location}. Price: ${formatPrice(property.price)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[500px]">
        <img 
          src={property.image_url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200'} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <Link to={createPageUrl('Properties')}>
            <Button variant="secondary" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        <div className="absolute top-4 right-4">
          <Button 
            variant="secondary" 
            className="rounded-full"
            onClick={() => navigator.share?.({ title: property.title, url: window.location.href })}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute bottom-6 left-6 flex gap-2">
          <Badge className={`${property.status === 'available' ? 'bg-green-500' : property.status === 'sold' ? 'bg-red-500' : 'bg-yellow-500'} text-white text-lg px-4 py-2`}>
            {property.status}
          </Badge>
          {property.featured && (
            <Badge className="bg-purple-600 text-white text-lg px-4 py-2">
              Featured
            </Badge>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="h-5 w-5" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-purple-600">
                  {formatPrice(property.price)}
                </p>
              </div>

              {/* Property Features */}
              <div className="flex flex-wrap gap-6 py-6 border-y">
                {property.bedrooms && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Bed className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                      <p className="text-gray-500 text-sm">Bedrooms</p>
                    </div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Bath className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                      <p className="text-gray-500 text-sm">Bathrooms</p>
                    </div>
                  </div>
                )}
                {property.size && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Maximize className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{property.size}</p>
                      <p className="text-gray-500 text-sm">Total Area</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description || 'Contact us for more details about this property.'}
                </p>
              </div>

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gallery */}
            {property.gallery && property.gallery.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Interested in this property?</h3>
              <p className="text-gray-600 mb-6">
                Contact us now to schedule a viewing or get more information about this property.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/2348000000000?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-full text-lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
                
                <a href="tel:+2348000000000" className="block">
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-6 rounded-full text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}