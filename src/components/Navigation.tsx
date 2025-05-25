
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:vilxardigital@gmail.com?subject=Digital Solutions Inquiry&body=Hi, I would like to know more about your digital solutions services.';
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/497b18ea-e4a7-4718-95f7-b263dccfe1ba.png" 
                alt="Vilxar Digital" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-slate-800 bg-slate-100 border border-slate-200'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleEmailClick}
              className="flex items-center space-x-2 bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-all duration-300 shadow-sm font-medium"
            >
              <Mail className="h-4 w-4" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-slate-800 bg-slate-100 border border-slate-200'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleEmailClick}
              className="w-full flex items-center justify-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-all duration-300 font-medium mt-4"
            >
              <Mail className="h-4 w-4" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
