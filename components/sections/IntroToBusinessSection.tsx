import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/routing';

export function IntroToBusinessSection() {
    return (
        <section id="about" className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-2 md:py-2">
            <div className="relative w-full grow min-h-[600px] md:min-h-[700px] rounded-[32px] overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <Image
                        src="/images/business-bg.avif"
                        alt="Business Meeting"
                        className="w-full h-full object-cover"
                        fill
                        priority
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tight leading-tight">
                            Introduce<br />of Business
                        </h2>

                        <div className="flex items-center w-full max-w-[800px] mb-6">
                            <div className="h-px bg-linear-to-r from-transparent to-white grow opacity-70"></div>
                            <div className="w-3 h-3 bg-white rounded-full ring-[6px] ring-black/40 ml-1"></div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-12 max-w-3xl">
                            에코트로닉스는 30년 이상 축적된 전자·제조 기술력을 기반으로<br />
                            선박용 항해전자장비, 글로벌 EMS/ODM, AI 기반 스마트 솔루션 등<br />
                            다양한 산업 분야에서 고객의 가치를 제공하는 종합 기술 기업입니다.
                        </p>

                        <Link href="/about">
                            <button className="flex items-center bg-linear-to-r from-[#a200ff] to-[#ff007f] text-white rounded group hover:shadow-lg transition-all w-max p-1">
                                <span className="px-8 py-3 text-sm font-bold tracking-wide">상세페이지로</span>
                                <div className="bg-white text-gray-900 rounded-sm w-11 h-11 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
