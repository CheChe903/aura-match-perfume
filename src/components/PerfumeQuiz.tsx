
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
      options: [
        { value: '20s', label: '20대' },
        { value: '30s', label: '30대' },
        { value: '40s', label: '40대' },
        { value: '50plus', label: '50대 이상' }
      ]
    },
    {
      id: 'lifestyle',
      title: '평소 라이프스타일은 어떤가요?',
      options: [
        { value: 'active', label: '활동적이고 에너지 있는 편' },
        { value: 'calm', label: '차분하고 안정적인 편' },
        { value: 'creative', label: '창의적이고 자유로운 편' },
        { value: 'professional', label: '전문적이고 체계적인 편' }
      ]
    },
    {
      id: 'preference',
      title: '선호하는 향의 느낌은?',
      options: [
        { value: 'fresh', label: '상쾌하고 깔끔한 향' },
        { value: 'floral', label: '부드럽고 꽃향기' },
        { value: 'woody', label: '따뜻하고 우디한 향' },
        { value: 'oriental', label: '신비롭고 이국적인 향' }
      ]
    },
    {
      id: 'season',
      title: '어떤 계절을 가장 좋아하시나요?',
      options: [
        { value: 'spring', label: '봄 - 새싹과 꽃이 피는 계절' },
        { value: 'summer', label: '여름 - 시원하고 활기찬 계절' },
        { value: 'autumn', label: '가을 - 차분하고 깊이 있는 계절' },
        { value: 'winter', label: '겨울 - 따뜻하고 아늑한 계절' }
      ]
    },
    {
      id: 'occasion',
      title: '주로 언제 향수를 사용하고 싶으신가요?',
      options: [
        { value: 'daily', label: '일상생활에서 매일' },
        { value: 'work', label: '직장이나 업무 시' },
        { value: 'date', label: '데이트나 만남 시' },
        { value: 'special', label: '특별한 행사나 모임 시' }
      ]
    }
  ];

  const perfumeRecommendations = {
    fresh_active: {
      name: 'Acqua di Gio',
      brand: 'Giorgio Armani',
      description: '지중해의 상쾌함을 담은 클래식한 프레시 향수',
      notes: ['베르가못', '네롤리', '그린 타제텔'],
      reason: '활동적인 라이프스타일과 상쾌한 향을 선호하는 당신에게 완벽한 선택입니다.'
    },
    floral_calm: {
      name: 'Peony & Blush Suede',
      brand: 'Jo Malone London',
      description: '부드러운 모란과 스웨이드의 우아한 조화',
      notes: ['레드 애플', '모란', '스웨이드'],
      reason: '차분한 성격과 꽃향기를 좋아하는 당신의 우아함을 표현해줍니다.'
    },
    woody_professional: {
      name: 'Santal 33',
      brand: 'Le Labo',
      description: '세련된 샌달우드의 깊이 있는 향',
      notes: ['샌달우드', '카다멈', '바이올렛'],
      reason: '전문적인 이미지와 따뜻한 우디 향을 원하는 당신에게 이상적입니다.'
    },
    oriental_creative: {
      name: 'Black Opium',
      brand: 'Yves Saint Laurent',
      description: '신비로운 오리엔탈 향의 매혹적인 향수',
      notes: ['블랙 커피', '바닐라', '화이트 플라워'],
      reason: '창의적이고 독특함을 추구하는 당신의 개성을 완벽하게 표현합니다.'
    }
  };

  const getRecommendation = () => {
    const preference = answers.preference || 'fresh';
    const lifestyle = answers.lifestyle || 'active';
    const key = `${preference}_${lifestyle}`;
    
    return perfumeRecommendations[key as keyof typeof perfumeRecommendations] || perfumeRecommendations.fresh_active;
  };

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
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
          <Card className="perfume-card animate-fade-in">
            <CardHeader className="text-center pb-8">
              <CardTitle className="luxury-text text-3xl text-champagne-800 mb-4">
                당신을 위한 완벽한 향수
              </CardTitle>
              <CardDescription className="text-lg text-champagne-600">
                분석 결과를 바탕으로 선별된 맞춤 추천
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-golden-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🌟</span>
                </div>
                <h3 className="luxury-text text-2xl font-bold text-champagne-800 mb-2">
                  {recommendation.name}
                </h3>
                <p className="text-xl text-champagne-600 mb-4">{recommendation.brand}</p>
                <p className="text-champagne-700 leading-relaxed mb-6">
                  {recommendation.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-champagne-50 rounded-xl p-6">
                  <h4 className="font-semibold text-champagne-800 mb-3">주요 향료</h4>
                  <div className="space-y-2">
                    {recommendation.notes.map((note, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-golden-gradient rounded-full mr-3"></span>
                        <span className="text-champagne-700">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-champagne-50 rounded-xl p-6">
                  <h4 className="font-semibold text-champagne-800 mb-3">추천 이유</h4>
                  <p className="text-champagne-700 leading-relaxed">
                    {recommendation.reason}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  onClick={restart}
                  className="bg-golden-gradient text-white px-8 py-3 rounded-full hover:scale-105 transition-transform"
                >
                  다시 테스트하기
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

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const hasAnswer = answers[currentQ.id];

  return (
    <div className="min-h-screen bg-luxury-gradient py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-champagne-600">
              질문 {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-champagne-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="perfume-card animate-fade-in">
          <CardHeader>
            <CardTitle className="luxury-text text-2xl text-champagne-800 text-center">
              {currentQ.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <RadioGroup 
              value={answers[currentQ.id] || ''} 
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentQ.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-4 rounded-xl border border-champagne-200 hover:bg-champagne-50 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="text-champagne-700 cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="border-champagne-300 text-champagne-700"
              >
                이전
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!hasAnswer}
                className="bg-golden-gradient text-white hover:scale-105 transition-transform"
              >
                {currentQuestion === questions.length - 1 ? '결과 보기' : '다음'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PerfumeQuiz;
