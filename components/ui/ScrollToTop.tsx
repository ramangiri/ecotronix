"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes smooth-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .group:hover .hover-smooth-bounce {
          animation: smooth-bounce 1s ease-in-out infinite;
        }
      `}</style>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          "group fixed right-6 bottom-6 md:right-12 md:bottom-12 w-14 h-14 rounded-full bg-gradient-to-br from-[#4dc3ff] to-[#0066ff] flex items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-all duration-300 z-[100]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 hover-smooth-bounce" />
      </button>
    </>
  );
}
