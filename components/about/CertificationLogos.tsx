import React from 'react';
import Image from 'next/image';

export function CertificationLogos() {
    const topRowLogos = Array.from({ length: 8 }, (_, i) => i + 1);
    const bottomRowLogos = Array.from({ length: 6 }, (_, i) => i + 9);

    return (
        <section className="py-12 bg-white">
            <div className="mx-auto px-8 md:px-16 lg:px-24">
                <div className="border-t border-gray-200 pt-12 flex flex-col gap-10 md:gap-14">
                    {/* Top Row: 8 Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
                        {topRowLogos.map((num) => (
                            <div key={num} className="flex items-center justify-center">
                                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]">
                                    <Image
                                        src={`/images/lg_${num}.png`}
                                        alt={`Certification ${num}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 64px, 72px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: 6 Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                        {bottomRowLogos.map((num) => (
                            <div key={num} className="flex items-center justify-center">
                                <div className="relative w-20 h-14 md:w-28 md:h-16 lg:w-[120px] lg:h-[72px]">
                                    <Image
                                        src={`/images/lg_${num}.png`}
                                        alt={`Certification ${num}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 112px, 120px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
