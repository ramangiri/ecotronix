"use client";

import React, { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/routing';

const slides = [
  {
    id: 1,
    title: "Marine Equipment & MASS (Maritime Autonomous Surface Ships) solution",
    description: "Discover the future of maritime innovation, where advanced engineering meets the vast power of the ocean to drive global connectivity.",
    image: "/images/ship.avif",
    statValue: "15+",
    statLabel: "Years Experience",
    href: "/marine-electronics"
  },
  {
    id: 2,
    title: "Based on AI",
    description: "Experience the power of AI as it transforms industries, drives innovation, and shapes the future of technology.",
    image: "/images/Ai.avif",
    statValue: "100+",
    statLabel: "Industries Served",
    href: "/ai-business"
  },
  {
    id: 3,
    title: "Smart Factory",
    description: "Experience the future of manufacturing where automation and AI work together to create a more efficient and sustainable production process.",
    image: "/images/factory.avif",
    statValue: "99%",
    statLabel: "Success Rate",
    href: "/global-ems"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const timer = window.setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [currentSlide, isPlaying, slides.length]);

  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 pb-12 pt-10 md:pt-5 flex-grow flex flex-col">
      <div className="relative w-full flex-grow min-h-[600px] md:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Images */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20">
          {/* Left Content */}
          <div className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 right-8 md:right-16 lg:right-[calc(6rem+400px)] text-white">
            <div className="w-full max-w-4xl h-[300px] md:h-[340px] relative mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute bottom-0 left-0 w-full"
                >
                  <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight">
                    {slides[currentSlide].id === 1 ? (
                      <div className="flex flex-col items-start text-left w-full">
                        <span className="block text-4xl md:text-5xl lg:text-[3.75rem] font-semibold leading-none">
                          Marine Equipment
                        </span>
                        <span className="my-3 self-center ml-[-28%] text-3xl md:text-4xl lg:text-[3rem] font-semibold text-white/95">
                          &amp;
                        </span>
                        <span className="block w-full text-2xl md:text-4xl lg:text-[3rem] leading-tight font-semibold">
                          <span className="mr-2 inline-block text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-wide align-middle">
                            MASS
                          </span>
                          <span className="block mt-2 font-medium text-white/80 text-[2.25rem] leading-snug">
                            (Maritime Autonomous Surface Ships)
                          </span>
                          <span className="block mt-2 font-medium text-white/80 text-2xl md:text-3xl lg:text-[2.75rem] leading-snug">
                            solution
                          </span>
                        </span>
                      </div>
                    ) : (
                      slides[currentSlide].title
                    )}
                  </h1>
                  <p className={`text-lg md:text-xl leading-relaxed ${slides[currentSlide].id === 1 ? 'font-semibold text-white' : 'font-light text-gray-200'}`}>
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Progress Line */}
            <div className="desktop-block relative w-full h-[1px] bg-white/40 mb-10">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-700 ease-in-out"
                style={{ left: `calc(${(currentSlide / (slides.length - 1)) * 100}% - ${currentSlide === slides.length - 1 ? '12px' : currentSlide === 0 ? '0px' : '6px'})` }}
              />
            </div>
          </div>

          {/* Right Content - Graphic & Stats Box */}
          <div className="desktop-block absolute right-24 top-24 bottom-24 w-[400px]">
            <div className="w-full h-full border border-white/40 rounded-2xl overflow-hidden relative flex flex-col justify-end">
              {/* Top left triangle */}
              <svg className="absolute top-8 left-8 w-8 h-8 text-white" viewBox="0 0 32 32" fill="currentColor">
                <path d="M 3 3 L 29 3 L 3 29 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
              </svg>

              {/* Stats Box */}
              <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-8 w-full text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="text-6xl font-medium mb-2">{slides[currentSlide].statValue}</div>
                    <div className="text-sm tracking-wide text-gray-300">{slides[currentSlide].statLabel}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Slide controls (left corner) */}
          <div className="absolute bottom-8 left-8 flex items-center gap-3 z-30">
            <button
              type="button"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              onClick={() => setIsPlaying((prev) => !prev)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            </button>

            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
