import { useEffect, useState, useMemo } from 'react';

const StarBackground = () => {
  const [shootingStar, setShootingStar] = useState(null);

  // Generate static stars once
  const stars = useMemo(() => {
    return Array.from({ length: 250 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.6 ? 1 : Math.random() < 0.9 ? 2 : 3,
      opacity: Math.random() * 0.5 + 0.3,
      animationDuration: Math.random() * 3 + 2,
      animationDelay: Math.random() * 5,
    }));
  }, []);

  // Handle shooting stars
  useEffect(() => {
    const triggerShootingStar = () => {
      // Start from a wider range of positions
      // Start X: anywhere along the width (0-100%)
      // Start Y: top half of screen (0-40%) to ensure downward diagonal movement is visible
      const startX = Math.random() * 100;
      const startY = Math.random() * 40;
      
      setShootingStar({
        id: Date.now(),
        x: startX,
        y: startY,
      });

      // Clear after animation
      setTimeout(() => {
        setShootingStar(null);
      }, 2000); // 2s duration matches CSS animation
    };

    // Random interval between 3 and 7 seconds (avg 5s) for frequent appearance
    const scheduleNext = () => {
      const delay = Math.random() * 4000 + 3000;
      setTimeout(() => {
        triggerShootingStar();
        scheduleNext();
      }, delay);
    };

    // Trigger one immediately after short delay
    const initialTimer = setTimeout(() => {
        triggerShootingStar();
        scheduleNext();
    }, 1000);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s ease-in-out infinite ${star.animationDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
          }}
        />
      ))}
      
      {shootingStar && (
        <div
          className="shooting-star"
          style={{
            left: `${shootingStar.x}%`,
            top: `${shootingStar.y}%`,
          }}
        />
      )}
    </div>
  );
};

export default StarBackground;
