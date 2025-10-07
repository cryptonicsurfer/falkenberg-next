'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface NewsItem {
  date: string;
  category: 'byggnation' | 'etablering' | 'event' | 'utveckling';
  title: string;
  excerpt: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    date: '2024-09-15',
    category: 'byggnation',
    title: 'Första Byggnaden Invigd',
    excerpt: 'Den första byggnaden i Falkenberg NEXT är nu klar och redo att välkomna sina första hyresgäster.',
  },
  {
    date: '2024-08-20',
    category: 'etablering',
    title: 'Tre Nya Företag Intresserade',
    excerpt: 'Stort intresse från både lokala och nationella företag för kontorslokaler i området.',
  },
  {
    date: '2024-07-10',
    category: 'utveckling',
    title: 'Utbyggnadsplan Presenterad',
    excerpt: 'Detaljerad plan för fas 2 presenteras med fokus på hållbarhet och modern arbetsplatsdesign.',
  },
  {
    date: '2024-06-05',
    category: 'event',
    title: 'Öppet Hus för Fastighetsutvecklare',
    excerpt: 'Välkomna till en inspirationsdag där vi visar potentialen i Falkenberg NEXT.',
  },
];

const categoryColors = {
  byggnation: 'bg-green-500',
  etablering: 'bg-blue-500',
  event: 'bg-purple-bg',
  utveckling: 'bg-yellow-bright text-dark-text',
};

const categoryLabels = {
  byggnation: 'Byggnation',
  etablering: 'Etablering',
  event: 'Event',
  utveckling: 'Utveckling',
};

export default function NewsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredNews = selectedCategory
    ? newsItems.filter(item => item.category === selectedCategory)
    : newsItems;

  return (
    <div ref={ref}>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-dark-text/80 mb-6">
            Håll dig uppdaterad om vad som händer i projektet
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                selectedCategory === null
                  ? 'bg-dark-text text-white scale-110'
                  : 'bg-gray-200 text-dark-text hover:bg-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Alla
            </motion.button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  selectedCategory === key
                    ? `${categoryColors[key as keyof typeof categoryColors]} scale-110`
                    : 'bg-gray-200 text-dark-text hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          layout
        >
          {filteredNews.map((item, index) => (
            <motion.div
              key={`${item.date}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              }}
              className="bg-purple-light/20 rounded-xl p-4 md:p-6 border-2 border-purple-light hover:border-purple-bg transition-colors duration-300 flex flex-col min-h-[280px]"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 flex-wrap">
                <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold ${categoryColors[item.category]} text-white whitespace-nowrap`}>
                  {categoryLabels[item.category]}
                </span>
                <span className="text-xs md:text-sm text-dark-text/60">
                  {new Date(item.date).toLocaleDateString('sv-SE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-montserrat font-black text-dark-text mb-2 md:mb-3 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-dark-text/80 line-clamp-3 flex-grow">
                {item.excerpt}
              </p>

              <motion.div
                className="mt-4 inline-flex items-center text-purple-bg font-bold cursor-pointer text-sm md:text-base"
                whileHover={{ x: 10 }}
              >
                Läs mer →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}