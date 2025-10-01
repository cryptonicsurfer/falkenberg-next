'use client';

import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

export default function ConfettiEffect() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if confetti has already been shown
      const hasShownConfetti = sessionStorage.getItem('confettiShown');

      if (!hasShownConfetti) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        // Trigger confetti immediately on load
        setTimeout(() => {
          setShowConfetti(true);
          sessionStorage.setItem('confettiShown', 'true');
        }, 500);

        // Stop confetti after 3.5 seconds with fade out
        setTimeout(() => setShowConfetti(false), 4000);
      }

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      {showConfetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.4}
          colors={['#b9a7cf', '#A191B9', '#F8CA22', '#212121', '#ffffff']}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        />
      )}
    </>
  );
}