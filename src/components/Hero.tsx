
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Function to scroll to services section
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 section-padding bg-gradient-to-b from-sepatublue-light to-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
              Reparasi dan <span className="text-sepatublue">Cuci Sepatu Profesional</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, dolorem temporibus corrupti, tempore alias nemo molestias quae asperiores iusto cumque exercitationem nobis rem corporis ipsa vitae nisi cum doloremque nihil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToServices}
                className="bg-sepatublue hover:bg-sepatublue-dark text-white"
              >
                Layanan Kami
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-sepatublue text-sepatublue hover:bg-sepatublue-light hover:text-sepatublue-dark"
              >
                Kunjungi Toko Kami
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2 relative">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="../src/components/sepatuadhus.jpg" 
                alt="Clean sneakers at sepatuadhus" 
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
            
            {/* Vision and mission cards */}
            <div className="absolute -bottom-12 -left-4 md:-left-16 bg-white p-5 rounded-lg shadow-lg w-60 card-hover hidden md:block">
              <h3 className="text-lg font-semibold text-sepatublue mb-2">Cuci Bersih</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam impedit, officia cum itaque optio delectus consequatur vel incidunt harum voluptatibus similique, vero eligendi, neque necessitatibus eum cumque iure voluptas.</p>
            </div>
            
            <div className="absolute -top-8 -right-4 md:-right-16 bg-white p-5 rounded-lg shadow-lg w-60 card-hover hidden md:block">
              <h3 className="text-lg font-semibold text-sepatublue mb-2">Reparasi Rapi</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sint tenetur reprehenderit delectus eos similique nulla ut placeat? Hic, nesciunt ex modi eius architecto commodi id eveniet praesentium ut alias?</p>
            </div>
          </div>
        </div>
        
        {/* Mobile vision and mission */}
        <div className="md:hidden mt-16 grid grid-cols-1 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-lg card-hover">
            <h3 className="text-lg font-semibold text-sepatublue mb-2">Cuci Bersih</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam impedit, officia cum itaque optio delectus consequatur vel incidunt harum voluptatibus similique, vero eligendi, neque necessitatibus eum cumque iure voluptas.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-lg card-hover">
            <h3 className="text-lg font-semibold text-sepatublue mb-2">Reparasi Rapi</h3>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, exercitationem? Quo numquam saepe, illum reprehenderit laborum eveniet ad quod magni libero eum modi atque harum voluptatibus distinctio! Magnam, repellat eum.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
