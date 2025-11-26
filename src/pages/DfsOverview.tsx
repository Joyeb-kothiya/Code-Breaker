import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import BackButton from "@/components/BackButton";

const DfsOverview = () => {
  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">DFS Programs</h1>
          <p className="text-center text-muted-foreground mb-12">All DFS units and sections</p>

          <div className="space-y-12">
          <RedirectCard title="DFS Unit 1" description="7 programs" to="/semester3/dfs-unit1" />
          <RedirectCard title="DFS Unit 2" description="4 programs" to="/semester3/dfs-unit2" />
          <RedirectCard title="DFS Unit 3" description="2 sections" to="/semester3/dfs-unit3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DfsOverview;
