import { Download, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in visible">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Adil Ahmad
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-8">
            Fullstack Developer | Software Engineer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Building modern web applications with the MERN stack, passionate about clean code, 
            and turning innovative ideas into scalable digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-hero group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" className="btn-secondary group">
              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/adil2705"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface/50 hover:bg-surface-variant transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/adil-ahmad-669191248/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface/50 hover:bg-surface-variant transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />
            </a>
            <a
              href="https://desicodersdeepfakeaudio.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface/50 hover:bg-surface-variant transition-all duration-300 hover:scale-110 group"
            >
              <ExternalLink className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};