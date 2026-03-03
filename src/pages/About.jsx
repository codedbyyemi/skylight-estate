import React from 'react';
import { Target, Eye, Heart, Users, Award, Building, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To provide exceptional real estate services that help our clients achieve their property dreams through integrity, expertise, and dedication.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the most trusted and preferred real estate partner in Nigeria, known for excellence, innovation, and customer satisfaction.',
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'Integrity, Excellence, Innovation, Customer Focus, and Teamwork guide everything we do at Skylight Real Estate.',
  },
];

const team = [
  {
    name: 'John Adebayo',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Sarah Okonkwo',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    name: 'Michael Eze',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Grace Nnamdi',
    role: 'Client Relations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Skylight
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Your trusted partner in Nigerian real estate since 2014
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Skylight Real Estate was founded in 2014 with a simple mission: to make property ownership accessible and seamless for every Nigerian. What started as a small team with big dreams has grown into one of the most trusted real estate companies in Lagos.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Over the years, we've helped thousands of families find their dream homes, assisted investors in building profitable property portfolios, and developed numerous premium properties across Nigeria.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we continue to set the standard for excellence in Nigerian real estate, combining local expertise with global best practices to deliver exceptional value to our clients.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
              alt="Skylight Office"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-purple-600 text-white p-8 rounded-3xl">
              <p className="text-5xl font-bold">10+</p>
              <p className="text-purple-200">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <Building className="h-10 w-10 mx-auto mb-4 text-purple-300" />
              <p className="text-4xl font-bold">500+</p>
              <p className="text-purple-300">Properties Sold</p>
            </div>
            <div>
              <Users className="h-10 w-10 mx-auto mb-4 text-purple-300" />
              <p className="text-4xl font-bold">1000+</p>
              <p className="text-purple-300">Happy Clients</p>
            </div>
            <div>
              <Award className="h-10 w-10 mx-auto mb-4 text-purple-300" />
              <p className="text-4xl font-bold">15+</p>
              <p className="text-purple-300">Awards Won</p>
            </div>
            <div>
              <Target className="h-10 w-10 mx-auto mb-4 text-purple-300" />
              <p className="text-4xl font-bold">₦50B+</p>
              <p className="text-purple-300">Property Value</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals is committed to helping you achieve your real estate goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have trusted Skylight with their real estate needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/2348000000000?text=Hello%20Skylight%20Real%20Estate%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
            <a href="tel:+2348000000000">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg">
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