import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState, useMemo } from 'react';
import { Wrench, Shield, CheckCircle } from 'lucide-react';

// Dynamic image imports
const imagesGlob = import.meta.glob('@/assets/**/*.{jpeg,jpg,png,webp}', { eager: true });

// Helper to process globe results
const processImages = () => {
  const categories: Record<string, string[]> = {
    'Moving Services': [],
    'Packing Services': [],
    'Furniture Assembly': [],
    'Piano and special items': [],
    'Painting and decorating section': [],
    'Flooring services': [],
    'Landscaping section': [],
    'Cleaning section': [],
  };

  Object.entries(imagesGlob).forEach(([path, module]: [string, any]) => {
    const src = module.default;

    // Categorize based on folder name in path
    if (path.includes('/Moving Services/')) {
      categories['Moving Services'].push(src);
    } else if (path.includes('/Packing Services/')) {
      categories['Packing Services'].push(src);
    } else if (path.includes('/Furniture Assembly/')) {
      categories['Furniture Assembly'].push(src);
    } else if (path.includes('/Piano and special items/')) {
      categories['Piano and special items'].push(src);
    } else if (path.includes('/Painting and decorating section/')) {
      categories['Painting and decorating section'].push(src);
    } else if (path.includes('/Flooring services/')) {
      categories['Flooring services'].push(src);
    } else if (path.includes('/Landscaping section/')) {
      categories['Landscaping section'].push(src);
    } else if (path.includes('/Cleaning section/')) {
      categories['Cleaning section'].push(src);
    }
  });

  return categories;
};

// Map raw folder names to display names
const categoryDisplayNames: Record<string, string> = {
  'Moving Services': 'Moving Services',
  'Packing Services': 'Packing Services',
  'Furniture Assembly': 'Furniture Assembly',
  'Piano and special items': 'Piano & Special Items',
  'Painting and decorating section': 'Painting & Decorating',
  'Flooring services': 'Flooring Services',
  'Landscaping section': 'Landscaping',
  'Cleaning section': 'Cleaning',
};

const processedImages = processImages();

// Order of display
const categoryKeys = [
  'Moving Services',
  'Packing Services',
  'Furniture Assembly',
  'Piano and special items',
  'Painting and decorating section',
  'Flooring services',
  'Landscaping section',
  'Cleaning section',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              Browse through our successful projects across all our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Sections */}
      <div className="py-12 space-y-20">
        {categoryKeys.map((key, sectionIndex) => {
          const images = processedImages[key];
          if (!images || images.length === 0) return null;

          const displayName = categoryDisplayNames[key] || key;
          const isAlternate = sectionIndex % 2 === 1;

          return (
            <section key={key} className={`py-12 ${isAlternate ? 'bg-muted/30' : 'bg-background'}`}>
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 flex items-center gap-4"
                >
                  <div className="h-10 w-2 bg-accent rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                    {displayName}
                  </h2>
                </motion.div>

                {/* Special Layout for Furniture Assembly if desired, or just standard grid for all */}
                {key === 'Furniture Assembly' ? (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                      {images.map((src, index) => {
                        const isFeatured = index === 0;
                        return (
                          <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            onClick={() => setSelectedImage(src)}
                            className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer group ${isFeatured ? 'md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2' : 'md:col-span-2 lg:col-span-3'
                              }`}
                          >
                            <img
                              src={src}
                              alt={`${displayName} project ${index + 1}`}
                              className={`w-full h-full object-cover ${isFeatured ? 'min-h-[300px]' : 'h-64'}`}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                                <div className="bg-white/90 text-primary px-4 py-2 rounded-full font-semibold">View</div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Optional: Add back the feature highlights just for this section if generic info is available, 
                          or skip to keep it clean. Current implementation skips the static text blocks 
                          to focus on the new images provided. */}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((src, index) => (
                      <motion.div
                        key={src}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedImage(src)}
                        className="aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-pointer group relative bg-muted"
                      >
                        <img
                          src={src}
                          alt={`${displayName} project ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged view"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
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

