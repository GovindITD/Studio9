// components/MouseTracker.tsx
"use client";

import { useEffect, useState } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-1 left-1 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    >
      <div className="w-3 h-3 rounded-full bg-black mix-blend-difference" />
    </div>
  );
};

export default MouseTracker;
