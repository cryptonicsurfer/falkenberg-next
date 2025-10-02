'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  return (
    <header className="bg-purple-bg border-b-4 border-dark-text relative overflow-hidden">
      {/* Mobile: Image first, then text */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full h-[50vh] min-h-[400px]"
        >
          <Image
            src="/images/hero-image.jpg"
            alt="Illustrationsbild av Falkenberg NEXT av White Arkitekter"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className="p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl leading-[1] text-yellow-bright mb-4">
            NU<br/>ÅKER<br/>VI!
          </h1>

          <div className="space-y-4">
            <p className="text-base">
              En byggnad är färdig, en annan planeras. Området kring stationen börjar ta form.
              <strong> Falkenberg NEXT händer nu.</strong>
            </p>
            <p className="text-base">
              Därför söker vi fastighetsutvecklare som med kunskap, erfarenhet och driv vill hjälpa oss
              att flytta gränserna för vad som är möjligt för Falkenberg, Halland, Västkusten och Sverige.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Side by side */}
      <div className="hidden md:flex flex-row">
        <motion.div
          className="flex-1 p-16 self-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-9xl leading-[0.9] text-yellow-bright mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            NU<br/>ÅKER<br/>VI!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg mb-4">
              En byggnad är färdig, en annan planeras. Området kring stationen börjar ta form.
              <strong> Falkenberg NEXT händer nu.</strong>
            </p>
            <p className="text-lg">
              Därför söker vi fastighetsutvecklare som med kunskap, erfarenhet och driv vill hjälpa oss
              att flytta gränserna för vad som är möjligt för Falkenberg, Halland, Västkusten och Sverige.
            </p>
          </motion.div>
        </motion.div>

        <Tilt
          className="flex-[1.5] min-w-[400px] overflow-hidden"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={1000}
          scale={1.05}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full relative min-h-[500px]"
          >
            <Image
              src="/images/hero-image.jpg"
              alt="Illustrationsbild av Falkenberg NEXT av White Arkitekter"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
              sizes="60vw"
            />
          </motion.div>
        </Tilt>
      </div>
    </header>
  );
}