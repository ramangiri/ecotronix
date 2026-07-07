"use strict";
"use client";

import * as React from "react";
import { Link, usePathname, useRouter } from "@/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
    { name: "회사소개", href: "/#about" },
    { name: "사업분야", href: "/#business" },
    { name: "연구개발", href: "/#rnd" },
    { name: "고객지원", href: "/#customer_support" },
];

const rndSubMenu = [
    {
        title: "IoT Devices",
        desc: "RFID modules, industrial PDAs, GPS trackers, and sensor-based devices.",
        image: "/images/iot_img.png",
        href: "/?rndTab=iot#rnd",
    },
    {
        title: "Industrial Electronics",
        desc: "Industrial controllers, wireless communication devices, and measurement equipment.",
        image: "/images/indus_electronics.png",
        href: "/?rndTab=ind_electronics#rnd",
    },
    {
        title: "Medical Electronics",
        desc: "Patient monitoring devices and general medical electronics.",
        image: "/images/medical_electronics.png",
        href: "/?rndTab=medical_electronics#rnd",
    },
];

const aboutSubMenu = [
    {
        title: "CEO인사말",
        desc: "에코트로닉스는 1991년 10월에 설립",
        image: "/images/ceomenu.png",
        href: "/about#ceo",
    },
    {
        title: "주요 연혁",
        desc: "창립 이래 주요 이정표와 성장.",
        image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2070&auto=format&fit=crop",
        href: "/about#history",
    },
    {
        title: "인증 수상",
        desc: "우리의 인증, 인정, 그리고 성과.",
        image: "https://images.unsplash.com/photo-1559077670-05b01355df09?q=80&w=2070&auto=format&fit=crop",
        href: "/about#certificates",
    },
    {
        title: "조직도",
        desc: "우리 팀이 어떻게 성과를 낼 수 있는지.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
        href: "/about#org-chart",
    },
    {
        title: "Location",
        desc: "본사 및 공장 주소와 지시 사항.",
        image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2070&auto=format&fit=crop",
        href: "/about#map",
    },
];

const servicesSubMenu = [
    {
        title: "Marine Electronics",
        desc: "해양 선박용 항해 전자장비 개발",
        image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop",
        href: "/marine-electronics"
    },
    {
        title: "Vision AI기반 솔루션",
        desc: "Al 자동화 검사기 & 솔루션 스마트팩토리용 Robot 솔루션 CSO 제약사 솔루션",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        href: "/ai-business"
    },
    {
        title: "Global EMS/ODM",
        desc: "Global Trading, EMS 및 ODM 사업",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        href: "/global-ems"
    }
];

const supportSubMenu = [
    {
        title: "뉴스/공지",
        desc: "에코트로닉스의 새로운 소식과 주요 공지사항을 안내해 드립니다.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
        href: "/#customer_support"
    },
    {
        title: "자료 다운로드",
        desc: "제품 카탈로그, 매뉴얼 및 각종 인증서 등의 자료를 제공합니다.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
        href: "/#downloads"
    },
    {
        title: "상담요청",
        desc: "궁금하신 점이나 프로젝트 문의를 남겨주시면 신속하게 답변해 드립니다.",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2073&auto=format&fit=crop",
        href: "/#contact"
    }
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const hashIndex = href.indexOf('#');
        const hasHash = hashIndex >= 0;
        const isHashLink = href.startsWith('/#') || href.startsWith('#') || (href.startsWith('/') && hasHash);

        if (isHashLink) {
            // Close mobile menu if open immediately
            setIsOpen(false);

            // Only override default smooth scrolling if we are already on the home page
            if (pathname === '/') {
                const targetId = hasHash ? href.substring(hashIndex + 1) : (href.startsWith('/#') ? href.substring(2) : href.substring(1));
                if (!targetId) return;

                const element = document.getElementById(targetId);
                if (!element) return;

                e.preventDefault();
                router.push(href);
                try {
                    const hrefNoHash = hasHash ? href.substring(0, hashIndex) : href;
                    const queryIndex = hrefNoHash.indexOf('?');
                    const queryString = queryIndex >= 0 ? hrefNoHash.substring(queryIndex + 1) : '';
                    const tabId = queryString ? new URLSearchParams(queryString).get('rndTab') : null;
                    if (tabId) {
                        window.dispatchEvent(new CustomEvent('rndTabSelect', { detail: { tabId } }));
                    }
                } catch {
                    // ignore
                }

                setTimeout(() => {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        }
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm"
                        : "bg-white/60 dark:bg-black/60 backdrop-blur-lg border-b border-transparent"
                )}
            >
                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-20 py-6">
                    <div className="flex items-center justify-between">
                        {/* Logo (Left) */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="flex items-center gap-2 text-[#1e6eaa]"
                            >
                                <Image src="/images/eco_logo_2.png" alt="Logo" width={220} height={220} />
                            </Link>
                        </div>

                        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600 dark:text-gray-300">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group/nav-item h-full flex items-center">
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleScrollToSection(e, link.href)}
                                        className="hover:text-[#0066ff] transition-colors py-2"
                                    >
                                        {link.name}
                                    </Link>

                                    {link.name === "회사소개" && (
                                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-4 opacity-0 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:pointer-events-auto transition-all duration-300 w-[450px] lg:w-[500px] z-50">
                                            <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 p-4  shadow-xl flex flex-col gap-1 relative before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                                                {aboutSubMenu.map((item, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={item.href}
                                                        className="flex items-center gap-5 group/item p-3  hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                                    >
                                                        <div className="flex-shrink-0 w-28 h-20 relative  overflow-hidden border border-gray-100 dark:border-white/5">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                                                                unoptimized
                                                            />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h4 className="font-semibold text-[15px] text-gray-900 dark:text-white mb-1 group-hover/item:text-[#1e6eaa] transition-colors">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-[13px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {link.name === "연구개발" && (
                                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-4 opacity-0 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:pointer-events-auto transition-all duration-300 w-[450px] lg:w-[500px] z-50">
                                            <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 p-4  shadow-xl flex flex-col gap-1 relative before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                                                {rndSubMenu.map((item, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={item.href}
                                                        onClick={(e) => handleScrollToSection(e, item.href)}
                                                        className="flex items-center gap-5 group/item p-3  hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                                    >
                                                        <div className="flex-shrink-0 w-28 h-20 relative  overflow-hidden border border-gray-100 dark:border-white/5">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                                                                unoptimized
                                                            />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h4 className="font-semibold text-[15px] text-gray-900 dark:text-white mb-1 group-hover/item:text-[#1e6eaa] transition-colors">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-[13px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {link.name === "사업분야" && (
                                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-4 opacity-0 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:pointer-events-auto transition-all duration-300 w-[450px] lg:w-[500px] z-50">
                                            <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 p-4  shadow-xl flex flex-col gap-1 relative before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                                                {servicesSubMenu.map((service, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={service.href}
                                                        className="flex items-center gap-5 group/item p-3  hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                                    >
                                                        <div className="flex-shrink-0 w-28 h-20 relative  overflow-hidden border border-gray-100 dark:border-white/5">
                                                            <Image
                                                                src={service.image}
                                                                alt={service.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                                                                unoptimized
                                                            />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h4 className="font-semibold text-[15px] text-gray-900 dark:text-white mb-1 group-hover/item:text-[#1e6eaa] transition-colors">
                                                                {service.title}
                                                            </h4>
                                                            <p className="text-[13px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                                                {service.desc}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {link.name === "고객지원" && (
                                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-4 opacity-0 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:pointer-events-auto transition-all duration-300 w-[450px] lg:w-[500px] z-50">
                                            <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 p-4  shadow-xl flex flex-col gap-1 relative before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                                                {supportSubMenu.map((service, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={service.href}
                                                        onClick={(e) => handleScrollToSection(e, service.href)}
                                                        className="flex items-center gap-5 group/item p-3  hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                                    >
                                                        <div className="flex-shrink-0 w-28 h-20 relative  overflow-hidden border border-gray-100 dark:border-white/5">
                                                            <Image
                                                                src={service.image}
                                                                alt={service.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                                                                unoptimized
                                                            />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h4 className="font-semibold text-[15px] text-gray-900 dark:text-white mb-1 group-hover/item:text-[#1e6eaa] transition-colors">
                                                                {service.title}
                                                            </h4>
                                                            <p className="text-[13px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                                                {service.desc}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center flex-shrink-0 gap-4">
                            <div className="relative group/lang flex items-center h-full">
                                <button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#1e6eaa] transition-colors py-2">
                                    <Globe className="w-4 h-4" />
                                    <span className="uppercase">{locale}</span>
                                </button>
                                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-4 opacity-0 pointer-events-none group-hover/lang:opacity-100 group-hover/lang:pointer-events-auto transition-all duration-300 w-32 z-50">
                                    <div className="bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 p-2  shadow-xl flex flex-col gap-1 relative before:absolute before:-top-6 before:left-0 before:w-full before:h-6">
                                        <button onClick={() => handleLocaleChange('ko')} className={cn("text-left px-3 py-2 text-sm  hover:text-[#1e6eaa] cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors", locale === 'ko' ? "text-[#1e6eaa] font-semibold" : "text-gray-700 dark:text-gray-300")}>Korean</button>
                                        <button onClick={() => handleLocaleChange('en')} className={cn("text-left px-3 py-2 text-sm  hover:text-[#1e6eaa] cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors", locale === 'en' ? "text-[#1e6eaa] font-semibold" : "text-gray-700 dark:text-gray-300")}>English</button>
                                        <button onClick={() => handleLocaleChange('ja')} className={cn("text-left px-3 py-2 text-sm  hover:text-[#1e6eaa] cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors", locale === 'ja' ? "text-[#1e6eaa] font-semibold" : "text-gray-700 dark:text-gray-300")}>Japanese</button>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="relative flex items-center bg-gradient-to-r from-[#4877b1] via-[#4877b1] to-[#89bdb4] text-white p-1 shadow-md hover:shadow-lg transition-all group overflow-hidden"
                            >
                                <div className="absolute inset-1 bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
                                <span className="relative px-5 py-1.5 text-sm font-bold tracking-wide group-hover:text-black transition-colors duration-300 z-10">문의하기</span>
                                <div className="relative bg-white text-gray-900 w-8 h-8 flex items-center justify-center z-10">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </button>
                        </div>

                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t bg-background/95 backdrop-blur-md overflow-hidden"
                        >
                            <div className="container px-4 py-4 space-y-4">
                                <nav className="flex flex-col space-y-2">
                                    {navLinks.map((link) => (
                                        <React.Fragment key={link.name}>
                                            <Link
                                                href={link.href}
                                                onClick={(e) => handleScrollToSection(e, link.href)}
                                                className={cn(
                                                    "px-4 py-3  text-base font-medium transition-colors hover:bg-muted",
                                                    pathname === link.href
                                                        ? "text-primary bg-muted"
                                                        : "text-muted-foreground"
                                                )}
                                            >
                                                {link.name}
                                            </Link>

                                            {/* Mobile Submenu for 회사소개 */}
                                            {link.name === "회사소개" && (
                                                <div className="flex flex-col space-y-1 pl-8 pb-2">
                                                    {aboutSubMenu.map((item, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={item.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
                                                        >
                                                            • {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Mobile Submenu for 연구개발 */}
                                            {link.name === "연구개발" && (
                                                <div className="flex flex-col space-y-1 pl-8 pb-2">
                                                    {rndSubMenu.map((item, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={item.href}
                                                            onClick={(e) => {
                                                                setIsOpen(false);
                                                                handleScrollToSection(e, item.href);
                                                            }}
                                                            className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
                                                        >
                                                            • {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Mobile Submenu for 사업분야 */}
                                            {link.name === "사업분야" && (
                                                <div className="flex flex-col space-y-1 pl-8 pb-2">
                                                    {servicesSubMenu.map((service, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={service.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
                                                        >
                                                            • {service.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Mobile Submenu for 고객지원 */}
                                            {link.name === "고객지원" && (
                                                <div className="flex flex-col space-y-1 pl-8 pb-2">
                                                    {supportSubMenu.map((service, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={service.href}
                                                            onClick={(e) => {
                                                                setIsOpen(false);
                                                                handleScrollToSection(e, service.href);
                                                            }}
                                                            className="text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
                                                        >
                                                            • {service.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </nav>
                                <div className="pt-2 flex flex-col gap-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button onClick={() => handleLocaleChange('ko')} className={cn("px-3 py-1.5 text-sm  transition-colors", locale === 'ko' ? "bg-muted text-primary font-medium" : "text-muted-foreground")}>KR</button>
                                        <span className="text-muted-foreground/30">|</span>
                                        <button onClick={() => handleLocaleChange('en')} className={cn("px-3 py-1.5 text-sm  transition-colors", locale === 'en' ? "bg-muted text-primary font-medium" : "text-muted-foreground")}>EN</button>
                                        <span className="text-muted-foreground/30">|</span>
                                        <button onClick={() => handleLocaleChange('ja')} className={cn("px-3 py-1.5 text-sm  transition-colors", locale === 'ja' ? "bg-muted text-primary font-medium" : "text-muted-foreground")}>JP</button>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsModalOpen(true);
                                        }}
                                        className="relative flex w-full items-center justify-center bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 text-white p-1 shadow-md hover:shadow-lg transition-all group overflow-hidden"
                                    >
                                        <div className="absolute inset-1 bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
                                        <span className="relative px-5 py-1.5 text-sm font-bold tracking-wide group-hover:text-black transition-colors duration-300 z-10">문의하기</span>
                                        <div className="relative bg-white text-gray-900 w-8 h-8 flex items-center justify-center z-10">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Contact Form Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white  shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-8 pb-4">
                                <h3 className="text-2xl font-light text-gray-800 tracking-wide">Contact Us</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors p-1  hover:bg-gray-100">
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
                                <button onClick={() => setIsModalOpen(false)} className="px-8 py-3  font-medium text-gray-500 hover:bg-gray-50 transition-colors">Cancel</button>
                                <button onClick={() => setIsModalOpen(false)} className="px-8 py-3  font-medium bg-[#1a1a1a] text-white hover:bg-black transition-colors shadow-sm tracking-wide">Submit</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
