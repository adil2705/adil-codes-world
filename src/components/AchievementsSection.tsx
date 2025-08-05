import { Award, Trophy, Users, Star } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    {
      title: "Data Structures Certification",
      organization: "CutShort",
      type: "Technical Certification",
      icon: Award,
      description: "Completed comprehensive data structures and algorithms course",
      color: "from-primary to-primary-glow"
    },
    {
      title: "Node.js + MongoDB Certification",
      organization: "Infosys SpringBoard",
      type: "Backend Development",
      icon: Star,
      description: "Mastered backend development with Node.js and MongoDB",
      color: "from-secondary to-secondary-glow"
    },
    {
      title: "Generative AI Certification",
      organization: "Udacity",
      type: "Artificial Intelligence",
      icon: Trophy,
      description: "Specialized in generative AI technologies and applications",
      color: "from-accent to-accent-glow"
    },
    {
      title: "Lead @ Programmers Club",
      organization: "College Leadership",
      type: "Leadership Role",
      icon: Users,
      description: "Led technical initiatives and mentored fellow students",
      color: "from-secondary to-primary"
    },
    {
      title: "Member @ GDSC",
      organization: "Google Developer Student Clubs",
      type: "Community Involvement",
      icon: Users,
      description: "Active member in Google's developer community program",
      color: "from-primary to-accent"
    },
    {
      title: "Winner @ Project Presentation",
      organization: "College Competition",
      type: "Academic Achievement",
      icon: Trophy,
      description: "First place in technical project presentation competition",
      color: "from-accent to-secondary"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Achievements & Recognition</h2>
          <p className="section-subtitle">
            Celebrating milestones in continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card-glass p-6 text-center glow-effect group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-lg font-semibold text-secondary mb-2">{achievement.organization}</p>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-soft text-primary rounded-full">
                  {achievement.type}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "6+", label: "Certifications" },
              { number: "2+", label: "Internships" },
              { number: "5+", label: "Projects" },
              { number: "2+", label: "Leadership Roles" }
            ].map((stat, index) => (
              <div key={index} className="card-glass p-6">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};