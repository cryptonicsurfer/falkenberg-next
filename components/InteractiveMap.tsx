'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

interface MapMarker {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const markers: MapMarker[] = [
  {
    id: 'building-1',
    x: 45,
    y: 40,
    title: 'Byggnad 1 - Färdig',
    description: 'Första byggnaden är klar med moderna kontorslokaler',
    status: 'completed'
  },
  {
    id: 'building-2',
    x: 55,
    y: 45,
    title: 'Byggnad 2 - Under planering',
    description: 'Co-working spaces och kreativa mötesplatser',
    status: 'in-progress'
  },
  {
    id: 'building-3',
    x: 50,
    y: 55,
    title: 'Service & Restauranger',
    description: 'Plats för caféer, restauranger och gym',
    status: 'planned'
  },
  {
    id: 'station',
    x: 30,
    y: 60,
    title: 'Falkenbergs Station',
    description: 'Direkt anslutning till Västkustbanan',
    status: 'completed'
  }
];

export default function InteractiveMap() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-bright';
      case 'planned':
        return 'bg-purple-light';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-bg to-purple-light py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl text-white mb-4" style={{ WebkitTextStroke: '2px #212121' }}>
            INTERAKTIV KARTA
          </h2>
          <p className="text-xl text-dark-text">
            Utforska området och se vad som händer var
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1000}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative rounded-xl overflow-hidden shadow-2xl w-full aspect-[4/3]"
              >
                <Image
                  src="/images/next-location-map.png"
                  alt="Karta över Falkenberg NEXT"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />

                {/* Interactive markers */}
                {markers.map((marker, index) => (
                  <motion.div
                    key={marker.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${marker.x}%`,
                      top: `${marker.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onMouseEnter={() => setHoveredMarker(marker.id)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    onClick={() => setSelectedMarker(marker)}
                  >
                    <motion.div
                      className={`w-6 h-6 rounded-full ${getStatusColor(marker.status)} border-4 border-white shadow-lg`}
                      animate={{
                        scale: hoveredMarker === marker.id ? 1.5 : 1,
                        boxShadow: hoveredMarker === marker.id
                          ? '0 0 20px rgba(255,255,255,0.8)'
                          : '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                      whileHover={{ scale: 1.5 }}
                    />

                    {/* Pulse effect for in-progress items */}
                    {marker.status === 'in-progress' && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-yellow-bright opacity-50"
                        animate={{
                          scale: [1, 2, 2],
                          opacity: [0.5, 0, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut'
                        }}
                      />
                    )}

                    {/* Hover tooltip */}
                    {hoveredMarker === marker.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full mt-2 bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10"
                      >
                        <p className="font-bold text-dark-text text-sm">{marker.title}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </Tilt>
          </div>

          {/* Details panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <h3 className="text-2xl font-anton text-dark-text mb-6">
                {selectedMarker ? selectedMarker.title : 'Klicka på en punkt'}
              </h3>

              {selectedMarker ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(selectedMarker.status)}`}>
                      {selectedMarker.status === 'completed' ? 'Klart' :
                       selectedMarker.status === 'in-progress' ? 'Pågår' : 'Planerat'}
                    </span>
                  </div>
                  <p className="text-dark-text/80 mb-4">
                    {selectedMarker.description}
                  </p>
                  <motion.button
                    className="bg-purple-bg text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-light transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Läs mer
                  </motion.button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <p className="text-dark-text/60">
                    Välj en punkt på kartan för att se mer information om området
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500" />
                      <span className="text-sm">Färdigställt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-yellow-bright" />
                      <span className="text-sm">Pågående</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-light" />
                      <span className="text-sm">Planerat</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}