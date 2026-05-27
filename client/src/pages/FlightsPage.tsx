import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePageTitle } from '@/hooks/usePageTitle';

const FlightsPage = () => {
  usePageTitle('항공권 할인');
  const domesticRoutes = [
    { route: '서울(김포) → 제주', airlines: '이스타항공, 제주항공, 티웨이항공, 진에어', price: '편도 3만원대~' },
    { route: '서울(김포) → 부산', airlines: '대한항공, 아시아나, 에어부산', price: '편도 4만원대~' },
    { route: '서울(김포) → 광주', airlines: '대한항공, 아시아나', price: '편도 5만원대~' },
    { route: '서울(김포) → 여수', airlines: '대한항공, 아시아나, 진에어', price: '편도 5만원대~' },
  ];

  const internationalRoutes = [
    { region: '일본', cities: '도쿄, 오사카, 후쿠오카, 삿포로', price: '왕복 15만원대~', note: '저가항공 특가 수시 오픈' },
    { region: '동남아', cities: '방콕, 다낭, 세부, 발리', price: '왕복 25만원대~', note: '성수기 제외 저렴' },
    { region: '유럽', cities: '파리, 런던, 로마, 바르셀로나', price: '왕복 70만원대~', note: '경유편 활용 시 저렴' },
    { region: '미주', cities: '뉴욕, LA, 하와이, 괌', price: '왕복 60만원대~', note: '괌/사이판은 단거리 특가 가능' },
  ];

  const cardDiscounts = [
    { card: '삼성카드', benefit: '국제선 항공권 최대 15% 즉시할인, 최대 3만원 할인', condition: '삼성 개인 신용카드 등록 필요' },
    { card: 'KB국민카드', benefit: '국제선 항공권 최대 15% 즉시할인', condition: 'KB 개인 신용/체크카드 (BC 제외)' },
    { card: '우리카드', benefit: '국제선 항공권 최대 15% 즉시할인, 유니마일 카드 6% 캐시백', condition: '우리 개인카드 등록' },
    { card: '롯데카드', benefit: '국제선 항공권 최대 15% 즉시할인', condition: '롯데 개인 신용카드' },
    { card: 'NH농협카드', benefit: '국제선 항공권 최대 15% 즉시할인, 토스페이 조합 최대 35,000원', condition: 'NH 개인카드 (BC, 선불 제외)' },
    { card: '하나카드', benefit: '국제선 항공권 최대 15% 즉시할인, AMEX 전용 혜택', condition: '하나 개인 신용카드' },
  ];

  const bookingTips = [
    { title: '얼리버드 예약', desc: '출발 2~3개월 전에 예약하면 최저가를 잡을 확률이 높습니다. 특히 성수기(7~8월, 연말) 항공권은 4~5개월 전부터 검색을 시작하세요.' },
    { title: '특가 알림 설정', desc: '마이리얼트립 앱에서 원하는 노선의 특가 알림을 설정하면 가격이 내려갈 때 푸시 알림을 받을 수 있습니다.' },
    { title: '요일별 가격 차이 활용', desc: '화요일~목요일 출발/도착 항공편이 주말보다 20~30% 저렴한 경우가 많습니다. 일정이 유연하다면 평일 출발을 고려하세요.' },
    { title: '경유편 활용', desc: '직항보다 경유편이 30~50% 저렴할 수 있습니다. 특히 유럽/미주 노선은 경유편을 적극 활용하세요. 경유지에서 스톱오버를 하면 추가 여행지도 즐길 수 있습니다.' },
    { title: '할인코드 + 카드사 할인 중복 적용', desc: '마이리얼트립 할인코드와 카드사 항공권 할인은 동시에 적용됩니다. 두 가지를 함께 사용하면 최대 할인 효과를 누릴 수 있습니다.' },
    { title: '왕복 예약이 유리', desc: '편도 2장보다 왕복으로 예약하는 것이 대부분 저렴합니다. 마이리얼트립에서 왕복 검색 시 자동으로 최적 조합을 추천해줍니다.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">항공권 할인 정보</h1>
            <p className="text-xl text-blue-100">
              마이리얼트립에서 국내·해외 항공권을 할인코드와 카드사 혜택으로 더 저렴하게 예약하세요
            </p>
          </div>
        </section>

        {/* 할인코드 적용 방법 */}
        <section className="bg-amber-50 border-l-4 border-amber-500 py-6 px-4 md:px-0">
          <div className="container mx-auto">
            <h3 className="font-bold text-amber-900 mb-2">항공권 할인코드 적용 방법</h3>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>• 마이리얼트립에서 원하는 항공편을 검색하고 선택합니다</li>
              <li>• 결제 화면에서 '쿠폰 적용' 버튼을 클릭합니다</li>
              <li>• 사전에 등록한 할인코드 쿠폰을 선택하면 즉시 할인이 적용됩니다</li>
              <li>• 카드사 할인은 해당 카드로 결제 시 자동 적용됩니다 (사전 카드 등록 필요)</li>
              <li>• 할인코드 쿠폰과 카드사 할인은 중복 적용 가능합니다</li>
            </ul>
          </div>
        </section>

        {/* 국내 항공권 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2">국내 항공권</h2>
            <p className="text-muted-foreground mb-8">인기 국내선 노선과 예상 가격대</p>

            <div className="grid md:grid-cols-2 gap-6">
              {domesticRoutes.map((route, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-white">
                  <h3 className="font-bold text-lg text-foreground mb-2">{route.route}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">운항 항공사</p>
                      <p className="text-foreground">{route.airlines}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">예상 가격</p>
                      <p className="font-bold text-blue-600">{route.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-2">국내선 할인 팁</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 제주 노선은 이스타항공, 티웨이항공 등 LCC가 가장 저렴합니다</li>
                <li>• 마이리얼트립 할인코드 MKTP2510 (1,000원)은 항공권에도 적용 가능합니다</li>
                <li>• 주중(화~목) 출발이 주말 대비 20~40% 저렴합니다</li>
                <li>• 새벽/늦은 밤 시간대 항공편은 추가 할인이 있는 경우가 많습니다</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 해외 항공권 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2">해외 항공권</h2>
            <p className="text-muted-foreground mb-8">인기 해외 노선별 예상 가격과 특징</p>

            <div className="grid md:grid-cols-2 gap-6">
              {internationalRoutes.map((route, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600 text-sm">{route.region}</span>
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{route.region} 노선</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">주요 도시</p>
                      <p className="text-foreground">{route.cities}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">예상 가격</p>
                      <p className="font-bold text-blue-600">{route.price}</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-blue-800 text-xs">{route.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 카드사 항공권 할인 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2">카드사 항공권 할인</h2>
            <p className="text-muted-foreground mb-8">카드사별 국제선 항공권 할인 혜택을 비교하세요</p>

            <div className="space-y-4">
              {cardDiscounts.map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600 text-xs">{item.card.replace('카드', '')}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{item.card}</h3>
                        <p className="text-sm text-blue-600">{item.benefit}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground md:text-right">{item.condition}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="font-bold text-green-900 mb-2">카드사 할인 등록 방법</p>
              <p className="text-sm text-green-800">
                마이리얼트립 마이페이지 &gt; 쿠폰 등록에서 카드번호 앞 6자리 + 등록월(YYMMDD) 형식으로 입력하면 카드사 전용 쿠폰이 자동 발급됩니다. 결제 시 해당 카드로 결제하면 할인이 적용됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 항공권 예약 팁 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">항공권 예약 팁</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {bookingTips.map((tip, idx) => (
                <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">지금 항공권을 검색하세요</h2>
            <p className="text-xl text-blue-100 mb-8">
              마이리얼트립에서 할인코드와 카드사 혜택을 적용하여 최저가 항공권을 예약하세요
            </p>
            <a
              href="https://myrealt.rip/aRT258"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              마이리얼트립에서 항공권 검색
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FlightsPage;
