import Terminal from "./Terminal";

const examples = [
  {
    title: "Successful Encoding",
    description: "Basic text encoding with success output",
    lines: [
      { type: 'input' as const, content: 'ziki run --mode=encode "Hello World"' },
      { type: 'info' as const, content: 'Processing input: "Hello World"' },
      { type: 'output' as const, content: 'Running 3 encoding passes...' },
      { type: 'success' as const, content: 'Encoded output:' },
      { type: 'output' as const, content: 'SGVsbG8gV29ybGQ=' },
      { type: 'success' as const, content: '✓ Encoding complete! (16 bytes)' },
    ]
  },
  {
    title: "Error Handling",
    description: "Invalid input with error message",
    lines: [
      { type: 'input' as const, content: 'ziki run --mode=decode "invalid!@#$"' },
      { type: 'info' as const, content: 'Processing input: "invalid!@#$"' },
      { type: 'output' as const, content: 'Attempting to decode...' },
      { type: 'error' as const, content: 'Error: Invalid base64 input' },
      { type: 'warning' as const, content: 'Make sure the input is properly encoded' },
    ]
  },
  {
    title: "Analysis Mode",
    description: "Text analysis with detailed statistics",
    lines: [
      { type: 'input' as const, content: 'ziki run --mode=analyze "Sample text"' },
      { type: 'info' as const, content: 'Analyzing input...' },
      { type: 'output' as const, content: 'Analysis Results:' },
      { type: 'output' as const, content: '  Characters: 11' },
      { type: 'output' as const, content: '  Words: 2' },
      { type: 'output' as const, content: '  Unique characters: 9' },
      { type: 'success' as const, content: '✓ Analysis complete!' },
    ]
  }
];

const ExamplesSection = () => {
  return (
    <section id="examples" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Example <span className="text-gradient">Outputs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how the program handles different scenarios including success, errors, and edge cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div>
                <h3 className="font-semibold text-lg">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </div>
              <Terminal 
                title={`example-${index + 1}`}
                lines={example.lines}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
