import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { skills } from '../data/mock';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            Навыки
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мой skill tree в разработке - постоянно прокачиваю новые способности
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <span className="text-primary font-mono font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* XP bar styling */}
                    <div className="absolute -top-1 -bottom-1 left-0 right-0 rounded-full border border-primary/20"></div>
                  </div>
                  
                  {/* Gaming reference */}
                  <div className="mt-2 text-xs text-muted-foreground font-mono">
                    EXP: {Math.floor((skill.level / 100) * 10000)}/10000
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Easter egg skills */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg text-purple-200">
                    Easter Egg Hunting 🥚
                  </h3>
                  <span className="text-purple-400 font-mono font-semibold">
                    MAX
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out relative"
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: '1.5s'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -bottom-1 left-0 right-0 rounded-full border border-purple-400/30"></div>
                </div>
                
                <div className="mt-2 text-xs text-purple-300 font-mono">
                  Legendary Skill Unlocked! 🏆
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-emerald-900/20 to-green-900/20 border-emerald-500/30">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg text-emerald-200">
                    Caffeine Tolerance ☕
                  </h3>
                  <span className="text-emerald-400 font-mono font-semibold">
                    999+
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: '1.8s'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -bottom-1 left-0 right-0 rounded-full border border-emerald-400/30"></div>
                </div>
                
                <div className="mt-2 text-xs text-emerald-300 font-mono">
                  Achievement: Coffee Addict 😴➡️☕➡️😊
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};