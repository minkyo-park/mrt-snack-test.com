import { Link } from 'wouter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">소개</h3>
            <p className="text-sm text-gray-300">
              마이리얼트립 할인쿠폰은 최신 할인코드, 카드사 혜택, 그리고 여행 프로모션 정보를 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/discount-codes" className="text-gray-300 hover:text-white transition-colors">할인코드</Link></li>
              <li><Link href="/card-discounts" className="text-gray-300 hover:text-white transition-colors">카드사 할인</Link></li>
              <li><Link href="/flights" className="text-gray-300 hover:text-white transition-colors">항공권</Link></li>
              <li><Link href="/accommodation" className="text-gray-300 hover:text-white transition-colors">숙소</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">정보</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">자주 묻는 질문</Link></li>
              <li><Link href="/comparison" className="text-gray-300 hover:text-white transition-colors">비교분석</Link></li>
              <li><a href="https://www.myrealtrip.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">마이리얼트립 공식</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">연락처</h3>
            <p className="text-sm text-gray-300 mb-2">
              제휴 문의는 마이리얼트립 공식 웹사이트를 방문해주세요.
            </p>
            <a href="https://myrealt.rip/S3YG0a" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              마이리얼트립 방문
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} 마이리얼트립 할인쿠폰. 모든 권리 보유.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">개인정보 보호정책</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">사이트맵</a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          <p>본 사이트는 정보 제공 목적입니다. 실제 할인 및 프로모션은 마이리얼트립의 공식 약관에 따릅니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
