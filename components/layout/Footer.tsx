"use client";

import React, { useState } from "react";
import { Link } from '@/routing';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <footer className="w-full bg-[#0a0a0a] text-gray-300 py-16 relative">
                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                    <div className="mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">

                        {/* Logo */}
                        <div className="flex items-center gap-3 shrink-0 lg:w-[200px]">
                            <Image src="/images/eco_logo.svg" alt="Logo" width={200} height={200} />
                        </div>

                        {/* Company Info */}
                        <div className="flex flex-col gap-4 text-[13px] leading-relaxed flex-1">
                            <h4 className="font-bold text-white text-sm">Company Info.</h4>
                            <div className="flex flex-col gap-1">
                                <p>본사 | 경기도 성남시 수정구 달래내로 46, 성남글로벌융합센터 B동 4층, 우편번호 13449</p>
                                <p>공장 | 충북 진천군 문백면 사양2길 86(사양리 826)</p>
                            </div>
                            <p className="mt-4 text-gray-500 text-xs">
                                Copyright © 2019 ECOTRONIX Corp. ALL RIGHT RESERVED.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-4 text-[13px] leading-relaxed flex-1">
                            <h4 className="font-bold text-white text-sm">Contact.</h4>
                            <div className="flex flex-col gap-1">
                                <p>본사 | TEL. 031-323-9800 | FAX. 031-323-9815 | MAIL. s.sales@ecotro.co.kr</p>
                                <p>공장 | TEL. 043-534-6491 | FAX. 043-534-6492</p>
                            </div>
                        </div>

                        {/* Customer Support */}
                        <div className="flex flex-col gap-4 text-sm shrink-0 lg:w-[200px]">
                            <h4 className="font-bold text-white text-sm">Customer Support.</h4>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="border border-white text-white px-6 py-2.5 hover:bg-white hover:text-black transition-colors font-medium text-sm w-full lg:w-auto"
                            >
                                Business Talk
                            </button>
                        </div>

                    </div>
                </div>
            </footer>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-sm shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
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
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-3 rounded-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">Cancel</button>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-3 rounded-sm font-medium bg-[#1a1a1a] text-white hover:bg-black transition-colors shadow-sm tracking-wide">Submit</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
