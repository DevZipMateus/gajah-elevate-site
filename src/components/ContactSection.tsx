
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(98) 98746-3581',
      action: () => window.open('tel:+5598987463581'),
      description: 'Ligue agora para atendimento direto'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '(98) 98746-3581',
      action: () => window.open('https://wa.me/5598987463581'),
      description: 'Chat direto via WhatsApp'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'athaydearaujo@gmail.com',
      action: () => window.open('mailto:athaydearaujo@gmail.com'),
      description: 'Envie sua mensagem por e-mail'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Estrada de Ribamar km07 n° 06',
      action: () => window.open('https://maps.google.com/?q=Estrada+de+Ribamar+km07+n+06'),
      description: 'Nossa localização física'
    }
  ];

  const quickActions = [
    {
      title: 'Solicitar Catálogo',
      description: 'Receba nosso catálogo completo de produtos',
      icon: Send,
      action: () => window.open('https://wa.me/5598987463581?text=Gostaria de receber o catálogo completo da Gajah Distribuidora'),
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      title: 'Orçamento Personalizado',
      description: 'Solicite um orçamento customizado para seu negócio',
      icon: Building,
      action: () => window.open('https://wa.me/5598987463581?text=Gostaria de solicitar um orçamento personalizado'),
      gradient: 'from-accent/20 to-accent/5'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Entre em Contato
          </div>
          <h2 className="text-section-title text-secondary mb-6">
            Vamos Conversar sobre
            <span className="text-gradient-gold block">Seu Negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você com agilidade e personalização. 
            Entre em contato e descubra como podemos fortalecer seu salão.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="card-hover group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={info.action}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-secondary mb-1">{info.title}</h3>
                        <p className="font-medium text-primary mb-2">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-6">
              {quickActions.map((action, index) => (
                <Card 
                  key={index} 
                  className={`card-hover bg-gradient-to-br ${action.gradient} border-border/50 animate-fade-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 mx-auto shadow-lg">
                      <action.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-secondary">{action.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">{action.description}</p>
                    <Button 
                      onClick={action.action}
                      className="btn-accent w-full"
                    >
                      Solicitar Agora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Info Card */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-border/50 h-full">
              <CardHeader className="text-center">
                <img 
                  src="/lovable-uploads/4270f5f2-3d9f-4922-9fa6-6d13809a5fe3.png" 
                  alt="Gajah Distribuidora" 
                  className="h-16 w-auto mx-auto mb-4"
                />
                <CardTitle className="text-secondary">Gajah Distribuidora</CardTitle>
                <p className="text-primary font-semibold">Entrega rápida, exclusividade!</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">CNPJ</p>
                      <p className="font-medium text-secondary">24.496.398/0001-30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Horário de Atendimento</p>
                      <p className="font-medium text-secondary">Segunda à Sexta</p>
                      <p className="text-sm text-muted-foreground">8h às 18h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 rounded-xl p-4">
                  <h4 className="font-semibold text-secondary mb-2">Redes Sociais</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Siga-nos para novidades e promoções exclusivas
                  </p>
                  <Button 
                    onClick={() => window.open('https://instagram.com/gajahdistribuidora', '_blank')}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  >
                    @gajahdistribuidora
                  </Button>
                </div>

                <Button 
                  onClick={() => window.open('https://wa.me/5598987463581?text=Olá! Gostaria de conhecer mais sobre a Gajah Distribuidora', '_blank')}
                  className="btn-hero w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-secondary mb-4">
            Pronto para Crescer Conosco?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se aos centenas de profissionais que já confiam na Gajah Distribuidora 
            para impulsionar seus negócios na área da beleza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://wa.me/5598987463581?text=Quero ser cliente da Gajah Distribuidora', '_blank')}
              className="btn-hero"
            >
              Tornar-se Cliente
            </Button>
            <Button 
              onClick={() => window.open('tel:+5598987463581')}
              className="btn-outline-hero bg-white text-secondary hover:bg-secondary hover:text-white"
            >
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
