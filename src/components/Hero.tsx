import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Star, Circle } from "lucide-react";
import developerHero from "@/assets/developer-hero.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm abstract background shapes */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-[15%] animate-float">
        <Sparkles className="h-5 w-5 text-primary/40" />
      </div>
      <div className="absolute top-[30%] right-[10%] animate-float" style={{ animationDelay: '1.2s' }}>
        <Star className="h-4 w-4 text-accent/40" />
      </div>
      <div className="absolute bottom-[25%] left-[8%] animate-float" style={{ animationDelay: '2s' }}>
        <Circle className="h-3 w-3 text-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              Available for freelance
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                I build{" "}
                <span className="gradient-text italic">digital</span>
                <br />
                experiences.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                A web developer who merges clean code with
                bold design to craft memorable products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:shadow-lg smooth-transition px-8 rounded-full font-semibold"
                onClick={scrollToProjects}
              >
                See My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-foreground/15 text-foreground hover:bg-foreground hover:text-background smooth-transition px-8 rounded-full font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Say Hello
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in flex justify-center" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-[2rem] rotate-6 border-2 border-primary/20" />
              <div className="absolute inset-0 rounded-[2rem] -rotate-3 border-2 border-accent/20" />
              <img
                src={developerHero}
                alt="Professional Developer"
                className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-card-custom"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToProjects}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground hover:text-primary smooth-transition" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
