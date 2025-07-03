import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-blue-900/10 to-purple-900/20 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-800/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '7s', animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="relative mb-16">
          <h1
            className={`text-11xl text-white transition-all duration-[3000ms] ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ fontFamily: "Calluna, serif" }}
          >
            vision
          </h1>

          {/* "by ChameleonAI" text positioned in bottom right corner of the main text */}
          <div
            className={`absolute bottom-0 right-0 text-white/60 text-sm transition-all duration-[3000ms] ease-in-out delay-1000 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ fontFamily: "Calluna, serif" }}
          >
            by ChameleonAI
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className={`text-center space-y-6 transition-all duration-[3000ms] ease-in-out delay-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <p
            className="text-white/80 text-xl tracking-wide"
            style={{ fontFamily: "Calluna, serif" }}
          >
            Where market chaos meets algorithmic clarity
          </p>

          <Button
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 px-8 py-3 text-lg backdrop-blur-sm transition-all duration-300"
            style={{ fontFamily: "Calluna, serif" }}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Google Fonts import for Calluna */}
      <link
        href="https://fonts.googleapis.com/css2?family=Calluna:wght@1000;1200&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
