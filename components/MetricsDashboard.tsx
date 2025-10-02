'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Ruler, Building2, Users, Navigation, Train } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Metric {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

const metrics: Metric[] = [
  {
    value: 27000,
    label: 'Kvadratmeter',
    description: 'Total projektarea med färdig detaljplan',
    icon: Ruler
  },
  {
    value: 7,
    label: 'Våningar',
    description: 'Max höjd för centrum- och kontorsbyggnader',
    icon: Building2
  },
  {
    value: 50000,
    label: 'Invånare 2030',
    description: 'Falkenbergs mål för tillväxt',
    icon: Users
  },
  {
    value: 1,
    label: 'km till E6/E20',
    description: 'Perfekt läge vid motorvägen',
    icon: Navigation
  },
  {
    value: 20,
    suffix: ' min',
    label: 'Till Halmstad',
    description: 'Med Västkustbanan',
    icon: Train
  },
  {
    value: 60,
    suffix: ' min',
    label: 'Till Göteborg',
    description: 'Med Västkustbanan',
    icon: Train
  }
];

export default function MetricsDashboard() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                scale: 1.08,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-2xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, #b9a7cf, #F8CA22)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />

              <div className="mb-3 md:mb-4">
                <metric.icon className="w-12 md:w-16 h-12 md:h-16 text-purple-bg stroke-[1.5]" />
              </div>

              <div className="text-4xl md:text-5xl font-montserrat font-black text-purple-bg mb-2">
                {inView && (
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    separator=" "
                    suffix={metric.suffix || ''}
                  />
                )}
              </div>

              <h3 className="text-lg md:text-xl font-montserrat font-black text-dark-text mb-2">
                {metric.label}
              </h3>

              <p className="text-sm md:text-base text-dark-text/70">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}