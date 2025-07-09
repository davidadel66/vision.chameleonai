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
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="relative mb-16">
          <h1
            className={`text-11xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-11xl text-white 
              transition-opacity duration-[3000ms] ease-in-out 
              ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ fontFamily: "Calluna, serif" }}
          >
            vision
          </h1>
          <div
            className={`absolute bottom-0 right-0 text-white/60 text-sm transition-all 
              duration-[3000ms] ease-in-out delay-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ fontFamily: "Calluna, serif" }}
          >
            by ChameleonAI
          </div>
        </div>
        <div className={`text-xl text-center transition-all duration-[2000ms] ease-in-out delay-1000 
              ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Link href="/dashboard">
            <Button className={`px-9 py-4 text-large transition-all duration-300 hover:scale-110 `}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Calluna:wght@1000;1200&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
