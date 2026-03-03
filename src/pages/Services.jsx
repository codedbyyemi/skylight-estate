import React from 'react';
import { Home, Building, LineChart, Settings, Shield, Users, Clock, Award, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Home,
    title: 'Property Sales',
    description: 'Buy or sell properties with confidence. We connect you with the best deals in the market. Our extensive network and market knowledge ensure you get the best value for your investment.',
    features: ['Market Analysis', 'Property Valuation', 'Negotiation Support', 'Legal Documentation'],
  },
  {
    icon: Building,
    title: 'Property Development',
    description: 'From concept to completion, we develop premium properties that exceed expectations. Our development projects focus on quality, sustainability, and long-term value.',
    features: ['Project Planning', 'Design & Architecture', 'Construction Management', 'Quality Assurance'],
  },
  {
    icon: LineChart,
    title: 'Real Estate Consultancy',
    description: 'Expert advice on property investments, market trends, and portfolio management. Make informed decisions with our comprehensive market insights and analysis.',
    features: ['Investment Advisory', 'Market Research', 'Portfolio Management', 'Risk Assessment'],
  },
  {
    icon: Settings,
    title: 'Property Management',
    description: 'Comprehensive management services to maximize your property investment returns. We handle everything from tenant relations to maintenance and financial reporting.',
    features: ['Tenant Management', 'Maintenance Services', 'Rent Collection', 'Financial Reporting'],
  },
];

const stats = [
  { icon: Shield, value: '100%', label: 'Secure Transactions' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Award, value: '500+', label: 'Properties Sold' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-3xl p-12 text-white">
                  <service.icon className="h-16 w-16 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-purple-100 text-lg">{service.description}</p>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <p className="font-semibold text-gray-900">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="text-gray-600 mt-4">Numbers that speak for our excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today and let our experts help you with your real estate needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/2348000000000?text=Hello%20Skylight%20Real%20Estate%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
            <a href="tel:+2348000000000">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}