
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PerfumeQuiz from "@/components/PerfumeQuiz";
import TodayPerfume from "@/components/TodayPerfume";
import CollectionManager from "@/components/CollectionManager";

const Index = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'quiz':
        return <PerfumeQuiz onBack={() => setCurrentView('home')} />;
      case 'today':
        return <TodayPerfume onBack={() => setCurrentView('home')} />;
      case 'collection':
        return <CollectionManager onBack={() => setCurrentView('home')} />;
      default:
        return (
          <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-luxury-gradient">
              <div className="absolute inset-0 bg-gradient-to-r from-champagne-50/20 to-transparent"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center animate-fade-in">
                  <h1 className="luxury-text text-5xl md:text-7xl font-bold text-champagne-800 mb-6">
                    Aura Match
                  </h1>
                  <p className="text-xl md:text-2xl text-champagne-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                    당신만의 완벽한 향수를 찾아드립니다
                  </p>
                  <p className="text-lg text-champagne-600 mb-12 max-w-2xl mx-auto">
                    AI 기반 개인 맞춤 분석으로 취향과 상황에 맞는 향수를 추천받아보세요
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={() => setCurrentView('quiz')}
                      className="bg-golden-gradient text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                      향수 추천받기
                    </Button>
                    <Button 
                      onClick={() => setCurrentView('today')}
                      variant="outline" 
                      className="border-champagne-300 text-champagne-700 px-8 py-4 text-lg rounded-full hover:bg-champagne-50 transition-all duration-300"
                    >
                      오늘의 향수
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="luxury-text text-4xl font-bold text-champagne-800 mb-4">
                    완벽한 향수 선택을 위한 맞춤 서비스
                  </h2>
                  <p className="text-lg text-champagne-600 max-w-2xl mx-auto">
                    개인의 취향과 라이프스타일을 분석하여 가장 적합한 향수를 찾아드립니다
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-300 animate-slide-in"
                    onClick={() => setCurrentView('quiz')}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">✨</span>
                      </div>
                      <CardTitle className="luxury-text text-xl text-champagne-800">
                        개인 맞춤 추천
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-champagne-600 leading-relaxed">
                        상세한 설문조사를 통해 당신의 취향과 라이프스타일을 분석하고, 
                        가장 적합한 향수를 추천해드립니다.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-300 animate-slide-in"
                    onClick={() => setCurrentView('today')}
                    style={{ animationDelay: '0.2s' }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📅</span>
                      </div>
                      <CardTitle className="luxury-text text-xl text-champagne-800">
                        상황별 향수 선택
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-champagne-600 leading-relaxed">
                        오늘의 일정과 날씨를 고려하여 보유한 향수 중에서 
                        가장 적합한 향수를 추천해드립니다.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-300 animate-slide-in"
                    onClick={() => setCurrentView('collection')}
                    style={{ animationDelay: '0.4s' }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💎</span>
                      </div>
                      <CardTitle className="luxury-text text-xl text-champagne-800">
                        컬렉션 관리
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-champagne-600 leading-relaxed">
                        보유한 향수들을 체계적으로 관리하고, 
                        사용 기록과 평가를 통해 더 효과적으로 활용하세요.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-golden-gradient">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="luxury-text text-4xl font-bold text-white mb-6">
                  지금 시작해보세요
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  몇 분의 간단한 설문으로 당신만의 완벽한 향수를 찾아보세요
                </p>
                <Button 
                  onClick={() => setCurrentView('quiz')}
                  className="bg-white text-champagne-800 px-10 py-4 text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg font-semibold"
                >
                  향수 찾기 시작하기
                </Button>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {currentView !== 'home' && (
        <nav className="sticky top-0 z-50 glass-effect px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => setCurrentView('home')}
              className="luxury-text text-xl font-semibold text-champagne-800"
            >
              Aura Match
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentView('home')}
              className="text-champagne-700 border-champagne-300"
            >
              홈으로
            </Button>
          </div>
        </nav>
      )}
      {renderView()}
    </div>
  );
};

export default Index;
