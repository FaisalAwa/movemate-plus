import { motion } from 'framer-motion';
import { Home, Package, Wrench, Piano } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Moving Services',
    description: 'Complete residential and office moving services with professional packing and careful handling of your belongings.',
  },
  {
    icon: Package,
    title: 'Packing Services',
    description: 'Professional packing materials and expert packing techniques to keep your items safe during transit.',
  },
  {
    icon: Wrench,
    title: 'Furniture Assembly',
    description: 'Expert dismantling and reassembly of furniture. We handle everything with care and precision.',
  },
  {
    icon: Piano,
    title: 'Piano & Special Items',
    description: 'Specialized moving services for pianos, antiques, and other valuable or delicate items.',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive moving solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl smooth-transition group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 smooth-transition"
                >
                  <Icon className="text-accent" size={32} />
                </motion.div>
                <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
