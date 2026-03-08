import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: "Email", details: "hello@webdev.com", link: "mailto:hello@webdev.com" },
    { icon: Phone, title: "Phone", details: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, title: "Location", details: "San Francisco, CA", link: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let's <span className="gradient-text italic">Talk</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got a project in mind? Let's build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 font-sans">Send a Message</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold text-sm">Name</Label>
                  <Input id="name" placeholder="Your name" className="rounded-xl bg-background border-border focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold text-sm">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="rounded-xl bg-background border-border focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-semibold text-sm">Subject</Label>
                <Input id="subject" placeholder="Project discussion" className="rounded-xl bg-background border-border focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-semibold text-sm">Message</Label>
                <Textarea id="message" placeholder="Tell me about your project..." rows={5} className="rounded-xl bg-background border-border focus:border-primary resize-none" />
              </div>
              <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg smooth-transition" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6 font-sans">Contact Info</h3>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <a key={info.title} href={info.link} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-md smooth-transition group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{info.title}</p>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-5 font-sans">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground smooth-transition" aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <h4 className="font-bold font-sans mb-2">Let's collaborate!</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Always open to new opportunities, creative ideas, and exciting projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
