import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DiscountCard from '@/components/DiscountCard';
import CopyButton from '@/components/CopyButton';
import { FAQSchema } from '@/components/SchemaMarkup';
import { usePageTitle } from '@/hooks/usePageTitle';

const DiscountCodesPage = () => {
  usePageTitle('할인코드');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const discountCodes = {
    '5000won': [
      {
        code: 'PACKMKTP5000',
        condition: '최소 150,000원',
        amount: '5,000원',
        target: '투어 & 티켓',
        note: '항상 사용 가능',
      },
      {
        code: '2MKTPCH5000',
        condition: '최소 150,000원',
        amount: '5,000원',
        target: '투어 & 티켓',
        note: '파트너 전용',
      },
      {
        code: 'MKTPBENE5000',
        condition: '최소 100,000원',
        amount: '5,000원',
        target: '투어 & 티켓',
        note: '기간 제한',
      },
    ],
    '3000won': [
      {
        code: 'PACKMKTP3000',
        condition: '최소 100,000원',
        amount: '3,000원',
        target: '투어 & 티켓',
        note: '항상 사용 가능',
      },
      {
        code: '2MKTPCH3000',
        condition: '최소 100,000원',
        amount: '3,000원',
        target: '투어 & 티켓',
        note: '파트너 전용',
      },
      {
        code: 'WBNR0806',
        condition: '최소 100,000원',
        amount: '3,000원',
        target: '투어 & 티켓',
        note: '기간 제한',
      },
    ],
    '1000won': [
      {
        code: 'PACKMKTP1000',
        condition: '최소 50,000원',
        amount: '1,000원',
        target: '투어 & 티켓',
        note: '항상 사용 가능',
      },
      {
        code: 'MKTPCH1000',
        condition: '최소 50,000원',
        amount: '1,000원',
        target: '투어 & 티켓',
        note: '파트너 전용',
      },
      {
        code: 'MKTP2510',
        condition: '최소 50,000원',
        amount: '1,000원',
        target: '투어, 티켓 & 숙소',
        note: '숙소에 적용',
      },
    ],
  };

  const faqData = [
    {
      question: '할인코드는 어떻게 사용하나요?',
      answer: '이 페이지에서 코드를 복사한 후 마이리얼트립에 접속하여 로그인합니다. 마이페이지 > 쿠폰 등록에서 코드를 붙여넣으면 쿠폰이 자동으로 생성되고 결제 시 적용됩니다.',
    },
    {
      question: '할인코드의 유효 기간은 얼마나 되나요?',
      answer: '모든 코드는 발행된 달의 말까지 유효합니다. 등록한 쿠폰은 발급 후 7일 이내에 사용해야 합니다. 그 이후에는 쿠폰이 만료됩니다.',
    },
    {
      question: '한 번에 여러 할인코드를 사용할 수 있나요?',
      answer: '아니요, 한 번의 거래에는 하나의 쿠폰만 적용됩니다. 다만 할인코드와 카드사 할인, 결제 수단 할인은 함께 적용될 수 있습니다.',
    },
    {
      question: '할인코드가 적용되지 않는 상품이 있나요?',
      answer: '여행보험, 렌터카, 편도 항공권, 최저가 보장 상품 등은 할인코드를 사용할 수 없습니다.',
    },
    {
      question: '할인코드가 작동하지 않으면 어떻게 하나요?',
      answer: '다음을 확인해보세요: 1) 구매 금액이 최소 금액 이상인지, 2) 코드가 만료되지 않았는지, 3) 이전에 이 코드를 사용하지 않았는지, 4) 상품이 할인 대상인지.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <FAQSchema faqs={faqData} />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">할인코드 & 쿠폰</h1>
            <p className="text-xl text-blue-100">
              2026년 5월 마이리얼트립 모든 활성 할인코드 - 결제 시 복사해서 사용하세요
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-amber-50 border-l-4 border-amber-500 py-6 px-4 md:px-0">
          <div className="container mx-auto">
            <h3 className="font-bold text-amber-900 mb-2">중요 정보</h3>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>• 모든 코드는 2026년 5월 31일까지 유효합니다</li>
              <li>• 쿠폰은 등록 후 7일 이내에 사용해야 합니다</li>
              <li>• 거래당 하나의 쿠폰만 적용됩니다 (카드사 할인과는 중복 가능)</li>
              <li>• 예산 제한 코드는 소진되면 조기 종료될 수 있습니다</li>
            </ul>
          </div>
        </section>

        {/* 5,000 Won Codes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">5,000원 할인코드</h2>
              <p className="text-muted-foreground">최소 구매: 100,000원 ~ 150,000원</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {discountCodes['5000won'].map((code) => (
                <DiscountCard
                  key={code.code}
                  code={code.code}
                  amount={code.amount}
                  condition={code.condition}
                  target={code.target}
                  note={code.note}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3,000 Won Codes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">3,000원 할인코드</h2>
              <p className="text-muted-foreground">최소 구매: 100,000원</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {discountCodes['3000won'].map((code) => (
                <DiscountCard
                  key={code.code}
                  code={code.code}
                  amount={code.amount}
                  condition={code.condition}
                  target={code.target}
                  note={code.note}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 1,000 Won Codes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">1,000원 할인코드</h2>
              <p className="text-muted-foreground">최소 구매: 50,000원</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {discountCodes['1000won'].map((code) => (
                <DiscountCard
                  key={code.code}
                  code={code.code}
                  amount={code.amount}
                  condition={code.condition}
                  target={code.target}
                  note={code.note}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How to Use with Images */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390691004/S6TiyA4urbyh2wuFsLWZnE/coupon-registration-HtoyWpM872KseTDJsdH2Hs.webp"
                alt="쿼폰 등록 비도"
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-8">할인코드 사용 방법</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">코드 복사하기</h3>
                    <p className="text-muted-foreground">위의 할인 카드에서 "코드 복사" 버튼을 클릭하세요</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">마이리얼트립 로그인</h3>
                    <p className="text-muted-foreground">마이리얼트립 웹사이트 또는 앱에 로그인하세요</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">쿠폰 등록하기</h3>
                    <p className="text-muted-foreground">마이페이지 → 쿠폰 등록에서 코드를 붙여넣으세요</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">결제 시 적용하기</h3>
                    <p className="text-muted-foreground">상품을 선택한 후 결제 단계에서 쿠폰을 선택하세요</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">자주 묻는 질문</h2>

            <div className="space-y-4">
              {faqData.map((faq: any, index: number) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
                  >
                    <h3 className="font-bold text-foreground text-left">{faq.question}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-muted-foreground transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-muted border-t border-border">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">지금 저장하세요!</h2>
            <p className="text-xl text-blue-100 mb-8">
              위의 할인코드를 복사하고 마이리얼트립에서 다음 여행을 예약하세요
            </p>
            <a
              href="https://myrealt.rip/aRT258"
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

export default DiscountCodesPage;
