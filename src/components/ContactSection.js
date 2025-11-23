import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { contacts, easterEggs } from '../data/mock';
import * as Icons from 'lucide-react';

export const ContactSection = () => {
  const [easterEgg, setEasterEgg] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleContactClick = (contact) => {
    // Show random easter egg on contact click
    const randomEgg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
    setEasterEgg(randomEgg);
    setShowEasterEgg(true);
    
    // Hide easter egg after 3 seconds
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 3000);

    // Special easter egg after multiple clicks
    setClickCount(prev => prev + 1);
    if (clickCount === 9) { // 10th click
      setEasterEgg("Achievement Unlocked: 'Persistent Clicker' 🏆 You really want to contact me!");
      setClickCount(0);
    }

    console.log(`%c🎮 Attempting to contact via ${contact.label}...`, 'color: #3b82f6; font-size: 12px;');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">
            Связаться со мной
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готов к новым квестам! Напишите мне о вашем проекте
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contacts.map((contact, index) => {
              const IconComponent = Icons[contact.icon];
              return (
                <Card 
                  key={contact.type}
                  className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2 cursor-pointer group"
                  onClick={() => handleContactClick(contact)}
                >
                  <CardContent className="p-0 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-6 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 group-hover:from-primary/30 group-hover:to-blue-500/30 transition-all duration-300">
                        {IconComponent && (
                          <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Status and Gaming Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Status Card */}
            <Card className="p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30 col-span-full md:col-span-1">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-green-200">Статус: Online</div>
                    <div className="text-sm text-green-300/70">Готов к новым проектам!</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-500/30">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                  <div>
                    <div className="font-semibold text-blue-200">Ping: &lt;24h</div>
                    <div className="text-sm text-blue-300/70">Быстрый ответ гарантирован!</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full pulse-glow"></div>
                  <div>
                    <div className="font-semibold text-purple-200">Timezone: MSK</div>
                    <div className="text-sm text-purple-300/70">Москва, Россия</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gaming References */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30 p-4 text-center">
              🎮 Currently: Optimizing servers
            </Badge>
            <Badge variant="outline" className="bg-purple-500/10 text-purple-300 border-purple-500/30 p-4 text-center">
              🏆 Achievement: Lag Destroyer
            </Badge>
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-300 border-yellow-500/30 p-4 text-center">
              ⚡ Power Level: Over 9000!
            </Badge>
            <Badge variant="outline" className="bg-green-500/10 text-green-300 border-green-500/30 p-4 text-center">
              🔧 Class: Server Wizard
            </Badge>
          </div>

          {/* Easter Egg Display */}
          {showEasterEgg && (
            <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg animate-bounce">
              <p className="text-amber-200 text-center font-medium text-lg">
                {easterEgg}
              </p>
            </div>
          )}

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/30 text-center">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Готов начать новый квест? 🎮
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Выберите удобный способ связи выше и расскажите о своем проекте!
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-xs">✨ Быстрый ответ</Badge>
                <Badge variant="outline" className="text-xs">🎯 Индивидуальный подход</Badge>
                <Badge variant="outline" className="text-xs">🏆 Качественный результат</Badge>
                <Badge variant="outline" className="text-xs">🎮 С пасхалками!</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom easter egg */}
        <div className="text-center mt-16">
          <Card className="inline-block p-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-indigo-500/30">
            <CardContent className="p-0">
              <p className="text-sm text-indigo-200 font-mono">
                Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
              </p>
              <p className="text-xs text-indigo-300/70 mt-1">
                *Попробуйте ввести на клавиатуре* 😉
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};