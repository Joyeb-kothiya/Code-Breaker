import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/ziki/Header";
import Footer from "@/components/ziki/Footer";

const Library = () => {
  const semesters = [
    {
      id: "semester3",
      name: "Semester 3",
      description: "C++ and DFS program collections",
      path: "/semester3",
    },
    {
      id: "semester4",
      name: "Semester 4",
      description: "C++ II and DFS II program collections",
      path: "/semester4",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Explore Library</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Academic Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore <span className="text-gradient">Library</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive collection of programs organized by semester, subject, and unit.
            </p>
          </div>

          {/* Semesters */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {semesters.map((semester) => (
              <Link 
                key={semester.id}
                to={semester.path}
                className="group block"
              >
                <div className="glass-card p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <BookOpen className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {semester.name}
                        </h2>
                        <p className="text-muted-foreground">{semester.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Library;
