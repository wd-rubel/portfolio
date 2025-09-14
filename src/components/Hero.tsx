import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Palette, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import developerHero from "@/assets/developer-hero.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="h-8 w-8 text-primary/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Palette className="h-6 w-6 text-accent/30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="h-10 w-10 text-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">Creative</span>{" "}
                <span className="text-foreground">Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Crafting beautiful, responsive web experiences with modern technologies
                and thoughtful design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="bg-gradient-primary hover:glow-effect smooth-transition px-8">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition px-8">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
              <img 
                src={developerHero}
                alt="Professional Developer"
                className="relative z-10 w-full max-w-md mx-auto rounded-full shadow-card-custom hover:glow-effect smooth-transition"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToProjects}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary smooth-transition" />
        </div>
      </div>
    </section>
  );
};

export default Hero;