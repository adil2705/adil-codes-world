import { MapPin, Code, Users, Target } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "MERN Stack Expert",
      description: "Skilled in modern web technologies with focus on efficient, maintainable code"
    },
    {
      icon: Target,
      title: "SDLC & Agile",
      description: "Experienced in software development lifecycle and Agile methodologies"
    },
    {
      icon: Users,
      title: "Problem Solver",
      description: "Strong analytical skills with a collaborative approach to complex challenges"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate fullstack developer from Navi Mumbai, crafting digital experiences 
            that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center text-muted-foreground mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">Based in Navi Mumbai, India</span>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm a <span className="font-semibold text-primary">Fullstack Developer</span> with 
                expertise in the MERN stack and modern web technologies. My journey in software 
                development is driven by a passion for creating efficient, scalable solutions 
                that solve real-world problems.
              </p>
              
              <p>
                With experience across the complete software development lifecycle, I bring a 
                <span className="font-semibold text-secondary"> collaborative mindset</span> and 
                strong problem-solving skills to every project. I believe in writing clean, 
                maintainable code and staying current with industry best practices.
              </p>

              <p>
                Whether it's building responsive user interfaces, developing robust APIs, or 
                implementing complex backend logic, I approach each challenge with 
                <span className="font-semibold text-accent"> innovation and precision</span>.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card-glass p-6 glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};