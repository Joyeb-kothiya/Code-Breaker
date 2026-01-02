import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import BackButton from "@/components/BackButton";

const CppUnit1II = () => {
  const sections = [
    { name: "Single Level Inheritance", count: 5, slug: "singlelevel" },
    { name: "Multilevel Inheritance", count: 5, slug: "multilevel" },
    { name: "Multiple Inheritance", count: 5, slug: "multiple" },
    { name: "Hierarchical Inheritance", count: 5, slug: "hierarchical" },
    { name: "Hybrid Inheritance", count: 5, slug: "hybrid" },
  ];

  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">C++ II Unit 1</h1>
          <p className="text-center text-muted-foreground mb-12">5 sections</p>

          <div className="space-y-6">
          {sections.map((section) => (
            <RedirectCard
              key={section.slug}
              title={section.name}
              description={`${section.count} programs`}
              to={`/semester4/cpp-unit1/${section.slug}`}
            />
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CppUnit1II;