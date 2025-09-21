import { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import { BackgroundPaths } from "@/components/ui/background-paths";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const endpoint = import.meta.env.VITE_CONTACT_API_URL ?? '/api/send-email';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const errorText = data?.error ?? 'Failed to send message. Please try again later.';

        if (
          response.status === 500 &&
          errorText.toLowerCase().includes('not configured')
        ) {
          const subject = `Portfolio Contact from ${formData.name}`;
          const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;

          const mailtoLink = `mailto:jerryrobayo1130@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.open(mailtoLink, '_blank');
          setSubmitStatus('success');
          setFormData({ name: '', email: '', company: '', message: '' });
          return;
        }

        throw new Error(errorText);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      setErrorMessage(error instanceof Error ? error.message : null);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Paths Animation - Flipped */}
      <div className="absolute inset-0 w-full h-full transform scale-y-[-1]">
        <BackgroundPaths />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
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
                <span className="text-muted-foreground">jerryrobayo1130@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <FaLinkedin size={16} className="text-primary" />
                <a href="https://www.linkedin.com/in/jerry-robayo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <FaDiscord size={16} className="text-primary" />
                <a href="https://discord.com/users/227648604252327936" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Discord</a>
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

                <button
                  type="submit"
                  disabled={isLoading}
                  className="pixel-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-100 border-2 border-green-500 text-green-800 font-mono text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-100 border-2 border-red-500 text-red-800 font-mono text-sm">
                    ✗ {errorMessage ?? 'Failed to send message. Please try again or email me directly.'}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
