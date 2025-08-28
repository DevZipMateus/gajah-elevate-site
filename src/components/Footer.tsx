
import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: 'hero' },
    { label: 'Sobre', href: 'about' },
    { label: 'Produtos', href: 'products' },
    { label: 'Contato', href: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4270f5f2-3d9f-4922-9fa6-6d13809a5fe3.png" 
                alt="Gajah Distribuidora" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-2xl font-bold">GAJAH</h3>
                <p className="text-white/70">DISTRIBUIDORA</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed max-w-md">
              Levar inovação, qualidade e confiança aos salões de beleza, conectando profissionais 
              com as melhores marcas e soluções do mercado.
            </p>
            
            <div className="flex items-center space-x-2 text-primary">
              <span className="font-semibold">Nosso Lema:</span>
              <span className="italic">"Entrega rápida, exclusividade!"</span>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://wa.me/5598987463581', '_blank')}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open('https://instagram.com/gajahdistribuidora', '_blank')}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 p-3 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <h5 className="font-semibold text-white">Nossos Produtos</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Produtos Profissionais</li>
                <li>• Linha Home Care</li>
                <li>• Venda Atacado</li>
                <li>• Venda Varejo</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">(98) 98746-3581</p>
                  <p className="text-white/70 text-sm">Atendimento personalizado</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">athaydearaujo@gmail.com</p>
                  <p className="text-white/70 text-sm">Suporte por e-mail</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Estrada de Ribamar</p>
                  <p className="text-white font-medium">km07 n° 06</p>
                  <p className="text-white/70 text-sm">São Luís - MA</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-sm text-white/70 mb-2">CNPJ</p>
              <p className="font-medium text-white">24.496.398/0001-30</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} Gajah Distribuidora. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <button
                onClick={() => window.open('https://wa.me/5598987463581?text=Gostaria de saber sobre as políticas da empresa', '_blank')}
                className="hover:text-primary transition-colors"
              >
                Políticas de Privacidade
              </button>
              <button
                onClick={() => window.open('https://wa.me/5598987463581?text=Preciso de suporte técnico', '_blank')}
                className="hover:text-primary transition-colors"
              >
                Suporte
              </button>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-white/5">
            <p className="text-xs text-white/50">
              Site desenvolvido com foco em performance, SEO e experiência do usuário
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
