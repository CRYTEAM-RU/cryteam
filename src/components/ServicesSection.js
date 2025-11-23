import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { services } from '../data/mock';
import * as Icons from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Мои услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            От пиксельных блоков до современного кода - создаю цифровые миры любой сложности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon];
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {IconComponent && (
                        <IconComponent className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:animate-pulse"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform group-hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      // Easter egg
                      setTimeout(() => {
                        console.log(`%c🎮 Quest started: Order ${service.title}!`, 'color: #10b981; font-size: 14px; font-weight: bold;');
                      }, 1000);
                    }}
                  >
                    Заказать услугу
                  </Button>
                </CardContent>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* Gaming reference */}
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30">
            <CardContent className="p-0">
              <p className="text-lg text-green-200 font-mono">
                /give @client awesome_project 1
              </p>
              <p className="text-sm text-green-300/70 mt-2">
                *Выдает клиенту потрясающий проект*
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};