import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home, Building, LineChart, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Home,
    title: 'Property Sales',
    description: 'Buy or sell properties with confidence. We connect you with the best deals in the market.',
  },
  {
    icon: Building,
    title: 'Property Development',
    description: 'From concept to completion, we develop premium properties that exceed expectations.',
  },
  {
    icon: LineChart,
    title: 'Real Estate Consultancy',
    description: 'Expert advice on property investments, market trends, and portfolio management.',
  },
  {
    icon: Settings,
    title: 'Property Management',
    description: 'Comprehensive management services to maximize your property investment returns.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">Our Services</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Comprehensive
            <br />
            <span className="text-purple-600">Real Estate Solutions</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From buying to managing, we provide end-to-end real estate services tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:bg-purple-600 group transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-purple-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                <service.icon className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-purple-100 mb-6 transition-colors">
                {service.description}
              </p>
              
              <Link to={createPageUrl('Services')} className="inline-flex items-center gap-2 text-purple-600 group-hover:text-white font-semibold transition-colors">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={createPageUrl('Services')}>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 rounded-full text-lg">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}