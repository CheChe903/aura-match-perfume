import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import PerfumeQuiz from "@/components/PerfumeQuiz";
import SituationalPerfume from "@/components/SituationalPerfume";
import CollectionManager from "@/components/CollectionManager";
import PriceBasedBrowsing from "@/components/PriceBasedBrowsing";
import FragranceFamilyRecommendations from "@/components/FragranceFamilyRecommendations";
import PerfumeCommunity from "@/components/PerfumeCommunity";

const Index = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'quiz':
        return <PerfumeQuiz onBack={() => setCurrentView('home')} />;
      case 'situational':
        return <SituationalPerfume onBack={() => setCurrentView('home')} />;
      case 'collection':
        return <CollectionManager onBack={() => setCurrentView('home')} />;
      case 'price-browse':
        return <PriceBasedBrowsing onBack={() => setCurrentView('home')} />;
      case 'fragrance-family':
        return <FragranceFamilyRecommendations onBack={() => setCurrentView('home')} />;
      case 'community':
        return <PerfumeCommunity onBack={() => setCurrentView('home')} />;
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
                    당신만의 완벽한 향수를 찾고 관리하세요
                  </p>
                  
                  <p className="text-xl text-champagne-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    AI 기반 개인 맞춤 추천부터 향수 컬렉션 관리까지<br />
                    모든 향수 라이프를 한 곳에서 경험해보세요
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button 
                      onClick={() => setCurrentView('quiz')}
                      className="bg-gradient-to-r from-golden-gradient to-rose-400 text-white px-10 py-6 text-xl rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl font-semibold"
                    >
                      ✨ 향수 추천받기
                    </Button>
                    <Button 
                      onClick={() => setCurrentView('collection')}
                      variant="outline" 
                      className="border-2 border-champagne-300 text-champagne-700 px-10 py-6 text-xl rounded-full hover:bg-gradient-to-r hover:from-champagne-50 hover:to-rose-50 transition-all duration-300 shadow-lg font-semibold"
                    >
                      💎 내 향수 관리
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Features Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-champagne-50/30 to-rose-50/30">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-golden-gradient rounded-full mb-6 shadow-xl">
                    <span className="text-3xl">🌟</span>
                  </div>
                  <h2 className="luxury-text text-5xl font-bold text-champagne-800 mb-6">
                    완벽한 향수 라이프를 위한<br />특별한 서비스
                  </h2>
                  <p className="text-xl text-champagne-600 max-w-3xl mx-auto leading-relaxed">
                    개인 맞춤 추천부터 컬렉션 관리, 커뮤니티까지<br />
                    모든 향수 경험을 한 곳에서
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-500 animate-slide-in border-0 shadow-2xl bg-gradient-to-br from-champagne-50 to-champagne-100"
                    onClick={() => setCurrentView('quiz')}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-golden-gradient to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl">✨</span>
                      </div>
                      <CardTitle className="luxury-text text-xl text-champagne-800 mb-2">
                        AI 맞춤 추천
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <CardDescription className="text-champagne-700 leading-relaxed text-sm">
                        취향과 라이프스타일을 분석하여 완벽한 향수를 추천
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-500 animate-slide-in border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-purple-100"
                    onClick={() => setCurrentView('collection')}
                    style={{ animationDelay: '0.2s' }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-champagne-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl">💎</span>
                      </div>
                      <CardTitle className="luxury-text text-xl text-champagne-800 mb-2">
                        향수 컬렉션 관리
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <CardDescription className="text-champagne-700 leading-relaxed text-sm">
                        소중한 향수들을 체계적으로 정리하고 관리
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-500 animate-slide-in border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100"
                    onClick={() => setCurrentView('situational')}
                    style={{ animationDelay: '0.4s' }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-champagne-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <CardTitle className="luxury-text text-xl text-champagne-800 mb-2">
                        상황별 향수
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <CardDescription className="text-champagne-700 leading-relaxed text-sm">
                        특별한 순간에 어울리는 향수를 추천
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card 
                    className="perfume-card cursor-pointer hover:scale-105 transition-all duration-500 animate-slide-in border-0 shadow-2xl bg-gradient-to-br from-orange-50 to-orange-100"
                    onClick={() => setCurrentView('price-browse')}
                    style={{ animationDelay: '0.6s' }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-champagne-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-2xl">💰</span>
                      </div>
                      <CardTitle className="luxury-text text-xl text-champagne-800 mb-2">
                        가격대별 탐색
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <CardDescription className="text-champagne-700 leading-relaxed text-sm">
                        예산에 맞는 향수를 쉽게 찾아보기
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
                        "다양한 상황에 맞는 향수 추천 덕분에 
                        매일 완벽한 향수를 선택할 수 있어요."
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
            <section className="py-24 bg-gradient-to-r from-golden-gradient via-rose-400 to-purple-400 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-xl">
                  <span className="text-4xl">🎯</span>
                </div>
                <h2 className="luxury-text text-5xl font-bold text-white mb-6 drop-shadow-lg">
                  지금 시작해보세요
                </h2>
                <p className="text-2xl text-white mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar currentView={currentView} onViewChange={setCurrentView} />
        <div className="flex-1">
          {currentView !== 'home' && (
            <nav className="sticky top-0 z-50 glass-effect px-4 py-4 backdrop-blur-lg bg-white/70 border-b border-champagne-200/50">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <Button 
                    variant="ghost" 
                    onClick={() => setCurrentView('home')}
                    className="luxury-text text-2xl font-bold text-champagne-800 hover:bg-champagne-50 rounded-full px-6 py-3"
                  >
                    ✨ Aura Match
                  </Button>
                </div>
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
          {currentView === 'home' && (
            <div className="p-4">
              <SidebarTrigger />
            </div>
          )}
          {renderView()}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
