"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function ProductsSection() {
    return (
        <section id="products" className="w-full bg-[#f4f5f7] ">
            <div className='max-w-7xl mx-auto pt-20 md:pt-16'>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-12 tracking-tight">
                    주요 제품
                </h2>
                <h3 className="text-2xl md:text-3xl font-medium text-[#5B9BD5] mb-10">
                    통합 항해 표시장치(MFD)
                </h3>

            </div>
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 ">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >

                            <img
                                src="/images/marine-ai.png"
                                alt="Ship Radar and Navigation Screen"
                                className="w-full aspect-4/3 md:aspect-16/10 object-cover  shadow-lg"
                            />
                        </motion.div>
                    </div>
                    {/* Left Text */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >

                            <div className="mb-8">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">기능</h4>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed pl-10">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="text-wrap break-keep">레이더 플로터, 전자해도(ENC), 어군탐지기, 멀티빔 소나, AIS, GPS등의 정보를 한 화면에서 통합 표시</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="text-wrap break-keep">분할화면, 3~4분할 레이아웃, 사용자 지정 모드 지원 터치 + 하드키 + 노브 <br /> 조합으로 거친 해상 환경에서도 안정적인 조작 가능</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">사용 예시</h4>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed pl-10">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">레저보트 :</span>
                                        <span className="text-wrap break-keep">항로 계획(웨이포인트•루트), 어군 분포 표시, 수심지도 표시</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">연안어선 :</span>
                                        <span className="text-wrap break-keep">조업 해역의 해저 지형(홈, 언덕, 암반)과 어군 밀집 지역을 한눈에 <br /> 파악하여 연료 사용량 대비 조업 효율을 극대화</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">작업선·관공선 :</span>
                                        <span className="text-wrap break-keep">항만 및 수중 구조물, 등부표, 제한 수역 등을 표시하여 안전한 <br /> 접근과 작업 지원</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom Divider */}
                <div className="max-w-7xl mx-auto mt-20">
                    <div className="w-full h-px bg-gray-300"></div>
                </div>

                <div className='max-w-7xl mx-auto pt-20 md:pt-16'>
                    <h3 className="text-2xl md:text-3xl font-medium text-[#5B9BD5] mb-10">
                        AutoPilot 및 Rudder 제어 시스템
                    </h3>
                </div>

                {/* Product 2: AutoPilot */}
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">

                    {/* Left Image */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >

                            <img
                                src="/images/marine-autopilot-1.png"
                                alt="Ship AutoPilot and Rudder Control System"
                                className="w-full aspect-4/3 md:aspect-16/10 object-cover shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Right Text */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-8">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">기능</h4>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed pl-10">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="text-wrap break-keep">
                                            NMEA 2000 / NMEA0183 기반으로 선박의 속력(SOG), 침로(COG), 위치, 바람·조류 정보를
                                            실시간 수집 설정한 코스·웨이포인트에 따라 자동 조타, 직선 유지, 곡선 항로 추종 기능 제공
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="text-wrap break-keep">선장이 원하는 시점에 Auto/Manual 전환 가능, 안전을 위한 우선 차단(override) 기능 지원</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="text-wrap break-keep">향후, 센서 데이터를 기반으로 “위험 선박 회피를 고려한 자동 경로 재설정” 기능 추가 예정</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">사용 예시</h4>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed pl-10">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">연안 운항 :</span>
                                        <span className="text-wrap break-keep">항로의 직선 구간에서는 AutoPilot가 자동으로 항로를 유지하고, <br /> 선장은 트래픽 감시와 조업에 집중</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">장거리 항해 :</span>
                                        <span className="text-wrap break-keep">피로를 줄이고 일정한 속력·코스를 유지하여 연료 효율 향상</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom Divider */}
                <div className="max-w-7xl mx-auto mt-20">
                    <div className="w-full h-px bg-gray-300"></div>
                </div>
                <div className="max-w-7xl mx-auto mt-20">
                    <h3 className="text-2xl md:text-3xl font-medium text-[#5B9BD5] mb-10">
                        멀티빔 소나 및 고성능 어군탐지기 연동 솔루션
                    </h3>
                </div>
                {/* Product 3: Multibeam Sonar */}
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >

                            <img
                                src="/images/marine_sonar.png"
                                alt="Ship Radar and Sonar Equipment"
                                className="w-full aspect-4/3 md:aspect-16/10 object-cover  shadow-lg"
                            />
                        </motion.div>
                    </div>
                    {/* Right Text */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-8">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">기능</h4>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed pl-10">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="text-wrap break-keep">멀티빔 소나를 통해 고해상도 3D 해저 지형과 어군 분포를 실시간 시각화 PBG <br />(개인용 수심지도) 생성,</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="text-wrap break-keep">수심 음영지도, 등고선 지도 등 다양한 지도 모드 지원</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="text-wrap break-keep">어종·어군 크기 추정, 어군 레이어 깊이 표시 등 어획에 특화된 기능 사용 예시</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">근해 선망·트롤 :</span>
                                        <span className="text-wrap break-keep">물때와 조류에 따라 이동하는 어군의 위치를 3D로 파악하여 <br /> 어획량을 극대화</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">레저 낚시 :</span>
                                        <span className="text-wrap break-keep">인기 포인트 주변의 수중 지형을 저장하여, 다음 출항 시 개인 맞춤형 <br />포인트 지도로 재활용</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">사용 예시</h4>
                                <ul className="space-y-3 text-gray-600 font-light text-base md:text-lg leading-relaxed pl-10">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">근해 선망·트롤:</span>
                                        <span className="text-wrap break-keep">물때와 조류에 따라 이동하는 어군의 위치를 3D로 파악하여 <br />어획량을 극대화</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">레저 낚시:</span> <span className="text-wrap break-keep">인기 포인트 주변의 수중 지형을 저장하여, 다음 출항 시 개인 맞춤형 포인트 지도로 재활용</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom Divider */}
                <div className="max-w-7xl mx-auto mt-20">
                    <div className="w-full h-px bg-gray-300"></div>
                </div>

             {/*    <div className="max-w-7xl mx-auto mt-20">
                    <h3 className="text-2xl md:text-3xl font-medium text-[#5B9BD5] mb-10">
                        레이더 기반 항해 안전 시스템
                    </h3>
                </div> */}

              
               {/*  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">

                  
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <img
                                src="/images/marine_radar.png"
                                alt="Cargo Ships at Sea with Digital Overlay Concept"
                                className="w-full aspect-4/3 md:aspect-16/10 object-cover  shadow-lg"
                            />
                        </motion.div>
                    </div>

                   
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >

                            <div className="mb-8">
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">기능</h4>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed break-keep">
                                    돔형 레이더와 MFD 간 이더넷 연동 Fast Target Tracking, 오프센터 기능, AIS와 연동한 충돌 위험 표시 안개·야간·악천후 상황에서도 선박·부표·장애물 감시
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">사용 예시</h4>
                                <ul className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed pl-2">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                                        
                                            <span className="font-medium text-gray-700 mr-1 whitespace-nowrap">항만 입·출항:</span>
                                            시계가 나쁜 상황에서도 주변 선박과 구조물을 레이더·AIS로 동시에 모니터링 야간 조업: 레이더로 근처 선박과 지형을 확인하고, AIS로 선박 정보를 파악하여 충돌 및 접촉 사고 예방
                                        
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div> */}

                {/* Bottom Divider */}
                {/* <div className="max-w-7xl mx-auto mt-20">
                    <div className="w-full h-px bg-gray-300"></div>
                </div> */}
            </div>
        </section>
    );
}
