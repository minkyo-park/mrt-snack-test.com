import { useLocation } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PlaceholderPage = () => {
  const [location] = useLocation();

  const pageTitles: Record<string, string> = {
    '/flights': '항공권 할인 & 프로모션',
    '/accommodation': '숙소 할인',
    '/comparison': '할인 비교 & 분석',
    '/faq': '자주 묻는 질문',
  };

  const pageDescriptions: Record<string, string> = {
    '/flights': '다음 여행의 항공권 최신 프로모션과 할인 정보를 확인하세요',
    '/accommodation': '전 세계 호텔 및 숙소 할인 정보를 한눈에 비교하세요',
    '/comparison': '다양한 할인 옵션을 비교하고 최고의 절약 전략을 찾으세요',
    '/faq': '마이리얼트립 할인 및 쿠폰에 대한 자주 묻는 질문과 답변',
  };

  const title = pageTitles[location] || '페이지';
  const description = pageDescriptions[location] || '';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-blue-100">{description}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white border border-border rounded-lg p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">준비 중입니다</h2>
              <p className="text-muted-foreground mb-8">
                이 페이지는 현재 개발 중입니다. 더 자세한 정보를 제공하기 위해 열심히 준비하고 있습니다.
              </p>
              <p className="text-muted-foreground mb-8">
                그동안 할인코드와 카드사 할인을 확인하여 다음 여행을 저렴하게 예약하세요.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <ArrowLeft size={20} />
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlaceholderPage;
