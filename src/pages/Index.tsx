
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import DiscountBar from '../components/DiscountBar';

const Index = () => {
  // State to control discount bar visibility (can be connected to backend later)
  const [showDiscount, setShowDiscount] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Location />
        <SocialMedia />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button - adjust its position to be above the discount bar when visible */}
      <div className={`${showDiscount ? 'mb-16' : ''}`}>
        <WhatsAppButton />
      </div>
      
      {/* Discount Bar */}
      <DiscountBar 
        show={showDiscount} 
        message="Limited Time Offer! 15% OFF all services" 
        timeRemaining="Ends in 2 days"
      />
    </div>
  );
};

export default Index;
