
import { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:jerry.robayo@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-code font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          Get In Touch
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="pixel-card">
              <h3 className="text-xl font-code font-bold mb-4 text-primary">
                // Let's Connect
              </h3>
              <p className="font-mono leading-relaxed mb-4">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about frontend development and creative coding.
              </p>
              <div className="flex items-center gap-2 font-mono">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">jerry.robayo@example.com</span>
              </div>
            </div>

            <div className="pixel-card">
              <h3 className="text-xl font-code font-bold mb-4 text-primary">
                // Looking For
              </h3>
              <ul className="font-mono space-y-2">
                <li>• Frontend Developer Roles</li>
                <li>• UI/UX Development</li>
                <li>• React/Next.js Projects</li>
                <li>• Creative Collaborations</li>
                <li>• Internship Opportunities</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pixel-card">
              <h3 className="text-xl font-code font-bold mb-6 text-primary">
                // Send Message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-mono font-bold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-foreground bg-background font-mono focus:border-primary focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-foreground bg-background font-mono focus:border-primary focus:outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-foreground bg-background font-mono focus:border-primary focus:outline-none"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-foreground bg-background font-mono focus:border-primary focus:outline-none resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>

                <button type="submit" className="pixel-button w-full">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
