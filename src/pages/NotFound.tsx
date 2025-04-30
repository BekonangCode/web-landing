
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sepatublue-light p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-sepatublue">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! We couldn't find the page you were looking for.</p>
        <p className="text-gray-500 mb-8">The page might have been moved or doesn't exist.</p>
        <Button 
          asChild
          className="bg-sepatublue hover:bg-sepatublue-dark"
        >
          <a href="/">Return to Home</a>
        </Button>
        
        {/* Shoe icon */}
        <div className="mt-10 opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16.5 14c.5 3 2 4.5 2 4.5L16 22H2s0-2 1.5-4 4-3.5 4-7.5V6l2-3h2l2 3v4.5c0 4-1.5 5.5-1.5 8.5 2 0 3 1 5 1 2.5 0 4-1 4-1s-1-1-1-5c-1-1-1.5-2-4-2s-2.5 2-4 2"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
