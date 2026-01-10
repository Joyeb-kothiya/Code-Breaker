import { Code2, Cpu, CheckCircle, Zap } from "lucide-react";

const steps = [
  {
    icon: Code2,
    title: "Input Processing",
    description: "Your text or data is received and validated by the program. Special characters and encoding are handled automatically."
  },
  {
    icon: Cpu,
    title: "Algorithm Execution",
    description: "The core algorithm processes your input through multiple passes, applying transformations based on the selected mode."
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "Results are optimized for efficiency and accuracy. The program ensures minimal latency and maximum throughput."
  },
  {
    icon: CheckCircle,
    title: "Output Generation",
    description: "Clean, formatted output is generated with detailed status indicators showing success, warnings, or error states."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understand the program's workflow and see how your data is processed step by step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card p-6 relative group hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
