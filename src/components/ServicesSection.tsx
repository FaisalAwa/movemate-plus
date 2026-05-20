import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { services } from '@/data/services';

import movingImg from '@/assets/Moving Services/1.jpeg';
import packingImg from '@/assets/Packing Services/1.jpeg';
import furnitureImg from '@/assets/Furniture Assembly/1.jpeg';
import flooringImg from '@/assets/Flooring services/1.jpeg';
import landscapingImg from '@/assets/Landscaping section/1.jpeg';
import paintingImg from '@/assets/Painting and decorating section/1.jpeg';
import movingImg2 from '@/assets/Moving Services/2.jpeg';
import movingImg3 from '@/assets/Moving Services/3.jpeg';

const serviceImages: Record<string, string> = {
  moving: movingImg,
  packing: packingImg,
  'furniture-assembly': furnitureImg,
  'piano-special-items': movingImg3,
  flooring: flooringImg,
  landscaping: landscapingImg,
  'painting-decorating': paintingImg,
  cleaning: movingImg2,
};

function stripLeadingParen(text: string) {
  return text.replace(/^\(.*?\)\s*/, '');
}

export const ServicesSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
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
    const cardWidth = el.querySelector('[data-card]')?.clientWidth ?? 320;
    el.scrollBy({ left: dir === 'left' ? -(cardWidth + 24) : (cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Top pill button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <Link
            to="/services/"
            className="inline-flex items-center gap-3 bg-accent text-white px-8 py-3.5 rounded-full font-display font-bold tracking-widest text-sm uppercase hover:bg-accent/90 smooth-transition shadow-md"
          >
            Our Services
            <span className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
              <ChevronRight size={11} strokeWidth={3} />
            </span>
          </Link>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous services"
            className="absolute left-0 top-[38%] -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:border-accent hover:text-accent smooth-transition disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next services"
            className="absolute right-0 top-[38%] -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:border-accent hover:text-accent smooth-transition disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                data-card
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="flex-shrink-0 w-[85vw] md:w-[calc(33.333%-16px)] flex flex-col"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={serviceImages[service.slug] ?? movingImg}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 smooth-transition"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2 flex-1">
                  {stripLeadingParen(service.shortDescription)}
                </p>

                {/* Learn More */}
                <Link
                  to={`/services/${service.slug}/`}
                  className="self-start inline-flex items-center gap-2.5 border-2 border-foreground text-foreground px-6 py-2.5 rounded-full text-xs font-display font-bold tracking-widest uppercase hover:border-accent hover:text-accent smooth-transition"
                >
                  Learn More
                  <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                    <ChevronRight size={10} strokeWidth={3} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
