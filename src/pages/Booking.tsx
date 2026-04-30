import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calendar, MapPin, Home, Package, Truck, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Booking() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    fromAddress: '',
    toAddress: '',
    propertyType: '',
    rooms: '',
    service: '',
    additionalInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking request submitted!",
      description: "We'll contact you within 2 hours to confirm your booking.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      moveDate: '',
      fromAddress: '',
      toAddress: '',
      propertyType: '',
      rooms: '',
      service: '',
      additionalInfo: '',
    });
    setStep(1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 border-2 border-white rounded-full"
                style={{
                  transform: `rotate(${i * 60}deg) translateY(-150px)`,
                }}
              />
            ))}
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Book Your Move
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Get a free quote in minutes. Fill out the form below and we'll get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center flex-1">
                  <motion.div
                    animate={{
                      scale: step >= num ? 1.1 : 1,
                      backgroundColor: step >= num ? 'hsl(var(--accent))' : 'hsl(var(--muted))',
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      step >= num ? 'text-accent-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {step > num ? <CheckCircle size={24} /> : num}
                  </motion.div>
                  {num < 3 && (
                    <div className={`flex-1 h-1 mx-4 ${step > num ? 'bg-accent' : 'bg-border'} smooth-transition`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm font-medium">
              <span className={step >= 1 ? 'text-accent' : 'text-muted-foreground'}>Contact Info</span>
              <span className={step >= 2 ? 'text-accent' : 'text-muted-foreground'}>Move Details</span>
              <span className={step >= 3 ? 'text-accent' : 'text-muted-foreground'}>Additional Info</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card p-8 rounded-2xl shadow-lg"
            >
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">Contact Information</h2>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">Move Details</h2>
                    
                    <div>
                      <label htmlFor="moveDate" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Move Date *
                      </label>
                      <input
                        type="date"
                        id="moveDate"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="fromAddress" className="block text-sm font-medium text-foreground mb-2">
                        Moving From *
                      </label>
                      <input
                        type="text"
                        id="fromAddress"
                        name="fromAddress"
                        value={formData.fromAddress}
                        onChange={handleChange}
                        required
                        placeholder="Current address"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="toAddress" className="block text-sm font-medium text-foreground mb-2">
                        Moving To *
                      </label>
                      <input
                        type="text"
                        id="toAddress"
                        name="toAddress"
                        value={formData.toAddress}
                        onChange={handleChange}
                        required
                        placeholder="New address"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-2">
                          Property Type *
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                        >
                          <option value="">Select type</option>
                          <option value="house">House</option>
                          <option value="flat">Flat/Apartment</option>
                          <option value="office">Office</option>
                          <option value="storage">Storage Unit</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="rooms" className="block text-sm font-medium text-foreground mb-2">
                          Number of Rooms *
                        </label>
                        <select
                          id="rooms"
                          name="rooms"
                          value={formData.rooms}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                        >
                          <option value="">Select rooms</option>
                          <option value="1">1-2 Rooms</option>
                          <option value="3">3-4 Rooms</option>
                          <option value="5">5+ Rooms</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">Additional Information</h2>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Required Services *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                      >
                        <option value="">Select service</option>
                        <option value="moving">Moving Only</option>
                        <option value="packing">Packing + Moving</option>
                        <option value="assembly">Moving + Assembly</option>
                        <option value="full">Full Service</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Any special requirements, heavy items, or specific instructions..."
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent smooth-transition resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={prevStep}
                      className="flex-1 bg-secondary text-secondary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-secondary/90 smooth-transition"
                    >
                      Previous
                    </motion.button>
                  )}
                  
                  {step < 3 ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-accent text-accent-foreground px-6 py-4 rounded-lg font-semibold hover:bg-accent/90 smooth-transition"
                    >
                      Next Step
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 bg-accent text-accent-foreground px-6 py-4 rounded-lg font-semibold hover:bg-accent/90 smooth-transition"
                    >
                      Submit Booking
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
