
const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "A modern portfolio website built with React and TypeScript, featuring pixel-art design, animated backgrounds, and EmailJS contact integration. Also my very first portfolio website!",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "EmailJS", "Lucide React"],
      status: "Completed"
    },
    {
      title: "Project Two", 
      description: "Ruby on Rails backend API with React frontend, implementing CRUD operations and responsive design.",
      technologies: ["Ruby on Rails", "React", "JavaScript", "CSS"],
      status: "Completed"
    },
    {
      title: "Project Three",
      description: "Next.js application with server-side rendering and optimized performance for better user experience.",
      technologies: ["Next.js", "TypeScript", "CSS Modules"],
      status: "Planning"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
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
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-1 bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
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
