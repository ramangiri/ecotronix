import React from 'react';
import Image from 'next/image';

export function CertificationLogos() {
    const logos = Array.from({ length: 14 }, (_, i) => i + 1);

    return (
        <section className="py-12 bg-white">
            <div className="mx-auto px-8 md:px-16 lg:px-24">
                <div className="border-t border-gray-200 pt-12">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
                        {logos.map((num) => (
                            <div key={num} className="flex items-center justify-center">
                                <div className="relative w-24 h-12 md:w-[120px] md:h-[60px]">
                                    <Image
                                        src={`/images/af_${num}.png`}
                                        alt={`Certification ${num}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 96px, 120px"
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
