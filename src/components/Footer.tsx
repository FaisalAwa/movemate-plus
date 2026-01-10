import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="Reliant Integrated Services LTD"
              className="h-16 w-auto bg-accent p-2 rounded"
            />
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for stress-free moving in Romford. Professional, reliable, and affordable.
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
              <li>Moving Services</li>
              <li>Packing Services</li>
              <li>Furniture Assembly</li>
              <li>Piano & Special Items</li>
              <li>Painting & Decorating</li>
              <li>Flooring Services</li>
              <li>Landscaping</li>
              <li>Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={18} />
                <a href="tel:+4407466711733" className="hover:text-accent smooth-transition">
                  07466711733
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={18} />
                <a href="mailto:rintegservices@gmail.com" className="hover:text-accent smooth-transition">
                  rintegservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin size={18} className="mt-1" />
                <span>Romford, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Reliant Integrated Services Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
