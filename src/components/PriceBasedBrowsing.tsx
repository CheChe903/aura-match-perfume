
import React, { useState } from 'React';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PriceBasedBrowsingProps {
  onBack: () => void;
}

const PriceBasedBrowsing: React.FC<PriceBasedBrowsingProps> = ({ onBack }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');

  const priceRanges = [
    {
      id: 'budget',
      title: '10만원 이하',
      subtitle: '합리적인 가격의 향수',
      icon: '💝',
      color: 'from-green-50 to-green-100',
      perfumes: [
        { name: 'Body Shop White Musk', brand: 'The Body Shop', price: '89,000원', rating: 4.2 },
        { name: 'Zara Rose', brand: 'Zara', price: '65,000원', rating: 4.0 },
        { name: 'Nature Republic Forest Story', brand: 'Nature Republic', price: '45,000원', rating: 3.8 }
      ]
    },
    {
      id: 'mid',
      title: '10-20만원',
      subtitle: '중급 브랜드 향수',
      icon: '🌟',
      color: 'from-blue-50 to-blue-100',
      perfumes: [
        { name: 'Light Blue', brand: 'Dolce & Gabbana', price: '165,000원', rating: 4.5 },
        { name: 'Good Girl', brand: 'Carolina Herrera', price: '145,000원', rating: 4.4 },
        { name: 'Flowerbomb', brand: 'Viktor & Rolf', price: '180,000원', rating: 4.6 }
      ]
    },
    {
      id: 'premium',
      title: '20-40만원',
      subtitle: '프리미엄 브랜드 향수',
      icon: '👑',
      color: 'from-purple-50 to-purple-100',
      perfumes: [
        { name: 'Santal 33', brand: 'Le Labo', price: '320,000원', rating: 4.7 },
        { name: 'Black Opium', brand: 'YSL', price: '285,000원', rating: 4.5 },
        { name: 'La Vie Est Belle', brand: 'Lancôme', price: '240,000원', rating: 4.3 }
      ]
    },
    {
      id: 'luxury',
      title: '40만원 이상',
      subtitle: '럭셔리 하이엔드 향수',
      icon: '💎',
      color: 'from-champagne-50 to-champagne-100',
      perfumes: [
        { name: 'Baccarat Rouge 540', brand: 'Maison Francis Kurkdjian', price: '480,000원', rating: 4.8 },
        { name: 'Oud Wood', brand: 'Tom Ford', price: '520,000원', rating: 4.9 },
        { name: 'Grand Soir', brand: 'Maison Francis Kurkdjian', price: '450,000원', rating: 4.7 }
      ]
    }
  ];

  if (selectedPriceRange) {
    const selectedRange = priceRanges.find(range => range.id === selectedPriceRange);
    
    return (
      <div className="min-h-screen bg-luxury-gradient py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="perfume-card animate-fade-in">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{selectedRange?.icon}</div>
              <CardTitle className="luxury-text text-3xl text-champagne-800 mb-4">
                {selectedRange?.title} 향수 컬렉션
              </CardTitle>
              <CardDescription className="text-lg text-champagne-600">
                {selectedRange?.subtitle}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedRange?.perfumes.map((perfume, index) => (
                  <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="luxury-text text-xl font-bold text-champagne-800">
                            {perfume.name}
                          </h3>
                          <p className="text-champagne-600">{perfume.brand}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            <span className="text-yellow-400 mr-1">⭐</span>
                            <span className="text-champagne-800 font-semibold">{perfume.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-2xl font-bold text-champagne-800 mb-4">
                        {perfume.price}
                      </div>
                      
                      <Button className="w-full bg-golden-gradient text-white rounded-full hover:scale-105 transition-transform">
                        상세 정보 보기
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  onClick={() => setSelectedPriceRange('')}
                  variant="outline"
                  className="border-champagne-300 text-champagne-700 px-8 py-3 rounded-full mr-4"
                >
                  다른 가격대 보기
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
      <div className="max-w-4xl mx-auto">
        <Card className="perfume-card animate-fade-in">
          <CardHeader className="text-center">
            <div className="text-6xl mb-6">💰</div>
            <CardTitle className="luxury-text text-3xl text-champagne-800 mb-4">
              가격대별 향수 탐색
            </CardTitle>
            <CardDescription className="text-lg text-champagne-600">
              예산에 맞는 완벽한 향수를 찾아보세요
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {priceRanges.map((range) => (
                <Card 
                  key={range.id}
                  className={`cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br ${range.color} border-0 shadow-lg hover:shadow-xl`}
                  onClick={() => setSelectedPriceRange(range.id)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4">{range.icon}</div>
                    <h3 className="luxury-text text-2xl font-bold text-champagne-800 mb-3">
                      {range.title}
                    </h3>
                    <p className="text-champagne-600 text-lg">
                      {range.subtitle}
                    </p>
                    <div className="mt-4 text-sm text-champagne-500">
                      {range.perfumes.length}개의 추천 향수
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PriceBasedBrowsing;
