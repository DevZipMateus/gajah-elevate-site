
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', href: 'hero' },
    { label: 'Sobre', href: 'about' },
    { label: 'Produtos', href: 'products' },
    { label: 'Contato', href: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4270f5f2-3d9f-4922-9fa6-6d13809a5fe3.png" 
              alt="Gajah Distribuidora" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className={`font-bold text-xl ${isScrolled ? 'text-secondary' : 'text-white'}`}>
                GAJAH
              </span>
              <span className={`text-sm font-medium ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
                DISTRIBUIDORA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-secondary' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className={`h-4 w-4 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              <span className={`text-sm font-medium ${isScrolled ? 'text-secondary' : 'text-white'}`}>
                (98) 98746-3581
              </span>
            </div>
            <Button 
              onClick={() => window.open('https://wa.me/5598987463581', '_blank')}
              className="btn-hero"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-secondary hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-up">
            <nav className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left font-medium text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-secondary">
                    (98) 98746-3581
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-secondary">
                    athaydearaujo@gmail.com
                  </span>
                </div>
                <Button 
                  onClick={() => window.open('https://wa.me/5598987463581', '_blank')}
                  className="btn-hero w-full"
                >
                  Fale Conosco
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
