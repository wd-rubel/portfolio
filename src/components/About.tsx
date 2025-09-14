import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma"
  ];

  const features = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "End-to-end web application development with modern frameworks and best practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide excellent user experiences."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Building fast, scalable applications optimized for performance and SEO."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams using agile methodologies and modern development tools."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web developer with over 5 years of experience creating 
            digital solutions that combine beautiful design with robust functionality. 
            I love turning complex problems into simple, elegant solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="glass-card hover:glow-effect smooth-transition animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm bg-glass-bg border-glass-border hover:bg-primary hover:text-primary-foreground smooth-transition"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;