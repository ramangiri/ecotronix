'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [
    { id: 1, image: "/images/cert/1.jpg" },
    { id: 2, image: "/images/cert/2.jpg" },
    { id: 3, image: "/images/cert/3.jpg" },
    { id: 4, image: "/images/cert/4.jpg" },
    { id: 5, image: "/images/cert/5.jpg" },
    { id: 6, image: "/images/cert/6.jpg" },
    { id: 7, image: "/images/cert/7.jpg" },
    { id: 8, image: "/images/cert/8.jpg" },
    { id: 9, image: "/images/cert/9.jpg" },
    { id: 10, image: "/images/cert/10.jpg" },
    { id: 11, image: "/images/cert/11.jpg" },
    { id: 12, image: "/images/cert/12.jpg" },
];

const AUTO_MS = 3500;

export function Certificates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [paused, setPaused] = useState(false);

    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const touchStartX = useRef(0);

    useEffect(() => {
        const update = () => {
            if (window.innerWidth >= 1024) setItemsPerView(3);
            else if (window.innerWidth >= 640) setItemsPerView(2);
            else setItemsPerView(1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const maxIndex = Math.max(0, certificates.length - itemsPerView);

    useEffect(() => {
        if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    }, [maxIndex, currentIndex]);

    const next = useCallback(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prev = useCallback(() => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(next, AUTO_MS);
        return () => clearInterval(id);
    }, [paused, next]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [prev, next]);

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        touchStartX.current = e.clientX;
        setIsDragging(true);
        setPaused(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        setDragOffset(e.clientX - touchStartX.current);
    };

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        setIsDragging(false);
        const dx = e.clientX - touchStartX.current;
        if (dx > 40) prev();
        else if (dx < -40) next();
        setDragOffset(0);
        setPaused(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        setIsDragging(false);
        setDragOffset(0);
        setPaused(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    const translateX = -(currentIndex * (100 / itemsPerView));

    return (
        <section id="certificates" className="py-24 bg-white overflow-hidden">
            <div className="mx-auto px-8 md:px-16 lg:px-24 mb-16">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-4 h-[3px] bg-[#1e6eaa]"></div>
                    <span className="text-sm font-bold tracking-wider text-gray-800 uppercase">
                        Certificates &amp; Awards
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
                    인증 수상
                </h2>
            </div>

            <div
                className="relative max-w-7xl mx-auto px-12 md:px-20 lg:px-20"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Prev Button */}
                <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); prev(); }}
                    aria-label="Previous certificate"
                    className="absolute left-0 md:left-4 top-[140px] z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#1e6eaa] hover:border-[#1e6eaa] transition-all duration-200 group"
                >
                    <ChevronLeft size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                </button>

                {/* Sliding Track */}
                <div
                    className="overflow-hidden touch-pan-y select-none"
                >
                    <div
                        className={`flex cursor-grab ${isDragging ? 'active:cursor-grabbing' : ''}`}
                        style={{
                            transform: `translateX(calc(${translateX}% + ${dragOffset}px))`,
                            transition: isDragging ? 'none' : 'transform 300ms ease-in-out'
                        }}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerCancel={onPointerCancel}
                    >
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="shrink-0 px-3 sm:px-4"
                                style={{ width: `${100 / itemsPerView}%` }}
                            >
                                <div className="flex flex-col gap-5 items-center pointer-events-none">
                                    <div className="relative w-full h-[280px] border border-gray-100 bg-gray-50">
                                        <Image
                                            src={cert.image}
                                            alt={`Certificate ${cert.id}`}
                                            className="object-contain p-4"
                                            draggable={false}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); next(); }}
                    aria-label="Next certificate"
                    className="absolute right-0 md:right-4 top-[140px] z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#1e6eaa] hover:border-[#1e6eaa] transition-all duration-200 group"
                >
                    <ChevronRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                </button>

                {/* Dot navigation */}
                <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={(e) => { e.preventDefault(); setCurrentIndex(i); }}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`rounded-full transition-all duration-300 ${i === currentIndex ? 'w-7 h-2.5 bg-[#5B9BD5]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
