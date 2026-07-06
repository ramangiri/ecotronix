import React from 'react';
import Image from 'next/image';

export function CompanyHistory() {
    return (
        <section id="history" className="py-24 bg-[#F5F5F5]">
            <div className="mx-auto px-8 md:px-16 lg:px-24">
                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                        <div className="flex flex-col">
                            <div className="pt-12 pb-10 pr-8 lg:pr-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-1 bg-[#1e6eaa]"></div>
                                    <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">About Company</span>
                                </div>
                                <h2 className="text-5xl font-medium text-gray-900 tracking-tight">주요 연혁</h2>
                            </div>

                            <div className="pt-0 lg:pt-10 pb-12 pr-8 lg:pr-12 mt-8 lg:mt-0">
                                <h3 className="text-xl font-medium text-gray-900 mb-8">Key Messages</h3>
                                <ul className="space-y-4 text-gray-600 font-light">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                        <span>1991년 설립 이후 지속적인 성장</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                        <span>2003년 중앙연구소 설립(SW,HW,AI,기구설계)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                        <span>3번에 걸친 진천공장 확장으로 제조기반 확대</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                        <span>2013년 2천만불 수출 달성</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                        <span>지속적인 R&D투자를 통한 기술개발</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                        <span>2023 한미경제사절단 선정등 기업 잠재력 입증</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative w-full h-[300px] lg:h-full">
                            <Image
                                src="/images/trust_1.png"
                                alt="Company History"
                                className="object-cover"
                                fill
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
