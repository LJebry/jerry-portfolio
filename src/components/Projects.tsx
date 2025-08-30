
import { FaGithub } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import { Squares } from "@/components/ui/squares-background";
import { useTheme } from "next-themes";

const Projects = () => {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: "Portfolio",
      description: "A modern portfolio website built with React and TypeScript, featuring pixel-art design, animated backgrounds, and EmailJS contact integration. Also my very first portfolio website!",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "EmailJS", "Lucide React"],
      status: "Completed",
      githubUrl: "https://github.com/LJebry/jerry-portfolio",
      liveUrl: "https://jerry-robayo-portfolio.com" // Replace with actual URL
    },
    {
      title: "Project Two", 
      description: "Ruby on Rails backend API with React frontend, implementing CRUD operations and responsive design.",
      technologies: ["Ruby on Rails", "React", "JavaScript", "CSS"],
      status: "Completed",
      githubUrl: "#", // Replace with actual GitHub URL
      liveUrl: "#" // Replace with actual live URL
    },
    {
      title: "Project Three",
      description: "Next.js application with server-side rendering and optimized performance for better user experience.",
      technologies: ["Next.js", "TypeScript", "CSS Modules"],
      status: "Planning",
      githubUrl: "#", // Replace with actual GitHub URL
      liveUrl: "#" // Replace with actual live URL
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
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
          Projects
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={project.title} className="pixel-card hover:border-primary transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-code font-bold text-primary">
                  {project.title}
                </h3>
                <span className={`font-mono text-sm px-3 py-1 border-2 ${
                  project.status === 'Completed' ? 'border-pixel-green text-pixel-green' :
                  project.status === 'In Development' ? 'border-pixel-yellow text-pixel-yellow' :
                  'border-pixel-blue text-pixel-blue'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="font-mono text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Action Buttons */}
              <div className="flex justify-end gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button !py-2 !px-3 flex items-center gap-1 text-sm"
                  title="View GitHub Repository"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button !py-2 !px-3 flex items-center gap-1 text-sm"
                  title="View Live Project"
                >
                  <BiLinkExternal size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="pixel-card inline-block">
            <p className="font-mono text-muted-foreground">
              <span className="text-primary">// TODO:</span> Add live project links and GitHub repos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
