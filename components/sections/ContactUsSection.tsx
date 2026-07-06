"use client";

import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactUsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Contact Us Banner */}
      <div id="contact" className="relative w-full overflow-hidden rounded-2xl">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="City Buildings"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7a5c43]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#8b6b4a]/70"></div>
        </div>

        <div className="relative z-10 w-full mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            {/* Left Content */}
            <div className="flex flex-col text-white ml-4 md:ml-8 border-l-4 border-gray-500 pl-4 py-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold tracking-widest text-gray-300 uppercase">Contact Us</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">상담요청</h3>
              <div className="flex flex-col gap-2.5 text-gray-200 text-sm md:text-base font-light">
                <p>에코트로닉스(주)의 제품, 기술, 기타 궁금한 사항에 대한 문의 접수</p>
                <p>고객님의 관심 분야에 대해서 어떠한 내용에도 최선을 다해서 대응 하겠습니다</p>
                <p>하기 클릭하여 간단하게 입력해 주시기 바랍니다</p>
              </div>
            </div>

            {/* Right Content (Button) */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center bg-white text-gray-900 rounded-sm p-1.5 hover:shadow-xl transition-all group shrink-0 mt-4 md:mt-0"
            >
              <span className="px-8 py-3 text-base font-bold tracking-wide">문의하기</span>
              <div className="bg-[#1a1a1a] text-white w-12 h-12 flex items-center justify-center rounded-sm group-hover:bg-black transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-sm shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-8 pb-4">
              <h3 className="text-2xl font-light text-gray-800 tracking-wide">Contact Us</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 pt-4 overflow-y-auto max-h-[80vh]">
              <form className="flex flex-col gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="w-full pb-3 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-500 focus:border-blue-500 outline-none transition-colors text-base font-light"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="w-full pb-3 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-500 focus:border-blue-500 outline-none transition-colors text-base font-light"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      placeholder="Your Email ID"
                      className="w-full pb-3 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-500 focus:border-blue-500 outline-none transition-colors text-base font-light"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full pb-3 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-500 focus:border-blue-500 outline-none transition-colors text-base font-light"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full pb-3 border-b border-gray-200 bg-transparent text-gray-800 placeholder-gray-500 focus:border-blue-500 outline-none transition-colors resize-y text-base font-light"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="p-8 pt-0 flex justify-end gap-4">
              <button onClick={() => setIsModalOpen(false)} className="px-8 py-3 rounded-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={() => setIsModalOpen(false)} className="px-8 py-3 rounded-sm font-medium bg-[#1a1a1a] text-white hover:bg-black transition-colors shadow-sm tracking-wide">Submit</button>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
