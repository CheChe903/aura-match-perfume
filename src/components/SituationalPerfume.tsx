import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface SituationalPerfumeProps {
  onBack: () => void;
}

const SituationalPerfume: React.FC<SituationalPerfumeProps> = ({ onBack }) => {
  const [selectedSchedule, setSelectedSchedule] = useState<string>('');
  const [selectedWeather, setSelectedWeather] = useState<string>('');
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const schedules = [
    { value: 'meeting', label: '중요한 회의/프레젠테이션' },
    { value: 'date', label: '데이트/만남' },
    { value: 'casual', label: '일상적인 외출' },
    { value: 'party', label: '파티/행사' },
    { value: 'work', label: '일반적인 업무' },
    { value: 'exercise', label: '운동/액티비티' }
  ];

  const weathers = [
    { value: 'sunny', label: '맑고 화창함' },
    { value: 'cloudy', label: '흐리고 차분함' },
    { value: 'rainy', label: '비가 오는 날' },
    { value: 'cold', label: '춥고 건조함' },
    { value: 'hot', label: '덥고 습함' }
  ];

  const moods = [
    { value: 'confident', label: '자신감 있게' },
    { value: 'romantic', label: '로맨틱하게' },
    { value: 'professional', label: '전문적으로' },
    { value: 'fresh', label: '상쾌하게' },
    { value: 'mysterious', label: '신비롭게' },
    { value: 'comfortable', label: '편안하게' }
  ];

  const mockPerfumes = [
    {
      name: 'Light Blue',
      brand: 'Dolce & Gabbana',
      suitability: 95,
      reason: '상쾌한 시트러스 향이 화창한 날씨와 데이트 분위기에 완벽하게 어울립니다.',
      notes: ['시칠리안 레몬', '그래니 스미스 애플', '화이트 뮤스크']
    },
    {
      name: 'La Vie Est Belle',
      brand: 'Lancôme',
      suitability: 88,
      reason: '달콤하고 우아한 향이 로맨틱한 분위기를 연출하기에 적합합니다.',
      notes: ['아이리스', '프랄린', '바닐라']
    },
    {
      name: 'Acqua di Gio',
      brand: 'Giorgio Armani',
      suitability: 82,
      reason: '깔끔하고 상쾌한 향으로 어떤 상황에서도 무난하게 사용할 수 있습니다.',
      notes: ['베르가못', '네롤리', '화이트 뮤스크']
    }
  ];

  const handleMoodChange = (mood: string, checked: boolean) => {
    if (checked) {
      setSelectedMoods([...selectedMoods, mood]);
    } else {
      setSelectedMoods(selectedMoods.filter(m => m !== mood));
    }
  };

  const handleRecommend = () => {
    if (selectedSchedule && selectedWeather) {
      setShowRecommendation(true);
    }
  };

  const reset = () => {
    setSelectedSchedule('');
    setSelectedWeather('');
    setSelectedMoods([]);
    setShowRecommendation(false);
  };

  if (showRecommendation) {
    return (
      <div className="min-h-screen bg-luxury-gradient py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="perfume-card animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="luxury-text text-3xl text-champagne-800 mb-4">
                상황별 추천 향수
              </CardTitle>
              <CardDescription className="text-lg text-champagne-600">
                당신의 일정과 기분에 맞는 완벽한 선택
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {mockPerfumes.map((perfume, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-champagne-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="luxury-text text-xl font-bold text-champagne-800">
                        {perfume.name}
                      </h3>
                      <p className="text-champagne-600">{perfume.brand}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-champagne-800">
                        {perfume.suitability}%
                      </div>
                      <div className="text-sm text-champagne-600">적합도</div>
                    </div>
                  </div>
                  
                  <p className="text-champagne-700 mb-4">{perfume.reason}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.map((note, noteIndex) => (
                      <span 
                        key={noteIndex}
                        className="px-3 py-1 bg-champagne-100 text-champagne-700 rounded-full text-sm"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  onClick={reset}
                  className="bg-golden-gradient text-white px-8 py-3 rounded-full hover:scale-105 transition-transform"
                >
                  다시 선택하기
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
      <div className="max-w-2xl mx-auto">
        <Card className="perfume-card animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="luxury-text text-3xl text-champagne-800 mb-4">
              상황별 향수 선택
            </CardTitle>
            <CardDescription className="text-lg text-champagne-600">
              오늘의 일정과 기분을 알려주시면 가장 적합한 향수를 추천해드릴게요
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div>
              <h3 className="font-semibold text-champagne-800 mb-4">오늘의 주요 일정</h3>
              <Select onValueChange={setSelectedSchedule}>
                <SelectTrigger className="bg-white border-champagne-200">
                  <SelectValue placeholder="일정을 선택해주세요" />
                </SelectTrigger>
                <SelectContent className="bg-white border-champagne-200">
                  {schedules.map((schedule) => (
                    <SelectItem key={schedule.value} value={schedule.value}>
                      {schedule.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="font-semibold text-champagne-800 mb-4">오늘의 날씨</h3>
              <Select onValueChange={setSelectedWeather}>
                <SelectTrigger className="bg-white border-champagne-200">
                  <SelectValue placeholder="날씨를 선택해주세요" />
                </SelectTrigger>
                <SelectContent className="bg-white border-champagne-200">
                  {weathers.map((weather) => (
                    <SelectItem key={weather.value} value={weather.value}>
                      {weather.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="font-semibold text-champagne-800 mb-4">원하는 분위기 (선택사항)</h3>
              <div className="grid grid-cols-2 gap-4">
                {moods.map((mood) => (
                  <div key={mood.value} className="flex items-center space-x-2">
                    <Checkbox 
                      id={mood.value}
                      checked={selectedMoods.includes(mood.value)}
                      onCheckedChange={(checked) => handleMoodChange(mood.value, checked as boolean)}
                    />
                    <label 
                      htmlFor={mood.value} 
                      className="text-champagne-700 cursor-pointer"
                    >
                      {mood.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button 
                onClick={handleRecommend}
                disabled={!selectedSchedule || !selectedWeather}
                className="bg-golden-gradient text-white px-10 py-3 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                향수 추천받기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SituationalPerfume;
