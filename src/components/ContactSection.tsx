import { Mail, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Navi Mumbai, India",
      href: "#"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ahmadadil2705@gmail.com",
      href: "mailto:ahmadadil2705@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/adil-ahmad-669191248/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/adil2705"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to collaborate? Let's discuss your next project or explore opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always excited to hear about new opportunities, collaborations, or just to chat 
                about technology and development. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 card-glass hover:scale-105 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground mr-4 group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                  {info.href.startsWith('http') && (
                    <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                </a>
              ))}
            </div>

            {/* Live Project Link */}
            <div className="card-glass p-6 glow-effect">
              <h4 className="text-xl font-semibold mb-3">🚀 Live Project</h4>
              <p className="text-muted-foreground mb-4">
                Check out my DeepFake Detection System in action
              </p>
              <a
                href="https://desicodersdeepfakeaudio.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center group"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                View Live Demo
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-surface border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-surface border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  required
                  className="bg-surface border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                  className="bg-surface border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};