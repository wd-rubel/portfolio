import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack shop with auth, cart, Stripe payments, and an admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#", live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project board with real-time sync, drag-and-drop, and team chat.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#", live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Location-aware forecasts with interactive charts and animated weather maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
      tech: ["React", "Tailwind", "OpenWeather API", "Chart.js"],
      github: "#", live: "#"
    },
    {
      title: "Portfolio Website",
      description: "This very site — responsive, fast, and animated for a great first impression.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      github: "#", live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Selected <span className="gradient-text italic">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing full-stack development, design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl smooth-transition animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 smooth-transition"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold font-sans">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs rounded-full bg-muted border-0 font-medium">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="rounded-full gap-2 text-xs font-semibold border-border hover:border-foreground">
                    <Github className="h-3.5 w-3.5" /> Code
                  </Button>
                  <Button size="sm" className="rounded-full gap-2 text-xs font-semibold bg-foreground text-background hover:bg-foreground/90">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="outline" size="lg" className="rounded-full border-2 border-foreground/15 font-semibold hover:bg-foreground hover:text-background smooth-transition">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
