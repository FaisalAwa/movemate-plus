import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services/', label: 'Services' },
    { path: '/gallery/', label: 'Gallery' },
    { path: '/about/', label: 'About' },
    { path: '/contact/', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-accent shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+4407466711733" className="flex items-center gap-2 hover:text-accent smooth-transition">
                <Phone size={16} />
                <span>07466711733</span>
              </a>
              <a href="mailto:rintegservices@gmail.com" className="flex items-center gap-2 hover:text-accent smooth-transition">
                <Mail size={16} />
                <span>rintegservices@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Romford, UK</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/share/1ECM4skzmP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-accent smooth-transition" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="https://www.instagram.com/reliant_integrated_services?igsh=dTFkeGZ0ZjgzZG9l&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-accent smooth-transition" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://share.google/6rbUW6jCfYJtxjRjD" target="_blank" rel="noopener noreferrer" className="hover:text-accent smooth-transition" aria-label="Google Business Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 h-16 overflow-visible">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 -my-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={logo}
                alt="Reliant Integrated Services LTD"
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium smooth-transition relative ${isActive(link.path)
                  ? 'text-white font-bold'
                  : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/booking/"
              className="bg-white text-accent px-6 py-2 rounded-lg font-semibold hover:bg-white/90 smooth-transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute left-0 right-0 top-full bg-primary shadow-xl"
            >
              <div className="flex flex-col gap-2 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium py-3 px-4 rounded-lg transition-colors ${isActive(link.path)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-primary-foreground hover:bg-primary-foreground/10'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/booking/"
                  onClick={() => setIsOpen(false)}
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-center mt-2"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
