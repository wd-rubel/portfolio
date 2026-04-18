import { Github, Linkedin, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Github, href: "https://github.com/wd-rubel", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/wd-rubel/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/rxrubel.kushtia/", label: "Facebook" }
  ];
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="text-2xl font-black tracking-tight">
              <span className="gradient-text">rubel.</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating beautiful, functional web experiences that make a difference.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-foreground hover:text-background smooth-transition" aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button key={link.name} onClick={() => scrollToSection(link.href)} className="block text-sm text-muted-foreground hover:text-primary smooth-transition font-medium">
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>webdev.rubel@gmail.com</p>
              <p>+8801996491709</p>
              <p>Uttar Badda, Dhaka 1212, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">© {currentYear} rubel. All rights reserved.</p>
            <p className="text-muted-foreground text-xs flex items-center gap-1">
              Made by Rubel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
