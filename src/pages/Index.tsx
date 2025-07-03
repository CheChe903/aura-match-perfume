
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      case 'home':
        return <CollectionManager onBack={() => setCurrentView('home')} />;
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
        return <CollectionManager onBack={() => setCurrentView('home')} />;
    }
  };

  return (
    <div className="min-h-screen">
      <AppSidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="w-full">
        {renderView()}
      </div>
    </div>
  );
};

export default Index;
