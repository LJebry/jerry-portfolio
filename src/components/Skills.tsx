
import { Squares } from "@/components/ui/squares-background";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme } = useTheme();
  
  const technologies = [
    { name: 'HTML', level: 95, color: 'text-pixel-orange' },
    { name: 'CSS', level: 90, color: 'text-pixel-blue' },
    { name: 'JavaScript', level: 85, color: 'text-pixel-yellow' },
    { name: 'TypeScript', level: 80, color: 'text-pixel-blue' },
    { name: 'React', level: 85, color: 'text-pixel-blue' },
    { name: 'Next.js', level: 75, color: 'text-foreground' },
    { name: 'Supabase', level: 70, color: 'text-pixel-green' },
    { name: 'Ruby on Rails', level: 65, color: 'text-red-500' },
    { name: 'Java', level: 70, color: 'text-pixel-orange' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Squares Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor={theme === 'dark' ? 'rgba(200, 200, 200, 0.6)' : 'rgba(60, 60, 60, 0.3)'}
          hoverFillColor={theme === 'dark' ? 'rgba(128, 128, 128, 0.5)' : 'rgba(0, 0, 0, 0.05)'}
          backgroundColor={theme === 'dark' ? 'transparent' : 'transparent'}
          className="opacity-60"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-code font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          Skills
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="pixel-card mb-8">
          <h3 className="text-xl font-code font-bold mb-6 text-primary">
            // Tech Stack
          </h3>
          
          <div className="grid gap-4">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`font-mono font-bold ${tech.color}`}>
                    {tech.name}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {tech.level}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full h-4 border-2 border-foreground bg-background">
                    <div
                      className="h-full bg-primary transition-all duration-1000 ease-out"
                      style={{
                        width: `${tech.level}%`,
                        animation: `skillBar 2s ease-out ${index * 0.2}s forwards`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="pixel-card">
            <h3 className="text-xl font-code font-bold mb-4 text-primary">
              // Frontend Focus
            </h3>
            <ul className="font-mono space-y-2">
              <li>• Responsive Design</li>
              <li>• Component Architecture</li>
              <li>• State Management</li>
              <li>• Performance Optimization</li>
              <li>• Accessibility (a11y)</li>
            </ul>
          </div>

          <div className="pixel-card">
            <h3 className="text-xl font-code font-bold mb-4 text-primary">
              // Experience
            </h3>
            <ul className="font-mono space-y-2">
              <li>• Internship Projects</li>
              <li>• Full-Stack Development</li>
              <li>• Database Integration</li>
              <li>• API Development</li>
              <li>• Version Control (Git)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
