import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import ServicesSection from '@/components/home/ServicesSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  const { data: properties, isLoading } = useQuery({
    queryKey: ['featured-properties'],
    queryFn: () => base44.entities.Property.filter({ featured: true }, '-created_date', 6),
    initialData: [],
  });

  return (
    <div>
      <HeroSection />
      <FeaturedProperties properties={properties} isLoading={isLoading} />
      <ServicesSection />
      <CTASection />
    </div>
  );
}