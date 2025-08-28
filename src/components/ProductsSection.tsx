
import React from 'react';
import { Scissors, Home, Package, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const productCategories = [
    {
      icon: Scissors,
      title: 'Produtos Profissionais',
      subtitle: 'Para Cabeleireiros',
      description: 'Linha completa de produtos profissionais para salões de beleza, incluindo shampoos, condicionadores, máscaras, tratamentos, colorações e styling.',
      features: [
        'Shampoos e Condicionadores Profissionais',
        'Máscaras de Tratamento Intensivo',
        'Colorações e Descolorantes',
        'Produtos de Styling e Finalização',
        'Tratamentos Capilares Especializados',
        'Ferramentas e Acessórios Profissionais'
      ],
      gradient: 'from-primary/20 to-primary/5',
      buttonText: 'Ver Catálogo Profissional'
    },
    {
      icon: Home,
      title: 'Home Care',
      subtitle: 'Para Casa',
      description: 'Produtos de alta qualidade para cuidados capilares em casa, permitindo que seus clientes mantenham os resultados do salão.',
      features: [
        'Shampoos e Condicionadores Home Care',
        'Leave-in e Óleos Capilares',
        'Máscaras para Uso Doméstico',
        'Produtos Anti-frizz',
        'Protetores Térmicos',
        'Finalizadores e Séruns'
      ],
      gradient: 'from-accent/20 to-accent/5',
      buttonText: 'Ver Linha Home Care'
    }
  ];

  const salesModes = [
    {
      icon: Package,
      title: 'Venda no Atacado',
      description: 'Grandes volumes com preços especiais para distribuidores e salões de grande porte',
      benefits: ['Preços diferenciados', 'Grandes quantidades', 'Condições especiais de pagamento']
    },
    {
      icon: Star,
      title: 'Venda no Varejo',
      description: 'Flexibilidade para pequenos salões e profissionais autônomos',
      benefits: ['Pequenas quantidades', 'Variedade de produtos', 'Atendimento personalizado']
    }
  ];

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Nossos Produtos
          </div>
          <h2 className="text-section-title text-secondary mb-6">
            Soluções Completas para
            <span className="text-gradient-gold block">Profissionais da Beleza</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma linha completa de produtos profissionais e home care, 
            atendendo todas as necessidades do seu salão e seus clientes.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`card-hover bg-gradient-to-br ${category.gradient} border-border/50 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-4 mx-auto shadow-lg">
                  <category.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-card-title text-secondary">
                  {category.title}
                </CardTitle>
                <p className="text-primary font-semibold">{category.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary">Produtos Disponíveis:</h4>
                  <div className="grid gap-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.open('https://wa.me/5598987463581?text=Gostaria de conhecer os produtos profissionais da Gajah Distribuidora', '_blank')}
                  className="btn-accent w-full group"
                >
                  {category.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales Modes */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Modalidades de Venda
            </h3>
            <p className="text-muted-foreground">
              Flexibilidade total para atender diferentes tipos de clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {salesModes.map((mode, index) => (
              <div 
                key={index} 
                className="text-center space-y-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                  <mode.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-3">{mode.title}</h4>
                  <p className="text-muted-foreground mb-6">{mode.description}</p>
                  
                  <div className="space-y-2">
                    {mode.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => window.open('https://wa.me/5598987463581?text=Gostaria de saber mais sobre as modalidades de venda da Gajah Distribuidora', '_blank')}
              className="btn-hero"
            >
              Solicitar Informações
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
