'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/carousel_images/Generated Image September 30, 2025 - 6_35AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_36AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_37AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_38AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_39AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_46AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_47AM-2.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_47AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_48AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_49AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_53AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 6_59AM.png',
  '/images/carousel_images/Generated Image September 30, 2025 - 7_00AM.png',
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % images.length;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center rounded-2xl" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full">
            <Image
              src={images[current]}
              alt={`Falkenberg NEXT bild ${current + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={current === 0}
            />
          </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#F8CA22' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        className="absolute left-4 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-dark-text" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#F8CA22' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        className="absolute right-4 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-dark-text" />
      </motion.button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? 'bg-yellow-bright w-8' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
