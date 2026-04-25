import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePageTitle } from '@/hooks/usePageTitle';

const ComparisonPage = () => {
  usePageTitle('비교 분석');
  const comparisonData = [
    {
      category: '할인코드 종류',
      myrealtrip: '1,000~5,000원 할인코드 상시 제공, 월별 신규 코드 업데이트',
      agoda: '5~10% 할인코드 수시 제공, 시크릿딜',
      tripcom: '앱 전용 할인코드, 신규가입 쿠폰',
      hotelscom: '10박 무료 1박 적립, 시즌별 쿠폰',
    },
    {
      category: '카드사 혜택',
      myrealtrip: '삼성/KB/우리/롯데/NH/하나 6개 카드사 최대 15% 할인',
      agoda: '비씨카드 10% 등 일부 제휴',
      tripcom: '삼성카드 5% 등 일부 제휴',
      hotelscom: '카드사 제휴 제한적',
    },
    {
      category: '적립률',
      myrealtrip: '마이리얼트립 포인트 적립 (결제액의 1~3%)',
      agoda: '아고다 캐시 최대 10% 적립',
      tripcom: '트립코인 적립 (결제액의 1%)',
      hotelscom: '10박 완료 시 1박 무료 (약 10% 적립)',
    },
    {
      category: '취소 정책',
      myrealtrip: '상품별 상이, 무료취소 필터 제공, 한국어 고객센터',
      agoda: '무료취소 옵션 많음, 환불 속도 보통',
      tripcom: '무료취소 옵션 있음, 고객센터 대응 느림',
      hotelscom: '무료취소 옵션 많음, 환불 비교적 빠름',
    },
    {
      category: '주요 특징',
      myrealtrip: '투어/티켓/가이드 특화, 국내여행 강점, 한국어 완벽 지원',
      agoda: '해외 호텔 가격 경쟁력, 아시아 지역 강점',
      tripcom: '항공권 최저가 빈도 높음, 중화권 강점',
      hotelscom: '글로벌 호텔 재고 풍부, 10박 리워드',
    },
    {
      category: '결제 통화',
      myrealtrip: '원화(KRW) 결제, 해외결제 수수료 없음',
      agoda: '원화/외화 선택 가능, 환율 차이 주의',
      tripcom: '원화/외화 선택 가능',
      hotelscom: '원화/외화 선택 가능',
    },
    {
      category: '고객 지원',
      myrealtrip: '한국어 채팅/전화 지원, 카카오톡 상담',
      agoda: '한국어 지원 있으나 제한적',
      tripcom: '한국어 지원 있으나 응답 느림',
      hotelscom: '한국어 지원 제한적',
    },
  ];

  const recommendations = [
    {
      situation: '국내 여행 (투어/티켓 포함)',
      recommended: '마이리얼트립',
      reason: '국내 투어, 티켓, 가이드 상품이 가장 풍부하고 한국어 리뷰가 많습니다. 카드사 할인과 할인코드를 함께 적용하면 가격 경쟁력도 뛰어납니다.',
    },
    {
      situation: '해외 호텔 최저가',
      recommended: '아고다',
      reason: '동남아, 일본 등 아시아 지역 호텔 가격이 가장 저렴한 경우가 많습니다. 시크릿딜과 아고다 캐시 적립도 매력적입니다.',
    },
    {
      situation: '해외 항공권 최저가',
      recommended: '트립닷컴 / 마이리얼트립',
      reason: '트립닷컴은 항공권 최저가 빈도가 높고, 마이리얼트립은 카드사 항공권 할인(최대 15%)이 강력합니다. 두 곳을 비교해보세요.',
    },
    {
      situation: '장기 숙박 (10박 이상)',
      recommended: '호텔스닷컴',
      reason: '10박 완료 시 1박 무료 리워드가 장기 숙박에 매우 유리합니다. 출장이 잦은 분에게 추천합니다.',
    },
    {
      situation: '일본 료칸/전통 숙소',
      recommended: '마이리얼트립',
      reason: '한국어로 료칸 예약이 가능하고, 한국인 리뷰가 풍부하며, 할인코드 적용도 가능합니다.',
    },
    {
      situation: '카드사 할인 극대화',
      recommended: '마이리얼트립',
      reason: '국내 6개 주요 카드사와 제휴하여 최대 15% 항공권 할인, 최대 6만원 투어/숙소 할인을 제공합니다. 카카오페이/토스페이 추가 할인도 가능합니다.',
    },
  ];

  const strengths = [
    { title: '투어·티켓·가이드 특화', desc: '다른 OTA에 없는 현지 투어, 입장권, 한국어 가이드 상품이 풍부합니다. 패키지 여행이 아닌 자유여행을 계획할 때 꼭 필요한 플랫폼입니다.' },
    { title: '한국어 완벽 지원', desc: '상품 설명, 리뷰, 고객센터까지 100% 한국어로 이용 가능합니다. 해외 OTA에서 영어 소통이 불편했던 분에게 큰 장점입니다.' },
    { title: '국내 카드사 할인 풍부', desc: '삼성, KB, 우리, 롯데, NH, 하나 등 국내 주요 카드사와 제휴하여 다양한 할인 혜택을 제공합니다. 해외 OTA에서는 받기 어려운 혜택입니다.' },
    { title: '원화 결제 · 수수료 없음', desc: '원화로 결제하므로 해외결제 수수료가 발생하지 않습니다. 아고다나 트립닷컴에서 외화 결제 시 발생하는 1.5~2% 수수료를 절약할 수 있습니다.' },
    { title: '카카오톡 고객 상담', desc: '카카오톡으로 간편하게 고객센터에 문의할 수 있습니다. 여행 중 긴급 상황에도 빠른 대응이 가능합니다.' },
    { title: '국내 여행 최강', desc: '제주, 부산, 강원도 등 국내 여행 상품(숙소, 렌터카, 투어, 티켓)이 가장 다양하고 가격 경쟁력이 높습니다.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">여행 플랫폼 할인 비교</h1>
            <p className="text-xl text-blue-100">
              마이리얼트립 vs 아고다 vs 트립닷컴 vs 호텔스닷컴 - 어디서 예약하는 게 유리할까요?
            </p>
          </div>
        </section>

        {/* 비교 테이블 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">플랫폼별 비교</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left px-4 py-3 font-bold text-foreground min-w-[120px]">항목</th>
                    <th className="text-left px-4 py-3 font-bold text-blue-600 min-w-[180px]">마이리얼트립</th>
                    <th className="text-left px-4 py-3 font-bold text-foreground min-w-[180px]">아고다</th>
                    <th className="text-left px-4 py-3 font-bold text-foreground min-w-[180px]">트립닷컴</th>
                    <th className="text-left px-4 py-3 font-bold text-foreground min-w-[180px]">호텔스닷컴</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-muted' : 'bg-white'}>
                      <td className="px-4 py-3 font-bold text-foreground">{row.category}</td>
                      <td className="px-4 py-3 text-foreground">{row.myrealtrip}</td>
                      <td className="px-4 py-3 text-foreground">{row.agoda}</td>
                      <td className="px-4 py-3 text-foreground">{row.tripcom}</td>
                      <td className="px-4 py-3 text-foreground">{row.hotelscom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 마이리얼트립 강점 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2">마이리얼트립만의 강점</h2>
            <p className="text-muted-foreground mb-8">다른 OTA 대비 마이리얼트립이 특히 유리한 점</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strengths.map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6 bg-white">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="font-bold text-blue-600 text-sm">{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 상황별 추천 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-2">상황별 추천 플랫폼</h2>
            <p className="text-muted-foreground mb-8">여행 목적과 상황에 따라 가장 유리한 플랫폼을 추천합니다</p>

            <div className="space-y-4">
              {recommendations.map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                        {item.situation}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">추천: {item.recommended}</h3>
                      <p className="text-sm text-muted-foreground">{item.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 결론 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">결론</h2>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="font-bold text-blue-900 mb-2">국내 여행이라면 마이리얼트립</p>
                <p className="text-sm text-blue-800">
                  국내 숙소, 투어, 티켓, 렌터카까지 한 곳에서 예약 가능하고, 카드사 할인과 할인코드를 중복 적용할 수 있어 가장 저렴하게 예약할 수 있습니다.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="font-bold text-green-900 mb-2">해외 여행은 비교 후 결정</p>
                <p className="text-sm text-green-800">
                  해외 호텔은 아고다, 항공권은 트립닷컴이 저렴할 수 있지만, 마이리얼트립의 카드사 할인(최대 15%)을 적용하면 역전되는 경우가 많습니다. 반드시 할인 적용 후 최종 가격을 비교하세요.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="font-bold text-amber-900 mb-2">투어·가이드 상품은 마이리얼트립 독보적</p>
                <p className="text-sm text-amber-800">
                  현지 투어, 한국어 가이드, 입장권 등은 마이리얼트립에서만 제대로 예약할 수 있습니다. 자유여행 중 현지 투어를 계획한다면 마이리얼트립이 필수입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">마이리얼트립에서 할인받고 예약하세요</h2>
            <p className="text-xl text-blue-100 mb-8">
              할인코드와 카드사 혜택을 적용하면 어떤 플랫폼보다 저렴하게 예약할 수 있습니다
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

export default ComparisonPage;
