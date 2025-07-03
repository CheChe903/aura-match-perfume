
import React from 'react';
import { 
  Home,
  Sparkles, 
  Target, 
  Heart, 
  DollarSign, 
  Flower, 
  Users 
} from 'lucide-react';

const menuItems = [
  { title: "홈", view: "home", icon: Home },
  { title: "향수 추천", view: "quiz", icon: Sparkles },
  { title: "상황별 향수", view: "situational", icon: Target },
  { title: "내 향수 관리", view: "collection", icon: Heart },
  { title: "가격대별 탐색", view: "price-browse", icon: DollarSign },
  { title: "향조별 추천", view: "fragrance-family", icon: Flower },
  { title: "향수 커뮤니티", view: "community", icon: Users },
];

interface AppSidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function AppSidebar({ currentView, onViewChange }: AppSidebarProps) {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-lg border-b border-champagne-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="luxury-text text-xl font-bold text-champagne-800">
              Aura Match
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = currentView === item.view;
              
              return (
                <button
                  key={item.title}
                  onClick={() => onViewChange(item.view)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                    isActive 
                      ? "bg-golden-gradient text-white shadow-lg" 
                      : "text-champagne-700 hover:bg-champagne-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => onViewChange('home')}
              className="text-champagne-700 hover:bg-champagne-50 p-2 rounded-lg"
            >
              <span className="text-xl">🏠</span>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="grid grid-cols-2 gap-2">
            {menuItems.map((item) => {
              const isActive = currentView === item.view;
              
              return (
                <button
                  key={item.title}
                  onClick={() => onViewChange(item.view)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                    isActive 
                      ? "bg-golden-gradient text-white" 
                      : "text-champagne-700 hover:bg-champagne-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
