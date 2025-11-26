import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import BackButton from "@/components/BackButton";

const CppOverview = () => {
  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">C++ Programs</h1>
          <p className="text-center text-muted-foreground mb-12">All C++ units and sections</p>

          <div className="space-y-12">
          <RedirectCard title="C++ Unit 1" description="14 programs" to="/semester3/cpp-unit1" />
          <RedirectCard title="C++ Unit 2" description="9 sections" to="/semester3/cpp-unit2" />
          <RedirectCard title="C++ Unit 3" description="7 sections" to="/semester3/cpp-unit3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CppOverview;
