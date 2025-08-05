import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
              Adil Ahmad
            </h3>
            <p className="text-muted-foreground">
              Fullstack Developer & Software Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Based in Navi Mumbai, India
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/adil2705"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-variant hover:bg-muted transition-colors group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/adil-ahmad-669191248/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-variant hover:bg-muted transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="mailto:ahmadadil2705@gmail.com"
                className="p-2 rounded-lg bg-surface-variant hover:bg-muted transition-colors group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="https://desicodersdeepfakeaudio.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-variant hover:bg-muted transition-colors group"
              >
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Adil Ahmad. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};