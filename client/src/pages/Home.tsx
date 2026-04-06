import { Link } from 'wouter';
import { ArrowRight, Zap, CreditCard, Plane, Home as HomeIcon } from 'lucide-react';
import DiscountCard from '@/components/DiscountCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const topDiscounts = [
    {
      code: '26DCMKTP5000',
      amount: '5,000원',
      condition: '최소 200,000원',
      target: '투어 & 티켓',
      note: '2026년 4월 최신 코드',
    },
    {
      code: '26DCMKTP3000',
      amount: '3,000원',
      condition: '최소 150,000원',
      target: '투어 & 티켓',
      note: '동남아 전용',
    },
    {
      code: '26DCMKTP1000',
      amount: '1,000원',
      condition: '최소 50,000원',
      target: '전체 상품',
      note: '항상 사용 가능',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  여행 예약할 때 더 저렴하게!
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  마이리얼트립 최신 할인코드, 카드사 혜택, 항공권·숙소 프로모션을 한곳에서 확인하세요. 지금 바로 할인받으세요!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/discount-codes"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    할인코드 보기
                    <ArrowRight size={20} />
                  </Link>
                  <a
                    href="https://myrealt.rip/S3YG0a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    마이리얼트립 방문
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390691004/S6TiyA4urbyh2wuFsLWZnE/hero-travel-discount-6nhMJpFAXEjfwJZxqQtGQ7.webp"
                  alt="여행과 할인 일러스트레이션"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-muted-foreground">활성 할인코드</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15%</div>
                <p className="text-muted-foreground">최대 카드 할인</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-muted-foreground">지원 여행지</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Discount Codes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">최신 할인코드</h2>
              <p className="text-muted-foreground">결제 시 이 코드들을 사용하면 즉시 할인받을 수 있습니다</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {topDiscounts.map((discount) => (
                <DiscountCard
                  key={discount.code}
                  code={discount.code}
                  amount={discount.amount}
                  condition={discount.condition}
                  target={discount.target}
                  note={discount.note}
                  icon={<Zap />}
                />
              ))}
            </div>

            <Link
              href="/discount-codes"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              모든 코드 보기
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">왜 이 사이트를 이용해야 할까요?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">카드사 할인 비교</h3>
                <p className="text-muted-foreground">
                  모든 카드사의 할인 혜택을 한눈에 비교하고 최고의 선택을 찾으세요.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Plane className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">항공권 특가</h3>
                <p className="text-muted-foreground">
                  최신 항공사 프로모션과 항공권 할인 정보를 한곳에서 확인하세요.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">숙소 할인</h3>
                <p className="text-muted-foreground">
                  전 세계 호텔 및 숙소 할인 정보를 쉽게 찾을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">다음 여행을 더 저렴하게 예약하세요!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              모든 할인코드, 카드 혜택, 프로모션을 확인하고 최대한 절약하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/discount-codes"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                모든 코드 탐색
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/card-discounts"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                카드사 할인 보기
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
