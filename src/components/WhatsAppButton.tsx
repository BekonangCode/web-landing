
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = "6285706437771"; // Replace with actual phone number
    const message = "Hallo Saya, saya ingin menanyakan tentang layanan sepatuadhus";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] rounded-full p-8 shadow-lg z-50"
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={28} className="text-white" />
    </Button>
  );
};

export default WhatsAppButton;
