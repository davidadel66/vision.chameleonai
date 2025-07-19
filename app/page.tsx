'use client'
import { Button } from '@/components/ui/button';
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4">
        <div className="relative mb-16">
          <h1
            className={`text-8xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-11xl font-bold bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent
              transition-all duration-[2000ms] ease-out transform
              ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
          >
            vision
          </h1>
          <div
            className={`absolute bottom-0 right-0 text-white/60 text-sm transition-all 
              duration-[2000ms] ease-out delay-500 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
          >
            by ChameleonAI
          </div>
        </div>
        
        <div className={`text-xl text-center transition-all duration-[1500ms] ease-out delay-1000 transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="mb-8">
            <p className="text-white/80 text-lg mb-2">Your Personal Risk and Portfolio Management Agent</p>
            <p className="text-white/60 text-base">Powered by advanced AI for smarter trading decisions</p>
          </div>
          
          <Link href="/dashboard">
            <Button className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
