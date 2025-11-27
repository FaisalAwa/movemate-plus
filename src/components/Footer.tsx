import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">MoveMates</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for stress-free moving in East London. Professional, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent smooth-transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent smooth-transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent smooth-transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>House Removals</li>
              <li>Office Removals</li>
              <li>Packing Services</li>
              <li>Furniture Assembly</li>
              <li>Storage Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={18} />
                <a href="tel:+442012345678" className="hover:text-accent smooth-transition">
                  +44 20 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={18} />
                <a href="mailto:info@movemates.uk" className="hover:text-accent smooth-transition">
                  info@movemates.uk
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin size={18} className="mt-1" />
                <span>East London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} MoveMates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
