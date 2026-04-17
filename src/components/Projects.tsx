import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, CodeXml } from "lucide-react";

import easyHotelImg from "@/assets/plugins/easy-hotel.png";
import rtMegaMenuImg from "@/assets/plugins/rt-mega-menu.png";
import easyWishlistImg from "@/assets/plugins/easy-wishlist.png";
import easyCurrencyImg from "@/assets/plugins/easy-currency.png";
import easyMenuIconsImg from "@/assets/plugins/easy-menu-icons.png";
import boldPostImg from "@/assets/plugins/boldpost.png";

const Projects = () => {
  const projects = [
    {
      title: "Easy Hotel",
      description: "Easy Hotel Booking is an all-in-one hotel reservation solution for WordPress.",
      image: easyHotelImg,
      tech: ["WordPress Plugin", "PHP", "React", "Tailwind CSS"],
      github: "https://wordpress.org/plugins/easy-hotel/", live: "https://themewant.com/downloads/easy-hotel-booking/"
    },
    {
      title: "RT Mega Menu",
      description: "RT Mega Menu is a powerful and easy-to-use WordPress mega menu builder plugin.",
      image: rtMegaMenuImg,
      tech: ["WordPress Plugin", "PHP", "React", "Tailwind CSS"],
      github: "https://wordpress.org/plugins/rt-mega-menu/", live: "https://rtmega.themewant.com/"
    },
    {
      title: "Easy Wishlist",
      description: "Easy Wishlist is a powerful and easy-to-use WordPress wishlist plugin.",
      image: easyWishlistImg,
      tech: ["WordPress Plugin", "PHP", "React", "Tailwind CSS"],
      github: "https://wordpress.org/plugins/easy-wishlist/", live: "https://wishlist.themewant.com/"
    },
    {
      title: "Easy Currency",
      description: "Easy Currency Switcher is a free WooCommerce multi-currency plugin.",
      image: easyCurrencyImg,
      tech: ["WordPress Plugin", "PHP", "React", "Tailwind CSS"],
      github: "https://wordpress.org/plugins/easy-currency/", live: "https://easy-currency.themewant.com/"
    },
    {
      title: "Easy Menu Icons",
      description: "Easy Menu Icons is a versatile and user-friendly plugin that enhances your WordPress menus with icon support.",
      image: easyMenuIconsImg,
      tech: ["WordPress Plugin", "PHP", "React", "Tailwind CSS"],
      github: "https://wordpress.org/plugins/easy-menu-icons/", live: "https://themewant.com/menuicon/"
    },
    {
      title: "BoldPost",
      description: "BoldPost is a modern Gutenberg post grid and layout plugin that helps you display blog posts in beautiful grids, lists, sliders, and category showcases.",
      image: boldPostImg,
      tech: ["WordPress Plugin", "PHP", "React", "Tailwind CSS"],
      github: "https://wordpress.org/plugins/boldpost/", live: "https://boldpost.themewant.com/"
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
                  className="w-full h-72 object-cover group-hover:scale-105 smooth-transition"
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
                    <CodeXml className="h-3.5 w-3.5" /> Code
                  </Button>
                  <Button size="sm" className="rounded-full gap-2 text-xs font-semibold bg-foreground text-background hover:bg-foreground/90">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
