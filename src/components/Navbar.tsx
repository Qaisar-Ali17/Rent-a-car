import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Car, Menu, X, Phone, Mail } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="hero-gradient p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">RentaCar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#cars" className="text-foreground hover:text-primary transition-smooth">
              Our Cars
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <Button className="accent-gradient hover:accent-hover transition-smooth">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#cars"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Cars
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 py-2 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <Button className="w-full accent-gradient hover:accent-hover transition-smooth">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};