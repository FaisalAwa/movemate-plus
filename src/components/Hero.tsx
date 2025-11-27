import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-moving.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70 z-10" />
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

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
              Trusted by 1000+ Happy Customers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6"
          >
            We Move It All with{' '}
            <span className="text-accent">Care and Efficiency</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8"
          >
            Professional moving services in East London. Stress-free relocations for homes, offices, and everything in between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 smooth-transition shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="group-hover:translate-x-1 smooth-transition" size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/90 smooth-transition shadow-lg"
            >
              Our Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center text-primary-foreground"
          >
            {['Fully Insured', '100% Satisfaction', 'Transparent Pricing'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="text-accent" size={24} />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Truck SVG */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-10 left-10 hidden xl:block z-20"
      >
        <svg width="120" height="60" viewBox="0 0 120 60" className="text-accent">
          <motion.g
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="10" y="20" width="50" height="30" fill="currentColor" opacity="0.9" rx="2" />
            <rect x="60" y="15" width="30" height="35" fill="currentColor" opacity="0.8" rx="2" />
            <circle cx="30" cy="55" r="5" fill="white" />
            <circle cx="75" cy="55" r="5" fill="white" />
          </motion.g>
        </svg>
      </motion.div>
    </section>
  );
};
