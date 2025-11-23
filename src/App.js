import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    // Konami Code Easter Egg
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let userInput = [];

    const handleKeyDown = (e) => {
      userInput.push(e.keyCode);
      
      if (userInput.length > konamiCode.length) {
        userInput.shift();
      }
      
      if (userInput.length === konamiCode.length) {
        let match = true;
        for (let i = 0; i < konamiCode.length; i++) {
          if (userInput[i] !== konamiCode[i]) {
            match = false;
            break;
          }
        }
        
        if (match) {
          // Easter egg activated!
          document.body.style.animation = 'rainbow 2s infinite';
          setTimeout(() => {
            document.body.style.animation = '';
            alert('🎮 Konami Code активирован! Вы получили +100 к крутости! 🏆');
          }, 2000);
          userInput = [];
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Console easter eggs
    console.log('%c🎮 CRYTEAM Portfolio v2.0.25', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
    console.log('%c🚀 Добро пожаловать в консоль разработчика!', 'color: #4ecdc4; font-size: 14px;');
    console.log('%c💡 Попробуйте ввести: showEasterEggs()', 'color: #45b7d1; font-size: 12px;');
    console.log('%c🔍 Секретные команды: activateDevMode(), spawnRandomFact(), showStats()', 'color: #f39c12; font-size: 10px;');
    console.log('%c🎯 Hint: Попробуйте нажать Ctrl+Shift+C на любой карточке!', 'color: #e74c3c; font-size: 10px;');
    
    // Add console functions
    window.showEasterEggs = () => {
      console.log('%c🥚 Найденные пасхалки:', 'color: #f39c12; font-size: 16px; font-weight: bold;');
      console.log('1. 🎮 Konami Code (↑↑↓↓←→←→BA)');
      console.log('2. 🏆 Skill tree с EXP системой');
      console.log('3. 💻 Игровые команды в карточках');
      console.log('4. 🎯 Анимированные частицы на фоне');
      console.log('5. ⚡ Случайные пасхалки при клике на контакты');
      console.log('6. ☕ Секретный навык "Caffeine Tolerance"');
      console.log('7. 🎲 Консольные команды разработчика');
      console.log('8. 🕵️ 10-кликовая пасхалка в контактах');
      console.log('%cИ это только начало... Ищи дальше! 😉', 'color: #e74c3c; font-style: italic;');
    };

    window.activateDevMode = () => {
      document.documentElement.style.setProperty('--primary', '120 100% 50%');
      console.log('%c💚 Dev Mode активирован! Теперь все зеленое как в Matrix!', 'color: #00ff00; font-size: 16px;');
    };

    window.spawnRandomFact = () => {
      const facts = [
        "🎮 Minecraft был создан за 6 дней!",
        "☕ Программисты выпивают в среднем 3 чашки кофе в день",
        "🐛 Первый компьютерный баг был настоящим насекомым",
        "💾 В 1981 году Билл Гейтс сказал: '640KB памяти хватит всем'",
        "🌐 Первый веб-сайт все еще работает: info.cern.ch",
        "🎯 На написание 'Hello World' у новичков уходит в среднем 15 минут",
        "🚀 Код Apollo 11 весил меньше современного сайта",
        "🎪 75% разработчиков используют Stack Overflow каждый день"
      ];
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      console.log(`%c🎲 Random Dev Fact: ${randomFact}`, 'color: #9b59b6; font-size: 14px;');
    };

    window.showStats = () => {
      console.log('%c📊 Статистика сайта:', 'color: #3498db; font-size: 16px; font-weight: bold;');
      console.log('🎮 Пасхалок найдено: Узнай сам!');
      console.log('☕ Кофе выпито при создании: 42 чашки');
      console.log('🐛 Багов исправлено: 404 (not found)');
      console.log('😊 Уровень крутости: Over 9000!');
      console.log('%c🏆 Ты уже нашел 50% всех пасхалок!', 'color: #f1c40f; font-size: 12px;');
    };

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;