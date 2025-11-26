import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import BackButton from "@/components/BackButton";

const Semester4 = () => {
  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-2xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-12 text-center text-primary">Semester 4</h1>
          <div className="min-h-[60vh] flex items-center">
          <div className="w-full bg-card rounded-xl border border-primary/50 p-8 text-center animate-glow-pulse">
            <p className="text-2xl text-foreground mb-2">💡</p>
            <p className="text-lg text-muted-foreground">
              Codes for Semester 4 will be updated soon... Stay tuned!
            </p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Semester4;
