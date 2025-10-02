'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { LayoutDashboard, Newspaper, TrendingUp, Construction, Target } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import NewsSection from './NewsSection';
import MetricsDashboard from './MetricsDashboard';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

type TabType = 'overview' | 'news' | 'metrics';

export default function InsightsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('metrics');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs: { id: string; label: string; icon: LucideIcon }[] = [
    { id: 'overview', label: 'Översikt', icon: LayoutDashboard },
    { id: 'news', label: 'Senaste Nytt', icon: Newspaper },
    { id: 'metrics', label: 'Fakta & Siffror', icon: TrendingUp },
  ];

  return (
    <section id="insights" className="bg-yellow-bright py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-8xl text-dark-text mb-4">
            INSIKTER & DATA
          </h2>
          <p className="text-xl text-dark-text/80">
            Utforska projektets utveckling och framsteg
          </p>
        </motion.div>

        {/* Two column layout: Image left, Tabs right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Static Image with sticky */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.05}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/images/next-location-map.png"
                  alt="Visualisering av Falkenberg NEXT"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Tilt>
          </motion.div>

          {/* Right: Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Tab Navigation */}
            <div className="flex justify-start gap-4 mb-8 flex-wrap">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`px-6 py-3 rounded-xl font-bold text-base transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-purple-bg text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-dark-text hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              <motion.div
                className="bg-gradient-to-br from-purple-light to-purple-bg p-8 rounded-xl text-white"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="mb-4">
                  <Construction className="w-16 h-16 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-montserrat font-black mb-3">Projektstatus</h3>
                <p className="mb-4">
                  Första byggnaden är klar, planering av fas 2 pågår. Detaljplan och byggrätter finns på plats.
                </p>
                <button
                  onClick={() => setActiveTab('news')}
                  className="bg-white text-purple-bg px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  Läs mer →
                </button>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-yellow-bright to-yellow-bright/80 p-8 rounded-xl"
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="mb-4">
                  <TrendingUp className="w-16 h-16 text-dark-text stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-montserrat font-black mb-3 text-dark-text">Nyckeltal</h3>
                <p className="text-dark-text mb-4">
                  27 000 kvm projektarea, upp till 7 våningar, direkt vid station och motorväg.
                </p>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className="bg-dark-text text-white px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  Se alla siffror →
                </button>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-bg/30 to-purple-light/30 p-8 rounded-xl border-2 border-purple-light"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="mb-4">
                  <Target className="w-16 h-16 text-purple-bg stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-montserrat font-black mb-3 text-dark-text">Möjligheter</h3>
                <p className="text-dark-text mb-4">
                  Perfekt läge för kontorslokaler, co-working, service och restauranger i växande stadsdel.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-purple-bg text-white px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  Kontakta oss →
                </a>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'news' && (
            <motion.div
              key="news"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-purple-light/10 rounded-xl p-8">
                <NewsSection />
              </div>
            </motion.div>
          )}

          {activeTab === 'metrics' && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-yellow-bright/10 to-purple-light/10 rounded-xl p-8">
                <MetricsDashboard />
              </div>
            </motion.div>
          )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}