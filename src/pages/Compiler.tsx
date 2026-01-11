import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Terminal, 
  Play, 
  Clock, 
  AlertCircle, 
  Code2, 
  Loader2,
  Info,
  CheckCircle2,
  XCircle
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
import { compileCode, checkBackendHealth, CompileResponse } from "@/services/compilerService";
import { isBackendConfigured } from "@/config/api";
import { toast } from "sonner";

// Default code templates for each language
const getDefaultCode = (lang: 'c' | 'cpp'): string => {
  if (lang === 'c') {
    return `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`;
  }
  return `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`;
};

const Compiler = () => {
  const location = useLocation();
  const initialCode = location.state?.code;
  const initialLang = location.state?.language || "cpp";
  
  const [language, setLanguage] = useState<'c' | 'cpp'>(initialLang);
  const [code, setCode] = useState(initialCode || getDefaultCode(initialLang));
  const [input, setInput] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [result, setResult] = useState<CompileResponse | null>(null);
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null);
  const [isCheckingHealth, setIsCheckingHealth] = useState(true);

  // Check backend health on mount
  useEffect(() => {
    const checkHealth = async () => {
      setIsCheckingHealth(true);
      if (isBackendConfigured()) {
        const online = await checkBackendHealth();
        setBackendOnline(online);
      } else {
        setBackendOnline(false);
      }
      setIsCheckingHealth(false);
    };
    checkHealth();
  }, []);

  // Update code template when language changes
  const handleLanguageChange = (newLang: 'c' | 'cpp') => {
    setLanguage(newLang);
    // Only update code if it's the default template
    if (code === getDefaultCode(language)) {
      setCode(getDefaultCode(newLang));
    }
  };

  const handleCompile = async () => {
    if (!isBackendConfigured()) {
      toast.error("Backend not configured. Update src/config/api.ts with your Render URL.");
      return;
    }

    setIsCompiling(true);
    setResult(null);

    try {
      const response = await compileCode({
        language,
        code,
        input: input || undefined
      });
      setResult(response);
      
      if (response.error) {
        toast.error("Compilation error");
      } else {
        toast.success("Compilation successful!");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to compile";
      toast.error(message);
      setResult({
        output: '',
        error: message,
        cpuTime: '',
        memory: ''
      });
    } finally {
      setIsCompiling(false);
    }
  };

  const isReady = isBackendConfigured() && backendOnline;

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

          {/* Status Banner */}
          {!isBackendConfigured() ? (
            <div className="glass-card p-4 mb-6 flex items-center gap-4 border-warning/30 bg-warning/5">
              <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-warning">Backend Not Configured</h3>
                <p className="text-sm text-muted-foreground">
                  Deploy the backend to Render and update <code className="bg-muted px-1 rounded">src/config/api.ts</code> with your URL.
                </p>
              </div>
            </div>
          ) : backendOnline === false ? (
            <div className="glass-card p-4 mb-6 flex items-center gap-4 border-destructive/30 bg-destructive/5">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-destructive">Backend Offline</h3>
                <p className="text-sm text-muted-foreground">
                  Cannot connect to the compilation server. Please check your Render deployment.
                </p>
              </div>
            </div>
          ) : backendOnline && (
            <div className="glass-card p-4 mb-6 flex items-center gap-4 border-success/30 bg-success/5">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-success">Backend Online</h3>
                <p className="text-sm text-muted-foreground">
                  Compilation server is ready. Write your code and click "Compile & Run".
                </p>
              </div>
            </div>
          )}

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
                <Select value={language} onValueChange={(val) => handleLanguageChange(val as 'c' | 'cpp')}>
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
                {!isReady ? (
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
                      <p>Configure backend first</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Button 
                    onClick={handleCompile}
                    disabled={isCompiling || !code.trim()}
                    className="gap-2"
                  >
                    {isCompiling ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Compiling...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Compile & Run
                      </>
                    )}
                  </Button>
                )}
              </div>

              {/* Output Display */}
              <div className="flex-1 terminal rounded-t-none overflow-auto">
                <div className="terminal-body h-full p-4">
                  {isCompiling ? (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Compiling and executing...</span>
                    </div>
                  ) : result ? (
                    <div className="space-y-2">
                      {result.error ? (
                        <pre className="text-destructive font-mono text-sm whitespace-pre-wrap">
                          {result.error}
                        </pre>
                      ) : (
                        <pre className="text-foreground font-mono text-sm whitespace-pre-wrap">
                          {result.output || '(No output)'}
                        </pre>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                        <Info className="w-4 h-4" />
                        <span className="text-sm">Waiting for compilation...</span>
                      </div>
                      <pre className="text-muted-foreground/60 font-mono text-sm whitespace-pre-wrap">
{`// Output will appear here after compilation

// Supported Languages:
// - C (GCC 11.1.0)
// - C++ (GCC 11.1.0)

// Write your code and click "Compile & Run"`}
                      </pre>
                    </>
                  )}
                </div>
              </div>

              {/* Execution Stats */}
              <div className="mt-4 glass-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Execution Stats</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className={`text-lg font-mono ${result?.cpuTime ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                      {result?.cpuTime || '--'}
                    </div>
                    <div className="text-xs text-muted-foreground">Time</div>
                  </div>
                  <div>
                    <div className={`text-lg font-mono ${result?.memory ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                      {result?.memory || '--'}
                    </div>
                    <div className="text-xs text-muted-foreground">Memory</div>
                  </div>
                  <div>
                    <div className={`text-lg font-mono ${
                      result 
                        ? result.error 
                          ? 'text-destructive' 
                          : 'text-success'
                        : 'text-muted-foreground/50'
                    }`}>
                      {result ? (result.error ? 'Error' : 'Success') : '--'}
                    </div>
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
