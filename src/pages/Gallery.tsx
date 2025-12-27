import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Wrench, Shield, CheckCircle, Package } from 'lucide-react';

// Import furniture assembly images
import furnitureAssembly1 from '@/assets/furniture-assembly-1.jpg';
import furnitureAssembly2 from '@/assets/furniture-assembly-2.jpg';
import furnitureAssembly3 from '@/assets/furniture-assembly-3.jpg';
import furnitureAssembly4 from '@/assets/furniture-assembly-4.jpg';
import furnitureAssembly5 from '@/assets/furniture-assembly-5.jpg';

const furnitureAssemblyImages = [
  { id: 'fa1', src: furnitureAssembly1, alt: 'Professional furniture wrapping', caption: 'Secure protective wrapping' },
  { id: 'fa2', src: furnitureAssembly2, alt: 'Hallway furniture transport', caption: 'Safe corridor navigation' },
  { id: 'fa3', src: furnitureAssembly3, alt: 'Wrapped furniture ready for transport', caption: 'Ready for safe transport' },
  { id: 'fa4', src: furnitureAssembly4, alt: 'Multiple furniture items wrapped', caption: 'Complete room preparation' },
  { id: 'fa5', src: furnitureAssembly5, alt: 'Disassembled furniture pieces', caption: 'Expert disassembly service' },
];

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

const categories = ['all', 'house', 'office', 'packing', 'furniture'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : activeCategory === 'furniture'
      ? []
      : galleryImages.filter(img => img.category === activeCategory);

  const showFurnitureSection = activeCategory === 'all' || activeCategory === 'furniture';

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
                className={`px-6 py-2 rounded-lg font-semibold capitalize smooth-transition ${activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card text-foreground hover:bg-card/80'
                  }`}
              >
                {category === 'furniture' ? 'Furniture Assembly' : `${category} Removals`}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture Assembly Showcase Section */}
      {showFurnitureSection && (
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                <Wrench size={18} />
                <span className="font-semibold">Furniture Assembly Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Professional Furniture Handling
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how our expert team carefully disassembles, wraps, and protects your valuable furniture for safe transportation.
              </p>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {/* Large Featured Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(furnitureAssemblyImages[0].src)}
                className="md:col-span-2 lg:col-span-3 md:row-span-2 relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
              >
                <img
                  src={furnitureAssemblyImages[0].src}
                  alt={furnitureAssemblyImages[0].alt}
                  className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <h3 className="text-white text-2xl font-bold mt-3">{furnitureAssemblyImages[0].caption}</h3>
                    <p className="text-white/80 mt-1">{furnitureAssemblyImages[0].alt}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Smaller Grid Images */}
              {furnitureAssemblyImages.slice(1).map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(image.src)}
                  className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer group ${index === 0 || index === 1 ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-3'
                    }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 md:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white font-semibold">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Service Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50 hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-accent" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Protective Wrapping</h4>
                <p className="text-muted-foreground text-sm">Every piece is carefully wrapped to prevent scratches and damage during transport.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50 hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="text-accent" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Expert Disassembly</h4>
                <p className="text-muted-foreground text-sm">Professional tools and expertise to safely disassemble and reassemble furniture.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50 hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-accent" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">Damage Guarantee</h4>
                <p className="text-muted-foreground text-sm">Full insurance coverage and no damage guarantee for your peace of mind.</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      {filteredImages.length > 0 && (
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
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged view"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}

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
