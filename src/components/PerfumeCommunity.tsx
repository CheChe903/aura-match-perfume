
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PerfumeCommunityProps {
  onBack: () => void;
}

const PerfumeCommunity: React.FC<PerfumeCommunityProps> = ({ onBack }) => {
  const [selectedPerfume, setSelectedPerfume] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const perfumes = [
    {
      id: 'chanel-no5',
      name: 'No.5',
      brand: 'Chanel',
      price: '180,000원',
      rating: 4.7,
      reviews: 245,
      topNotes: ['알데하이드', '네롤리', '베르가못'],
      middleNotes: ['자스민', '로즈', '일랑일랑'],
      baseNotes: ['샌달우드', '바닐라', '머스크'],
      image: '🌟',
      userReviews: [
        { user: '향수러버', rating: 5, comment: '클래식한 향수의 정수입니다. 시간이 지나도 변하지 않는 매력이 있어요.' },
        { user: '뷰티매니아', rating: 4, comment: '고급스럽고 우아한 향이에요. 특별한 날에 착용하기 좋습니다.' },
        { user: '향기애호가', rating: 5, comment: '한 번 맡으면 잊을 수 없는 독특한 향입니다.' }
      ]
    },
    {
      id: 'dior-sauvage',
      name: 'Sauvage',
      brand: 'Dior',
      price: '165,000원',
      rating: 4.8,
      reviews: 189,
      topNotes: ['베르가못', '핑크 페퍼'],
      middleNotes: ['제라늄', '라벤더', '시천우이'],
      baseNotes: ['앰버그리스', '삼나무', '라브다늄'],
      image: '🏔️',
      userReviews: [
        { user: '남성향수킹', rating: 5, comment: '남성스럽고 세련된 향입니다. 지속력도 좋아요.' },
        { user: '프래그런스', rating: 5, comment: '계절 상관없이 사용하기 좋은 만능 향수예요.' },
        { user: '향수초보', rating: 4, comment: '처음 써본 향수인데 주변 반응이 좋습니다.' }
      ]
    },
    {
      id: 'tomford-oud',
      name: 'Oud Wood',
      brand: 'Tom Ford',
      price: '520,000원',
      rating: 4.9,
      reviews: 156,
      topNotes: ['로즈우드', '카다몸', '샌달우드'],
      middleNotes: ['우드', '파로산달우드'],
      baseNotes: ['바닐라', '앰버'],
      image: '💎',
      userReviews: [
        { user: '럭셔리러버', rating: 5, comment: '가격이 비싸지만 그만한 가치가 있는 향수입니다.' },
        { user: '우디향좋아', rating: 5, comment: '깊고 복합적인 향이 매력적이에요. 고급스러워요.' },
        { user: '향수컬렉터', rating: 4, comment: '톰포드 중에서도 특별한 향수입니다.' }
      ]
    }
  ];

  const filteredPerfumes = perfumes.filter(perfume =>
    perfume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    perfume.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedPerfume) {
    const perfume = perfumes.find(p => p.id === selectedPerfume);
    
    return (
      <div className="min-h-screen bg-luxury-gradient py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="perfume-card animate-fade-in">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{perfume?.image}</div>
              <CardTitle className="luxury-text text-3xl text-champagne-800 mb-2">
                {perfume?.name}
              </CardTitle>
              <CardDescription className="text-xl text-champagne-600 mb-4">
                {perfume?.brand}
              </CardDescription>
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">⭐</span>
                  <span className="text-lg font-semibold text-champagne-800">{perfume?.rating}</span>
                </div>
                <span className="text-champagne-600">•</span>
                <span className="text-champagne-600">{perfume?.reviews}개 리뷰</span>
                <span className="text-champagne-600">•</span>
                <span className="text-2xl font-bold text-champagne-800">{perfume?.price}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* 향조 정보 */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-rose-50 to-rose-100 border-0">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg text-champagne-800">탑 노트</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {perfume?.topNotes.map((note, index) => (
                        <span key={index} className="bg-rose-200 text-rose-800 px-3 py-1 rounded-full text-sm">
                          {note}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg text-champagne-800">미들 노트</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {perfume?.middleNotes.map((note, index) => (
                        <span key={index} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {note}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-0">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-lg text-champagne-800">베이스 노트</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {perfume?.baseNotes.map((note, index) => (
                        <span key={index} className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm">
                          {note}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 사용자 리뷰 */}
              <div>
                <h3 className="luxury-text text-2xl text-champagne-800 mb-6 text-center">사용자 리뷰</h3>
                <div className="space-y-4">
                  {perfume?.userReviews.map((review, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border-champagne-200">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-golden-gradient rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">{review.user[0]}</span>
                            </div>
                            <span className="font-semibold text-champagne-800">{review.user}</span>
                          </div>
                          <div className="flex">
                            {Array.from({length: review.rating}, (_, i) => (
                              <span key={i} className="text-yellow-400">⭐</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-champagne-700 leading-relaxed">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  onClick={() => setSelectedPerfume('')}
                  variant="outline"
                  className="border-champagne-300 text-champagne-700 px-8 py-3 rounded-full mr-4"
                >
                  목록으로 돌아가기
                </Button>
                <Button 
                  onClick={onBack}
                  variant="outline"
                  className="border-champagne-300 text-champagne-700 px-8 py-3 rounded-full"
                >
                  홈으로 돌아가기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-gradient py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="perfume-card animate-fade-in">
          <CardHeader className="text-center">
            <div className="text-6xl mb-6">👥</div>
            <CardTitle className="luxury-text text-3xl text-champagne-800 mb-4">
              향수 커뮤니티
            </CardTitle>
            <CardDescription className="text-lg text-champagne-600">
              다양한 향수의 정보와 리뷰를 확인해보세요
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* 검색 */}
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="향수 이름이나 브랜드를 검색하세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-full border-2 border-champagne-200 focus:border-champagne-400 focus:outline-none text-champagne-800"
              />
            </div>

            {/* 향수 목록 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPerfumes.map((perfume) => (
                <Card 
                  key={perfume.id}
                  className="cursor-pointer hover:scale-105 transition-all duration-300 bg-white border-0 shadow-lg hover:shadow-xl"
                  onClick={() => setSelectedPerfume(perfume.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{perfume.image}</div>
                    <h3 className="luxury-text text-xl font-bold text-champagne-800 mb-2">
                      {perfume.name}
                    </h3>
                    <p className="text-champagne-600 mb-3">{perfume.brand}</p>
                    
                    <div className="flex justify-center items-center gap-2 mb-3">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">⭐</span>
                        <span className="font-semibold text-champagne-800">{perfume.rating}</span>
                      </div>
                      <span className="text-champagne-500">•</span>
                      <span className="text-champagne-600 text-sm">{perfume.reviews}개 리뷰</span>
                    </div>
                    
                    <div className="text-lg font-bold text-champagne-800 mb-4">
                      {perfume.price}
                    </div>
                    
                    <Button 
                      className="w-full bg-golden-gradient text-white rounded-full hover:scale-105 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPerfume(perfume.id);
                      }}
                    >
                      리뷰 보기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPerfumes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-champagne-600 text-lg">검색 결과가 없습니다.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerfumeCommunity;
