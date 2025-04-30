
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Instagram, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-16 section-padding bg-sepatublue-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Follow Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Instagram */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
            <div className="mb-6 flex justify-center">
              <Instagram size={48} className="text-sepatublue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Instagram</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={() => window.open('https://instagram.com/sepatuadhus', '_blank')}
            >
              @sepatuadhus
            </Button>
          </div>
          
          {/* Whatsapp */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
            <div className="mb-6 flex justify-center">
              <Phone size={48} className="text-sepatublue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Whatsapp</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <Button 
              className="bg-[#1877F2] hover:bg-[#166FE5]"
              onClick={() => window.open('https://facebook.com/sepatuadhus', '_blank')}
            >
              Sepatuadhus Official
            </Button>
          </div>
          
          {/* TikTok (replaced with MessageCircle) */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
            <div className="mb-6 flex justify-center">
              <MessageCircle size={48} className="text-sepatublue" />
            </div>
            <h3 className="text-xl font-bold mb-3">TikTok</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores!
            </p>
            <Button 
              className="bg-black hover:bg-gray-800"
              onClick={() => window.open('https://tiktok.com/@sepatuadhus', '_blank')}
            >
              @sepatuadhus
            </Button>
          </div>

          {/* {Shoppe} */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
            <div className="mb-6 flex justify-center">
              <MessageCircle size={48} className="text-sepatublue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Shoppe</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores!
            </p>
            <Button 
              className="bg-black hover:bg-gray-800"
              onClick={() => window.open('https://tiktok.com/@sepatuadhus', '_blank')}
            >
              @sepatuadhus
            </Button>

            {/* {Tokopedia} */}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
            <div className="mb-6 flex justify-center">
              <MessageCircle size={48} className="text-sepatublue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tokopedia</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores!
            </p>
            <Button 
              className="bg-black hover:bg-gray-800"
              onClick={() => window.open('https://tiktok.com/@sepatuadhus', '_blank')}
            >
              @sepatuadhus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
