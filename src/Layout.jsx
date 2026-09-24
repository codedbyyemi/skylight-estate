import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Building2, Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'Properties', page: 'Properties' },
  { name: 'Services', page: 'Services' },
  { name: 'About', page: 'About' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const location = useLocation();
  
  const isHome = currentPageName === 'Home';

  // Check for saved dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle scroll effect for navbar with direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction - IMMEDIATELY set scrollingUp true when scrolling up
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true); // Scrolling up - IMMEDIATELY true
      } else if (currentScrollY > lastScrollY) {
        setScrollingUp(false); // Scrolling down
      }
      
      // Update scroll position state
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Determine header background based on scroll direction
  const getHeaderClass = () => {
    // IMMEDIATELY turn white when scrolling up (as soon as you scroll up)
    if (scrollingUp && scrolled) {
      return 'bg-white shadow-lg';
    }
    
    // When scrolling down, use purple
    if (!scrollingUp && scrolled) {
      return 'bg-purple-900 dark:bg-gray-900 shadow-lg';
    }
    
    // At the top of home page, transparent
    if (isHome && !scrolled) {
      return 'bg-transparent';
    }
    
    // Default for other pages at top
    return 'bg-purple-900 dark:bg-gray-900';
  };

  // Determine text color based on scroll state and background
  const getTextColorClass = (isActive = false) => {
    if (isActive) {
      return 'text-orange-400'; // Active links always orange
    }
    
    if (scrollingUp && scrolled) {
      // White background - use dark text
      return 'text-gray-700 hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-400';
    }
    
    // Default - white text on purple/dark backgrounds
    return 'text-white hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-400';
  };

  // Get logo text color class
  const getLogoTextClass = () => {
    if (scrollingUp && scrolled) {
      return 'text-gray-800 dark:text-white';
    }
    return 'text-white';
  };

  // Get logo subtitle color class
  const getLogoSubtitleClass = () => {
    if (scrollingUp && scrolled) {
      return 'text-gray-500 dark:text-gray-400';
    }
    return 'text-purple-300 dark:text-gray-400';
  };

  // Get button icon color
  const getButtonIconClass = () => {
    if (scrollingUp && scrolled) {
      return 'text-gray-700 hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-400';
    }
    return 'text-white hover:text-orange-400';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header - Fixed with scroll effect */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClass()}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className={`text-xl font-bold transition-colors duration-300 ${getLogoTextClass()}`}>
                  Skylight
                </span>
                <span className={`block text-xs transition-colors duration-300 ${getLogoSubtitleClass()}`}>
                  REAL ESTATE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPageName === link.page
                      ? 'text-orange-400'
                      : getTextColorClass()
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 transition-colors ${getButtonIconClass()}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* WhatsApp Enquiry Button - Desktop */}
              <a
                href="https://wa.me/2348000000000?text=Hello%20Skylight%20Real%20Estate%2C%20I%27m%20interested%20in%20your%20properties"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold px-4 py-2 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4" />
                ENQUIRE
              </a>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`transition-colors ${getButtonIconClass()}`}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-purple-900 dark:bg-gray-900 border-purple-800 dark:border-gray-700">
                  <nav className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.page}
                        to={createPageUrl(link.page)}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          currentPageName === link.page
                            ? 'text-orange-400'
                            : 'text-white hover:text-orange-400 dark:text-gray-300 dark:hover:text-orange-400'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <a 
                      href="https://wa.me/2348000000000?text=Hello%20Skylight%20Real%20Estate%2C%20I%27m%20interested%20in%20your%20properties"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="mt-4"
                    >
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full">
                        <Phone className="h-4 w-4 mr-2" />
                        ENQUIRE NOW
                      </Button>
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Add padding-top to account for fixed header */}
      <main className={`${isHome && !scrolled ? 'pt-0' : 'pt-20'} transition-all duration-300`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Skylight</span>
                  <span className="block text-xs text-gray-400 -mt-1">REAL ESTATE</span>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner in Nigerian real estate. We help you discover, invest in, and own properties that match your dreams.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link 
                      to={createPageUrl(link.page)}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Property Sales</li>
                <li>Property Development</li>
                <li>Real Estate Consultancy</li>
                <li>Property Management</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li>123 Victoria Island, Lagos</li>
                <li>+234 800 000 0000</li>
                <li>info@skylightrealestate.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Skylight Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}