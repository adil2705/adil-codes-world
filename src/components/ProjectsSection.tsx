import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "CodeEazy",
      subtitle: "EdTech Platform",
      description: "A comprehensive educational technology platform designed to make learning programming concepts accessible and engaging for students.",
      longDescription: "CodeEazy is a full-featured EdTech platform that provides interactive coding courses, practice problems, and educational resources. Built with modern web technologies to deliver a seamless learning experience.",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay", "JWT", "Express.js"],
      features: [
        "Secure authentication with JWT tokens",
        "Interactive course dashboard with progress tracking",
        "Advanced search functionality for courses and content",
        "Integrated payment system using Razorpay",
        "Responsive design for all devices",
        "Real-time notifications and updates"
      ],
      github: "#",
      demo: "#",
      type: "Full Stack Web Application"
    },
    {
      title: "DeepFake Detection System",
      subtitle: "AI/ML Project",
      description: "An advanced machine learning system capable of detecting deepfake content in both images and audio files with high accuracy.",
      longDescription: "This project leverages state-of-the-art deep learning techniques to identify manipulated media content, helping combat the spread of misinformation through deepfake technology.",
      technologies: ["Python", "EfficientNet", "LSTM", "TensorFlow", "OpenCV", "Streamlit"],
      features: [
        "Image deepfake detection using EfficientNet architecture",
        "Audio deepfake detection with LSTM networks",
        "Achieved 80%+ accuracy on test datasets",
        "Real-time processing capabilities",
        "User-friendly web interface with Streamlit",
        "Comprehensive model evaluation and visualization"
      ],
      github: "https://github.com/adil2705",
      demo: "https://desicodersdeepfakeaudio.streamlit.app/",
      type: "Machine Learning & AI"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-project glow-effect"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-muted-foreground bg-primary-soft px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface hover:bg-surface-variant transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface hover:bg-surface-variant transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-lg font-semibold text-secondary mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-chip text-xs"
                      style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="btn-hero flex-1 group">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Live Demo
                </Button>
                <Button variant="outline" className="btn-secondary flex-1 group">
                  <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};