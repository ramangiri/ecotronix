"use client";

import React from "react";
import { NewsAnnouncement } from "./NewsAnnouncement";
import { ResourceDownloadSection } from "./ResourceDownloadSection";
import { ContactUsSection } from "./ContactUsSection";

export function CustomerSupportSection() {
  return (
    <section id="customer_support" className="w-full bg-white pt-24 md:pt-32 pb-24 relative overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-1 bg-[#0066ff]"></div>
            <span className="text-sm font-bold tracking-widest text-[#0066ff] uppercase">CUSTOMER SUPPORT</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 tracking-tight">고객지원</h2>
        </div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="border-l border-gray-200 pl-4 md:pl-12 ml-2 md:ml-6 space-y-24">
          <NewsAnnouncement />
          <ResourceDownloadSection />
          <ContactUsSection />
        </div>
      </div>
    </section>
  );
}
