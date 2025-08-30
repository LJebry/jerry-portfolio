
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-code text-xl font-bold">
            <span className="text-primary">&lt;</span>
            JerryRobayo
            <span className="text-primary">/&gt;</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-mono text-sm hover:text-primary transition-colors duration-200 uppercase tracking-wider border-2 border-transparent hover:border-primary px-3 py-1"
              >
                {item === 'contact' ? 'hire me' : item}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="pixel-button !py-2 !px-3"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
