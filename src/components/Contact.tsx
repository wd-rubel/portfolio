import { Mail, MapPin, Phone, Github, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: "Email", details: "webdev.rubel@gmail.com", link: "mailto:webdev.rubel@gmail.com" },
    { icon: Phone, title: "Phone", details: "+8801996491709", link: "tel:+8801996491709" },
    { icon: MapPin, title: "Location", details: "Dhaka, Bangladesh", link: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/wd-rubel", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/wd-rubel/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/rxrubel.kushtia/", label: "Facebook" }
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
          {/* Map */}
          <div className="bg-card border border-border rounded-2xl p-2 animate-fade-in overflow-hidden h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.994831236799!2d90.41876784265457!3d23.783106364592065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79705d8041d%3A0xe1bf95ab3b06a96f!2sUttar%20Badda%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1776424137427!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.75rem", minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
