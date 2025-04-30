import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="location" className="py-16 section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Langsung Datang ke Toko Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map */}
          <div className="flex-1">
            <Card className="shadow-lg h-full">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.3633437449444!2d112.61514394893914!3d-7.9342437607821275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882ad41488703%3A0x29ffe23176f5bf0c!2sCUCI%20SEPATU%20PATBELAS%20STORE%20%26%20SEPATUADHUS!5e0!3m2!1sid!2sid!4v1745967095253!5m2!1sid!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                ></iframe>
              </CardContent>
            </Card>
          </div>
          
          {/* Address and contact information */}
          <div className="lg:w-1/3">
            <Card className="shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Detail Kontak</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-sepatublue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Candi Panggung Barat No 5<br />
                        Malang,<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-sepatublue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Phone</h4>
                      <p className="text-gray-600">+62 857-0643-7771</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-sepatublue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <p className="text-gray-600">info@sepatuadhus.com</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Jam Operasi</h4>
                    <p className="text-gray-600">
                      Saturdaay - Thursday: 10:00 AM - 9:30 PM<br />
                      Friday: 1:00 PM - 9:00 PM<br />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
