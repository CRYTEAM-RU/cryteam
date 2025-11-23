import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { personalInfo, achievements } from '../data/mock';
import * as Icons from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Обо мне
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Level 99 Developer с опытом в создании цифровых миров
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {personalInfo.bio}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300">
                    🎮 Pro Gamer
                  </Badge>
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300">
                    🖥️ Server Whisperer
                  </Badge>
                  <Badge variant="secondary" className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300">
                    🔧 Lag Slayer
                  </Badge>
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300">
                    🌐 Frontend Ninja
                  </Badge>
                  <Badge variant="secondary" className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300">
                    🥚 Easter Egg Hunter
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Easter Egg Quote */}
            <Card className="p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30">
              <CardContent className="p-0">
                <p className="text-amber-200 italic font-medium">
                  "В каждом проекте есть секретная пасхалка. Это не баг, это фича!" 🥚
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = Icons[achievement.icon];
              return (
                <Card 
                  key={achievement.title}
                  className="p-6 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="mb-4 flex justify-center">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.count}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.title}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Gaming Reference */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
            <CardContent className="p-0">
              <p className="text-lg text-purple-200 font-mono">
                console.log("Achievement unlocked: Met an awesome developer! 🏆");
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};