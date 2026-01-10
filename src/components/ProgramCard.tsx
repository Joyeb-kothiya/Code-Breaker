import { Copy, Download, Play, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProgramCardProps {
  number: number;
  title?: string;
  code?: string;
  fileExtension?: string;
  description?: string;
}

const ProgramCard = ({ 
  number, 
  title, 
  code, 
  fileExtension = "c",
  description 
}: ProgramCardProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
      });
    }
  };

  const handleDownload = () => {
    if (code) {
      const blob = new Blob([code], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `program_${number}.${fileExtension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast({
        title: "Downloaded!",
        description: "Program file downloaded",
      });
    }
  };

  return (
    <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-primary font-mono text-sm bg-primary/10 px-3 py-1.5 rounded-lg font-semibold">
            #{number}
          </span>
          {title && (
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          )}
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      )}

      {/* Code Preview */}
      {code && (
        <div className="terminal mb-4 max-h-48 overflow-hidden relative">
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive/80" />
            <div className="terminal-dot bg-warning/80" />
            <div className="terminal-dot bg-success/80" />
            <span className="ml-auto text-xs text-muted-foreground font-mono">
              {fileExtension === "cpp" ? "main.cpp" : "main.c"}
            </span>
          </div>
          <pre className="terminal-body max-h-32 overflow-hidden">
            <code className="text-sm text-foreground/90">{code.slice(0, 500)}{code.length > 500 ? '...' : ''}</code>
          </pre>
          {/* Fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[hsl(var(--terminal-bg))] to-transparent" />
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2">
        {code && (
          <>
            {/* View Code Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye className="w-4 h-4" />
                  View Code
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <span className="text-primary font-mono">#{number}</span>
                    {title}
                  </DialogTitle>
                </DialogHeader>
                <div className="terminal overflow-auto max-h-[60vh]">
                  <div className="terminal-header sticky top-0 z-10">
                    <div className="terminal-dot bg-destructive/80" />
                    <div className="terminal-dot bg-warning/80" />
                    <div className="terminal-dot bg-success/80" />
                    <div className="ml-auto flex items-center gap-2">
                      <Button
                        onClick={handleCopy}
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs gap-1"
                      >
                        <Copy size={14} />
                        Copy
                      </Button>
                      <Button
                        onClick={handleDownload}
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs gap-1"
                      >
                        <Download size={14} />
                        Download
                      </Button>
                    </div>
                  </div>
                  <pre className="terminal-body">
                    <code className="text-sm text-foreground/90 whitespace-pre-wrap">{code}</code>
                  </pre>
                </div>
              </DialogContent>
            </Dialog>

            {/* Copy & Download */}
            <Button onClick={handleCopy} variant="ghost" size="sm" className="gap-2">
              <Copy className="w-4 h-4" />
              Copy
            </Button>
            <Button onClick={handleDownload} variant="ghost" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </>
        )}

        {/* Run Program - Coming Soon */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 ml-auto opacity-60 cursor-not-allowed"
              disabled
            >
              <Clock className="w-4 h-4 text-warning" />
              Run Program
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Real-time compilation coming soon</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Output Console Placeholder */}
      <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border/50">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4 text-warning" />
          <span className="text-sm">Output console — coming soon</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
