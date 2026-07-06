import React from 'react';
import { Link } from '@/routing';

export function ServicesSection() {
  return (
    <section id="business" className="w-full bg-[#f4f4f4] dark:bg-[#111111] py-24 transition-colors">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-4 h-1 bg-[#8cc63f]"></div>
              <span className="text-sm font-bold tracking-widest text-gray-900 dark:text-gray-100 uppercase">ECOTRONIX'S SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white tracking-tight">사업분야</h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm md:text-base leading-relaxed font-medium">
            Innovating across multiple sectors to bring sustainable technology to every aspect of modern life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <Link href="/marine-electronics" className="group relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop" alt="Marine Electronics" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

            <div className="absolute bottom-6 left-6 right-6 bg-[#222222]/80 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 ease-in-out border border-white/10">
              <div className="px-6 py-5 flex flex-col items-center justify-center">
                <h3 className="text-xl md:text-2xl font-medium text-center text-white">Marine Electronics</h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 w-full">
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="pt-6 pb-2 flex justify-center">
                      <ul className="list-disc text-sm leading-relaxed text-gray-300 text-center"><li>해양 선박용 항해 전자장비 개발</li></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/ai-business" className="group relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="AI Business" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

            <div className="absolute bottom-6 left-6 right-6 bg-[#222222]/80 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 ease-in-out border border-white/10">
              <div className="px-6 py-5 flex flex-col items-center justify-center">
                <h3 className="text-xl md:text-2xl font-medium text-center text-white">Vision AI기반 솔루션</h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 w-full">
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="pt-6 pb-2 flex justify-center">
                      <ul className="list-disc text-sm leading-relaxed text-gray-300 space-y-2 text-left">
                        <li>AI 자동화 검사기 & 솔루션</li>
                        <li>스마트팩토리용 Robot 솔루션</li>
                        <li>CSO 제약사 솔루션</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/global-ems" className="group relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-2xl overflow-hidden cursor-pointer block">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Global EMS/ODM" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

            <div className="absolute bottom-6 left-6 right-6 bg-[#222222]/80 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 ease-in-out border border-white/10">
              <div className="px-6 py-5 flex flex-col items-center justify-center">
                <h3 className="text-xl md:text-2xl font-medium text-center text-white">Global EMS/ODM</h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 w-full">
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="pt-6 pb-2 flex justify-center">
                      <ul className="list-disc text-sm leading-relaxed text-gray-300 space-y-2 text-left">
                        <li>Global Trading 사업</li>
                        <li>Global EMS 및 ODM 사업</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
