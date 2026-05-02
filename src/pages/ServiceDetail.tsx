import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CheckCircle, ArrowLeft, Truck, Shield, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';
import { useState } from 'react';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  if (!service) {
    return <Navigate to="/services/" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        <meta name="twitter:image" content="/favicon.png" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-20 text-primary-foreground relative overflow-hidden"
        style={
          service.image
            ? { background: 'transparent' }
            : undefined
        }
      >
        {/* Background: image with dark overlay OR gradient */}
        {service.image ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-20 left-20 w-48 h-48 border-4 border-white/50 rounded-full"
              />
            </div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Icon className="text-accent" size={40} />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              {service.title}
            </h1>
            {service.shortDescription.startsWith('(') && (
              <p className="text-lg text-white/80 font-semibold">
                {service.shortDescription.split(') ')[0]})
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Link
          to="/services/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition text-sm"
        >
          <ArrowLeft size={16} />
          Back to All Services
        </Link>
      </div>

      {/* Hero Description */}
      {service.shortDescription && (
        <div className="container mx-auto px-4 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-xl p-8 shadow-lg max-w-4xl"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              {service.shortDescription.startsWith('(')
                ? service.shortDescription.split(') ').slice(1).join(') ')
                : service.shortDescription}
            </p>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Description + Benefits + Custom Sections */}
            <div className="lg:col-span-2 space-y-10">
              {!service.sections && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card rounded-xl p-8 shadow-lg"
                >
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                    About This Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.fullDescription}
                  </p>
                </motion.div>
              )}

              {service.sections && service.sections.length > 0 && (() => {
                // Group H2 sections with their following H3 children into one card
                type SectionType = typeof service.sections[0];
                type Group = { parent: SectionType; children: SectionType[] };
                const groups: Group[] = [];
                let i = 0;
                while (i < service.sections.length) {
                  const sec = service.sections[i];
                  if (!sec.level || sec.level === 2) {
                    const children: SectionType[] = [];
                    let j = i + 1;
                    while (j < service.sections.length && service.sections[j].level === 3) {
                      children.push(service.sections[j]);
                      j++;
                    }
                    groups.push({ parent: sec, children });
                    i = j;
                  } else {
                    groups.push({ parent: sec, children: [] });
                    i++;
                  }
                }

                const renderContent = (sec: SectionType) => {
                  if (!Array.isArray(sec.content)) {
                    return (
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {sec.content}
                      </p>
                    );
                  }
                  return sec.content.map((item, pIdx) => {
                    if (
                      (sec.heading === 'How the Process Works' ||
                        sec.heading === 'How the Furniture Assembly Process Works' ||
                        sec.heading === 'How Our Painting & Decorating Process Works') &&
                      item.includes('\n')
                    ) {
                      const [title, description] = item.split('\n');
                      return (
                        <div key={pIdx} className="border-l-4 border-accent pl-6">
                          <h3 className="text-xl font-heading font-bold text-primary mb-2">{title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{description}</p>
                        </div>
                      );
                    } else if (sec.heading.startsWith('Why Choose') && item.includes(' – ')) {
                      const [title, description] = item.split(' – ');
                      return (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                            {description && (
                              <p className="text-muted-foreground leading-relaxed">{description}</p>
                            )}
                          </div>
                        </div>
                      );
                    } else if (item.startsWith('• ')) {
                      return (
                        <div key={pIdx} className="flex items-start gap-3 pl-2">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-3" />
                          <p className="text-muted-foreground leading-relaxed text-lg">{item.substring(2)}</p>
                        </div>
                      );
                    }
                    return (
                      <p key={pIdx} className="text-muted-foreground leading-relaxed text-lg">{item}</p>
                    );
                  });
                };

                return (
                  <div className="space-y-8">
                    {groups.map((group, gIdx) => (
                      <motion.div
                        key={gIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: gIdx * 0.05 }}
                        className="bg-card rounded-xl p-8 shadow-lg"
                      >
                        {/* Parent H2 heading + content */}
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                          {group.parent.heading}
                        </h2>
                        <div className="space-y-4">
                          {renderContent(group.parent)}
                        </div>

                        {/* Child H3 sections inside same card */}
                        {group.children.length > 0 && (
                          <div className="mt-8 space-y-8">
                            {group.children.map((child, cIdx) => (
                              <div key={cIdx} className="border-t border-border pt-8">
                                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                                  {child.heading}
                                </h3>
                                <div className="space-y-4">
                                  {renderContent(child)}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                );
              })()}

              {!service.sections && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-card rounded-xl p-8 shadow-lg"
                >
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    What's Included
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {!service.sections && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card rounded-xl p-8 shadow-lg"
                >
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    Why Choose Us
                  </h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-foreground">
                        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-xl p-8 shadow-lg sticky top-24"
              >
                <h3 className="text-2xl font-heading font-bold mb-3">
                  Get a Free Quote
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Ready to book or want to find out more? Contact us today for a free, no-obligation quote.
                </p>
                <Link
                  to="/booking/"
                  className="block text-center bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 smooth-transition mb-4"
                >
                  Book Now
                </Link>
                <Link
                  to="/contact/"
                  className="block text-center border border-primary-foreground/40 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 smooth-transition"
                >
                  Contact Us
                </Link>

                <div className="mt-8 pt-6 border-t border-primary-foreground/20 space-y-3">
                  <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                    <Truck size={18} className="text-accent flex-shrink-0" />
                    <span>Serving London & surrounding areas</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                    <Shield size={18} className="text-accent flex-shrink-0" />
                    <span>Fully insured and vetted team</span>
                  </div>
                </div>
              </motion.div>

              {/* Other Services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-card rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                  Other Services
                </h3>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => {
                      const SIcon = s.icon;
                      return (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}/`}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition py-1"
                          >
                            <SIcon size={16} className="text-accent flex-shrink-0" />
                            <span className="text-sm">{s.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
                    >
                      <span className="text-lg font-semibold text-foreground">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={24}
                        className={`text-accent transition-transform ${
                          expandedFAQ === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 py-4 bg-muted border-t border-border"
                      >
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote today and experience professional services with Reliant Integrated Services Ltd.
            </p>
            <Link
              to="/booking/"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 smooth-transition"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
