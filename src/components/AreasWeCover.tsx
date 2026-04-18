import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const londonAreas = [
  'Romford', 'Hackney', 'Stratford', 'Bethnal Green', 'Canary Wharf',
  'Greenwich', 'Lewisham', 'Croydon', 'Sutton', 'Kingston',
  'Richmond', 'Wimbledon', 'Ealing', 'Hammersmith', 'Fulham',
  'Chelsea', 'Kensington', 'Westminster', 'Islington', 'Camden',
];

const ukRoutes = [
  'Manchester', 'Birmingham', 'Leeds', 'Sheffield', 'Bristol',
  'Edinburgh', 'Glasgow', 'Cardiff', 'Liverpool', 'Nottingham',
];

export const AreasWeCover = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Areas We Cover
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            London &amp; UK-Wide Coverage
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            We serve all London boroughs and operate nationwide UK routes. Wherever you're moving, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* London areas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={18} className="text-accent" />
              <h3 className="font-semibold text-primary text-lg">London Boroughs</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {londonAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:border-accent hover:text-accent smooth-transition cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          {/* UK routes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={18} className="text-accent" />
              <h3 className="font-semibold text-primary text-lg">UK-Wide Routes</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ukRoutes.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:border-accent hover:text-accent smooth-transition cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-5 italic">
              + many more. Contact us to confirm your route.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
