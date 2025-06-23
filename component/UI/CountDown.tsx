// components/CountdownWithSlide.tsx
"use client";

import { useEffect, useState } from "react";

const CountdownWithSlide = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 20); // adjust for speed
      return () => clearTimeout(timer);
    } else {
      setAnimateSlide(true);
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black text-white z-50 transition-transform duration-1000 ${
        animateSlide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Countdown in bottom-right */}
      <div className="absolute bottom-8 right-8 text-6xl font-semibold text-white">
        {progress}%
      </div>
    </div>
  );
};

export default CountdownWithSlide;
