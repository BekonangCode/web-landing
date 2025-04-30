
import React from 'react';
import { Button } from "@/components/ui/button";
import { PercentIcon } from "lucide-react";

interface DiscountBarProps {
  // Optional flag to control visibility of the discount bar
  show?: boolean;
  // Discount message to display
  message?: string;
  // Time remaining for the discount (if applicable)
  timeRemaining?: string;
  // Action when user clicks the discount button
  onAction?: () => void;
}

const DiscountBar = ({
  show = true,
  message = "Limited Time Offer! 15% OFF all services",
  timeRemaining = "Ends in 2 days",
  onAction
}: DiscountBarProps) => {
  // If show is false, don't render anything
  if (!show) return null;

  // Default action opens WhatsApp with discount message
  const defaultAction = () => {
    const phoneNumber = "6285706437771"; // Replace with actual phone number
    const whatsappMessage = `Hallo kak, apakah diskon ini masih tersedia ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Use provided action or default
  const handleAction = onAction || defaultAction;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-sepatublue rounded-full p-1.5 mr-3">
            <PercentIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-800">{message}</p>
            {timeRemaining && (
              <p className="text-xs text-gray-500">{timeRemaining}</p>
            )}
          </div>
        </div>
        <Button 
          onClick={handleAction}
          className="bg-sepatublue hover:bg-sepatublue-dark text-sm"
          size="sm"
        >
          Get Discount
        </Button>
      </div>
    </div>
  );
};

export default DiscountBar;
