import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      category: '할인코드 사용법',
      items: [
        {
          question: '할인코드는 어디서 받나요?',
          answer: '마이리얼트립 할인코드는 공식 블로그, 제휴 파트너 사이트, 이메일 뉴스레터, SNS 이벤트 등을 통해 배포됩니다. 저희 사이트에서도 매월 최신 할인코드를 정리하여 제공하고 있습니다. 마이리얼트립 앱을 설치하면 앱 전용 할인코드를 받을 수도 있습니다. 주요 코드로는 PACKMKTP5000(5,000원), PACKMKTP3000(3,000원), PACKMKTP1000(1,000원) 등이 있으며, 매월 새로운 코드가 추가됩니다.',
        },
        {
          question: '할인코드 적용이 안 됩니다. 어떻게 해야 하나요?',
          answer: '할인코드가 적용되지 않는 경우 다음을 확인해보세요. 1) 코드가 만료되지 않았는지 확인하세요 (대부분의 코드는 해당 월 말까지 유효). 2) 최소 주문 금액을 충족하는지 확인하세요 (예: PACKMKTP5000은 150,000원 이상). 3) 해당 코드가 적용 가능한 상품인지 확인하세요 (투어/티켓 전용, 숙소 적용 가능 등). 4) 이전에 동일한 코드를 사용한 적이 있는지 확인하세요 (대부분 1인 1회 사용). 5) 여행보험, 렌터카, 편도 항공권 등 일부 상품은 할인코드 적용이 제외됩니다.',
        },
        {
          question: '할인코드 유효기간은 얼마인가요?',
          answer: '마이리얼트립 할인코드는 보통 발행된 달의 말일까지 유효합니다. 예를 들어 4월에 발행된 코드는 4월 30일까지 등록 가능합니다. 단, 코드를 마이페이지에서 쿠폰으로 등록한 후에는 등록일로부터 7일 이내에 사용해야 합니다. 7일이 지나면 쿠폰이 만료되므로, 여행 예약 직전에 코드를 등록하는 것을 권장합니다.',
        },
        {
          question: '한 번에 여러 할인코드를 사용할 수 있나요?',
          answer: '아니요, 한 번의 결제에는 하나의 할인코드(쿠폰)만 적용됩니다. 다만 할인코드와 카드사 할인은 별개이므로 중복 적용이 가능합니다. 예를 들어 PACKMKTP3000 코드로 3,000원 할인을 받고, 삼성카드로 결제하면 카드사 할인까지 추가로 받을 수 있습니다. 카카오페이, 토스페이 등 결제 수단 할인도 별도로 적용됩니다.',
        },
      ],
    },
    {
      category: '카드사 할인',
      items: [
        {
          question: '카드사 할인과 할인코드 중복 가능한가요?',
          answer: '네, 가능합니다! 마이리얼트립에서는 할인코드 쿠폰과 카드사 할인을 동시에 적용할 수 있습니다. 예를 들어 PACKMKTP5000 코드(5,000원 할인)를 적용한 뒤, 삼성카드로 결제하면 국제선 항공권 최대 15% 할인까지 함께 받을 수 있습니다. 또한 카카오페이나 토스페이 등 간편결제 할인도 별도로 중복 적용됩니다.',
        },
        {
          question: '카드사 할인은 어떻게 등록하나요?',
          answer: '마이리얼트립 웹사이트(member.myrealtrip.com/coupon) 또는 앱에서 마이페이지 > 쿠폰 등록으로 이동합니다. 카드번호 앞 6자리 + 등록월(YYMMDD) 형식으로 입력하면 해당 카드사 전용 할인 쿠폰이 자동 발급됩니다. 예를 들어 삼성카드 1234-56XX-XXXX-XXXX 카드를 2026년 4월에 등록한다면 "123456260401"을 입력합니다.',
        },
        {
          question: '모든 카드가 할인 대상인가요?',
          answer: '아닙니다. 카드사별로 대상 카드가 다릅니다. 일반적으로 개인 신용카드와 체크카드가 대상이며, 법인카드, BC 발급 카드, 선불카드, 기프트카드 등은 제외됩니다. 삼성카드, KB국민카드, 우리카드, 롯데카드, NH농협카드, 하나카드가 현재 제휴 중이며, 각 카드사별 상세 조건은 카드사 할인 페이지에서 확인하세요.',
        },
      ],
    },
    {
      category: '결제/환불',
      items: [
        {
          question: '취소 시 쿠폰은 어떻게 되나요?',
          answer: '예약을 취소하면 사용한 쿠폰은 자동으로 복구됩니다. 단, 쿠폰의 유효기간이 지난 경우에는 복구되지 않습니다. 예를 들어 4월 25일에 쿠폰을 사용하고, 5월 2일에 취소한 경우 쿠폰의 유효기간이 4월 30일이었다면 쿠폰이 복구되지 않습니다. 따라서 취소 가능성이 있다면 쿠폰 유효기간을 미리 확인하는 것이 좋습니다.',
        },
        {
          question: '해외결제 수수료가 발생하나요?',
          answer: '마이리얼트립은 국내 회사이므로 원화(KRW)로 결제됩니다. 따라서 해외결제 수수료가 발생하지 않습니다. 이는 아고다, 트립닷컴 등 해외 OTA에서 외화 결제 시 발생하는 1.5~2%의 해외결제 수수료를 절약할 수 있다는 장점입니다. 단, 일부 해외 숙소/항공사 직접 결제가 필요한 상품은 예외가 있을 수 있으니 결제 전 확인하세요.',
        },
        {
          question: '환불은 얼마나 걸리나요?',
          answer: '취소 승인 후 환불까지 소요 기간은 결제 수단에 따라 다릅니다. 신용카드는 취소 후 3~5영업일, 체크카드/계좌이체는 5~7영업일 정도 소요됩니다. 간편결제(카카오페이, 토스페이 등)는 1~3영업일로 비교적 빠릅니다. 카드사 청구 취소의 경우 다음 결제일에 반영될 수도 있습니다.',
        },
      ],
    },
    {
      category: '예약 관련',
      items: [
        {
          question: '마이리얼트립 포인트란 무엇인가요?',
          answer: '마이리얼트립 포인트는 예약 및 활동을 통해 적립되는 자체 포인트입니다. 1포인트 = 1원으로 다음 예약 시 현금처럼 사용할 수 있습니다. 리뷰 작성, 특정 이벤트 참여, 첫 예약 등으로 포인트가 적립되며, 일부 상품은 결제 금액의 1~3%가 포인트로 적립됩니다. 포인트는 적립일로부터 1년간 유효합니다.',
        },
        {
          question: '여행자보험도 할인 되나요?',
          answer: '여행자보험은 할인코드 적용 대상에서 제외됩니다. 마이리얼트립에서 여행자보험을 판매하고 있지만, 보험 상품 특성상 할인코드나 카드사 할인이 적용되지 않습니다. 다만 마이리얼트립에서 항공권이나 숙소를 예약할 때 함께 가입하면 편리하게 관리할 수 있고, 가끔 보험 전용 프로모션이 진행되기도 합니다.',
        },
        {
          question: '항공권 가격이 예약 후 변동되면 어떻게 되나요?',
          answer: '항공권은 예약 완료 시점의 가격으로 확정됩니다. 예약 후 가격이 내려가더라도 자동으로 가격이 조정되지는 않습니다. 다만 마이리얼트립의 취소 수수료가 없는 항공권이라면, 취소 후 재예약하는 방법으로 더 저렴한 가격을 적용받을 수 있습니다. 가격 변동이 걱정된다면 특가 알림을 설정해두고 최적의 타이밍에 예약하세요.',
        },
        {
          question: '그룹 예약(단체 할인)이 있나요?',
          answer: '마이리얼트립에서 15인 이상 단체 예약 시 별도의 그룹 할인을 받을 수 있는 경우가 있습니다. 투어/티켓 상품의 경우 상품 상세 페이지에서 단체 할인 여부를 확인하거나, 고객센터(카카오톡 또는 전화)를 통해 그룹 예약 문의를 할 수 있습니다. 항공권과 숙소는 일반적으로 별도 단체 할인이 없지만, 수량에 따라 상담을 통해 특가를 제공받을 수도 있습니다.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">자주 묻는 질문</h1>
            <p className="text-xl text-blue-100">
              마이리얼트립 할인코드, 카드사 할인, 예약에 관한 궁금한 점을 확인하세요
            </p>
          </div>
        </section>

        {/* FAQ 카테고리별 */}
        {faqCategories.map((category, catIdx) => {
          const startIndex = faqCategories
            .slice(0, catIdx)
            .reduce((sum, cat) => sum + cat.items.length, 0);

          return (
            <section
              key={catIdx}
              className={`py-16 ${catIdx % 2 === 0 ? 'bg-background' : 'bg-white'}`}
            >
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-foreground mb-8">{category.category}</h2>

                <div className="space-y-4">
                  {category.items.map((faq, itemIdx) => {
                    const index = startIndex + itemIdx;
                    return (
                      <div
                        key={index}
                        className="bg-white border border-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedFAQ(expandedFAQ === index ? null : index)
                          }
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
                        >
                          <h3 className="font-bold text-foreground text-left">{faq.question}</h3>
                          <ChevronDown
                            size={20}
                            className={`text-muted-foreground transition-transform flex-shrink-0 ml-4 ${
                              expandedFAQ === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {expandedFAQ === index && (
                          <div className="px-6 py-4 bg-muted border-t border-border">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* 추가 도움 */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">추가 도움이 필요하신가요?</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6 bg-white">
                <h3 className="font-bold text-foreground mb-2">마이리얼트립 고객센터</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  카카오톡 또는 전화로 문의하세요. 평일 09:00~18:00, 점심 12:00~13:00 제외.
                </p>
                <a
                  href="https://myrealt.rip/S3YG0a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  마이리얼트립 방문하기
                </a>
              </div>

              <div className="border border-border rounded-lg p-6 bg-white">
                <h3 className="font-bold text-foreground mb-2">할인코드 페이지</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  최신 할인코드와 사용 방법을 확인하세요.
                </p>
                <a
                  href="/discount-codes"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  할인코드 보기
                </a>
              </div>

              <div className="border border-border rounded-lg p-6 bg-white">
                <h3 className="font-bold text-foreground mb-2">카드사 할인 페이지</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  카드사별 할인 혜택과 등록 방법을 확인하세요.
                </p>
                <a
                  href="/card-discounts"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  카드사 할인 보기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">지금 할인받고 여행을 예약하세요</h2>
            <p className="text-xl text-blue-100 mb-8">
              할인코드와 카드사 혜택을 적용하여 마이리얼트립에서 최저가로 예약하세요
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

export default FAQPage;
