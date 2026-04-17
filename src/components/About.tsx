import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    "WordPress", "PHP", "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "AWS", "Docker", "Git", "Figma"
  ];

  const features = [
    { icon: Code2, title: "Full Stack", description: "End-to-end development with modern frameworks and scalable architectures." },
    { icon: Palette, title: "Design Craft", description: "Pixel-perfect interfaces that feel natural and delightful to use." },
    { icon: Rocket, title: "Performance", description: "Optimized, fast-loading apps with top-tier Lighthouse scores." },
    { icon: Users, title: "Collaboration", description: "Agile teamwork with clear communication and reliable delivery." }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Who I am</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            About <span className="gradient-text italic">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            5+ years experience in WordPress Plugin and Theme Development. I have a strong understanding of PHP, React, and other web development technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg smooth-transition animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-sans">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium rounded-full bg-card border border-border hover:border-primary hover:text-primary smooth-transition"
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
