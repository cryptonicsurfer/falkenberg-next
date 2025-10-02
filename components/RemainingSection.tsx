'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import Tilt from 'react-parallax-tilt';
import WestCoastMapSVG from './WestCoastMapSVG';
import ImageCarousel from './ImageCarousel';

export function DeveloperCallout() {
  return (
    <section className="bg-purple-light">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <h2 className="text-6xl md:text-7xl leading-tight text-dark-text">
              ÄR DU EN FASTIGHETS-UTVECKLARE SOM VILL MER?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <p className="text-lg">
              Då har du kommit rätt. Vi letar efter fastighetsutvecklare som blickar framåt.
              Som vill bygga något större och lägga grunden för en spännande framtid – tillsammans
              med oss i Falkenberg.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export function ReadySetBuild() {
  return (
    <section className="bg-yellow-bright py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            <AnimatedSection>
              <h2 className="text-7xl md:text-9xl leading-[0.9] text-white"
                  style={{ WebkitTextStroke: '2px #212121' }}>
                KLARA.<br/>FÄRDIGA.<br/>BYGG.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="space-y-4">
                <p className="text-lg">
                  Falkenberg NEXT omfattar 27 000 kvm med färdig detaljplan och generösa byggrätter
                  för centrum- och kontorsbyggnader på upp till sju våningar.
                </p>
                <p className="text-lg">
                  Här planeras en levande mötesplats med kontor och co-working, plats för restauranger,
                  caféer, gym och annan service. Allt i direkt anslutning till Falkenbergs station.
                </p>
                <motion.p
                  className="text-xl font-bold mt-6"
                  whileHover={{ x: 10, color: '#A191B9' }}
                  transition={{ duration: 0.3 }}
                >
                  falkenbergväxer.se →
                </motion.p>
              </div>
            </AnimatedSection>
          </div>

          <div className="md:sticky md:top-24">
            <AnimatedSection delay={0.4} direction="right">
              <div className="relative w-full aspect-[4/3]">
                <ImageCarousel />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FiveReasons() {
  const reasons = [
    {
      title: 'Unik möjlighet.',
      text: 'Skapa framtidens Falkenberg på oexploaterad mark.'
    },
    {
      title: 'Byggfärdigt.',
      text: 'En byggnad är klar, en är under planering. Färdig detaljplan och flera byggrätter finns.'
    },
    {
      title: 'Läge, läge, läge.',
      text: 'Direkt anslutning till Falkenbergs station, 1 km till E6/E20 och 2 km till Falkenbergs centrum.'
    },
    {
      title: 'Gemensam ambition.',
      text: 'Investera i en kommun som satsar på att bli Sveriges bästa näringslivskommun.'
    },
    {
      title: 'Väx med oss.',
      text: 'En chans att åka med på Falkenbergs och Hallands utvecklingsresa.'
    }
  ];

  return (
    <section className="bg-purple-light py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="text-6xl md:text-8xl text-dark-text">
              FEM SKÄL ATT BYGGA HÄR
            </h2>
          </AnimatedSection>

          <div className="space-y-6 relative z-10">
            {reasons.map((reason, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="right">
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-yellow-bright p-4 rounded-lg shadow-lg"
                >
                  <h3 className="inline font-bold text-dark-text mr-2">{reason.title}</h3>
                  <p className="inline text-dark-text">{reason.text}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Large background number */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[30rem] font-montserrat font-black text-white/40 pointer-events-none select-none"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        5
      </motion.div>
    </section>
  );
}

export function WestCoastLocation() {
  return (
    <section className="bg-[#D9D2E9] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedSection direction="left">
              <h2 className="text-6xl md:text-8xl text-dark-text mb-6 leading-tight">
                MITT PÅ<br/>VÄSTKUSTEN
              </h2>
              <p className="text-lg max-w-[65ch]">
                Det tillgängliga läget, mitt på västkusten, kunde knappast vara bättre.
                Falkenberg NEXT ligger på smidigt avstånd för bolag, organisationer och talang
                från hela västkusten.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6} direction="left">
              <motion.div
                className="mt-8 bg-white rounded-lg shadow-xl flex max-w-md"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: 'spring', bounce: 0.4 }}
              >
                <div className="bg-yellow-bright px-8 py-6 flex items-center justify-center"
                     style={{ clipPath: 'polygon(100% 0, 100% 100%, 20px 100%, 0% 50%, 20px 0)' }}>
                  <h3 className="text-2xl font-montserrat font-black text-dark-text whitespace-nowrap">
                    FALKENBERG
                  </h3>
                </div>
                <div className="px-6 py-4 flex-1">
                  <p className="text-sm font-bold mb-2 text-dark-text">Restider Västkustbanan</p>
                  <p className="text-xs text-dark-text mb-1">Halmstad–Falkenberg: ~20 min</p>
                  <p className="text-xs text-dark-text mb-1">Göteborg–Falkenberg: ~1h</p>
                  <p className="text-xs text-dark-text">Malmö–Falkenberg: ~2h</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} direction="right">
            <div className="bg-[#b9a7d1] rounded-xl p-8 shadow-2xl h-[80vh] flex items-center justify-center">
              <WestCoastMapSVG />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export function GrowWithFalkenberg() {
  return (
    <section className="bg-yellow-bright py-20">
      <div className="max-w-7xl mx-auto px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-8xl text-dark-text leading-tight">
              VÄX MED<br/>
              <span className="text-white" style={{ WebkitTextStroke: '2px #212121' }}>
                FALKENBERG
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2} direction="left">
            <div className="space-y-4">
              <p className="text-lg">
                Falkenberg är en stor småstad med djärva ambitioner och siktar på att ha 50 000
                invånare 2030. Här finns en positiv attityd, stark vilja och ett driv framåt.
                Vi rankas redan högt när det kommer till bra företagsklimat men strävar efter att
                bli Sveriges bästa näringslivskommun.
              </p>
              <p className="text-lg">
                Här händer det saker. Inte nog med att Västsverige hamnar på 10:e plats i
                EU-kommissionens ranking över Europas mest innovativa regioner – Halland rankas
                som Sveriges mest attraktiva region att leva och bo i och har Sveriges snabbaste
                tillväxt av kunskapsintensiva jobb.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} direction="right">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.05}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/falkenberg-growth.png"
                  alt="Falkenberg växer"
                  fill
                  className="rounded-lg shadow-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Tilt>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-purple-bg py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left">
            <h2 className="text-7xl md:text-9xl text-purple-light leading-[0.9] mb-8"
                style={{ WebkitTextStroke: '2px white' }}>
              VI<br/>HÖRS!
            </h2>

            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-2xl font-montserrat font-black mb-2">Mattias Fornell</h3>
                <p>Näringslivsutvecklare<br/>Etablera & Expandera<br/>070-231 88 40<br/>mattias.fornell@falkenberg.se</p>
              </div>

              <div>
                <h3 className="text-2xl font-montserrat font-black mb-2">Emma Carlström</h3>
                <p>Näringslivschef<br/>070-208 56 03<br/>emma.carlstrom@falkenberg.se</p>
              </div>

              <motion.p
                className="text-xl font-bold mt-6"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                falkenbergväxer.se →
              </motion.p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="right">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
            >
              <div className="relative w-full aspect-[5/6]">
                <Image
                  src="/images/contact-image.png"
                  alt="Emma Carlström, Näringslivschef"
                  fill
                  className="rounded-t-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Tilt>

            <motion.div
              className="bg-white p-8 rounded-b-lg shadow-xl -mt-16 ml-8 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="italic text-lg mb-4">
                "I Falkenberg finns ett av Sveriges bästa företagsklimat och en kommun som arbetar
                nära och lösningsorienterat tillsammans med näringslivet. Här möts entreprenörsanda
                och livskvalitet. Välkommen till oss!"
              </p>
              <p>
                <strong>– Emma Carlström,</strong> Näringslivschef Falkenberg
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-yellow-bright px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div>
          <h3 className="text-3xl font-montserrat font-black text-dark-text">FALKENBERG NEXT</h3>
          <p className="font-montserrat font-black text-dark-text">falkenbergväxer.se</p>
        </div>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative w-[120px] h-[60px]"
        >
          <Image
            src="/images/falkenberg-kommun-logo.png"
            alt="Falkenbergs kommun logotyp"
            fill
            className="object-contain"
            sizes="120px"
          />
        </motion.div>
      </div>
    </footer>
  );
}