
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CollectionManagerProps {
  onBack: () => void;
}

interface Perfume {
  id: string;
  name: string;
  brand: string;
  category: string;
  rating: number;
  notes: string;
  purchaseDate: string;
  price: string;
}

const CollectionManager: React.FC<CollectionManagerProps> = ({ onBack }) => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([
    {
      id: '1',
      name: 'Sauvage',
      brand: 'Dior',
      category: 'woody',
      rating: 5,
      notes: '매일 사용하기 좋은 시그니처 향수. 남성적이면서도 세련된 향이 마음에 들어요.',
      purchaseDate: '2024-01-15',
      price: '120000'
    },
    {
      id: '2',
      name: 'Good Girl',
      brand: 'Carolina Herrera',
      category: 'oriental',
      rating: 4,
      notes: '특별한 날에 사용하는 향수. 달콤하고 섹시한 향이 인상적입니다.',
      purchaseDate: '2024-02-20',
      price: '150000'
    },
    {
      id: '3',
      name: 'Light Blue',
      brand: 'Dolce & Gabbana',
      category: 'fresh',
      rating: 4,
      notes: '여름철 필수 향수. 상쾌하고 깔끔한 향으로 더운 날씨에 완벽해요.',
      purchaseDate: '2024-03-10',
      price: '95000'
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPerfume, setNewPerfume] = useState<Partial<Perfume>>({
    rating: 5
  });

  const categories = [
    { value: 'fresh', label: '프레시' },
    { value: 'floral', label: '플로럴' },
    { value: 'woody', label: '우디' },
    { value: 'oriental', label: '오리엔탈' }
  ];

  const handleAddPerfume = () => {
    if (newPerfume.name && newPerfume.brand && newPerfume.category) {
      const perfume: Perfume = {
        id: Date.now().toString(),
        name: newPerfume.name || '',
        brand: newPerfume.brand || '',
        category: newPerfume.category || '',
        rating: newPerfume.rating || 5,
        notes: newPerfume.notes || '',
        purchaseDate: newPerfume.purchaseDate || '',
        price: newPerfume.price || ''
      };
      
      setPerfumes([...perfumes, perfume]);
      setNewPerfume({ rating: 5 });
      setIsAddModalOpen(false);
    }
  };

  const getCategoryLabel = (value: string) => {
    return categories.find(cat => cat.value === value)?.label || value;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  const totalValue = perfumes.reduce((sum, perfume) => sum + (parseInt(perfume.price) || 0), 0);
  const averageRating = perfumes.reduce((sum, perfume) => sum + perfume.rating, 0) / perfumes.length;

  return (
    <div className="min-h-screen bg-luxury-gradient py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="luxury-text text-4xl font-bold text-champagne-800 mb-4">
            나의 향수 컬렉션
          </h1>
          <p className="text-lg text-champagne-600">
            보유한 향수들을 체계적으로 관리하고 기록해보세요
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="perfume-card text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-champagne-800">
                {perfumes.length}개
              </CardTitle>
              <CardDescription>보유 향수</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="perfume-card text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-champagne-800">
                ₩{totalValue.toLocaleString()}
              </CardTitle>
              <CardDescription>총 컬렉션 가치</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="perfume-card text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-champagne-800">
                {averageRating.toFixed(1)}/5
              </CardTitle>
              <CardDescription>평균 만족도</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Add Perfume Button */}
        <div className="flex justify-center mb-8">
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-golden-gradient text-white px-8 py-3 rounded-full hover:scale-105 transition-transform">
                새 향수 추가하기
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="luxury-text text-2xl text-champagne-800">
                  새 향수 추가
                </DialogTitle>
                <DialogDescription className="text-champagne-600">
                  새로 구매한 향수 정보를 입력해주세요
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-champagne-800">향수명</Label>
                    <Input
                      id="name"
                      value={newPerfume.name || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, name: e.target.value })}
                      className="bg-white border-champagne-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="brand" className="text-champagne-800">브랜드</Label>
                    <Input
                      id="brand"
                      value={newPerfume.brand || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, brand: e.target.value })}
                      className="bg-white border-champagne-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category" className="text-champagne-800">카테고리</Label>
                    <Select onValueChange={(value) => setNewPerfume({ ...newPerfume, category: value })}>
                      <SelectTrigger className="bg-white border-champagne-200">
                        <SelectValue placeholder="카테고리 선택" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-champagne-200">
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="rating" className="text-champagne-800">평점</Label>
                    <Select onValueChange={(value) => setNewPerfume({ ...newPerfume, rating: parseInt(value) })}>
                      <SelectTrigger className="bg-white border-champagne-200">
                        <SelectValue placeholder="평점 선택" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-champagne-200">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <SelectItem key={rating} value={rating.toString()}>
                            {rating}점
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="purchaseDate" className="text-champagne-800">구매일</Label>
                    <Input
                      id="purchaseDate"
                      type="date"
                      value={newPerfume.purchaseDate || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, purchaseDate: e.target.value })}
                      className="bg-white border-champagne-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price" className="text-champagne-800">가격 (원)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newPerfume.price || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, price: e.target.value })}
                      className="bg-white border-champagne-200"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-champagne-800">개인 노트</Label>
                  <Textarea
                    id="notes"
                    value={newPerfume.notes || ''}
                    onChange={(e) => setNewPerfume({ ...newPerfume, notes: e.target.value })}
                    placeholder="이 향수에 대한 개인적인 의견이나 사용 경험을 적어보세요"
                    className="bg-white border-champagne-200"
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsAddModalOpen(false)}
                    className="border-champagne-300 text-champagne-700"
                  >
                    취소
                  </Button>
                  <Button 
                    onClick={handleAddPerfume}
                    className="bg-golden-gradient text-white"
                  >
                    추가하기
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Perfume List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perfumes.map((perfume) => (
            <Card key={perfume.id} className="perfume-card animate-fade-in">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="luxury-text text-xl text-champagne-800">
                      {perfume.name}
                    </CardTitle>
                    <CardDescription className="text-champagne-600">
                      {perfume.brand}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex">{renderStars(perfume.rating)}</div>
                    <span className="text-sm text-champagne-600">
                      {getCategoryLabel(perfume.category)}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {perfume.notes && (
                    <p className="text-champagne-700 text-sm leading-relaxed">
                      {perfume.notes}
                    </p>
                  )}
                  
                  <div className="flex justify-between text-sm text-champagne-600">
                    <span>구매일: {perfume.purchaseDate}</span>
                    <span>₩{parseInt(perfume.price).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <Button 
            onClick={onBack}
            variant="outline"
            className="border-champagne-300 text-champagne-700 px-8 py-3 rounded-full"
          >
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollectionManager;
