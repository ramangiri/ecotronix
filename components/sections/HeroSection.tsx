"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/routing';

const slides = [
  {
    id: 1,
    title: "Marine Equipment & MASS (Maritime Autonomous Surface Ships) solution",
    description: (
      <>
        Discover the future of maritime innovation, where advanced<br />
        engineering meets the vast power of the ocean to drive<br /> global connectivity.
      </>
    ),
    image: "./images/ship.avif",
    statValue: "15+",
    statLabel: "Years Experience",
    href: "/marine-electronics"
  },
  {
    id: 2,
    title: "Based on AI",
    description: (
      <>
        Experience the power of AI as it transforms industries, <br />
        drives innovation, and shapes the future of technology.
      </>
    ),
    image: "./images/Ai.avif",
    statValue: "100+",
    statLabel: "Industries Served",
    href: "/ai-business"
  },
  {
    id: 3,
    title: "Smart Factory",
    description: (
      <>
        Experience the future of manufacturing where automation <br />
        and AI work together to create a more efficient and sustainable<br />
        production process.
      </>
    ),
    image: "./images/factory.avif",
    statValue: "99%",
    statLabel: "Success Rate",
    href: "/global-ems"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 pb-12 pt-10 md:pt-5 grow flex flex-col">
      <div className="relative w-full grow min-h-[600px] md:min-h-[700px]  overflow-hidden shadow-2xl">
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
          <div className="absolute left-8 md:left-16 xl:left-24 top-[56%] md:top-1/2 -translate-y-1/2 right-8 md:right-16 xl:right-[calc(6rem+400px)] text-white">
            <div className="w-full h-[300px] md:h-[340px] relative mb-10">
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
                        <span className="block text-5xl md:text-6xl lg:text-7xl">Marine Equipment</span>
                        <span className="block self-center mr-[25%] lg:mr-[55%] min-[2560px]:mr-[55%] my-2 text-4xl md:text-5xl text-white/90">&amp;</span>
                        <span className="block text-2xl md:text-4xl lg:text-[2.75rem] xl:text-5xl leading-tight">
                          MASS{" "}
                          <span className="block md:inline font-semibold text-xl md:text-2xl xl:text-3xl text-white/80">
                            (Maritime Autonomous Surface Ships)
                          </span>
                          <span className="block">solution</span>
                        </span>
                      </div>
                    ) : (
                      slides[currentSlide].title
                    )}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 font-semibold leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Progress Line */}
            <div className="hidden lg:block relative w-full h-[1px] bg-white/40 mb-10">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-700 ease-in-out"
                style={{ left: `calc(${(currentSlide / (slides.length - 1)) * 100}% - ${currentSlide === slides.length - 1 ? '12px' : currentSlide === 0 ? '0px' : '6px'})` }}
              />
            </div>
          </div>

          {/* Right Content - Graphic & Stats Box */}
          <div className="hidden xl:block absolute right-24 top-24 bottom-24 w-[400px]">
            <div className="w-full h-full border border-white/40  overflow-hidden relative flex flex-col justify-end">
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

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-3 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsPaused(true);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="ml-2 w-7 h-7 flex items-center justify-center rounded-full border border-white/30 text-white/80 hover:bg-white/20 hover:text-white transition-all"
              aria-label={isPaused ? "Play slider" : "Pause slider"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" /> : <Pause className="w-3 h-3" fill="currentColor" />}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
