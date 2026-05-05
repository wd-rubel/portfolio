import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState<"plugins" | "themes">("plugins");

  const plugins = [
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

  const themes: typeof plugins = [
    {
      title: "Almaris",
      description: "Almaris - Hotel Booking WordPress Theme",
      image: 'https://market-resized.envatousercontent.com/themeforest.net/files/656398298/preview.__large_preview.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=28acc029acc58c9834bd4903567fe04bd4f1a13e5fdcad42fd7456dc9af2f4f5',
      tech: ["WordPress", "PHP", "HTML", "CSS"],
      github: "#", live: "https://themeforest.net/item/almaris-hotel-booking-wordpress-theme/55353710"
    },
    {
      title: "Studyhub",
      description: "Education WordPress Theme",
      image: 'https://market-resized.envatousercontent.com/themeforest.net/files/729784485/preview.__large_preview.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=8e669e5bd21e6d5829a342d41485e0a9d6e7a96ed2d97a75398c62bb5b191873',
      tech: ["WordPress", "PHP", "HTML", "CSS"],
      github: "#", live: "https://themeforest.net/item/stduyhub-education-wordpress-theme/52498326"
    },
    {
      title: "Hostie",
      description: "Web Hosting & WHMCS WordPress Theme",
      image: 'https://market-resized.envatousercontent.com/themeforest.net/files/663560661/preview.__large_preview.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=a0e1efc632c2ceb1d7e55902c3d9ca828277fb5607a32cb86efc821a6ef9d444',
      tech: ["WordPress", "PHP", "HTML", "CSS"],
      github: "#", live: "https://themeforest.net/item/hostie-web-hosting-whmcs-wordpress-theme/51057545"
    },
    {
      title: "Innovat",
      description: "Architecture & Interior WordPress Theme + RTL",
      image: 'https://market-resized.envatousercontent.com/themeforest.net/files/555984410/preivew.__large_preview.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=62d5087854b8c6f828881a67fc774387d1782e2f6985790ceb613f865d3343dd',
      tech: ["WordPress", "PHP", "HTML", "CSS"],
      github: "#", live: "https://themeforest.net/item/innovat-architecture-interior-theme/50005767"
    },
      {
      title: "Echoo",
      description: "News Magazine WordPress Theme + RTL",
      image: "https://market-resized.envatousercontent.com/themeforest.net/files/550789906/Preview-2.__large_preview.png?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=13386a5c95f1ba204c7d3e1af9f05b78d58d248fe2ab5cd19ba1e73dbe61ee4d",
      tech: ["WordPress", "PHP", "HTML", "CSS"],
      github: "#",
      live: "https://themeforest.net/item/echoo-news-magazine-wordpress-theme/49122863"
    }
  ];

  const currentProjects = activeTab === "plugins" ? plugins : themes;

  return (
    <section id="projects" className="py-24 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Selected <span className="gradient-text italic">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing full-stack development, design, and problem-solving.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 animate-fade-in">
          <Button
            variant={activeTab === "plugins" ? "default" : "outline"}
            onClick={() => setActiveTab("plugins")}
            className="rounded-full px-8"
          >
            WP Plugins
          </Button>
          <Button
            variant={activeTab === "themes" ? "default" : "outline"}
            onClick={() => setActiveTab("themes")}
            className="rounded-full px-8"
          >
            WP Themes
          </Button>
        </div>

        {currentProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
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
                  {project.github && project.github !== "#" && (
                    <Button asChild variant="outline" size="sm" className="rounded-full gap-2 text-xs font-semibold border-border hover:border-foreground">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <CodeXml className="h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                  )}
                  {project.live && project.live !== "#" && (
                    <Button asChild size="sm" className="rounded-full gap-2 text-xs font-semibold bg-foreground text-background hover:bg-foreground/90">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-lg text-muted-foreground">No themes available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
