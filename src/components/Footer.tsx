import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
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
              <a href="https://www.facebook.com/share/1ECM4skzmP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-accent smooth-transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/reliant_integrated_services?igsh=dTFkeGZ0ZjgzZG9l&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-accent smooth-transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://share.google/6rbUW6jCfYJtxjRjD" target="_blank" rel="noopener noreferrer" className="hover:text-accent smooth-transition" aria-label="Google Business Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
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
                <Link to="/services/" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery/" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about/" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-primary-foreground/80 hover:text-accent smooth-transition">
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

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Reliant Integrated Services Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy/" className="hover:text-accent smooth-transition">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions/" className="hover:text-accent smooth-transition">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
