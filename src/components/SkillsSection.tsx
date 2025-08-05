import { Code, Database, Wrench, Heart } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "C++", "Python", "HTML", "CSS", "JavaScript", "SQL", "PHP"],
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: ["Git", "GitHub", "Node.js", "Express.js", "React.js", "Tailwind CSS"],
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "Soft Skills",
      icon: Heart,
      skills: ["Innovation", "Collaboration", "Team Management", "Cultural Competence"],
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-glass p-8 text-center glow-effect group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-chip"
                    style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "React.js", level: 90 },
              { name: "Node.js", level: 85 },
              { name: "JavaScript", level: 90 },
              { name: "Python", level: 80 },
              { name: "MongoDB", level: 85 },
              { name: "MySQL", level: 80 }
            ].map((skill, index) => (
              <div key={index} className="card-glass p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};