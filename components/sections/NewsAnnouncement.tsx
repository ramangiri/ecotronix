'use client'
import React from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Carousel } from '../ui/Carousel';

const newsItems = [
  {
    title: '여성벤처協, 14대 회장에 성미숙 에코트로닉스 대표 취임',
    date: 'June 25, 2025',
    url: 'https://www.metroseoul.co.kr/article/20250225500053'
  },
  {
    title: '[2023 한국여성벤처협회 기업 CEO] 선박용 항해 장비를 제조하고 수출하는...',
    date: 'June 25, 2025',
    url: 'https://magazine.hankyung.com/job-joy/article/202312084734d'
  },
  {
    title: '[명단] 2023년 방미 경제사절단 기업(기관) 명단',
    date: 'June 25, 2025',
    url: 'https://www.economytalk.kr/news/articleView.html?idxno=234726'
  },
  {
    title: "성미숙 에코트로닉스 대표 등 '2017 Citi-KOSBI 여성기업인상' 수상",
    date: 'December 1, 2017',
    url: 'https://www.hankyung.com/article/201712010822i'
  },
  {
    title: '에코트로닉스, 지역사회 발전 유공 표창 수상',
    date: 'October 15, 2021',
    url: 'http://www.idweekly.com/news/view.php?no=22688'
  },
  {
    title: '[나눔의 가치 빛내는 1%] 성미숙 에코트로닉스㈜ 대표',
    date: 'April 19, 2023',
    url: 'https://www.kyeonggi.com/article/20230419580104'
  }
];
export function NewsAnnouncement() {
  const handlePageChange = () => {
    const element = document.getElementById('news-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="news-section" className="w-full scroll-mt-24">
      <div className="w-full mx-auto">
        <div className="mx-auto">
          <Carousel
            onPageChange={handlePageChange}
            title={
              <div className="flex flex-col mb-4 border-l-4 border-gray-300 pl-4 py-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">News / Announcements</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">뉴스/공지</h3>
              </div>
            }
            items={newsItems.map((news, index) => (
              <a
                key={index}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white  p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[240px] h-full group block"
              >
                <h3 className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed line-clamp-3 mb-8">
                  {news.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-[#E5E5E5] text-gray-600 text-xs font-medium px-3 py-1.5 ">
                    {news.date}
                  </span>
                  <div className="flex items-center gap-1 text-[#1e6eaa] font-medium text-sm group-hover:underline">
                    더보기
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          />
        </div>
      </div>
    </div>
  );
}
