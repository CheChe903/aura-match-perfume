
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
  const [currentView, setCurrentView] = useState('collection'); // Changed default to 'collection'

  const renderView = () => {
    switch (currentView) {
      case 'quiz':
        return <PerfumeQuiz onBack={() => setCurrentView('collection')} />;
      case 'situational':
        return <SituationalPerfume onBack={() => setCurrentView('collection')} />;
      case 'collection':
        return <CollectionManager onBack={() => setCurrentView('collection')} />;
      case 'price-browse':
        return <PriceBasedBrowsing onBack={() => setCurrentView('collection')} />;
      case 'fragrance-family':
        return <FragranceFamilyRecommendations onBack={() => setCurrentView('collection')} />;
      case 'community':
        return <PerfumeCommunity onBack={() => setCurrentView('collection')} />;
      default:
        return <CollectionManager onBack={() => setCurrentView('collection')} />;
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
