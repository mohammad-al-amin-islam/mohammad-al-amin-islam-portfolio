'use client';

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-300 ease-in-out transform hover:scale-105">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2.5 md:p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
