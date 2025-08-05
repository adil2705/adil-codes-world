import { Calendar, MapPin, Building2 } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "SoftDigits",
      period: "Dec 2023 – Feb 2024",
      location: "Remote",
      description: "Built AI authentication system using MERN stack and Python",
      achievements: [
        "Developed secure authentication system with AI-powered verification",
        "Implemented RESTful APIs using Node.js and Express.js",
        "Integrated Python ML models for enhanced security features",
        "Collaborated with cross-functional teams using Agile methodologies"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Python", "Express.js", "JWT"]
    },
    {
      title: "Web Developer Intern",
      company: "Envee Wheels Limited",
      period: "Aug 2023 – Nov 2023",
      location: "Mumbai, India",
      description: "Built responsive frontend and integrated payment solutions",
      achievements: [
        "Developed responsive frontend using HTML, JavaScript, and Tailwind CSS",
        "Integrated payment gateway for seamless user transactions",
        "Implemented server-side functionality using PHP",
        "Successfully deployed application using cPanel hosting"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "cPanel"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Professional journey building innovative solutions and gaining valuable industry experience
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-glass p-8 lg:p-12 glow-effect"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Building2 className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-xl font-semibold text-secondary mb-3">{exp.company}</p>
                  <p className="text-lg text-muted-foreground mb-4">{exp.description}</p>
                </div>
                
                <div className="lg:text-right lg:ml-8">
                  <div className="flex items-center mb-2 lg:justify-end">
                    <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="flex items-center lg:justify-end">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-chip"
                      style={{ animationDelay: `${index * 0.2 + techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};