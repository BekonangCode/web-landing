
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Treatment-specific testimonial data
const treatmentTestimonials = {
  "Deep Clean": [
    {
      id: 101,
      name: "Andi Wijaya",
      image: "https://i.pravatar.cc/150?img=1",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
    },
    {
      id: 102,
      name: "Maya Putri",
      image: "https://i.pravatar.cc/150?img=9",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    }
  ],
  "Add-on Suede Care": [
    {
      id: 201,
      name: "Siti Rahma",
      image: "https://i.pravatar.cc/150?img=5",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      id: 202,
      name: "Budi Santoso",
      image: "https://i.pravatar.cc/150?img=3",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    }
  ],
  "Restorasi": [
    {
      id: 301,
      name: "Deni Prasetyo",
      image: "https://i.pravatar.cc/150?img=8",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      id: 302,
      name: "Nadia Sari",
      image: "https://i.pravatar.cc/150?img=10",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
    }
  ],
  "Recolour": [
    {
      id: 401,
      name: "Rini Wijaya",
      image: "https://i.pravatar.cc/150?img=12",
      text: "Their expertise with delicate materials is impressive. My suede boots look better than when I bought them.",
      rating: 5,
    },
    {
      id: 402,
      name: "Ahmad Fadil",
      image: "https://i.pravatar.cc/150?img=15",
      text: "The Suede & Nubuck treatment was gentle yet effective. Great color restoration too!",
      rating: 4,
    }
  ],
  "Repaint": [
    {
      id: 501,
      name: "Kartika Dewi",
      image: "https://i.pravatar.cc/150?img=20",
      text: "My leather shoes were starting to crack, but after the conditioning treatment, they're soft and supple again.",
      rating: 5,
    },
    {
      id: 502,
      name: "Rizal Hakim",
      image: "https://i.pravatar.cc/150?img=25",
      text: "The leather conditioning service is perfect for extending the life of my expensive leather shoes.",
      rating: 5,
    }
  ],
  "Deep Clean One Day Service": [
    {
      id: 601,
      name: "Lina Kusuma",
      image: "https://i.pravatar.cc/150?img=30",
      text: "I needed my shoes cleaned for an event the next day. The Express Service delivered perfectly on time!",
      rating: 5,
    },
    {
      id: 602,
      name: "Hadi Santoso",
      image: "https://i.pravatar.cc/150?img=35",
      text: "Fast and efficient service without compromising on quality. Worth the extra cost when you're in a hurry.",
      rating: 4,
    }
  ]
};

const TreatmentTestimonials = () => {
  const { treatmentName } = useParams();
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [treatment, setTreatment] = useState<string>("");

  useEffect(() => {
    if (treatmentName) {
      const decodedTreatmentName = decodeURIComponent(treatmentName);
      setTreatment(decodedTreatmentName);
      
      const treatmentSpecificTestimonials = treatmentTestimonials[decodedTreatmentName as keyof typeof treatmentTestimonials] || [];
      setTestimonials(treatmentSpecificTestimonials);
    }
  }, [treatmentName]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-4">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">
            {treatment} Testimonials
          </h1>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">
              No testimonials available for this treatment yet.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link to="/#services">
            <Button className="bg-sepatublue hover:bg-sepatublue-dark">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Reusing the TestimonialCard component logic from the Testimonials component
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
    <Card className="bg-white shadow-lg">
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

export default TreatmentTestimonials;
