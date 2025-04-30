import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Deep Clean",
    price: "Rp 35.000",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timeline: "2-3 hari",
    best: true,
  },
  {
    id: 2,
    name: "Add-on Suede Care",
    price: "10.000",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timeline: "3-4 hari",
    best: false,
  },
  {
    id: 3,
    name: "Restorasi",
    price: "Start Rp 75.000",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timeline: "5-14 hari",
    best: true,
  },
  {
    id: 4,
    name: "Recolour",
    price: "Start Rp 75.000",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timeline: "3-7 hari",
    best: false,
  },
  {
    id: 5,
    name: "Repaint",
    price: "Rp 90.000",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timeline: "4-7 hari",
    best: false,
  },
  {
    id: 6,
    name: "Deep Clean One Day Service",
    price: "Rp 50.000",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timeline: "12-24 jam",
    best: false,
  }
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  
  // Open WhatsApp chat with predefined message
  const openWhatsAppChat = (service: string) => {
    const phoneNumber = "6285706437771"; // Replace with actual phone number
    const message = `Hallo, Saya tertarik dengan Layanan ${service}. Saya ingin menanyakan lebih lanjut tentang layanan ini.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Navigate to testimonials page for a specific treatment
  const openTestimonials = (serviceName: string) => {
    navigate(`/testimonials/${encodeURIComponent(serviceName)}`); // Use navigate instead of window.open
  };

  // Display all services or just the first 4 based on state
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-16 section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Semua Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quas reprehenderit voluptatum, dolorum quo repudiandae voluptatibus quae porro placeat unde mollitia illum ipsa reiciendis eos enim nesciunt, obcaecati tenetur possimus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <Card 
              key={service.id} 
              className={`card-hover ${service.best ? 'border-sepatublue-dark border-2' : ''} cursor-pointer`}
              onClick={() => openTestimonials(service.name)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
                  {service.best && (
                    <span className="bg-sepatublue text-white text-xs px-2 py-1 rounded-full">
                      Best Value
                    </span>
                  )}
                </div>
                <CardDescription className="text-gray-500">
                  Estimasi: {service.timeline}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-sepatublue">{service.price}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-sepatublue hover:bg-sepatublue-dark"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    openWhatsAppChat(service.name);
                  }}
                >
                  Tanyakan Lebih Lanjut
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Show More/Less Button */}
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-sepatublue text-sepatublue hover:bg-sepatublue-light"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>Show Less <ChevronUp size={18} /></>
            ) : (
              <>Show More <ChevronDown size={18} /></>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
