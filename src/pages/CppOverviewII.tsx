import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import BackButton from "@/components/BackButton";

const CppOverviewII = () => {
  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">C++ II Programs</h1>
          <p className="text-center text-muted-foreground mb-12">All C++ II units and sections</p>

          <div className="space-y-12">
          <RedirectCard title="C++ II Unit 1" description="5 sections" to="/semester4/cpp-unit1" />
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border-2 border-primary/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">C++ II Unit 2</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border-2 border-primary/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">C++ II Unit 3</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CppOverviewII;