'use client'
import React, { useState } from 'react';
import { ChevronRight, Download, Search, ChevronLeft, FileX } from 'lucide-react';

const resourcesData = [
  { id: 1, title: '첨단 기술 트렌드와 관련된 최신 자료를 다운로드하세요', date: '2026-03-19' },
  { id: 2, title: '2026년 글로벌 해양 산업 전망 보고서', date: '2026-03-15' },
  { id: 3, title: '스마트 팩토리 도입 가이드라인 및 성공 사례', date: '2026-03-10' },
  { id: 4, title: 'AI 기반 자율운항 시스템 기술 백서', date: '2026-03-05' },
  { id: 5, title: '친환경 선박 에너지 효율 개선 사례집', date: '2026-02-28' },
  { id: 6, title: '차세대 복합소재 연구 개발 동향', date: '2026-02-20' },
  { id: 7, title: '해양 IoT 센서 네트워크 구축 매뉴얼', date: '2026-02-15' },
  { id: 8, title: '자율주행 선박 안전 기준 및 규제 동향', date: '2026-02-10' },
  { id: 9, title: '스마트 항만 물류 최적화 솔루션', date: '2026-02-05' },
  { id: 10, title: '해양 데이터 분석 및 활용 사례', date: '2026-01-30' },
  { id: 11, title: '친환경 에너지 추진 시스템 기술 동향', date: '2026-01-25' },
  { id: 12, title: '해양 방위 산업 기술 발전 방향', date: '2026-01-20' }
];


export function ResourceDownloadSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const element = document.getElementById('downloads');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredResources = resourcesData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentItems = filteredResources.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div id="downloads" className="w-full relative pt-5 overflow-hidden scroll-mt-24">
      <div className="w-full mx-auto">
        <div className="mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="flex flex-col border-l-4 border-gray-300 pl-4 py-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Resource Download</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">자료 다운로드</h3>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-[400px] flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full h-12 px-4 bg-[#F8F8F8] border border-gray-200  focus:outline-none focus:ring-1 focus:ring-[#1e6eaa] text-gray-700"
              />
              <button className="h-12 w-14 bg-[#1e6eaa] text-white  flex items-center justify-center hover:bg-blue-700 transition-colors shrink-0">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col gap-4 mb-16 min-h-[400px]">
            {filteredResources.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-[#F8F8F8]  border border-gray-200/60 h-full">
                <FileX className="w-12 h-12 mb-4 text-gray-400" />
                <p className="text-lg font-medium text-gray-900 mb-1">검색 결과가 없습니다</p>
                <p className="text-sm">다른 검색어를 입력해 보세요.</p>
              </div>
            ) : (
              currentItems.map((item) => (
                <div key={item.id} className="bg-[#F8F8F8] border border-gray-200/60  p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-sm transition-shadow">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-white border border-gray-200  text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      자료 다운로드
                    </button>
                    <button className="w-12 h-12 bg-[#1A1A1A] text-white  flex items-center justify-center hover:bg-black transition-colors shrink-0">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center  transition-colors font-medium ${currentPage === page
                    ? 'bg-[#1e6eaa] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
