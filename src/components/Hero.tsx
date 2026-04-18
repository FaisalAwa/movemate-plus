import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle } from 'lucide-react';
import heroImage from '@/assets/hero-moving.jpg';

const trustPoints = [
  'Fully Insured',
  'DBS Checked Staff',
  '5-Star Rated',
  'Same-Day Available',
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-44 md:pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60 z-10" />
        <img
          src={heroImage}
          alt="Professional movers at work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated SVG Background Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.pattern
            id="boxes"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            animate={{ x: [0, 100] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <rect x="10" y="10" width="30" height="30" fill="white" opacity="0.5" />
            <rect x="50" y="50" width="30" height="30" fill="white" opacity="0.3" />
          </motion.pattern>
          <rect width="100%" height="100%" fill="url(#boxes)" />
        </svg>
      </div>

      {/* Content — left aligned */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-2xl">
          {/* Small intro label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <span className="text-accent font-semibold tracking-widest text-sm uppercase">
              London's Trusted Moving Specialists
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-5 leading-tight"
          >
            Professional Moving &amp; Integrated Services — Done Right
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-primary-foreground/85 mb-8"
          >
            Residential &amp; commercial moves, packing, storage, and specialist handling across London and the UK.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link
              to="/booking/"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-accent/90 smooth-transition shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="group-hover:translate-x-1 smooth-transition" size={18} />
            </Link>
            <Link
              to="/services/"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-primary-foreground/10 smooth-transition"
            >
              See Our Services
            </Link>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 text-primary-foreground/80 text-sm"
              >
                <Circle size={8} className="fill-accent text-accent flex-shrink-0" />
                <span>{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
