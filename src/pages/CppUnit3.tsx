import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import BackButton from "@/components/BackButton";

const CppUnit3 = () => {
  const sections = [
    { name: "Basic to Class Type Conversion", count: 5, slug: "basic-to-class" },
    { name: "Class to Class Type Conversion", count: 5, slug: "class-to-class" },
    { name: "Class to Basic Type Conversion", count: 5, slug: "class-to-basic" },
    { name: "Explicit & Implicit Type Conversion", count: 6, slug: "explicit-implicit" },
    { name: "Operator Overloading", count: 15, slug: "operator-overloading" },
    { name: "Unary Operator Overloading", count: 5, slug: "unary-operator" },
    { name: "Binary Operator Overloading", count: 5, slug: "binary-operator" },
  ];

  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">C++ Unit 3</h1>
          <p className="text-center text-muted-foreground mb-12">7 sections</p>

          <div className="space-y-6">
          {sections.map((section) => (
            <RedirectCard
              key={section.slug}
              title={section.name}
              description={`${section.count} programs`}
              to={`/semester3/cpp-unit3/${section.slug}`}
            />
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CppUnit3;
