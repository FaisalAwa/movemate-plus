import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

const galleryImages = [
  { id: 1, category: 'house', alt: 'House removal in progress' },
  { id: 2, category: 'office', alt: 'Office furniture being moved' },
  { id: 3, category: 'packing', alt: 'Professional packing service' },
  { id: 4, category: 'house', alt: 'Loading items into van' },
  { id: 5, category: 'office', alt: 'Corporate office relocation' },
  { id: 6, category: 'packing', alt: 'Wrapped and protected furniture' },
  { id: 7, category: 'house', alt: 'Team carrying boxes' },
  { id: 8, category: 'office', alt: 'IT equipment transport' },
  { id: 9, category: 'packing', alt: 'Fragile items packaging' },
];

const categories = ['all', 'house', 'office', 'packing'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
            animate={{ 
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
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
              Our Work
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Take a look at some of our recent projects and see the quality of our service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold capitalize smooth-transition ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card text-foreground hover:bg-card/80'
                }`}
              >
                {category} Removals
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                      className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </motion.div>
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-primary-foreground/70 mt-2 capitalize">{image.category} Removal</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 smooth-transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              What Our Customers Say
            </h2>
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                "Absolutely fantastic service! The team was professional, efficient, and handled our belongings with great care. Moving has never been easier. Highly recommended!"
              </p>
              <p className="font-semibold text-primary">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Hackney, London</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
