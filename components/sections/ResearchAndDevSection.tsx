"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const rdTabs = [
  {
    id: 'iot',
    title: 'IoT Devices',
    color: '#000000',
    heading: 'IoT Devices',
    description: (
      <>
        Example of Experience<br />
        RFID 관련 모듈, 리더 등 관련 기기<br />
        · 산업용 PDA, 바코드 리더 등<br />
        · GPS Tracker 등 GPS 관련 기기<br />
        · 센서 기반의 각종 loT 기기
      </>
    ),
    image: '/images/iot_img.png'
  },
  {
    id: 'ind_electronics',
    title: `Industrial Electronics`,
    color: '#000000',
    heading: (
      <>
        <span className="text-2xl md:text-3xl font-medium opacity-80 block mb-1">산업용 전자통신기기</span>
        Industrial Electronics
      </>
    ),
    description: (
      <>
        Example of Experience<br />
        · 각종 산업용 컨트롤러<br />
        · 통신용 중계기 등 각종 정밀 무선통신기기<br />
        · 각종 계측기/검사기
      </>
    ),
    image: '/images/indus_electronics.png'
  },
  {
    id: 'medical_electronics',
    title: 'Medical Electronics',
    color: '#000000',
    heading: (
      <>
        <span className="text-2xl md:text-3xl font-medium opacity-80 block mb-1">의료 기기</span>
        Medical Electronics
      </>
    ),
    description: (
      <>
        Example of Experience<br />
        · 환자감시 등 각종 모니터링 기기<br />
        · 골밀도, 혈압계 등 일반 의료 기기
      </>
    ),
    image: '/images/medical_electronics.png'
  }
];

export function ResearchAndDevSection() {
  const [activeTab, setActiveTab] = useState(() => {
    // Allow deep-linking to a specific tab: `/?rndTab=iot#rnd`
    // This initializer avoids setting state inside an effect.
    if (typeof window === 'undefined') return rdTabs[0];
    const requested = new URLSearchParams(window.location.search).get('rndTab');
    return (requested && rdTabs.find(t => t.id === requested)) || rdTabs[0];
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('rndTab');
    if (!requested) return;

    // If the user deep-linked to a specific tab, ensure we smoothly scroll to the section.
    // This also helps when arriving from another page.
    setTimeout(() => {
      const el = document.getElementById('rnd');
      if (!el) return;
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }, 100);
  }, []);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const detail = (e as CustomEvent<{ tabId?: string }>).detail;
      const tabId = detail?.tabId;
      if (!tabId) return;
      const match = rdTabs.find(t => t.id === tabId);
      if (match) setActiveTab(match);
    };

    window.addEventListener('rndTabSelect', onSelect);
    return () => window.removeEventListener('rndTabSelect', onSelect);
  }, []);

  return (
    <section className="w-full bg-white py-24 md:py-14" id="rnd">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 mx-auto">
          <div className="flex flex-col mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-1 bg-[#1e6eaa]"></div>
              <span className="text-sm font-bold tracking-widest text-gray-800">Research & Development</span>
            </div>
            <h2 className="text-5xl md:text-5xl font-medium text-gray-900 tracking-tight">연구개발</h2>
          </div>
          <div className="md:w-1/2 lg:w-5/12">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              Pushing the boundaries of what&apos;s possible. Our dedicated labs are focused on creating sustainable, efficient, and intelligent solutions for the industries of tomorrow.
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center md:justify-between items-center mb-12 md:mb-45 lg:mb-58 xl:mb-35 mx-auto relative">
          {/* Background Lines */}
          <div className="absolute bottom-[6px] left-0 right-0 h-[1px] bg-gray-300"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gray-200"></div>

          {rdTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[200px] py-6 text-center text-lg transition-colors relative z-10 ${activeTab.id === tab.id ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {tab.title}
              {/* Active Tab Indicators */}
              {activeTab.id === tab.id && (
                <>
                  {/* Top Thin Dark Line */}
                  <motion.div
                    layoutId="activeTabThinLine"
                    className="absolute bottom-[6px] left-0 right-0 h-[1px] bg-gray-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  {/* Bottom Thick Colored Line */}
                  <motion.div
                    layoutId="activeTabThickLine"
                    className="absolute bottom-0 left-0 right-0 h-[4px]"
                    style={{ backgroundColor: activeTab.color }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Left Content (Text) */}
          <div className="flex flex-col relative z-20 justify-center min-h-[400px] lg:min-h-0 lg:h-full">
            {/* Connecting Line to Image */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-[calc(100%+6rem)] h-[1px] bg-gradient-to-r from-transparent to-gray-400 z-0">
              <div className="absolute right-0 top-1/2 w-[12px] h-[12px] rounded-full bg-gray-800 border-[2px] border-white transform translate-x-1/2 -translate-y-1/2 z-10 shadow-sm">
              </div>
            </div>

            <motion.div
              key={`content-${activeTab.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 lg:absolute lg:bottom-1/2 lg:left-0 w-full lg:pb-8 flex flex-col justify-end"
            >
              <h3
                className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.1]"
                style={{ color: activeTab.color }}
              >
                {activeTab.heading}
              </h3>
              <div className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-[540px]">
                {activeTab.description}
              </div>
            </motion.div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative z-10">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-5/3  overflow-hidden border border-gray-200 p-2 bg-white shadow-sm"
            >
              <img
                src={activeTab.image}
                alt={activeTab.title}
                className="w-full h-full object-cover "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
