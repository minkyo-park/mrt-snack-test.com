import { Link } from 'wouter';
import { ArrowRight, Zap, CreditCard, Plane, Home as HomeIcon, Tag, Clock, Star, Shield, Gift, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import DiscountCard from '@/components/DiscountCard';
import CopyButton from '@/components/CopyButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const topDiscounts = [
    {
      code: 'PACKMKTP5000',
      amount: '5,000원 할인',
      condition: '최소 150,000원',
      target: '투어 & 티켓',
      note: '항상 사용 가능',
    },
    {
      code: '2MKTPCH5000',
      amount: '5,000원 할인',
      condition: '최소 150,000원',
      target: '투어 & 티켓',
      note: '파트너 전용',
    },
    {
      code: 'PACKMKTP3000',
      amount: '3,000원 할인',
      condition: '최소 100,000원',
      target: '투어 & 티켓',
      note: '항상 사용 가능',
    },
    {
      code: '2MKTPCH3000',
      amount: '3,000원 할인',
      condition: '최소 100,000원',
      target: '투어 & 티켓',
      note: '파트너 전용',
    },
    {
      code: 'PACKMKTP1000',
      amount: '1,000원 할인',
      condition: '최소 50,000원',
      target: '투어 & 티켓',
      note: '항상 사용 가능',
    },
    {
      code: 'MKTP2510',
      amount: '1,000원 할인',
      condition: '최소 50,000원',
      target: '투어, 티켓 & 숙소',
      note: '숙소에도 적용 가능',
    },
  ];

  const cardDiscounts = [
    { name: '삼성카드', flight: '국제선 최대 15%', tour: '1~6만원 할인', accommodation: '최대 5만원', extra: '카카오페이 조합 시 추가 4만원', installment: '최대 12개월 무이자' },
    { name: 'KB국민카드', flight: '국제선 최대 15%', tour: '변동', accommodation: '최대 3만원', extra: 'KB페이 추가할인', installment: '할부 가능' },
    { name: '우리카드', flight: '국제선 최대 15%', tour: '변동', accommodation: '변동', extra: '유니마일 최대 6% 캐시백', installment: '할부 가능' },
    { name: '롯데카드', flight: '국제선 최대 15%', tour: '변동', accommodation: '변동', extra: 'L.POINT 적립', installment: '할부 가능' },
    { name: '현대카드', flight: '국제선 최대 15%', tour: '변동', accommodation: '변동', extra: 'M포인트 사용 가능', installment: '최대 6개월 무이자' },
    { name: '하나카드', flight: '국제선 최대 15%', tour: '변동', accommodation: '변동', extra: '하나머니 적립', installment: '할부 가능' },
    { name: 'NH농협카드', flight: '국제선 최대 15%', tour: '변동', accommodation: '변동', extra: '채움포인트 적립', installment: '할부 가능' },
    { name: 'BC카드', flight: '국제선 최대 15%', tour: '변동', accommodation: '변동', extra: 'TOP포인트 적립', installment: '할부 가능' },
  ];

  const faqItems = [
    { q: '할인코드는 어떻게 사용하나요?', a: '이 페이지에서 코드를 복사한 후 마이리얼트립에 접속하여 로그인합니다. 마이페이지 > 쿠폰 등록에서 코드를 붙여넣으면 쿠폰이 자동으로 생성되고 결제 시 적용됩니다.' },
    { q: '할인코드와 카드사 할인을 중복 적용할 수 있나요?', a: '네, 할인코드와 카드사 할인은 별도로 적용됩니다. 할인코드로 쿠폰을 발급받고, 결제 시 카드사 할인이 추가로 적용되어 이중 할인을 받을 수 있습니다.' },
    { q: '할인코드의 유효기간은?', a: '대부분의 코드는 발행된 달의 말까지 유효합니다. 등록한 쿠폰은 발급 후 7일 이내에 사용해야 합니다.' },
    { q: '취소 시 할인코드는 어떻게 되나요?', a: '예약 취소 시 사용한 쿠폰은 반환되지 않습니다. 새로운 할인코드를 등록하여 사용하셔야 합니다.' },
    { q: '할인코드가 적용되지 않아요', a: '최소 결제금액 충족 여부, 코드 유효기간, 적용 대상 상품인지 확인해주세요. 이전에 사용한 코드는 재사용이 불가합니다.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">🔥 2026년 4월 최신</span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">✅ 실시간 업데이트</span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">💯 무료 정보</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                마이리얼트립 할인쿠폰<br />2026 최신 총정리
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                할인코드 최대 <strong className="text-amber-300">5,000원</strong> · 카드사 할인 최대 <strong className="text-amber-300">15%</strong> · 숙소 최대 <strong className="text-amber-300">5만원</strong> 할인<br />
                모든 할인 정보를 한곳에서 확인하고 바로 적용하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://myrealt.rip/S3YG0a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
                >
                  🎯 할인 적용하고 예약하기
                  <ArrowRight size={20} />
                </a>
                <Link
                  href="/discount-codes"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  📋 전체 할인코드 보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white py-10 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">5,000원</div>
                <p className="text-sm text-muted-foreground">최대 할인코드</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">15%</div>
                <p className="text-sm text-muted-foreground">카드사 최대 할인</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">8개</div>
                <p className="text-sm text-muted-foreground">제휴 카드사</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">매월</div>
                <p className="text-sm text-muted-foreground">코드 업데이트</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Discount Codes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-3">2026년 4월 최신</span>
              <h2 className="text-3xl font-bold text-foreground mb-2">지금 바로 사용 가능한 할인코드</h2>
              <p className="text-muted-foreground">아래 코드를 복사하여 마이리얼트립 쿠폰 등록에서 입력하세요</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-8">
              <p className="text-sm text-amber-900"><strong>⚠️ 중요:</strong> 코드 등록 후 7일 이내에 사용해야 합니다. 거래당 하나의 쿠폰만 적용됩니다.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {topDiscounts.map((discount) => (
                <DiscountCard
                  key={discount.code}
                  code={discount.code}
                  amount={discount.amount}
                  condition={discount.condition}
                  target={discount.target}
                  note={discount.note}
                  icon={<Tag size={20} />}
                />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/discount-codes"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                모든 할인코드 보기
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Card Discounts Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-3">카드사 할인</span>
              <h2 className="text-3xl font-bold text-foreground mb-2">카드사별 할인 혜택 한눈에 보기</h2>
              <p className="text-muted-foreground">할인코드와 카드사 할인은 중복 적용 가능합니다!</p>
            </div>

            {/* Mobile: Card style */}
            <div className="md:hidden space-y-4 mb-8">
              {cardDiscounts.map((card) => (
                <div key={card.name} className="bg-white border border-border rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-bold text-blue-700 mb-3 pb-2 border-b border-blue-200">{card.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">항공권</span><span className="font-semibold">{card.flight}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">투어·티켓</span><span className="font-semibold">{card.tour}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">숙소</span><span className="font-semibold">{card.accommodation}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">추가 혜택</span><span className="font-semibold text-blue-600">{card.extra}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">할부</span><span className="font-semibold">{card.installment}</span></div>
                  </div>
                  <div className="mt-3">
                    <a href="https://myrealt.rip/S3YG0a" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">적용하기</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Table style */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-border mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">카드사</th>
                    <th className="px-4 py-3 text-left font-bold">항공권 할인</th>
                    <th className="px-4 py-3 text-left font-bold">투어·티켓</th>
                    <th className="px-4 py-3 text-left font-bold">숙소 할인</th>
                    <th className="px-4 py-3 text-left font-bold">추가 혜택</th>
                    <th className="px-4 py-3 text-left font-bold">할부</th>
                    <th className="px-4 py-3 text-left font-bold">적용</th>
                  </tr>
                </thead>
                <tbody>
                  {cardDiscounts.map((card, idx) => (
                    <tr key={card.name} className={`border-b border-border ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                      <td className="px-4 py-3 font-bold text-blue-700">{card.name}</td>
                      <td className="px-4 py-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">{card.flight}</span></td>
                      <td className="px-4 py-3">{card.tour}</td>
                      <td className="px-4 py-3">{card.accommodation}</td>
                      <td className="px-4 py-3 text-blue-600 text-xs">{card.extra}</td>
                      <td className="px-4 py-3 text-xs">{card.installment}</td>
                      <td className="px-4 py-3"><a href="https://myrealt.rip/S3YG0a" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors">적용하기</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Link
                href="/card-discounts"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                카드사 할인 상세 보기
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-3">간편 가이드</span>
              <h2 className="text-3xl font-bold text-foreground mb-2">할인코드 3단계 적용법</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-lg font-bold mb-2">코드 복사</h3>
                <p className="text-sm text-muted-foreground">위 할인코드 카드에서 원하는 코드의 "코드 복사" 버튼을 클릭하세요.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-lg font-bold mb-2">쿠폰 등록</h3>
                <p className="text-sm text-muted-foreground">마이리얼트립 앱/웹 → 마이페이지 → 쿠폰 등록에서 코드를 붙여넣으세요.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-lg font-bold mb-2">결제 시 적용</h3>
                <p className="text-sm text-muted-foreground">상품 결제 시 발급된 쿠폰을 선택하면 즉시 할인이 적용됩니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">카테고리별 할인 정보</h2>
              <p className="text-muted-foreground">필요한 정보를 바로 찾아보세요</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/discount-codes" className="block p-6 bg-gradient-to-br from-blue-50 to-white border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <Tag className="text-blue-600 mb-3" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">할인코드 총정리</h3>
                <p className="text-sm text-muted-foreground mb-3">1,000원~5,000원 할인코드 전체 목록</p>
                <span className="text-blue-600 text-sm font-semibold">자세히 보기 →</span>
              </Link>
              <Link href="/card-discounts" className="block p-6 bg-gradient-to-br from-blue-50 to-white border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <CreditCard className="text-blue-600 mb-3" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">카드사 할인</h3>
                <p className="text-sm text-muted-foreground mb-3">8개 카드사 최대 15% 즉시할인</p>
                <span className="text-blue-600 text-sm font-semibold">자세히 보기 →</span>
              </Link>
              <Link href="/flights" className="block p-6 bg-gradient-to-br from-blue-50 to-white border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <Plane className="text-blue-600 mb-3" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">항공권 할인</h3>
                <p className="text-sm text-muted-foreground mb-3">국내·국제선 카드사 최대 15% 할인</p>
                <span className="text-blue-600 text-sm font-semibold">자세히 보기 →</span>
              </Link>
              <Link href="/accommodation" className="block p-6 bg-gradient-to-br from-blue-50 to-white border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <HomeIcon className="text-blue-600 mb-3" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">숙소 할인</h3>
                <p className="text-sm text-muted-foreground mb-3">국내·해외 숙소 최대 5만원 할인</p>
                <span className="text-blue-600 text-sm font-semibold">자세히 보기 →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-3">꿀팁</span>
              <h2 className="text-3xl font-bold text-foreground mb-2">할인 극대화 전략</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-border rounded-lg p-5">
                <Gift className="text-amber-500 mb-3" size={28} />
                <h3 className="font-bold mb-2">할인코드 + 카드사 중복 적용</h3>
                <p className="text-sm text-muted-foreground">할인코드로 쿠폰 발급 후 카드사 할인까지 적용하면 이중 할인! 최대 20% 이상 절약 가능합니다.</p>
              </div>
              <div className="bg-white border border-border rounded-lg p-5">
                <Clock className="text-amber-500 mb-3" size={28} />
                <h3 className="font-bold mb-2">코드 등록 후 7일 내 사용</h3>
                <p className="text-sm text-muted-foreground">쿠폰은 등록 후 7일 이내에 사용해야 합니다. 여행 일정이 확정된 후 코드를 등록하세요.</p>
              </div>
              <div className="bg-white border border-border rounded-lg p-5">
                <Star className="text-amber-500 mb-3" size={28} />
                <h3 className="font-bold mb-2">삼성카드 + 카카오페이 조합</h3>
                <p className="text-sm text-muted-foreground">삼성카드 할인에 카카오페이를 조합하면 추가 4만원 할인! 가장 강력한 할인 조합입니다.</p>
              </div>
              <div className="bg-white border border-border rounded-lg p-5">
                <Shield className="text-amber-500 mb-3" size={28} />
                <h3 className="font-bold mb-2">국제선 항공권은 카드 등록 필수</h3>
                <p className="text-sm text-muted-foreground">카드사 항공권 할인은 사전 카드 등록이 필요합니다. 카드번호 앞 6자리 + 생년월일로 등록하세요.</p>
              </div>
              <div className="bg-white border border-border rounded-lg p-5">
                <Zap className="text-amber-500 mb-3" size={28} />
                <h3 className="font-bold mb-2">예산 제한 코드는 서두르세요</h3>
                <p className="text-sm text-muted-foreground">일부 코드는 선착순 소진 방식입니다. 매월 초에 새 코드가 나오면 바로 등록하세요.</p>
              </div>
              <div className="bg-white border border-border rounded-lg p-5">
                <Tag className="text-amber-500 mb-3" size={28} />
                <h3 className="font-bold mb-2">숙소 적용 코드 활용</h3>
                <p className="text-sm text-muted-foreground">MKTP2510 코드는 투어·티켓뿐 아니라 숙소에도 적용 가능합니다. 숙소 예약 시 꼭 활용하세요.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-3">FAQ</span>
              <h2 className="text-3xl font-bold text-foreground mb-2">자주 묻는 질문</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqItems.map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-foreground hover:bg-slate-50 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={20} className={`transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFAQ === idx && (
                    <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{item.a}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/faq" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                모든 FAQ 보기 <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">지금 바로 할인받고 여행을 예약하세요!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              할인코드 + 카드사 할인 중복 적용으로 최대 20% 이상 절약할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://myrealt.rip/S3YG0a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                🎯 마이리얼트립 할인 예약하기
                <ArrowRight size={20} />
              </a>
              <Link
                href="/comparison"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                📊 플랫폼 비교 분석
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
