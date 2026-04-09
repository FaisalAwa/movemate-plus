import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Moving, Packing & Home Services London | Reliant Integrated Services Ltd</title>
        <meta name="description" content="We are offering packing, removals, furniture assembly, cleaning, flooring, painting, and landscaping services in London. Expert team, competitive prices." />
        <meta property="og:title" content="Professional Moving, Packing & Home Services London | Reliant Integrated Services Ltd" />
        <meta property="og:description" content="We are offering packing, removals, furniture assembly, cleaning, flooring, painting, and landscaping services in London. Expert team, competitive prices." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Moving, Packing & Home Services London | Reliant Integrated Services Ltd" />
        <meta name="twitter:description" content="We are offering packing, removals, furniture assembly, cleaning, flooring, painting, and landscaping services in London. Expert team, competitive prices." />
        <meta name="twitter:image" content="/favicon.png" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-48 h-48 border-4 border-white/50 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive moving solutions for every need. From residential relocations to specialized item transport, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/services/${service.slug}/`}
                    className="block bg-card p-8 rounded-xl shadow-lg hover:shadow-xl smooth-transition group cursor-pointer"
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 smooth-transition"
                      >
                        <Icon className="text-accent" size={32} />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-heading font-semibold text-primary mb-3 group-hover:text-accent smooth-transition">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {service.shortDescription}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <span className="inline-flex items-center gap-1 mt-4 text-accent font-medium text-sm group-hover:gap-2 smooth-transition">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl p-12 text-center"
          >
            <div className="flex justify-center gap-8 mb-8">
              <motion.div whileHover={{ scale: 1.2 }} className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Truck size={32} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Shield size={32} />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote today and experience stress-free moving with Reliant Integrated Services Ltd.
            </p>
            <Link
              to="/booking/"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 smooth-transition"
            >
              Book Your Move
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
