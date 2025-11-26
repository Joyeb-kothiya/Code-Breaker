import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import BackButton from "@/components/BackButton";

const DfsUnit3 = () => {
  const sections = [
    { name: "Stack", count: 5, slug: "stack" },
    { name: "Queue", count: 4, slug: "queue" },
  ];

  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">DFS Unit 3</h1>
          <p className="text-center text-muted-foreground mb-12">2 sections</p>

          <div className="space-y-6">
          {sections.map((section) => (
            <RedirectCard
              key={section.slug}
              title={section.name}
              description={`${section.count} programs`}
              to={`/semester3/dfs-unit3/${section.slug}`}
            />
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DfsUnit3;
