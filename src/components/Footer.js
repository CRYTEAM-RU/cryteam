import React from 'react';
import { Card, CardContent } from './ui/card';
import { Heart, Code, Coffee } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-muted/50 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Gaming reference */}
          <Card className="inline-block p-6 bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-0">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <span>Сделано с</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>и много</span>
                <Coffee className="h-4 w-4 text-amber-500" />
                <span>и</span>
                <Code className="h-4 w-4 text-primary" />
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-mono">
              © 2025 CRYTEAM. Все права защищены.
            </p>
            <p className="text-xs opacity-70">
              Версия 2.0.25 • Build #42 • No bugs detected* 
            </p>
            <p className="text-xs opacity-50">
              *Это не гарантия, это надежда 😄
            </p>
          </div>

          {/* Easter egg hints */}
          <div className="mt-8 space-y-2">
            <p className="text-xs text-muted-foreground/50 font-mono">
              Hint: Try pressing F12 and look for hidden messages 👨‍💻
            </p>
            <p className="text-xs text-muted-foreground/30 font-mono">
              Pro tip: Кликай по контактам 10 раз подряд 🎯
            </p>
            <p className="text-xs text-muted-foreground/30 font-mono">
              Secret: В консоли есть команды разработчика 🕵️
            </p>
            <p className="text-xs text-muted-foreground/20 font-mono cursor-pointer hover:text-primary/50 transition-colors"
               onClick={() => {
                 console.log('%c🎊 Секретная пасхалка активирована!', 'color: #ff69b4; font-size: 16px; font-weight: bold;');
                 console.log('%c🏆 Achievement Unlocked: "Footer Clicker"', 'color: #ffd700; font-size: 14px;');
                 console.log('%c🎮 Bonus: +100 к крутости за внимательность!', 'color: #00ffff; font-size: 12px;');
               }}
            >
              Ultimate secret: Кликни на этот текст! 🤫
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};