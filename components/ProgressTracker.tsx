'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  year: string;
  quarter?: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const events: TimelineEvent[] = [
  {
    year: '2023',
    quarter: 'Q4',
    title: 'Detaljplan Godkänd',
    description: 'Färdig detaljplan med generösa byggrätter för centrum och kontor.',
    status: 'completed'
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: 'Första Byggnaden Klar',
    description: 'En byggnad är färdigställd och redo för inflytt.',
    status: 'completed'
  },
  {
    year: '2024',
    quarter: 'Q3',
    title: 'Andra Byggnaden Planeras',
    description: 'Planering av nästa fas med kontor och co-working spaces.',
    status: 'in-progress'
  },
  {
    year: '2025',
    quarter: 'Q4',
    title: 'Utbyggnad Startar',
    description: 'Byggstart för ytterligare lokaler och mötesplatser.',
    status: 'planned'
  },
  {
    year: '2026',
    quarter: 'Q2',
    title: 'Service & Restauranger',
    description: 'Etablering av restauranger, caféer, gym och annan service.',
    status: 'planned'
  },
  {
    year: '2026',
    title: 'Stadsdelen Växer',
    description: 'Fortsatt expansion med fler kontors- och centrumbyggnader.',
    status: 'planned'
  }
];

export default function ProgressTracker() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-bright animate-pulse-slow';
      case 'planned':
        return 'bg-purple-light';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Klart';
      case 'in-progress':
        return 'Pågår';
      case 'planned':
        return 'Planerat';
      default:
        return '';
    }
  };

  return (
    <section id="progress" className="bg-gradient-to-b from-purple-light to-purple-bg py-12 md:py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-8xl text-dark-text mb-4">
            PROJEKTET <span className="text-yellow-bright">FRAMÅT</span>
          </h2>
          <p className="text-base md:text-xl text-dark-text/80">
            Följ utvecklingen av Falkenberg NEXT över tid
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-dark-text/20"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />

          {/* Timeline events */}
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ml-16 md:ml-0`}>
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -1 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold text-white ${getStatusColor(event.status)}`}>
                      {getStatusLabel(event.status)}
                    </span>
                    <span className="text-xs font-bold text-purple-bg">
                      {event.year} {event.quarter}
                    </span>
                  </div>
                  <h3 className="text-xl mb-1.5 text-dark-text">{event.title}</h3>
                  <p className="text-sm text-dark-text/70">{event.description}</p>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <motion.div
                className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-dark-text ${getStatusColor(event.status)} -ml-3`}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                whileHover={{ scale: 1.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}