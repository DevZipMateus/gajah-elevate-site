
import React from 'react';
import { Target, Heart, Zap, Shield, Award, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Entrega rápida e eficiente para não parar seu salão'
    },
    {
      icon: Award,
      title: 'Exclusividade',
      description: 'Produtos únicos e marcas premium do mercado'
    },
    {
      icon: Heart,
      title: 'Atendimento Humano',
      description: 'Relacionamento personalizado com cada cliente'
    },
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Garantia de qualidade em todos os produtos'
    },
    {
      icon: Target,
      title: 'Inovação',
      description: 'Sempre trazendo as últimas tendências do setor'
    },
    {
      icon: Handshake,
      title: 'Parceria',
      description: 'Fortalecemos o crescimento de cada cliente'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Sobre a Gajah Distribuidora
          </div>
          <h2 className="text-section-title text-secondary mb-6">
            Conectando Profissionais com as 
            <span className="text-gradient-gold block">Melhores Marcas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa missão é levar <strong className="text-primary">inovação, qualidade e confiança</strong> aos salões de beleza, 
            conectando profissionais com as melhores marcas e soluções do mercado. Fortalecemos o crescimento de cada cliente 
            com agilidade, exclusividade e um atendimento humano e personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card border-border/50 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-card-title text-secondary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h3 className="text-3xl font-bold text-secondary">
                Por que escolher a Gajah?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Produtos Profissionais Premium</h4>
                    <p className="text-muted-foreground">Linha completa para cabeleireiros e home care com as melhores marcas do mercado</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Atacado e Varejo</h4>
                    <p className="text-muted-foreground">Flexibilidade total para atender desde pequenos salões até grandes distribuidores</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Logística Inteligente</h4>
                    <p className="text-muted-foreground">Sistema de entrega otimizado para garantir rapidez e segurança</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border/50">
                <div className="text-center mb-6">
                  <img 
                    src="/lovable-uploads/4270f5f2-3d9f-4922-9fa6-6d13809a5fe3.png" 
                    alt="Gajah Distribuidora" 
                    className="h-20 w-auto mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-secondary">Nossa Localização</h4>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CNPJ:</span>
                    <span className="font-medium text-secondary">24.496.398/0001-30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Endereço:</span>
                    <span className="font-medium text-secondary text-right">Estrada de Ribamar km07 n° 06</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Telefone:</span>
                    <span className="font-medium text-secondary">(98) 98746-3581</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium text-secondary">athaydearaujo@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
