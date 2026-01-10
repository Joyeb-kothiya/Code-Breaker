import { useState } from "react";
import { Play, RotateCcw, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface InputPanelProps {
  onRun: (input: string, params: { mode: string; iterations: number }) => void;
  isRunning: boolean;
}

const InputPanel = ({ onRun, isRunning }: InputPanelProps) => {
  const [input, setInput] = useState("Hello World! This is a test message.");
  const [mode, setMode] = useState("encode");
  const [iterations, setIterations] = useState(3);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    onRun(input, { mode, iterations });
  };

  const handleReset = () => {
    setInput("Hello World! This is a test message.");
    setMode("encode");
    setIterations(3);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Input Panel
        </h3>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="input" className="text-sm font-medium">
            Enter your text
          </Label>
          <Textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="min-h-[120px] font-mono text-sm resize-none rounded-xl bg-background/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="mode" className="text-sm font-medium">
              Mode
            </Label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full h-10 px-3 rounded-xl bg-background/50 border border-input text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="encode">Encode</option>
              <option value="decode">Decode</option>
              <option value="analyze">Analyze</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="iterations" className="text-sm font-medium">
              Iterations
            </Label>
            <Input
              id="iterations"
              type="number"
              value={iterations}
              onChange={(e) => setIterations(Number(e.target.value))}
              min={1}
              max={10}
              className="rounded-xl bg-background/50"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={handleRun}
          disabled={isRunning || !input.trim()}
          className="flex-1 rounded-xl h-12 gap-2 font-semibold"
        >
          <Play className="w-4 h-4" />
          {isRunning ? "Processing..." : "Run Program"}
        </Button>
        <Button
          variant="outline"
          onClick={handleReset}
          className="rounded-xl h-12 px-4"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default InputPanel;
