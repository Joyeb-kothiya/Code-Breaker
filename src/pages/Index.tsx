import { Link } from "react-router-dom";
import { BookOpen, Code2, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/ziki/Header";
import Footer from "@/components/ziki/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Academic Program Library</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Ziki
              <span className="text-gradient"> Code</span>
              <br />
              <span className="text-gradient">Breaker</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore comprehensive C++ and DFS program collections organized by semester. 
              Browse, learn, and master programming concepts with real code examples.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Explore Library Card */}
            <Link to="/library" className="group">
              <div className="glass-card p-8 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Explore Library
                </h2>
                <p className="text-muted-foreground mb-6">
                  Browse our comprehensive collection of C++ and DFS programs organized by semester and unit.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Browse Programs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Live Compiler Card */}
            <Link to="/compiler" className="group">
              <div className="glass-card p-8 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Terminal className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  Live Code Compiler
                </h2>
                <p className="text-muted-foreground mb-6">
                  Write, compile, and run C/C++ code directly in your browser with real-time execution.
                </p>
                <div className="flex items-center gap-2 text-accent font-medium">
                  <span>Try Compiler</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Semesters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Units</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
