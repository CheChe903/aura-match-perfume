
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
  size: string;
  favorite: boolean;
  usageCount: number;
  lastUsed: string;
  photo?: string;
}

const CollectionManager: React.FC<CollectionManagerProps> = ({ onBack }) => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([
    {
      id: '1',
      name: 'Sauvage',
      brand: 'Dior',
      category: 'woody',
      rating: 5,
      notes: '매일 사용하기 좋은 시그니처 향수. 남성적이면서도 세련된 향이 마음에 들어요. 특히 업무용으로 완벽합니다.',
      purchaseDate: '2024-01-15',
      price: '120000',
      size: '100ml',
      favorite: true,
      usageCount: 45,
      lastUsed: '2024-07-01',
      photo: '🌲'
    },
    {
      id: '2',
      name: 'Good Girl',
      brand: 'Carolina Herrera',
      category: 'oriental',
      rating: 4,
      notes: '특별한 날에 사용하는 향수. 달콤하고 섹시한 향이 인상적입니다. 데이트할 때 자주 뿌려요.',
      purchaseDate: '2024-02-20',
      price: '150000',
      size: '80ml',
      favorite: true,
      usageCount: 12,
      lastUsed: '2024-06-28',
      photo: '💫'
    },
    {
      id: '3',
      name: 'Light Blue',
      brand: 'Dolce & Gabbana',
      category: 'fresh',
      rating: 4,
      notes: '여름철 필수 향수. 상쾌하고 깔끔한 향으로 더운 날씨에 완벽해요. 운동 후에도 부담없이 사용 가능합니다.',
      purchaseDate: '2024-03-10',
      price: '95000',
      size: '50ml',
      favorite: false,
      usageCount: 23,
      lastUsed: '2024-06-30',
      photo: '🌊'
    },
    {
      id: '4',
      name: 'Flowerbomb',
      brand: 'Viktor & Rolf',
      category: 'floral',
      rating: 5,
      notes: '플로럴 향수 중 최고! 여성스럽고 우아한 향이 정말 매력적이에요. 오래 지속되어서 만족도가 높습니다.',
      purchaseDate: '2024-04-05',
      price: '180000',
      size: '100ml',
      favorite: true,
      usageCount: 8,
      lastUsed: '2024-06-25',
      photo: '🌸'
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [newPerfume, setNewPerfume] = useState<Partial<Perfume>>({
    rating: 5,
    favorite: false,
    usageCount: 0
  });

  const categories = [
    { value: 'fresh', label: '프레시', color: 'from-blue-100 to-cyan-100', emoji: '🌊' },
    { value: 'floral', label: '플로럴', color: 'from-pink-100 to-rose-100', emoji: '🌸' },
    { value: 'woody', label: '우디', color: 'from-amber-100 to-orange-100', emoji: '🌲' },
    { value: 'oriental', label: '오리엔탈', color: 'from-purple-100 to-violet-100', emoji: '💫' }
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
        price: newPerfume.price || '',
        size: newPerfume.size || '',
        favorite: newPerfume.favorite || false,
        usageCount: 0,
        lastUsed: '',
        photo: getCategoryEmoji(newPerfume.category || '')
      };
      
      setPerfumes([...perfumes, perfume]);
      setNewPerfume({ rating: 5, favorite: false, usageCount: 0 });
      setIsAddModalOpen(false);
    }
  };

  const getCategoryInfo = (value: string) => {
    return categories.find(cat => cat.value === value) || categories[0];
  };

  const getCategoryEmoji = (value: string) => {
    return getCategoryInfo(value).emoji;
  };

  const toggleFavorite = (id: string) => {
    setPerfumes(perfumes.map(perfume => 
      perfume.id === id ? { ...perfume, favorite: !perfume.favorite } : perfume
    ));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  const totalValue = perfumes.reduce((sum, perfume) => sum + (parseInt(perfume.price) || 0), 0);
  const averageRating = perfumes.reduce((sum, perfume) => sum + perfume.rating, 0) / perfumes.length;
  const favoriteCount = perfumes.filter(p => p.favorite).length;
  const totalUsage = perfumes.reduce((sum, perfume) => sum + perfume.usageCount, 0);

  return (
    <div className="min-h-screen bg-luxury-gradient py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-golden-gradient rounded-full mb-6 shadow-lg">
            <span className="text-3xl">💎</span>
          </div>
          <h1 className="luxury-text text-5xl font-bold text-champagne-800 mb-4">
            나의 향수 컬렉션
          </h1>
          <p className="text-xl text-champagne-600 max-w-2xl mx-auto leading-relaxed">
            소중한 향수들을 아름답게 관리하고, 특별한 순간들을 기록해보세요
          </p>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="perfume-card text-center bg-gradient-to-br from-champagne-50 to-champagne-100 border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="text-3xl mb-2">🧴</div>
              <CardTitle className="text-3xl font-bold text-champagne-800">
                {perfumes.length}
              </CardTitle>
              <CardDescription className="text-champagne-600 font-medium">
                보유 향수
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="perfume-card text-center bg-gradient-to-br from-rose-50 to-rose-100 border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="text-3xl mb-2">💰</div>
              <CardTitle className="text-3xl font-bold text-champagne-800">
                ₩{(totalValue / 10000).toFixed(0)}만
              </CardTitle>
              <CardDescription className="text-champagne-600 font-medium">
                컬렉션 가치
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="perfume-card text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="text-3xl mb-2">⭐</div>
              <CardTitle className="text-3xl font-bold text-champagne-800">
                {averageRating.toFixed(1)}
              </CardTitle>
              <CardDescription className="text-champagne-600 font-medium">
                평균 만족도
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="perfume-card text-center bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="text-3xl mb-2">📊</div>
              <CardTitle className="text-3xl font-bold text-champagne-800">
                {totalUsage}
              </CardTitle>
              <CardDescription className="text-champagne-600 font-medium">
                총 사용 횟수
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex gap-4">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
              className="rounded-full"
            >
              격자 보기
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              onClick={() => setViewMode('list')}
              className="rounded-full"
            >
              목록 보기
            </Button>
          </div>

          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-golden-gradient text-white px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
                ✨ 새 향수 추가하기
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-2xl border-0 shadow-2xl rounded-2xl">
              <DialogHeader className="pb-6">
                <DialogTitle className="luxury-text text-3xl text-champagne-800 text-center">
                  새로운 향수 추가
                </DialogTitle>
                <DialogDescription className="text-champagne-600 text-center text-lg">
                  새로 구매한 소중한 향수 정보를 입력해주세요
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-champagne-800 font-semibold">향수명</Label>
                    <Input
                      id="name"
                      value={newPerfume.name || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, name: e.target.value })}
                      className="bg-champagne-50 border-champagne-200 rounded-xl mt-1"
                      placeholder="예: Sauvage"
                    />
                  </div>
                  <div>
                    <Label htmlFor="brand" className="text-champagne-800 font-semibold">브랜드</Label>
                    <Input
                      id="brand"
                      value={newPerfume.brand || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, brand: e.target.value })}
                      className="bg-champagne-50 border-champagne-200 rounded-xl mt-1"
                      placeholder="예: Dior"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="category" className="text-champagne-800 font-semibold">카테고리</Label>
                    <Select onValueChange={(value) => setNewPerfume({ ...newPerfume, category: value })}>
                      <SelectTrigger className="bg-champagne-50 border-champagne-200 rounded-xl mt-1">
                        <SelectValue placeholder="카테고리 선택" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-champagne-200 rounded-xl">
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.emoji} {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="rating" className="text-champagne-800 font-semibold">평점</Label>
                    <Select onValueChange={(value) => setNewPerfume({ ...newPerfume, rating: parseInt(value) })}>
                      <SelectTrigger className="bg-champagne-50 border-champagne-200 rounded-xl mt-1">
                        <SelectValue placeholder="평점 선택" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-champagne-200 rounded-xl">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <SelectItem key={rating} value={rating.toString()}>
                            {'⭐'.repeat(rating)} {rating}점
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="size" className="text-champagne-800 font-semibold">용량</Label>
                    <Input
                      id="size"
                      value={newPerfume.size || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, size: e.target.value })}
                      className="bg-champagne-50 border-champagne-200 rounded-xl mt-1"
                      placeholder="예: 100ml"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="purchaseDate" className="text-champagne-800 font-semibold">구매일</Label>
                    <Input
                      id="purchaseDate"
                      type="date"
                      value={newPerfume.purchaseDate || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, purchaseDate: e.target.value })}
                      className="bg-champagne-50 border-champagne-200 rounded-xl mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price" className="text-champagne-800 font-semibold">가격 (원)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newPerfume.price || ''}
                      onChange={(e) => setNewPerfume({ ...newPerfume, price: e.target.value })}
                      className="bg-champagne-50 border-champagne-200 rounded-xl mt-1"
                      placeholder="예: 120000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-champagne-800 font-semibold">개인 노트</Label>
                  <Textarea
                    id="notes"
                    value={newPerfume.notes || ''}
                    onChange={(e) => setNewPerfume({ ...newPerfume, notes: e.target.value })}
                    placeholder="이 향수에 대한 개인적인 의견이나 사용 경험을 적어보세요"
                    className="bg-champagne-50 border-champagne-200 rounded-xl mt-1 min-h-[100px]"
                  />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsAddModalOpen(false)}
                    className="border-champagne-300 text-champagne-700 rounded-full px-6"
                  >
                    취소
                  </Button>
                  <Button 
                    onClick={handleAddPerfume}
                    className="bg-golden-gradient text-white rounded-full px-6"
                  >
                    추가하기
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Perfume Collection */}
        <div className={`${viewMode === 'grid' ? 'grid lg:grid-cols-3 md:grid-cols-2 gap-8' : 'space-y-6'}`}>
          {perfumes.map((perfume) => {
            const categoryInfo = getCategoryInfo(perfume.category);
            
            return (
              <Card 
                key={perfume.id} 
                className={`perfume-card animate-fade-in border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gradient-to-br ${categoryInfo.color}`}
                onClick={() => setSelectedPerfume(perfume)}
              >
                <CardHeader className="relative">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{perfume.photo}</div>
                      <div>
                        <CardTitle className="luxury-text text-xl text-champagne-800">
                          {perfume.name}
                        </CardTitle>
                        <CardDescription className="text-champagne-600 font-medium">
                          {perfume.brand}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(perfume.id);
                      }}
                      className={`text-2xl hover:scale-110 transition-transform ${perfume.favorite ? 'text-red-500' : 'text-gray-400'}`}
                    >
                      {perfume.favorite ? '❤️' : '🤍'}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex">{renderStars(perfume.rating)}</div>
                    <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-champagne-700">
                      {categoryInfo.emoji} {categoryInfo.label}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {perfume.notes && (
                      <p className="text-champagne-700 text-sm leading-relaxed bg-white/60 backdrop-blur-sm p-3 rounded-xl">
                        {perfume.notes}
                      </p>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center bg-white/60 backdrop-blur-sm p-2 rounded-lg">
                        <div className="font-bold text-champagne-800">{perfume.usageCount}회</div>
                        <div className="text-champagne-600">사용 횟수</div>
                      </div>
                      <div className="text-center bg-white/60 backdrop-blur-sm p-2 rounded-lg">
                        <div className="font-bold text-champagne-800">{perfume.size}</div>
                        <div className="text-champagne-600">{perfume.purchaseDate}</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-lg font-bold text-champagne-800">
                        ₩{parseInt(perfume.price).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-16">
          <Button 
            onClick={onBack}
            variant="outline"
            className="border-2 border-champagne-300 text-champagne-700 px-10 py-4 text-lg rounded-full hover:bg-champagne-50 transition-all shadow-lg"
          >
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollectionManager;
