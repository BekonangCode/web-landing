
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navigation links
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-sepatublue ml-10">
            sepatuadhus
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 mr-10 p-4">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-gray-800 hover:text-sepatublue font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-gray-800 hover:text-sepatublue font-medium"
          >
            Layanan Kami
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-gray-800 hover:text-sepatublue font-medium"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('location')} 
            className="text-gray-800 hover:text-sepatublue font-medium"
          >
            Lokasi
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-800 hover:text-sepatublue text-left py-2 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-800 hover:text-sepatublue text-left py-2 font-medium"
            >
              Laundry Treatments
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-800 hover:text-sepatublue text-left py-2 font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-gray-800 hover:text-sepatublue text-left py-2 font-medium"
            >
              Location
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
