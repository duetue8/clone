import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'CCPA Notice', href: '#ccpa' },
    { name: 'Legal', href: '#legal' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 text-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-4 w-4" />
                <span>4051 Veterans Blvd 209 121, Metairie, LA 70002, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-4 w-4" />
                <a href="mailto:info@lendinsta.com" className="hover:text-blue-300">info@lendinsta.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <a href="tel:+18183924757" className="hover:text-blue-300">+1 (818) 392-4757</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-blue-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=150&h=50&fit=crop" 
                alt="Lend Insta" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA and Contact */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#inquiry" className="btn btn-primary">
                Request Loan
              </a>
              <div className="flex items-center space-x-3 text-sm">
                <PhoneIcon className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold">+1 (818) 392-4757</div>
                  <div className="text-gray-500">Mon to Fri: 9 am to 6 pm</div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a href="#inquiry" className="btn btn-primary w-fit">
                  Request Loan
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;