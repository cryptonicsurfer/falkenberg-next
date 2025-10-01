'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import Tilt from 'react-parallax-tilt';

export default function QualityOfLife() {
  return (
    <section className="bg-gradient-to-br from-purple-light/30 to-yellow-bright/20 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.03}
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/quality-of-life.png"
                  alt="Livskvalitet i Falkenberg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Tilt>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <h2 className="text-5xl md:text-7xl text-dark-text mb-6 leading-tight">
              LIVSKVALITET<br/>
              <span className="text-yellow-bright">MED UTSIKT</span>
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                I Falkenberg kombinerar vi affärsmöjligheter med en livskvalitet som
                är svår att slå. Här finns närheten till stränderna, naturen och havet
                – samtidigt som du har allt du behöver för att driva framgångsrik verksamhet.
              </p>
              <p>
                Våra medarbetare och företagare får det bästa av två världar:
                professionella förutsättningar och en livsstil de älskar.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}