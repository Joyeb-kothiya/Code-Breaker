import { useState, useEffect } from "react";
import { Copy, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Terminal from "./Terminal";

interface OutputLine {
  type: 'input' | 'output' | 'success' | 'error' | 'warning' | 'info';
  content: string;
}

interface OutputPanelProps {
  lines: OutputLine[];
  isRunning: boolean;
}

const OutputPanel = ({ lines, isRunning }: OutputPanelProps) => {
  const [copied, setCopied] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<OutputLine[]>([]);

  useEffect(() => {
    if (isRunning) {
      setDisplayedLines([]);
      let index = 0;
      const interval = setInterval(() => {
        if (index < lines.length) {
          setDisplayedLines(prev => [...prev, lines[index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 150);
      return () => clearInterval(interval);
    } else {
      setDisplayedLines(lines);
    }
  }, [lines, isRunning]);

  const handleCopy = async () => {
    const text = displayedLines.map(l => l.content).join('\n');
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = displayedLines.map(l => l.content).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success" />
          Output
        </h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Terminal 
        title="ziki-output" 
        lines={displayedLines}
        className="animate-fade-in"
      />
    </div>
  );
};

export default OutputPanel;
