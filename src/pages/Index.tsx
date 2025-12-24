import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import { Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        {/* Logo Section */}
        <div className="mb-12 animate-fade-in">
          <img
            src="/ziki.png"
            alt="Logo"
            width={192}
            height={192}
            loading="eager"
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-primary/30"
          />
        </div>

        <div className="text-center animate-fade-in mb-16">
          <h1 className="text-5xl md:text-7xl font-bold animate-float bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to Code Breaker
          </h1>
        </div>

        {/* Semester Cards */}
        <div className="container mx-auto max-w-4xl space-y-16 mb-16">
          <RedirectCard
            title="Semester 3"
            description="C++ and DFS program collections"
            to="/semester3"
          />
          <RedirectCard
            title="Semester 4"
            description="Coming soon... Stay tuned!"
            to="/semester4"
          />
        </div>

        {/* About Section */}
        <div className="text-center space-y-4">
          <p className="text-lg text-foreground">Website created by Joyeb Kothiya</p>
          <a
            href="https://www.instagram.com/joyeb_29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors glow-effect p-4 rounded-lg bg-card border border-border"
          >
            <Instagram size={24} />
            <span>@joyeb_29</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Website created with 💜 by Joyeb Kothiya — Follow me on Instagram{" "}
            <a
              href="https://www.instagram.com/joyeb_29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @joyeb_29
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
