import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Target, Heart, Award } from 'lucide-react';
import aboutImage from '@/assets/about-team.jpg';

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We go above and beyond to ensure every move is perfect.',
  },
  {
    icon: Target,
    title: 'Professional Excellence',
    description: 'Our team is trained to the highest standards, ensuring quality service every time.',
  },
  {
    icon: Heart,
    title: 'Care & Attention',
    description: 'We treat your belongings as if they were our own, with the utmost care and respect.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '1000+ successful moves and countless happy customers speak for our reliability.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="20%"
              cy="30%"
              r="200"
              fill="white"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.circle
              cx="80%"
              cy="70%"
              r="150"
              fill="white"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              About <span className="text-accent">Reliant Integrated Services Ltd</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Your trusted moving partner in Romford, dedicated to making every relocation smooth and stress-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Reliant Integrated Services Ltd was founded with a simple mission: to make moving easier and more affordable for everyone. Based in Romford, we've grown from a small team to become one of the region's most trusted moving companies.
                </p>
                <p>
                  Our young and dynamic team brings energy, professionalism, and dedication to every job. We understand that moving can be stressful, which is why we've built our business around providing a service that's not just efficient, but also friendly and supportive.
                </p>
                <p>
                  With transparent pricing, comprehensive insurance, and a commitment to 100% customer satisfaction, we've helped over 1,000 families and businesses relocate successfully. Every member of our team is fully trained and insured, ensuring your belongings are in safe hands.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Reliant Integrated Services team at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl"
              >
                <div className="text-4xl font-bold">1000+</div>
                <div className="text-sm">Happy Customers</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-xl shadow-lg text-center group hover:shadow-xl smooth-transition"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 smooth-transition"
                  >
                    <Icon className="text-accent" size={32} />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every member of our team is carefully selected, thoroughly trained, and fully insured. We pride ourselves on maintaining a young, energetic workforce that brings enthusiasm and professionalism to every move.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-accent/10 px-8 py-4 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Trained Professionals</div>
              </div>
              <div className="bg-accent/10 px-8 py-4 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-accent/10 px-8 py-4 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
