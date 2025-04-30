
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-sepatublue mb-4">sepatuadhus</h2>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, amet!
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Link</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-sepatublue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-sepatublue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-sepatublue transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-sepatublue transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Layanan Utama Kita</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Deep Clean</li>
              <li className="text-gray-300">Restoration</li>
              <li className="text-gray-300">Recolour</li>
              <li className="text-gray-300">Repaint</li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                JL. Candi Panggung Barat No 5, Malang, Jawa Timur, Indonesia
              </li>
              <li className="text-gray-300">
              +62 857-0643-7771
              </li>
              <li className="text-gray-300">
                info@sepatuadhus.com
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar with copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} sepatuadhus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
