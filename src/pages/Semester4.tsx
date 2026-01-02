import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";

const Semester4 = () => {
  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">Semester 4</h1>
          <p className="text-center text-muted-foreground mb-12">C++ II and DFS II program collections</p>

          <div className="space-y-16">
          {/* C++ II Section Button */}
          <Link to="/semester4/cpp">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border-2 border-primary/30 p-8 glow-effect hover:border-primary transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">C++ II Programs</h2>
                  <p className="text-muted-foreground">Explore all C++ II units and sections</p>
                </div>
                <ChevronRight className="text-primary group-hover:translate-x-2 transition-transform" size={32} />
              </div>
            </div>
          </Link>

          {/* DFS II Section Button */}
          <Link to="/semester4/dfs">
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border-2 border-accent/30 p-8 glow-effect hover:border-accent transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-accent mb-2">DFS II Programs</h2>
                  <p className="text-muted-foreground">Explore all DFS II units and sections</p>
                </div>
                <ChevronRight className="text-accent group-hover:translate-x-2 transition-transform" size={32} />
              </div>
            </div>
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Semester4;
