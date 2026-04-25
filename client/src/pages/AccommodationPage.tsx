import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePageTitle } from '@/hooks/usePageTitle';

const AccommodationPage = () => {
  usePageTitle('숙소 할인');
  const domesticAccom = [
    { area: '서울', types: '호텔, 한옥 스테이, 게스트하우스', popular: '명동, 강남, 홍대, 종로', priceRange: '5만원~30만원/박', tip: '주중 예약이 30~50% 저렴, 마이리얼트립 단독 특가 수시 오픈' },
    { area: '제주', types: '리조트, 펜션, 풀빌라, 게스트하우스', popular: '애월, 중문, 성산, 서귀포', priceRange: '8만원~40만원/박', tip: '비수기(3~5월, 9~11월) 가격이 절반 이하로 떨어지기도' },
    { area: '부산', types: '호텔, 리조트, 게스트하우스', popular: '해운대, 광안리, 서면, 남포동', priceRange: '5만원~25만원/박', tip: '해운대 오션뷰 호텔은 평일 예약이 훨씬 저렴' },
    { area: '강원도', types: '리조트, 펜션, 글램핑', popular: '속초, 강릉, 평창, 춘천', priceRange: '7만원~35만원/박', tip: '스키시즌(12~2월) 제외하면 리조트 가격이 크게 내려감' },
  ];

  const internationalAccom = [
    { region: '일본', types: '료칸, 비즈니스호텔, 에어비앤비', popular: '도쿄 신주쿠, 오사카 난바, 교토 기온', priceRange: '5만원~20만원/박', tip: '료칸은 마이리얼트립에서 한국어 예약 가능, 조식 포함 옵션 확인' },
    { region: '동남아', types: '리조트, 빌라, 풀빌라, 호스텔', popular: '발리 우붓, 다낭 미케비치, 세부 막탄', priceRange: '3만원~30만원/박', tip: '4~5성급 리조트도 비수기에 10만원 이하 가능' },
    { region: '유럽', types: '호텔, 아파트먼트, B&B', popular: '파리 마레, 로마 트라스테베레, 바르셀로나 고딕지구', priceRange: '10만원~40만원/박', tip: '아파트먼트형 숙소가 장기 체류에 유리, 조리 시설 활용 가능' },
  ];

  const discountCodes = [
    { code: 'MKTP2510', amount: '1,000원 할인', condition: '최소 50,000원 이상 숙소 예약', note: '숙소에도 적용 가능한 코드' },
    { code: 'PACKMKTP3000', amount: '3,000원 할인', condition: '최소 100,000원 이상', note: '투어/티켓/숙소 통합 코드' },
    { code: 'PACKMKTP5000', amount: '5,000원 할인', condition: '최소 150,000원 이상', note: '고가 숙소 예약에 적합' },
  ];

  const cardBenefits = [
    { card: '삼성카드', benefit: '국내 숙소 최대 5만원 할인, 해외 숙소 최대 3만원 할인', detail: '투어/티켓/숙소 통합 1만~6만원 할인 쿠폰 제공' },
    { card: 'KB국민카드', benefit: '숙소 예약 시 최대 3만원 할인', detail: 'KB페이 결합 시 추가 할인 가능' },
    { card: '우리카드', benefit: '숙소 예약 할인 + 유니마일 카드 최대 6% 캐시백', detail: '유니마일 카드 소유자에게 특히 유리' },
    { card: 'NH농협카드', benefit: '토스페이 조합 시 최대 35,000원 할인', detail: 'NH카드 + 토스페이 결제 시 중복 할인' },
  ];

  const bookingTips = [
    { title: '시즌별 가격 변동 파악', desc: '국내 숙소는 주말/공휴일에 2~3배 비싸집니다. 가능하면 주중(일~목) 체크인을 선택하세요. 해외 숙소는 현지 성수기/비수기를 반드시 확인하세요.' },
    { title: '얼리버드 예약', desc: '인기 숙소(제주 풀빌라, 오사카 료칸 등)는 2~3개월 전 예약이 필수입니다. 마이리얼트립에서 관심 숙소를 찜하면 가격 변동 알림을 받을 수 있습니다.' },
    { title: '무료 취소 가능 숙소 활용', desc: '마이리얼트립에서 "무료 취소" 필터를 사용하면 체크인 1~7일 전까지 무료로 취소할 수 있는 숙소만 검색됩니다. 일정이 확실하지 않을 때 유용합니다.' },
    { title: '리뷰 확인 필수', desc: '마이리얼트립 한국어 리뷰가 풍부합니다. 실제 이용자의 사진 리뷰를 확인하면 예약 실패를 줄일 수 있습니다.' },
    { title: '패키지 vs 개별 예약 비교', desc: '항공+숙소 패키지가 개별 예약보다 저렴한 경우가 많습니다. 마이리얼트립의 패키지 상품도 비교해보세요.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">숙소 · 호텔 할인 정보</h1>
            <p className="text-xl text-blue-100">
              마이리얼트립에서 국내·해외 숙소를 할인코드와 카드사 혜택으로 저렴하게 예약하세요
            </p>
          </div>
        </section>

        {/* 숙소 할인코드 */}
        <section className="bg-amber-50 border-l-4 border-amber-500 py-6 px-4 md:px-0">
          <div className="container mx-auto">
            <h3 className="font-bold text-amber-900 mb-2">숙소 적용 가능 할인코드</h3>
            <div className="space-y-2">
              {discountCodes.map((dc, idx) => (
                <div key={idx} className="text-sm text-amber-800">
                  <span className="font-bold">{dc.code}</span> — {dc.amount} (최소 {dc.condition.replace('최소 ', '')}) · {dc.note}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 국내 숙소 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2">국내 숙소</h2>
            <p className="text-muted-foreground mb-8">지역별 인기 숙소 정보와 가격대</p>

            <div className="grid md:grid-cols-2 gap-6">
              {domesticAccom.map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-white">
                  <h3 className="font-bold text-xl text-foreground mb-3">{item.area}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">숙소 유형</p>
                      <p className="text-foreground">{item.types}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">인기 지역</p>
                      <p className="text-foreground">{item.popular}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">가격대</p>
                      <p className="font-bold text-blue-600">{item.priceRange}</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-blue-800 text-xs">{item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 해외 숙소 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2">해외 숙소</h2>
            <p className="text-muted-foreground mb-8">인기 해외 지역별 숙소 유형과 예약 팁</p>

            <div className="grid md:grid-cols-3 gap-6">
              {internationalAccom.map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600 text-sm">{item.region}</span>
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{item.region}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">숙소 유형</p>
                      <p className="text-foreground">{item.types}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">인기 지역</p>
                      <p className="text-foreground">{item.popular}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">가격대</p>
                      <p className="font-bold text-blue-600">{item.priceRange}</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-blue-800 text-xs">{item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 카드사 숙소 할인 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2">카드사 숙소 할인</h2>
            <p className="text-muted-foreground mb-8">카드사별 숙소 예약 시 적용되는 할인 혜택</p>

            <div className="grid md:grid-cols-2 gap-6">
              {cardBenefits.map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-white">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600 text-xs">{item.card.replace('카드', '')}</span>
                    </div>
                    <h3 className="font-bold text-foreground">{item.card}</h3>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mb-2">{item.benefit}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="font-bold text-blue-900 mb-2">할인코드 + 카드사 할인 중복 적용</p>
              <p className="text-sm text-blue-800">
                마이리얼트립에서는 할인코드 쿠폰과 카드사 할인을 동시에 적용할 수 있습니다. 예를 들어 MKTP2510 코드(1,000원)를 적용한 뒤 삼성카드로 결제하면 카드사 할인까지 함께 받을 수 있어 최대 절약이 가능합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 숙소 예약 팁 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">숙소 예약 팁</h2>

            <div className="space-y-6">
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
            <h2 className="text-3xl font-bold mb-4">지금 숙소를 검색하세요</h2>
            <p className="text-xl text-blue-100 mb-8">
              할인코드와 카드사 혜택을 적용하여 최저가 숙소를 예약하세요
            </p>
            <a
              href="https://myrealt.rip/S3YG0a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              마이리얼트립에서 숙소 검색
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccommodationPage;
