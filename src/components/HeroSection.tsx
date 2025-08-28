
import React from 'react';
import { ArrowRight, Truck, Star, Users, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clientes Atendidos' },
    { icon: Package, value: '1000+', label: 'Produtos Disponíveis' },
    { icon: Truck, value: '24h', label: 'Entrega Rápida' },
    { icon: Star, value: '5.0', label: 'Avaliação Média' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] bg-repeat opacity-20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm">
                <Star className="h-4 w-4 mr-2 text-primary" />
                Distribuidora Premium para Salões
              </div>
              
              <h1 className="text-hero text-white leading-tight">
                Inovação e 
                <span className="text-gradient-gold block">
                  Qualidade
                </span>
                para seu Salão
              </h1>
              
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Conectamos profissionais da beleza com as melhores marcas do mercado. 
                <strong className="text-primary"> Entrega rápida, exclusividade!</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.open('https://wa.me/5598987463581', '_blank')}
                className="btn-hero group"
              >
                Solicitar Catálogo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-hero"
              >
                Ver Produtos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-2 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 glass animate-float">
                <img 
                  src="/lovable-uploads/4270f5f2-3d9f-4922-9fa6-6d13809a5fe3.png" 
                  alt="Gajah Distribuidora - Força e Confiabilidade" 
                  className="w-full h-64 object-contain"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-sm font-medium">Entrega</div>
                  <div className="text-2xl font-bold">24h</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: '3s' }}>
                  <div className="text-sm font-medium">Produtos</div>
                  <div className="text-2xl font-bold">1000+</div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
