import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Terminal, 
  Play, 
  Clock, 
  AlertCircle, 
  Code2, 
  ChevronDown,
  Loader2,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/ziki/Header";
import Footer from "@/components/ziki/Footer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Compiler = () => {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`);
  const [input, setInput] = useState("");

  const placeholderOutput = `// Output will appear here
// Real-time compilation is coming soon!

// Your program output will be displayed
// in this terminal-style console.`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 pb-8">
        <div className="container mx-auto px-4 h-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Live Compiler</span>
          </nav>

          {/* Coming Soon Banner */}
          <div className="glass-card p-4 mb-6 flex items-center gap-4 border-warning/30 bg-warning/5">
            <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-warning">Real-time Compilation Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                The code editor is ready! Backend execution will be available shortly.
              </p>
            </div>
          </div>

          {/* Compiler Interface */}
          <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-280px)] min-h-[500px]">
            {/* Code Editor Panel */}
            <div className="flex flex-col">
              {/* Editor Header */}
              <div className="glass-card rounded-b-none border-b-0 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">Code Editor</span>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="c">C</SelectItem>
                    <SelectItem value="cpp">C++</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Code Input */}
              <div className="flex-1 terminal rounded-t-none">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full p-4 bg-transparent text-foreground font-mono text-sm resize-none focus:outline-none"
                  placeholder="Write your code here..."
                  spellCheck={false}
                />
              </div>

              {/* Custom Input */}
              <div className="mt-4">
                <div className="glass-card rounded-b-none border-b-0 px-4 py-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Custom Input (stdin)</span>
                </div>
                <div className="terminal rounded-t-none">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full h-24 p-4 bg-transparent text-foreground font-mono text-sm resize-none focus:outline-none"
                    placeholder="Enter input for your program..."
                    spellCheck={false}
                  />
                </div>
              </div>
            </div>

            {/* Output Panel */}
            <div className="flex flex-col">
              {/* Output Header */}
              <div className="glass-card rounded-b-none border-b-0 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-primary" />
                  <span className="font-medium">Output</span>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      disabled
                      className="gap-2 opacity-50 cursor-not-allowed"
                    >
                      <Play className="w-4 h-4" />
                      Compile & Run
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Compilation coming soon</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Output Display */}
              <div className="flex-1 terminal rounded-t-none">
                <div className="terminal-body h-full">
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Info className="w-4 h-4" />
                    <span className="text-sm">Waiting for compilation...</span>
                  </div>
                  <pre className="text-muted-foreground/60 font-mono text-sm whitespace-pre-wrap">
                    {placeholderOutput}
                  </pre>
                </div>
              </div>

              {/* Execution Stats (Coming Soon) */}
              <div className="mt-4 glass-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Execution Stats</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-mono text-muted-foreground/50">--</div>
                    <div className="text-xs text-muted-foreground">Time</div>
                  </div>
                  <div>
                    <div className="text-lg font-mono text-muted-foreground/50">--</div>
                    <div className="text-xs text-muted-foreground">Memory</div>
                  </div>
                  <div>
                    <div className="text-lg font-mono text-muted-foreground/50">--</div>
                    <div className="text-xs text-muted-foreground">Status</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compiler;
