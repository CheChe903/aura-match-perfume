
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FragranceFamilyRecommendationsProps {
  onBack: () => void;
}

const FragranceFamilyRecommendations: React.FC<FragranceFamilyRecommendationsProps> = ({ onBack }) => {
  const [selectedFamily, setSelectedFamily] = useState<string>('');

  const fragranceFamilies = [
    {
      id: 'floral',
      title: '플로럴',
      subtitle: '꽃 향의 로맨틱한 향수',
      icon: '🌸',
      color: 'from-pink-50 to-pink-100',
      description: '장미, 자스민, 라벤더 등의 꽃 향',
      perfumes: [
        { name: 'Miss Dior', brand: 'Dior', price: '125,000원', rating: 4.6 },
        { name: 'Daisy', brand: 'Marc Jacobs', price: '95,000원', rating: 4.3 },
        { name: 'Blooming Bouquet', brand: 'Gucci', price: '110,000원', rating: 4.4 }
      ]
    },
    {
      id: 'woody',
      title: '우디',
      subtitle: '따뜻하고 깊은 나무 향',
      icon: '🌲',
      color: 'from-amber-50 to-amber-100',
      description: '삼나무, 샌달우드, 베티버 등',
      perfumes: [
        { name: 'Oud Wood', brand: 'Tom Ford', price: '520,000원', rating: 4.8 },
        { name: 'Santal 33', brand: 'Le Labo', price: '320,000원', rating: 4.7 },
        { name: 'Tam Dao', brand: 'Diptyque', price: '180,000원', rating: 4.5 }
      ]
    },
    {
      id: 'fresh',
      title: '프레시',
      subtitle: '상쾌하고 깔끔한 향',
      icon: '🍃',
      color: 'from-green-50 to-green-100',
      description: '시트러스, 그린, 아쿠아틱 노트',
      perfumes: [
        { name: 'Light Blue', brand: 'Dolce & Gabbana', price: '165,000원', rating: 4.5 },
        { name: 'Acqua Di Gio', brand: 'Armani', price: '140,000원', rating: 4.4 },
        { name: 'Un Jardin Sur Le Toit', brand: 'Hermès', price: '220,000원', rating: 4.6 }
      ]
    },
    {
      id: 'oriental',
      title: '오리엔탈',
      subtitle: '신비롭고 관능적인 향',
      icon: '🌙',
      color: 'from-purple-50 to-purple-100',
      description: '스파이스, 앰버, 머스크 등',
      perfumes: [
        { name: 'Black Opium', brand: 'YSL', price: '285,000원', rating: 4.5 },
        { name: 'Hypnotic Poison', brand: 'Dior', price: '130,000원', rating: 4.3 },
        { name: 'Opium', brand: 'YSL', price: '150,000원', rating: 4.2 }
      ]
    }
  ];

  if (selectedFamily) {
    const family = fragranceFamilies.find(f => f.id === selectedFamily);
    
    return (
      <div className="min-h-screen bg-luxury-gradient py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="perfume-card animate-fade-in">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{family?.icon}</div>
              <CardTitle className="luxury-text text-3xl text-champagne-800 mb-4">
                {family?.title} 향조
              </CardTitle>
              <CardDescription className="text-lg text-champagne-600">
                {family?.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {family?.perfumes.map((perfume, index) => (
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
                  onClick={() => setSelectedFamily('')}
                  variant="outline"
                  className="border-champagne-300 text-champagne-700 px-8 py-3 rounded-full mr-4"
                >
                  다른 향조 보기
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
            <div className="text-6xl mb-6">🌸</div>
            <CardTitle className="luxury-text text-3xl text-champagne-800 mb-4">
              향조별 추천
            </CardTitle>
            <CardDescription className="text-lg text-champagne-600">
              선호하는 향의 계열을 선택해보세요
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {fragranceFamilies.map((family) => (
                <Card 
                  key={family.id}
                  className={`cursor-pointer hover:scale-105 transition-all duration-300 bg-gradient-to-br ${family.color} border-0 shadow-lg hover:shadow-xl`}
                  onClick={() => setSelectedFamily(family.id)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4">{family.icon}</div>
                    <h3 className="luxury-text text-2xl font-bold text-champagne-800 mb-3">
                      {family.title}
                    </h3>
                    <p className="text-champagne-600 text-lg mb-3">
                      {family.subtitle}
                    </p>
                    <p className="text-champagne-500 text-sm">
                      {family.description}
                    </p>
                    <div className="mt-4 text-sm text-champagne-500">
                      {family.perfumes.length}개의 추천 향수
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

export default FragranceFamilyRecommendations;
