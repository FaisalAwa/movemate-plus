import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import moving1 from '@/assets/Moving Services/1.jpeg';
import moving2 from '@/assets/Moving Services/2.jpeg';
import moving3 from '@/assets/Moving Services/3.jpeg';
import moving4 from '@/assets/Moving Services/4.jpeg';
import moving5 from '@/assets/Moving Services/5.jpeg';
import packing1 from '@/assets/Packing Services/1.jpeg';
import packing2 from '@/assets/Packing Services/2.jpeg';
import packing3 from '@/assets/Packing Services/3.jpeg';
import packing4 from '@/assets/Packing Services/4.jpeg';

const workImages = [
  { src: moving1, alt: 'Professional movers handling furniture' },
  { src: moving2, alt: 'Careful loading of belongings' },
  { src: moving3, alt: 'Moving team at work' },
  { src: moving4, alt: 'Secure transport of items' },
  { src: moving5, alt: 'Expert moving service' },
  { src: packing1, alt: 'Professional packing service' },
  { src: packing2, alt: 'Secure packing of fragile items' },
  { src: packing3, alt: 'Wrapping and protecting items' },
  { src: packing4, alt: 'Packed boxes ready for move' },
];

export const OurWork = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              See Us in Action
            </h2>
          </div>
          {/* Scroll buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 smooth-transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 smooth-transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {workImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden snap-start"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 smooth-transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
