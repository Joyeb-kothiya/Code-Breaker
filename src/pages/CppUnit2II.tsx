import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import BackButton from "@/components/BackButton";

const CppUnit2II = () => {
  const sections = [
    { name: "Constructor", count: 10, slug: "constructor" },
    { name: "Destructor", count: 1, slug: "destructor" },
    { name: "Constructor Overloading", count: 5, slug: "constructor-overloading" },
    { name: "Copy Constructor", count: 10, slug: "copy-constructor" },
    { name: "Friend Function", count: 10, slug: "friend-function" },
    { name: "Inline Function", count: 10, slug: "inline-function" },
    { name: "Member Function", count: 4, slug: "member-function" },
    { name: "Parameterised Constructor", count: 10, slug: "parameterised-constructor" },
    { name: "Static", count: 10, slug: "static" },
  ];

  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">C++ II Unit 2</h1>
          <p className="text-center text-muted-foreground mb-12">9 sections</p>

          <div className="space-y-6">
          {sections.map((section) => (
            <RedirectCard
              key={section.slug}
              title={section.name}
              description={`${section.count} programs`}
              to={`/semester4/cpp-unit2/${section.slug}`}
            />
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CppUnit2II;