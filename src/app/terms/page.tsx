import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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

      <div className="toss-container max-w-[800px] mt-8">
        <h1 className="text-3xl font-bold text-toss-grey900 mb-10 pb-6 border-b border-toss-grey200">
            Duet 서비스 이용약관
        </h1>
        
        <div className="space-y-10 text-toss-grey700 leading-relaxed text-[15px]">
            <section>
                <h2 className="text-lg font-bold text-toss-grey900 mb-3">제 1 조 (목적)</h2>
                <p>본 약관은 'Duet' (이하 "서비스")가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </section>
            
            <section>
                <h2 className="text-lg font-bold text-toss-grey900 mb-3">제 2 조 (정의)</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>"서비스"란 구현되는 단말기(PC, 모바일, 태블릿 등)와 상관없이 회원이 이용할 수 있는 Duet 가계부 및 관련 제반 서비스를 의미합니다.</li>
                    <li>"회원"이란 본 약관에 동의하고 서비스를 이용하는 이용자를 말합니다.</li>
                    <li>"가계부"란 회원이 수입 및 지출 내역을 기록하고 공유하기 위해 생성하는 데이터의 집합을 의미합니다.</li>
                </ol>
            </section>

            <section>
                <h2 className="text-lg font-bold text-toss-grey900 mb-3">제 3 조 (약관의 효력 및 변경)</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>본 약관은 서비스를 이용하고자 하는 자가 본 약관의 내용에 동의하고 회원가입을 완료함으로써 효력이 발생합니다.</li>
                    <li>서비스 제공자는 필요하다고 인정되는 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있습니다.</li>
                </ol>
            </section>

            <section>
                <h2 className="text-lg font-bold text-toss-grey900 mb-3">제 4 조 (서비스의 제공)</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>회사는 다음과 같은 서비스를 제공합니다.
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-toss-grey600">
                            <li>공동 가계부 생성 및 관리 기능</li>
                            <li>수입/지출 내역 기록 및 조회</li>
                            <li>카테고리 관리 및 통계</li>
                            <li>구성원 초대 및 권한 관리</li>
                        </ul>
                    </li>
                    <li>회사는 운영상, 기술상 필요에 따라 제공하고 있는 서비스의 전부 또는 일부를 수정, 중단, 변경할 수 있습니다.</li>
                </ol>
            </section>

            <section>
                <h2 className="text-lg font-bold text-toss-grey900 mb-3">제 5 조 (회원의 의무)</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>회원은 본인의 계정 정보를 안전하게 관리해야 하며, 이를 제3자에게 제공하거나 이용하게 해서는 안 됩니다.</li>
                    <li>회원은 서비스를 이용함에 있어 다음 행위를 해서는 안 됩니다.
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-toss-grey600">
                            <li>타인의 정보 도용</li>
                            <li>서비스의 건전한 운영을 방해하는 행위</li>
                            <li>법령에 위반되는 불법적인 내용을 기록하거나 공유하는 행위</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section>
                <h2 className="text-lg font-bold text-toss-grey900 mb-3">제 6 조 (개인정보보호 및 데이터 관리)</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>회사는 회원의 개인정보를 보호하기 위해 노력하며, 관련 법령 및 개인정보처리방침을 준수합니다.</li>
                    <li>회원이 서비스 내에 기록한 금융 내역 등의 데이터는 서비스 제공을 위한 목적으로만 사용됩니다.</li>
                    <li>서비스가 종료되거나 회원이 탈퇴하는 경우, 해당 회원의 개인정보는 법령 및 내부 방침에 따라 파기 또는 보존됩니다.</li>
                </ol>
            </section>

            <section>
                <h2 className="text-lg font-bold text-toss-grey900 mb-3">제 7 조 (면책조항)</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
                    <li>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
                    <li>서비스에 기록된 데이터의 정확성과 신뢰성에 대한 책임은 기록한 회원 본인에게 있으며, 회사는 이에 대해 책임을 지지 않습니다.</li>
                </ol>
            </section>

            <section>
                <h2 className="text-lg font-bold text-toss-grey900 mb-3">제 8 조 (준거법 및 재판관할)</h2>
                <p>서비스 이용과 관련하여 발생한 분쟁에 대해 소송이 제기될 경우 대한민국 법령을 준거법으로 하며, 관할 법원은 민사소송법에 따릅니다.</p>
            </section>
            
            <section className="mt-16 pt-8 border-t border-toss-grey200 text-sm text-toss-grey500">
                <strong>부칙</strong><br />
                본 약관은 2026년 1월 12일부터 시행됩니다.
            </section>
        </div>
      </div>
    </main>
  );
}