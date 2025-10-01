'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import AnimatedSection from './AnimatedSection';

export default function DreamBigger() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="pb-20" ref={containerRef}>
      <div className="relative text-center text-white overflow-hidden">
        <motion.div
          style={{ y: imageY }}
          className="relative h-[60vh] md:h-[80vh]"
        >
          <Image
            src="/images/falkenberg-dreams-bigger.png"
            alt="Flygfoto över Falkenberg i skymningen"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-10"
          style={{ y: textY }}
        >
          <motion.h2
            className="text-6xl md:text-9xl drop-shadow-[2px_2px_8px_rgba(0,0,0,0.6)] leading-[1]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            FALKENBERG<br/>DRÖMMER STÖRRE
          </motion.h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-12">
        <AnimatedSection delay={0.2}>
          <p className="text-lg mb-4 max-w-[65ch]">
            Nu vill vi bygga framtidens Falkenberg. En plats som tar tillvara på våra unika förutsättningar:
            Människorna. Drivet. Närheten till stränderna. Entreprenörskapet. Ängarna och skogarna.
            Mathantverket. Kulturen.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-lg max-w-[65ch]">
            Just nu förbereds en ny stationsnära stadsdel på första parkett mot omvärlden.
            Ett bokstavligt stenkast från Falkenbergs station och Västkustbanan och bara några minuter
            från motorvägen gör vi plats för en helt ny stadsdel full av drömmar – Falkenberg NEXT.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}