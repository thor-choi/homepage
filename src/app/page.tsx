'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, PieChart, Users, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-toss-grey100">
        <div className="toss-container h-[60px] flex items-center justify-between">
          <div className="font-bold text-2xl text-toss-grey800">Duet</div>
          <div className="flex gap-4">
             {/* Web view link removed */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[140px] pb-[80px] bg-toss-grey50">
        <div className="toss-container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.2] text-toss-grey900 mb-6 tracking-tight">
              함께 쓰는 가계부<br />
              <span className="text-toss-blue">Duet</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-toss-grey600 mb-10 leading-relaxed"
          >
            복잡한 정산, 귀찮음은 이제 그만.<br />
            가족, 연인, 친구와 함께 쉽고 편하게 관리하세요.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <a href="https://toss.im" target="_blank" rel="noreferrer" className="toss-button flex items-center justify-center gap-2 group">
              토스에서 바로 시작하기 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-toss-grey500">
               * 듀엣은 토스 앱 내에서 실행되는 서비스입니다.
            </p>
          </motion.div>
        
          {/* Mockup Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 mx-auto w-[320px] h-[640px] bg-toss-grey50 rounded-[40px] border-[8px] border-toss-grey200 shadow-xl flex items-center justify-center relative overflow-hidden"
          >
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-toss-grey200 rounded-2xl mx-auto mb-4 flex items-center justify-center text-toss-grey400">
                    <Users size={32} />
                </div>
                <p className="text-toss-grey400 font-medium">
                    앱 목업 이미지를<br/>준비중입니다
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 1: Shared Ledger */}
      <section className="py-[100px]">
        <div className="toss-container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-block py-1 px-3 rounded-md bg-toss-blueLight text-toss-blue font-bold text-sm mb-4">
                공동 관리
              </span>
              <h2 className="text-[36px] font-bold text-toss-grey900 mb-4 leading-tight">
                통장 쪼개기 없이<br />
                함께 쓰는 가계부
              </h2>
              <p className="text-[17px] text-toss-grey600 leading-relaxed mb-8">
                초대 코드 하나로 간편하게 입장하세요.<br />
                누가, 언제, 어디서 썼는지 실시간으로 공유됩니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-toss-grey700">
                   <div className="bg-toss-blueLight p-1 rounded-full"><Check size={16} className="text-toss-blue" /></div>
                   <span className="font-medium">실시간 동기화</span>
                </li>
                <li className="flex items-center gap-3 text-toss-grey700">
                   <div className="bg-toss-blueLight p-1 rounded-full"><Check size={16} className="text-toss-blue" /></div>
                   <span className="font-medium">무제한 멤버 초대</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
               <div className="toss-card aspect-square flex items-center justify-center bg-toss-grey50 border-none">
                  <Users size={80} className="text-toss-blue opacity-80" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Transaction */}
      <section className="py-[100px] bg-toss-grey50">
        <div className="toss-container">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
             <div className="flex-1">
              <span className="inline-block py-1 px-3 rounded-md bg-green-100 text-green-600 font-bold text-sm mb-4">
                내역 연동
              </span>
              <h2 className="text-[36px] font-bold text-toss-grey900 mb-4 leading-tight">
                일일이 입력하지 마세요<br />
                터치 한 번으로 끝
              </h2>
              <p className="text-[17px] text-toss-grey600 leading-relaxed mb-8">
                카드 내역, 은행 앱 알림을 불러와서<br />
                터치 한 번이면 가계부에 저장됩니다.
              </p>
            </div>
            <div className="flex-1 w-full">
               <div className="toss-card aspect-square flex items-center justify-center bg-white border-none">
                  <Wallet size={80} className="text-green-500 opacity-80" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Statistics */}
      <section className="py-[100px]">
        <div className="toss-container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-block py-1 px-3 rounded-md bg-purple-100 text-purple-600 font-bold text-sm mb-4">
                자동 통계
              </span>
              <h2 className="text-[36px] font-bold text-toss-grey900 mb-4 leading-tight">
                우리 소비 패턴을<br />
                한 눈에 파악해요
              </h2>
              <p className="text-[17px] text-toss-grey600 leading-relaxed mb-8">
                카테고리별 지출부터 월별 추이까지.<br />
                어디에 돈을 많이 쓰는지 그래프로 알려드려요.
              </p>
            </div>
            <div className="flex-1 w-full">
               <div className="toss-card aspect-square flex items-center justify-center bg-toss-grey50 border-none">
                  <PieChart size={80} className="text-purple-500 opacity-80" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] bg-toss-grey900 text-white text-center">
        <div className="toss-container">
          <h2 className="text-[40px] font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-toss-grey400 text-lg mb-10">
            가장 쉬운 공동 가계부, 듀엣
          </p>
          <button className="bg-toss-blue text-white font-bold py-5 px-10 rounded-[24px] text-lg hover:bg-blue-500 transition-colors">
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-toss-grey50 py-12 border-t border-toss-grey200">
        <div className="toss-container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="font-bold text-xl text-toss-grey700 mb-4">Duet</div>
              <p className="text-sm text-toss-grey500 leading-relaxed">
                (주)듀엣<br />
                사업자등록번호: 183-10-03295
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <h4 className="font-bold text-toss-grey700 mb-3">서비스</h4>
                <ul className="space-y-2 text-sm text-toss-grey500">
                  <li><a href="#">기능 소개</a></li>
                  <li><Link href="/terms">이용약관</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-toss-grey700 mb-3">문의</h4>
                <ul className="space-y-2 text-sm text-toss-grey500">
                  <li><Link href="/contact">고객센터</Link></li>
                  <li><Link href="/contact">제휴 문의</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-toss-grey200 text-xs text-toss-grey400">
            © 2026 Duet Team. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
