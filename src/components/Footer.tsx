
const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t-2 border-foreground">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4">
          <div className="font-code text-lg">
            <span className="text-primary">&lt;</span>
            Jerry Robayo
            <span className="text-primary">/&gt;</span>
          </div>
          
          <div className="font-mono text-sm space-y-2">
            <p className="text-muted-foreground">
              <span className="text-pixel-green">const</span>{' '}
              <span className="text-pixel-purple">year</span>{' '}
              <span className="text-foreground">=</span>{' '}
              <span className="text-pixel-orange">new Date().getFullYear()</span>
              <span className="text-foreground">;</span>
            </p>
            <p>
              <span className="text-foreground">© {new Date().getFullYear()}</span>{' '}
              <span className="text-primary">Jerry Robayo</span>{' '}
              <span className="text-muted-foreground">- Built with React & Tailwind CSS</span>
            </p>
          </div>

          <div className="section-divider my-6"></div>
          
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">//</span> Crafted with creativity and code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
