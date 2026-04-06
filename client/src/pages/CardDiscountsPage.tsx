import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CardDiscountsPage = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const cardDiscounts = [
    {
      id: 'samsung',
      name: '삼성카드',
      logo: '삼성',
      flightDiscount: '최대 15%',
      toursDiscount: '1-6만원',
      registration: '카드번호 앞 6자리 + YYMMDD',
      highlights: [
        '국제선 항공권 최대 15% 즉시할인',
        '투어, 티켓, 숙소: 10,000~60,000원 할인',
        '카카오페이 조합: 추가 40,000원 할인',
        '할부: 최대 12개월 무이자',
      ],
    },
    {
      id: 'kb',
      name: 'KB국민카드',
      logo: 'KB',
      flightDiscount: '최대 15%',
      toursDiscount: '변동',
      registration: '개인 신용/체크카드만 가능',
      highlights: [
        '국제선 항공권 최대 15% 즉시할인',
        'KB페이 추가할인 가능',
        '할부 옵션 가능',
        '법인, BC, 선불카드 제외',
      ],
    },
    {
      id: 'woori',
      name: '우리카드',
      logo: '우리',
      flightDiscount: '최대 15%',
      toursDiscount: '변동',
      registration: '유니마일 카드 지원',
      highlights: [
        '국제선 항공권 최대 15% 즉시할인',
        '유니마일 카드: 최대 6% 캐시백',
        '여행상품: 빌 할인',
        '할부 가능',
      ],
    },
    {
      id: 'lotte',
      name: '롯데카드',
      logo: '롯데',
      flightDiscount: '최대 15%',
      toursDiscount: '변동',
      registration: '표준 등록',
      highlights: [
        '국제선 항공권 최대 15% 즉시할인',
        '롯데면세점 제휴 혜택',
        '해외구매 GOLD 등급 업그레이드',
        '할부 옵션 가능',
      ],
    },
    {
      id: 'nh',
      name: 'NH농협카드',
      logo: 'NH',
      flightDiscount: '최대 15%',
      toursDiscount: '변동',
      registration: '개인카드만 가능',
      highlights: [
        '국제선 항공권 최대 15% 즉시할인',
        '토스페이 조합: 최대 35,000원 할인',
        '개인카드만 가능 (BC, 선불 제외)',
        '할부 가능',
      ],
    },
    {
      id: 'hana',
      name: '하나카드',
      logo: '하나',
      flightDiscount: '최대 15%',
      toursDiscount: '변동',
      registration: '개인 신용카드만',
      highlights: [
        '국제선 항공권 최대 15% 즉시할인',
        'AMEX 전용 혜택',
        '프리미엄 여행보험 포함',
        '할부 가능',
      ],
    },
  ];

  const paymentMethods = [
    {
      name: '카카오페이',
      discount: '최대 5,000원',
      condition: '최소 60,000원',
      note: '삼성카드 조합: 추가 40,000원',
    },
    {
      name: '토스페이',
      discount: '최대 35,000원',
      condition: 'NH카드 조합',
      note: '첫 구매: 5% 할인 (최대 5,000원)',
    },
    {
      name: '네이버페이',
      discount: '2,000원',
      condition: '최소 50,000원',
      note: '월 1회 1인 한정',
    },
    {
      name: '유니온페이',
      discount: '최대 10%',
      condition: '프리미엄 카드 소유자',
      note: '최소 170,000원, 거래당 1회',
    },
  ];

  const comparisonTable = [
    {
      category: '항공권 할인',
      samsung: '15%',
      kb: '15%',
      woori: '15%',
      lotte: '15%',
      nh: '15%',
      hana: '15%',
    },
    {
      category: '투어/티켓',
      samsung: '1-6만',
      kb: '변동',
      woori: '변동',
      lotte: '변동',
      nh: '변동',
      hana: '변동',
    },
    {
      category: '할부',
      samsung: '12개월',
      kb: '가능',
      woori: '가능',
      lotte: '가능',
      nh: '가능',
      hana: '가능',
    },
    {
      category: '특별 혜택',
      samsung: '카카오페이 조합',
      kb: 'KB페이',
      woori: '유니마일',
      lotte: '면세점',
      nh: '토스 조합',
      hana: 'AMEX 혜택',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">카드사 할인</h1>
            <p className="text-xl text-blue-100">
              모든 카드사 할인을 비교하고 최고의 선택을 찾으세요
            </p>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390691004/S6TiyA4urbyh2wuFsLWZnE/credit-card-comparison-PkxucKPwgzdxUJHFaoXnJb.webp"
                alt="카드사 비교"
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-8">빠른 비교</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left px-4 py-3 font-bold text-foreground">항목</th>
                    <th className="text-center px-4 py-3 font-bold text-foreground">삼성</th>
                    <th className="text-center px-4 py-3 font-bold text-foreground">KB</th>
                    <th className="text-center px-4 py-3 font-bold text-foreground">우리</th>
                    <th className="text-center px-4 py-3 font-bold text-foreground">롯데</th>
                    <th className="text-center px-4 py-3 font-bold text-foreground">NH</th>
                    <th className="text-center px-4 py-3 font-bold text-foreground">하나</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-muted' : 'bg-white'}>
                      <td className="px-4 py-3 font-bold text-foreground">{row.category}</td>
                      <td className="text-center px-4 py-3 text-foreground">{row.samsung}</td>
                      <td className="text-center px-4 py-3 text-foreground">{row.kb}</td>
                      <td className="text-center px-4 py-3 text-foreground">{row.woori}</td>
                      <td className="text-center px-4 py-3 text-foreground">{row.lotte}</td>
                      <td className="text-center px-4 py-3 text-foreground">{row.nh}</td>
                      <td className="text-center px-4 py-3 text-foreground">{row.hana}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Card Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">카드사별 상세 정보</h2>

            <div className="space-y-4">
              {cardDiscounts.map((card) => (
                <div
                  key={card.id}
                  className="bg-white border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-blue-600 text-xs text-center">{card.logo}</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-foreground">{card.name}</h3>
                        <p className="text-sm text-muted-foreground">항공권: {card.flightDiscount}</p>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-muted-foreground transition-transform ${
                        expandedCard === card.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedCard === card.id && (
                    <div className="px-6 py-4 bg-muted border-t border-border">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-bold text-foreground mb-2">등록 방법:</p>
                          <p className="text-sm text-muted-foreground">{card.registration}</p>
                        </div>

                        <div>
                          <p className="text-sm font-bold text-foreground mb-2">주요 혜택:</p>
                          <ul className="space-y-1">
                            {card.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-blue-600">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href="https://myrealt.rip/S3YG0a"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                          카드 등록하기
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390691004/S6TiyA4urbyh2wuFsLWZnE/payment-methods-YDCSHfxF7oJozY7SXQxn3c.webp"
                alt="결제 수단 비교"
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-8">결제 수단 할인</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3">{method.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">할인</p>
                      <p className="font-bold text-blue-600">{method.discount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">조건</p>
                      <p className="text-foreground">{method.condition}</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-blue-800 text-xs">{method.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Register */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">카드 할인 등록 방법</h2>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: '마이리얼트립 방문',
                  desc: 'member.myrealtrip.com/coupon 접속',
                },
                {
                  step: 2,
                  title: '카드 정보 입력',
                  desc: '카드번호 앞 6자리 + 등록월(YYMMDD) 입력',
                },
                {
                  step: 3,
                  title: '쿠폰 받기',
                  desc: '쿠폰이 자동으로 생성됩니다',
                },
                {
                  step: 4,
                  title: '결제 시 적용',
                  desc: '결제할 때 카드 할인을 선택하세요',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">중요 안내</h2>

            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="font-bold text-amber-900 mb-2">할인율 변동</p>
                <p className="text-sm text-amber-800">
                  할인율은 노선, 항공사, 출발일, 가용성에 따라 다를 수 있습니다. 예약 시점에 할인 금액을 확인하세요.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="font-bold text-blue-900 mb-2">쿠폰과 함께 사용</p>
                <p className="text-sm text-blue-800">
                  카드 할인은 할인코드 및 결제 수단 할인과 함께 적용되어 최대 절약이 가능합니다.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="font-bold text-green-900 mb-2">월별 업데이트</p>
                <p className="text-sm text-green-800">
                  카드 할인 혜택은 매월 업데이트됩니다. 최신 혜택을 확인하려면 자주 방문하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">지금 카드를 등록하세요</h2>
            <p className="text-xl text-blue-100 mb-8">
              다음 예약에서 즉시 할인받으세요
            </p>
            <a
              href="https://myrealt.rip/S3YG0a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              마이리얼트립 방문
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CardDiscountsPage;
