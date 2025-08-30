
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Jerry Robayo";
  const subtitle = "Frontend Developer";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  const handleDownloadResume = () => {
    // Create a sample resume link - replace with actual resume URL
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume file path
    link.download = 'Jerry_Robayo_Resume.pdf';
    link.click();
    
    // For now, show a message
    alert('Resume download feature - please replace with actual resume file!');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Paths Animation */}
      <BackgroundPaths />

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-code font-bold mb-4">
            <span className="text-primary">&gt;</span>
            <span className="inline-block min-w-[300px] text-left">
              {displayText}
              <span className="animate-blink text-primary">|</span>
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl font-mono text-muted-foreground mb-6">
            <span className="text-pixel-blue">const</span>{' '}
            <span className="text-pixel-purple">role</span>{' '}
            <span className="text-foreground">=</span>{' '}
            <span className="text-pixel-green">"{subtitle}"</span>
            <span className="text-foreground">;</span>
          </div>
        </div>

        <div className="pixel-card max-w-2xl mx-auto mb-8">
          <p className="text-lg font-mono leading-relaxed">
            Creative mindset meets technical expertise. I transform ideas into 
            <span className="text-primary font-bold"> pixel-perfect</span> digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleDownloadResume}
            className="pixel-button flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-mono border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background py-3 px-6 transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-12 animate-pixel-bounce">
          <div className="w-6 h-6 border-2 border-foreground mx-auto"></div>
          <div className="w-4 h-4 border-2 border-foreground mx-auto mt-2"></div>
          <div className="w-2 h-2 border-2 border-foreground mx-auto mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
