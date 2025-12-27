import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete insurance coverage for your peace of mind during every move.',
    stat: '100%',
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: 'Young, dynamic, and fully trained professionals with years of expertise.',
    stat: '10+',
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'Punctual and efficient service that respects your schedule.',
    stat: '99%',
  },
  {
    icon: Users,
    title: 'Happy Customers',
    description: 'Thousands of satisfied customers across East London.',
    stat: '1000+',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <circle
                key={i}
                cx="50%"
                cy="50%"
                r={100 + i * 80}
                fill="none"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}
          </motion.g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-accent">Reliant Integrated Services Ltd</span>?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted partner for stress-free moving with transparent pricing and guaranteed satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Icon className="text-accent-foreground" size={36} />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-5xl font-bold text-accent mb-4"
                >
                  {feature.stat}
                </motion.div>

                <h3 className="text-2xl font-heading font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
