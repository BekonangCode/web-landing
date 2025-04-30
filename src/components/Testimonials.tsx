
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Andi Wijaya",
    image: "https://i.pravatar.cc/150?img=1",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti Rahma",
    image: "https://i.pravatar.cc/150?img=5",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 3,
    name: "Budi Santoso",
    image: "https://i.pravatar.cc/150?img=3",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 4,
    name: "Maya Putri",
    image: "https://i.pravatar.cc/150?img=9",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 5,
    name: "Deni Prasetyo",
    image: "https://i.pravatar.cc/150?img=8",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle navigation
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Mobile swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    (e.currentTarget as any).touchStartX = touchDown;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!(e.currentTarget as any).touchStartX) return;
    
    const touchDown = (e.currentTarget as any).touchStartX;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    
    if (diff > 5) {
      nextTestimonial();
    }
    if (diff < -5) {
      prevTestimonial();
    }
    
    (e.currentTarget as any).touchStartX = 0;
  };

  return (
    <section id="testimonials" className="py-16 section-padding bg-sepatublue-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Customer Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Desktop testimonial cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile testimonial carousel */}
        <div 
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="relative">
            <TestimonialCard testimonial={testimonials[activeIndex]} />
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-sepatublue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial card component
interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    image: string;
    text: string;
    rating: number;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <Card className="bg-white shadow-lg card-hover">
      <CardContent className="p-6">
        {/* Stars */}
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial text */}
        <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
        
        {/* Customer info */}
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold text-gray-800">{testimonial.name}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
