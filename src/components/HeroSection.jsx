import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 scroll-smooth"
    >
      <div className="container max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 text-center md:text-left z-10">

        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Ashini
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Garusinghe
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            I craft user-focused front-end solutions that are both visually stunning and highly functional. With a strong eye for design 
            and a commitment to quality assurance, I ensure every interface is polished, tested, and built with precision.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right: Profile Image with gradient border */}
        <div className="flex-1 flex justify-center mt-12 mb-0 md:mt-0 md:mb-0 opacity-0 animate-fade-in-delay-2">
          <div className="p-1 rounded-full bg-gradient-to-tr from-primary to-purple-500 shadow-lg">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img
                src="MyPhoto.jpg"  
                alt="Ashini Garusinghe"
                 className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
