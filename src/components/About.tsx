
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-code font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          About Me
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="pixel-card">
            <div className="space-y-4 font-mono">
              <div className="text-pixel-blue">
                <span className="text-pixel-purple">class</span>{' '}
                <span className="text-pixel-yellow">JerryRobayo</span>{' '}
                <span className="text-foreground">{'{'}</span>
              </div>
              
              <div className="ml-4 space-y-2">
                <div>
                  <span className="text-pixel-green">name</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-pixel-orange">"Jerry Robayo"</span>
                  <span className="text-foreground">;</span>
                </div>
                
                <div>
                  <span className="text-pixel-green">education</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-pixel-orange">"Senior Computer Science"</span>
                  <span className="text-foreground">;</span>
                </div>
                
                <div>
                  <span className="text-pixel-green">school</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-pixel-orange">"Brooklyn College"</span>
                  <span className="text-foreground">;</span>
                </div>
                
                <div>
                  <span className="text-pixel-green">passion</span>
                  <span className="text-foreground">:</span>{' '}
                  <span className="text-pixel-orange">"UI/UX Development"</span>
                  <span className="text-foreground">;</span>
                </div>
              </div>
              
              <div className="text-foreground">{'}'}</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="pixel-card">
              <h3 className="text-xl font-code font-bold mb-4 text-primary">
                // My Journey
              </h3>
              <p className="font-mono leading-relaxed">
                I've always had a <span className="text-primary font-bold">creative mindset</span>, 
                which naturally led me to fall in love with frontend and UI development. 
                There's something magical about transforming ideas into interactive, 
                beautiful digital experiences.
              </p>
            </div>

            <div className="pixel-card">
              <h3 className="text-xl font-code font-bold mb-4 text-primary">
                // Why Frontend?
              </h3>
              <p className="font-mono leading-relaxed">
                Frontend development is where <span className="text-pixel-green">creativity meets code</span>. 
                It's the perfect blend of technical problem-solving and visual design, 
                allowing me to craft user experiences that are both functional and delightful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
