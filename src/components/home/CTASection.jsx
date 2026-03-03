import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-violet-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-700/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-700/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-purple-300 font-semibold mb-4">Ready to Get Started?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Find Your
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Perfect Property Today
            </span>
          </h2>
          <p className="text-purple-200 text-lg mb-10">
            Connect with our expert team via WhatsApp for instant responses. We're here to guide you through every step of your property journey.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/2348000000000?text=Hello%20Skylight%20Real%20Estate%2C%20I%27m%20interested%20in%20your%20properties" 
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
    </section>
  );
}