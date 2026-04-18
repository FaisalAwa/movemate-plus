import { motion } from 'framer-motion';

const steps = [
  { number: 1, title: 'Book Online', subtitle: 'Get an instant quote' },
  { number: 2, title: 'We Prepare', subtitle: 'Pack & protect' },
  { number: 3, title: 'Move Day', subtitle: 'Safe & on time' },
  { number: 4, title: 'Settled In', subtitle: 'Unpacking optional' },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Our Process of Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Connector line on md+ */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-primary-foreground/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center relative z-10"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-primary-foreground/60 text-sm">{step.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
