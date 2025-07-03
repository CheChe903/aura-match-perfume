
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  Sparkles, 
  Target, 
  Heart, 
  DollarSign, 
  Flower, 
  Users 
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "홈", url: "/", icon: Home },
  { title: "향수 추천", url: "/quiz", icon: Sparkles },
  { title: "상황별 향수", url: "/situational", icon: Target },
  { title: "내 향수 관리", url: "/collection", icon: Heart },
  { title: "가격대별 탐색", url: "/price-browse", icon: DollarSign },
  { title: "향조별 추천", url: "/fragrance-family", icon: Flower },
  { title: "향수 커뮤니티", url: "/community", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              {!isCollapsed && (
                <span className="luxury-text text-lg font-bold text-champagne-800">
                  Aura Match
                </span>
              )}
            </div>
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = currentPath === item.url || 
                  (item.url !== "/" && currentPath.startsWith(item.url));
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-golden-gradient text-white font-semibold shadow-lg" 
                            : "text-champagne-700 hover:bg-champagne-50"
                        }`}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
