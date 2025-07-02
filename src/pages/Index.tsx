
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
            <section className="relative overflow-hidden bg-luxury-gradient min-h-screen flex items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-champagne-50/30 via-rose-50/20 to-champagne-100/40"></div>
              <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-champagne-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-champagne-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-golden-gradient to-rose-400 rounded-full mb-8 shadow-2xl animate-pulse">
                    <span className="text-5xl">✨</span>
                  </div>
                  
                  <h1 className="luxury-text text-6xl md:text-8xl font-bold text-champagne-800 mb-6 bg-gradient-to-r from-champagne-800 via-champagne-700 to-rose-600 bg-clip-text text-transparent">
                    Aura Match
                  </h1>
                  
                  <p className="text-2xl md:text-3xl text-champagne-700 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
                    당신만의 완벽한 향수를 찾아드립니다
                  </p>
                  
                  <p className="text-xl text-champagne-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    AI 기반 개인 맞춤 분석과 전문가의 큐레이션으로<br />
                    취향과 상황에 완벽하게 맞는 향수를 추천받아보세요
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      onClick={() => setCurrentView('quiz')}
                      className="bg-gradient-to-r from-golden-gradient to-rose-400 text-white px-10 py-6 text-xl rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl font-semibold"
                    >
                      ✨ 향수 추천받기
                    </Button>
                    <Button 
                      onClick={() => setCurrentView('today')}
                      variant="outline" 
                      className="border-2 border-champagne-300 text-champagne-700 px-10 py-6 text-xl rounded-full hover:bg-gradient-to-r hover:from-champagne-50 hover:to-rose-50 transition-all duration-300 shadow-lg font-semibold"
                    >
                      📅 오늘의 향수
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-champagne-50/30 to-rose-50/30">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-golden-gradient rounded-full mb-6 shadow-xl">
                    <span className="text-3xl">🌟</span>
                  </div>
                  <h2 className="luxury-text text-5xl font-bold text-champagne-800 mb-6">
                    완벽한 향수 선택을 위한<br />특별한 서비스
                  </h2>
                  <p className="text-xl text-champagne-600 max-w-3xl mx-auto leading-relaxed">
                    개인의 취향과 라이프스타일을 세심하게 분석하여<br />
                    가장 적합한 향수를 찾아드립니다
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-500 animate-slide-in border-0 shadow-2xl bg-gradient-to-br from-champagne-50 to-champagne-100"
                    onClick={() => setCurrentView('quiz')}
                  >
                    <CardHeader className="text-center pb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-golden-gradient to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl">✨</span>
                      </div>
                      <CardTitle className="luxury-text text-2xl text-champagne-800 mb-3">
                        개인 맞춤 추천
                      </CardTitle>
                      <CardDescription className="text-champagne-600 text-lg font-medium">
                        AI 기반 정밀 분석
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-champagne-700 leading-relaxed text-base">
                        10가지 세부 질문을 통해 당신의 취향, 라이프스타일, 
                        선호 향조를 정밀하게 분석하고 완벽하게 맞는 향수를 추천해드립니다.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-500 animate-slide-in border-0 shadow-2xl bg-gradient-to-br from-rose-50 to-rose-100"
                    onClick={() => setCurrentView('today')}
                    style={{ animationDelay: '0.2s' }}
                  >
                    <CardHeader className="text-center pb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-champagne-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl">📅</span>
                      </div>
                      <CardTitle className="luxury-text text-2xl text-champagne-800 mb-3">
                        상황별 향수 선택
                      </CardTitle>
                      <CardDescription className="text-champagne-600 text-lg font-medium">
                        스마트한 일정 분석
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-champagne-700 leading-relaxed text-base">
                        오늘의 일정, 날씨, 기분을 종합적으로 고려하여 
                        보유한 향수 중에서 가장 완벽한 선택을 도와드립니다.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-500 animate-slide-in border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-purple-100"
                    onClick={() => setCurrentView('collection')}
                    style={{ animationDelay: '0.4s' }}
                  >
                    <CardHeader className="text-center pb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-champagne-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl">💎</span>
                      </div>
                      <CardTitle className="luxury-text text-2xl text-champagne-800 mb-3">
                        컬렉션 관리
                      </CardTitle>
                      <CardDescription className="text-champagne-600 text-lg font-medium">
                        개인 맞춤 아카이브
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-champagne-700 leading-relaxed text-base">
                        소중한 향수들을 아름답게 정리하고, 
                        사용 기록과 개인적인 감상을 체계적으로 관리하세요.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-champagne-100 to-rose-100">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="luxury-text text-4xl font-bold text-champagne-800 mb-4">
                    사용자들의 특별한 경험
                  </h2>
                  <p className="text-lg text-champagne-600">
                    Aura Match와 함께한 향수 여행 이야기
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="perfume-card border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {Array.from({length: 5}, (_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                      <p className="text-champagne-700 mb-6 leading-relaxed">
                        "설문조사를 통해 찾은 향수가 정말 완벽해요! 
                        제 취향을 이렇게 정확히 파악할 줄 몰랐어요."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-golden-gradient rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">김</span>
                        </div>
                        <div>
                          <p className="font-semibold text-champagne-800">김○○님</p>
                          <p className="text-champagne-600 text-sm">26세, 회사원</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="perfume-card border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {Array.from({length: 5}, (_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                      <p className="text-champagne-700 mb-6 leading-relaxed">
                        "컬렉션 관리 기능이 정말 유용해요. 
                        제 향수들을 체계적으로 관리할 수 있어서 만족스러워요."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">박</span>
                        </div>
                        <div>
                          <p className="font-semibold text-champagne-800">박○○님</p>
                          <p className="text-champagne-600 text-sm">31세, 디자이너</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="perfume-card border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {Array.from({length: 5}, (_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                      <p className="text-champagne-700 mb-6 leading-relaxed">
                        "오늘의 향수 추천 기능 덕분에 
                        매일 상황에 맞는 완벽한 향수를 선택할 수 있어요."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">이</span>
                        </div>
                        <div>
                          <p className="font-semibold text-champagne-800">이○○님</p>
                          <p className="text-champagne-600 text-sm">28세, 마케터</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-golden-gradient via-rose-400 to-purple-400">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-xl">
                  <span className="text-4xl">🎯</span>
                </div>
                <h2 className="luxury-text text-5xl font-bold text-white mb-6">
                  지금 시작해보세요
                </h2>
                <p className="text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                  몇 분의 간단한 설문으로<br />
                  당신만의 완벽한 향수를 찾아보세요
                </p>
                <Button 
                  onClick={() => setCurrentView('quiz')}
                  className="bg-white text-champagne-800 px-12 py-6 text-xl rounded-full hover:scale-105 transition-all duration-300 shadow-2xl font-bold hover:shadow-3xl"
                >
                  ✨ 향수 찾기 시작하기
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
        <nav className="sticky top-0 z-50 glass-effect px-4 py-4 backdrop-blur-lg bg-white/70 border-b border-champagne-200/50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => setCurrentView('home')}
              className="luxury-text text-2xl font-bold text-champagne-800 hover:bg-champagne-50 rounded-full px-6 py-3"
            >
              ✨ Aura Match
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setCurrentView('home')}
              className="text-champagne-700 border-2 border-champagne-300 hover:bg-champagne-50 rounded-full px-6 py-3 font-semibold"
            >
              🏠 홈으로
            </Button>
          </div>
        </nav>
      )}
      {renderView()}
    </div>
  );
};

export default Index;
