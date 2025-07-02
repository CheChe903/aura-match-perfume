
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface QuizProps {
  onBack: () => void;
}

const PerfumeQuiz: React.FC<QuizProps> = ({ onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'age',
      title: '연령대를 선택해주세요',
      subtitle: '연령대에 따라 선호하는 향의 강도와 스타일이 달라집니다',
      options: [
        { value: '20s', label: '20대 - 트렌디하고 활기찬 향' },
        { value: '30s', label: '30대 - 세련되고 균형잡힌 향' },
        { value: '40s', label: '40대 - 깊이있고 고급스러운 향' },
        { value: '50plus', label: '50대 이상 - 클래식하고 우아한 향' }
      ]
    },
    {
      id: 'gender',
      title: '성별을 선택해주세요',
      subtitle: '향수의 기본적인 향조 방향을 결정하는데 도움이 됩니다',
      options: [
        { value: 'female', label: '여성 - 플로럴, 프루티 계열 선호' },
        { value: 'male', label: '남성 - 우디, 스파이시 계열 선호' },
        { value: 'unisex', label: '유니섹스 - 성별 구분 없는 향 선호' },
        { value: 'no_preference', label: '상관없음 - 향 자체가 중요' }
      ]
    },
    {
      id: 'lifestyle',
      title: '평소 라이프스타일은 어떤가요?',
      subtitle: '일상의 패턴이 향수 선택에 중요한 요소입니다',
      options: [
        { value: 'active', label: '활동적이고 에너지 있는 편 - 스포츠, 야외활동 즐김' },
        { value: 'calm', label: '차분하고 안정적인 편 - 독서, 카페, 홈카페' },
        { value: 'creative', label: '창의적이고 자유로운 편 - 예술, 문화활동' },
        { value: 'professional', label: '전문적이고 체계적인 편 - 비즈니스, 격식있는 모임' }
      ]
    },
    {
      id: 'preference',
      title: '선호하는 향의 느낌은?',
      subtitle: '가장 끌리는 향의 분위기를 선택해주세요',
      options: [
        { value: 'fresh', label: '상쾌하고 깔끔한 향 - 시트러스, 아쿠아틱' },
        { value: 'floral', label: '부드럽고 꽃향기 - 로즈, 자스민, 피오니' },
        { value: 'woody', label: '따뜻하고 우디한 향 - 샌달우드, 시더' },
        { value: 'oriental', label: '신비롭고 이국적인 향 - 바닐라, 앰버, 머스크' }
      ]
    },
    {
      id: 'intensity',
      title: '향의 강도는 어느 정도를 선호하시나요?',
      subtitle: '향수의 지속력과 확산력을 결정하는 중요한 요소입니다',
      options: [
        { value: 'light', label: '은은하고 가벼운 향 - 가까이서만 느껴지는 정도' },
        { value: 'moderate', label: '적당한 강도의 향 - 일상적으로 사용하기 좋은' },
        { value: 'strong', label: '진하고 강한 향 - 존재감 있고 인상적인' },
        { value: 'variable', label: '상황에 따라 다름 - TPO에 맞춰 조절하고 싶음' }
      ]
    },
    {
      id: 'season',
      title: '어떤 계절을 가장 좋아하시나요?',
      subtitle: '좋아하는 계절의 특성이 향수 선택에 반영됩니다',
      options: [
        { value: 'spring', label: '봄 - 새싹과 꽃이 피는 생명력 넘치는 계절' },
        { value: 'summer', label: '여름 - 시원하고 활기찬 에너지 넘치는 계절' },
        { value: 'autumn', label: '가을 - 차분하고 깊이 있는 성숙한 계절' },
        { value: 'winter', label: '겨울 - 따뜻하고 아늑한 포근한 계절' }
      ]
    },
    {
      id: 'mood',
      title: '향수로 표현하고 싶은 무드는?',
      subtitle: '향수가 나타내길 원하는 당신의 이미지나 느낌',
      options: [
        { value: 'romantic', label: '로맨틱하고 여성스러운 - 우아하고 매력적인' },
        { value: 'confident', label: '자신감 있고 카리스마 있는 - 당당하고 강인한' },
        { value: 'mysterious', label: '신비롭고 독특한 - 개성있고 흥미로운' },
        { value: 'fresh_clean', label: '깔끔하고 청순한 - 순수하고 상쾌한' }
      ]
    },
    {
      id: 'occasion',
      title: '주로 언제 향수를 사용하고 싶으신가요?',
      subtitle: '사용 목적에 따라 적합한 향수 타입이 달라집니다',
      options: [
        { value: 'daily', label: '일상생활에서 매일 - 데일리 시그니처 향수' },
        { value: 'work', label: '직장이나 업무 시 - 프로페셔널한 분위기' },
        { value: 'date', label: '데이트나 만남 시 - 특별하고 매력적인 순간' },
        { value: 'special', label: '특별한 행사나 모임 시 - 기억에 남는 향' }
      ]
    },
    {
      id: 'budget',
      title: '향수 구매 예산은 어느 정도인가요?',
      subtitle: '예산대에 따라 추천할 수 있는 브랜드와 제품이 달라집니다',
      options: [
        { value: 'budget', label: '10만원 이하 - 합리적인 가격의 향수' },
        { value: 'mid', label: '10-20만원 - 중급 브랜드 향수' },
        { value: 'premium', label: '20-40만원 - 프리미엄 브랜드 향수' },
        { value: 'luxury', label: '40만원 이상 - 럭셔리 하이엔드 향수' }
      ]
    },
    {
      id: 'experience',
      title: '향수 사용 경험은 어느 정도인가요?',
      subtitle: '경험 수준에 따라 추천 방식을 조정합니다',
      options: [
        { value: 'beginner', label: '초보자 - 향수를 거의 사용해본 적 없음' },
        { value: 'occasional', label: '가끔 사용 - 특별한 날에만 사용' },
        { value: 'regular', label: '정기 사용 - 일주일에 몇 번 사용' },
        { value: 'expert', label: '애호가 - 다양한 향수 보유 및 일상 사용' }
      ]
    }
  ];

  const perfumeRecommendations = {
    fresh_active_light: {
      name: 'Acqua di Gio',
      brand: 'Giorgio Armani',
      description: '지중해의 상쾌함을 담은 클래식한 프레시 향수로, 매일 사용하기 좋은 깔끔한 향',
      notes: ['베르가못', '네롤리', '그린 타제텔', '화이트 머스크'],
      reason: '활동적인 라이프스타일과 상쾌하면서도 은은한 향을 선호하는 당신에게 완벽한 선택입니다.',
      price: '중급',
      longevity: '중간',
      sillage: '가벼움'
    },
    floral_calm_moderate: {
      name: 'Peony & Blush Suede',
      brand: 'Jo Malone London',
      description: '부드러운 모란과 스웨이드의 우아한 조화로, 차분한 일상에 품격을 더해주는 향',
      notes: ['레드 애플', '모란', '스웨이드', '로즈'],
      reason: '차분한 성격과 꽃향기, 적당한 강도를 선호하는 당신의 우아함을 완벽하게 표현합니다.',
      price: '프리미엄',
      longevity: '중간',
      sillage: '적당함'
    },
    woody_professional_strong: {
      name: 'Santal 33',
      brand: 'Le Labo',
      description: '세련된 샌달우드의 깊이 있는 향으로, 프로페셔널한 분위기를 연출하는 시그니처 향수',
      notes: ['샌달우드', '카다멈', '바이올렛', '시더우드'],
      reason: '전문적인 이미지와 따뜻한 우디 향, 강한 존재감을 원하는 당신에게 이상적입니다.',
      price: '럭셔리',
      longevity: '오래감',
      sillage: '강함'
    },
    oriental_creative_strong: {
      name: 'Black Opium',
      brand: 'Yves Saint Laurent',
      description: '신비로운 오리엔탈 향의 매혹적인 향수로, 창의적이고 독특한 개성을 표현',
      notes: ['블랙 커피', '바닐라', '화이트 플라워', '시더'],
      reason: '창의적이고 독특함을 추구하며 강한 향을 좋아하는 당신의 개성을 완벽하게 표현합니다.',
      price: '프리미엄',
      longevity: '오래감',
      sillage: '강함'
    }
  };

  const getRecommendation = () => {
    const preference = answers.preference || 'fresh';
    const lifestyle = answers.lifestyle || 'active';
    const intensity = answers.intensity || 'light';
    const key = `${preference}_${lifestyle}_${intensity}`;
    
    return perfumeRecommendations[key as keyof typeof perfumeRecommendations] || perfumeRecommendations.fresh_active_light;
  };

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);
    
    // Automatically proceed to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = getRecommendation();
    
    return (
      <div className="min-h-screen bg-luxury-gradient py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="perfume-card animate-fade-in shadow-2xl border-0">
            <CardHeader className="text-center pb-8 bg-gradient-to-br from-champagne-50 to-rose-50 rounded-t-2xl">
              <div className="w-24 h-24 bg-gradient-to-br from-golden-gradient to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">✨</span>
              </div>
              <CardTitle className="luxury-text text-4xl text-champagne-800 mb-4">
                {recommendation.name}
              </CardTitle>
              <CardDescription className="text-xl text-champagne-600 font-medium">
                {recommendation.brand}
              </CardDescription>
              <p className="text-lg text-champagne-700 leading-relaxed mt-4 max-w-2xl mx-auto">
                {recommendation.description}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8 p-8">
              <div className="text-center">
                <p className="text-champagne-700 leading-relaxed text-lg mb-8 bg-champagne-50 p-6 rounded-xl">
                  💝 {recommendation.reason}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-champagne-50 to-champagne-100 rounded-2xl p-6 shadow-inner">
                  <h4 className="font-bold text-champagne-800 mb-4 text-lg flex items-center">
                    🌸 주요 향료
                  </h4>
                  <div className="space-y-3">
                    {recommendation.notes.map((note, index) => (
                      <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                        <span className="w-3 h-3 bg-golden-gradient rounded-full mr-3 shadow-sm"></span>
                        <span className="text-champagne-700 font-medium">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 shadow-inner">
                  <h4 className="font-bold text-champagne-800 mb-4 text-lg flex items-center">
                    📊 향수 특성
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
                      <span className="text-champagne-700 font-medium">가격대</span>
                      <span className="text-champagne-800 font-bold">{recommendation.price}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
                      <span className="text-champagne-700 font-medium">지속력</span>
                      <span className="text-champagne-800 font-bold">{recommendation.longevity}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
                      <span className="text-champagne-700 font-medium">확산력</span>
                      <span className="text-champagne-800 font-bold">{recommendation.sillage}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  onClick={restart}
                  className="bg-golden-gradient text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  다시 테스트하기
                </Button>
                <Button 
                  onClick={onBack}
                  variant="outline"
                  className="border-2 border-champagne-300 text-champagne-700 px-8 py-4 text-lg rounded-full hover:bg-champagne-50 transition-all"
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

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-luxury-gradient py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-champagne-600 font-medium text-lg">
              질문 {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-champagne-600 font-bold text-lg">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3 bg-champagne-200" />
        </div>

        <Card className="perfume-card animate-fade-in shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-br from-champagne-50 to-rose-50 rounded-t-2xl">
            <CardTitle className="luxury-text text-3xl text-champagne-800 text-center mb-3">
              {currentQ.title}
            </CardTitle>
            <CardDescription className="text-center text-champagne-600 text-lg leading-relaxed">
              {currentQ.subtitle}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <div 
                  key={option.value} 
                  onClick={() => handleAnswer(option.value)}
                  className={`flex items-start space-x-4 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
                    answers[currentQ.id] === option.value 
                      ? 'border-golden-gradient bg-gradient-to-r from-champagne-100 to-rose-100 shadow-md' 
                      : 'border-champagne-200 hover:border-champagne-300 hover:bg-gradient-to-r hover:from-champagne-50 hover:to-rose-50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 transition-all duration-200 ${
                    answers[currentQ.id] === option.value 
                      ? 'border-champagne-500 bg-golden-gradient' 
                      : 'border-champagne-300'
                  }`}>
                    {answers[currentQ.id] === option.value && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`leading-relaxed transition-colors ${
                      answers[currentQ.id] === option.value 
                        ? 'text-champagne-800 font-medium' 
                        : 'text-champagne-700'
                    }`}>
                      {option.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-10">
              <Button 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="border-2 border-champagne-300 text-champagne-700 px-8 py-3 text-lg rounded-full hover:bg-champagne-50 transition-all disabled:opacity-50"
              >
                이전
              </Button>
              <div className="text-champagne-600 text-sm flex items-center">
                선택하면 자동으로 다음 질문으로 넘어갑니다
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerfumeQuiz;
