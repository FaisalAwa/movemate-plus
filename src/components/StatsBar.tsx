import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const stats = [
  { value: '1,200+', label: 'Moves Completed' },
  { value: '10+ yrs', label: 'In Business' },
  { value: '4.9', label: 'Average Rating', icon: true },
  { value: 'London', label: '& UK-wide' },
];

export const StatsBar = () => {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-primary-foreground/20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
                {stat.icon && (
                  <Star size={18} className="fill-accent text-accent mb-0.5" />
                )}
              </div>
              <p className="text-primary-foreground/65 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
