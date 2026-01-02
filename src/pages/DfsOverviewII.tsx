import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import RedirectCard from "@/components/RedirectCard";
import BackButton from "@/components/BackButton";

const DfsOverviewII = () => {
  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">DFS II Programs</h1>
          <p className="text-center text-muted-foreground mb-12">All DFS II units and sections</p>

          <div className="space-y-12">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border-2 border-accent/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-accent mb-2">DFS II Unit 1</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border-2 border-accent/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-accent mb-2">DFS II Unit 2</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border-2 border-accent/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-accent mb-2">DFS II Unit 3</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DfsOverviewII;