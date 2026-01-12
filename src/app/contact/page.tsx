'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'inquiry', // inquiry | partnership
    message: ''
  });

  // 템플릿의 {{title}} 변수를 위한 파생 상태
  const title = `[${formData.category === 'inquiry' ? '고객문의' : '제휴문의'}] ${formData.name}님의 문의`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      // EmailJS 설정
      const YOUR_SERVICE_ID = 'service_1haspxy'; // 설정완료
      const YOUR_PUBLIC_KEY = 'tFJ7zYUD2A-i5dx3G'; // 설정완료
      
      // ⚠️ 중요: EmailJS 대시보드 > Email Templates 에서 템플릿 ID를 확인해서 넣어주세요.
      // 예: 'template_xg51d2'
      const YOUR_TEMPLATE_ID = 'template_lyzath4'; 

      if (YOUR_TEMPLATE_ID === 'template_lyzath4') {
          alert('Template ID가 설정되지 않았습니다. 코드를 확인해주세요.');
          setIsSubmitting(false);
          return;
      }

      await emailjs.sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      );

      alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
      setFormData({ name: '', email: '', category: 'inquiry', message: '' }); 
    } catch (error) {
      console.error('Email send failed:', error);
      alert('문의 전송에 실패했습니다. 메일 앱을 통해 보내주세요.');
      
      // 실패 시 mailto로 대체
      const subject = title;
      const body = `이름: ${formData.name}%0D%0A연락처: ${formData.email}%0D%0A%0D%0A내용:%0D%0A${formData.message}`;
      window.location.href = `mailto:hansol416@naver.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white py-20">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-toss-grey100 h-[60px] flex items-center">
        <div className="toss-container w-full">
            <Link href="/" className="inline-flex items-center text-toss-grey600 hover:text-toss-blue transition-colors font-medium">
                <ArrowLeft className="mr-2" size={20} />
                메인으로
            </Link>
        </div>
      </nav>

      <div className="toss-container max-w-[600px] mt-8">
        <h1 className="text-3xl font-bold text-toss-grey900 mb-2">
            무엇을 도와드릴까요?
        </h1>
        <p className="text-toss-grey500 mb-10">
            궁금한 점이나 제안하고 싶은 내용을 남겨주세요.
        </p>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            {/* Template의 {{title}} 변수 매핑을 위한 hidden input */}
            <input type="hidden" name="title" value={title} />
            
            <div>
                <label className="block text-sm font-bold text-toss-grey700 mb-2">
                    문의 유형
                </label>
                <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                        <input 
                            type="radio" 
                            name="category_selection" 
                            value="inquiry"
                            checked={formData.category === 'inquiry'}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            className="mr-2 accent-toss-blue w-5 h-5"
                        />
                        <span className="text-toss-grey700 ml-2">고객 센터</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                        <input 
                            type="radio" 
                            name="category_selection" 
                            value="partnership"
                            checked={formData.category === 'partnership'}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            className="mr-2 accent-toss-blue w-5 h-5"
                        />
                        <span className="text-toss-grey700 ml-2">제휴 문의</span>
                    </label>
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-toss-grey700 mb-2">
                    이름
                </label>
                {/* Template의 {{name}} 변수 매핑 */}
                <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="성함을 입력해주세요"
                    className="w-full px-4 py-3 rounded-xl border border-toss-grey200 focus:border-toss-blue focus:outline-none transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm font-bold text-toss-grey700 mb-2">
                    이메일 / 연락처
                </label>
                {/* Template의 {{email}} 변수 매핑 */}
                <input 
                    type="text" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="답변 받으실 연락처를 남겨주세요"
                    className="w-full px-4 py-3 rounded-xl border border-toss-grey200 focus:border-toss-blue focus:outline-none transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm font-bold text-toss-grey700 mb-2">
                    내용
                </label>
                {/* Template의 {{message}} 변수 매핑 */}
                <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    placeholder="문의하실 내용을 자세히 적어주세요"
                    className="w-full px-4 py-3 rounded-xl border border-toss-grey200 focus:border-toss-blue focus:outline-none transition-colors resize-none"
                />
            </div>

            <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white font-bold py-4 rounded-xl transition-colors ${isSubmitting ? 'bg-toss-grey400 cursor-not-allowed' : 'bg-toss-blue hover:bg-blue-500'}`}
            >
                {isSubmitting ? '전송 중...' : '메일 보내기'}
            </button>

            <p className="text-xs text-toss-grey400 text-center mt-4">
                * 메일 발송 설정 오류 시 메일 앱이 실행될 수 있습니다.
            </p>
        </form>

        <div className="mt-16 pt-10 border-t border-toss-grey100 text-center text-toss-grey600">
            <h3 className="font-bold mb-4">직접 연락하기</h3>
            <div className="flex justify-center items-center gap-2 text-sm">
                <Mail size={16} />
                <span>hansol416@naver.com</span>
            </div>
        </div>
      </div>
    </main>
  );
}
