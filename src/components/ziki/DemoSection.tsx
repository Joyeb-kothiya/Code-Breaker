import { useState } from "react";
import InputPanel from "./InputPanel";
import OutputPanel from "./OutputPanel";

interface OutputLine {
  type: 'input' | 'output' | 'success' | 'error' | 'warning' | 'info';
  content: string;
}

const DemoSection = () => {
  const [outputLines, setOutputLines] = useState<OutputLine[]>([
    { type: 'info', content: 'Waiting for input...' }
  ]);
  const [isRunning, setIsRunning] = useState(false);

  const processInput = (input: string, params: { mode: string; iterations: number }) => {
    setIsRunning(true);
    
    const newLines: OutputLine[] = [
      { type: 'input', content: `ziki run --mode=${params.mode} --iterations=${params.iterations}` },
      { type: 'info', content: `Processing input: "${input.slice(0, 30)}${input.length > 30 ? '...' : ''}"` },
    ];

    // Simulate processing
    if (params.mode === 'encode') {
      const encoded = btoa(input);
      newLines.push(
        { type: 'output', content: `Running ${params.iterations} encoding passes...` },
        { type: 'success', content: `Encoded output:` },
        { type: 'output', content: encoded },
        { type: 'success', content: `✓ Encoding complete! (${encoded.length} bytes)` }
      );
    } else if (params.mode === 'decode') {
      try {
        const decoded = atob(input);
        newLines.push(
          { type: 'output', content: `Attempting to decode...` },
          { type: 'success', content: `Decoded output:` },
          { type: 'output', content: decoded },
          { type: 'success', content: `✓ Decoding successful!` }
        );
      } catch {
        newLines.push(
          { type: 'error', content: `Error: Invalid base64 input` },
          { type: 'warning', content: `Make sure the input is properly encoded` }
        );
      }
    } else if (params.mode === 'analyze') {
      const charCount = input.length;
      const wordCount = input.split(/\s+/).filter(Boolean).length;
      const uniqueChars = new Set(input.toLowerCase()).size;
      
      newLines.push(
        { type: 'output', content: `Analyzing input...` },
        { type: 'info', content: `Analysis Results:` },
        { type: 'output', content: `  Characters: ${charCount}` },
        { type: 'output', content: `  Words: ${wordCount}` },
        { type: 'output', content: `  Unique characters: ${uniqueChars}` },
        { type: 'output', content: `  Entropy score: ${(uniqueChars / charCount * 100).toFixed(2)}%` },
        { type: 'success', content: `✓ Analysis complete!` }
      );
    }

    setTimeout(() => {
      setOutputLines(newLines);
      setIsRunning(false);
    }, 500);
  };

  return (
    <section id="demo" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try the <span className="text-gradient">Demo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enter your input and watch the program process it in real-time. 
            Choose from different modes and see the results instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <InputPanel onRun={processInput} isRunning={isRunning} />
          <OutputPanel lines={outputLines} isRunning={isRunning} />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
