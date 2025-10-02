'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  return (
    <header className="flex flex-wrap bg-purple-bg border-b-4 border-dark-text relative overflow-hidden">
      <motion.div
        className="flex-1 p-6 md:p-16 min-w-0 self-center w-full md:w-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-8xl leading-[1.1] md:leading-[0.9] text-yellow-bright mb-6 md:mb-8"
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
          <p className="text-base md:text-lg mb-4">
            En byggnad är färdig, en annan planeras. Området kring stationen börjar ta form.
            <strong> Falkenberg NEXT händer nu.</strong>
          </p>
          <p className="text-base md:text-lg">
            Därför söker vi fastighetsutvecklare som med kunskap, erfarenhet och driv vill hjälpa oss
            att flytta gränserna för vad som är möjligt för Falkenberg, Halland, Västkusten och Sverige.
          </p>
        </motion.div>
      </motion.div>

      <Tilt
        className="flex-[1.5] w-full md:min-w-[400px] overflow-hidden"
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
          className="h-full relative min-h-[300px] md:min-h-[500px]"
        >
          <Image
            src="/images/hero-image.jpg"
            alt="Illustrationsbild av Falkenberg NEXT av White Arkitekter"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
      </Tilt>
    </header>
  );
}