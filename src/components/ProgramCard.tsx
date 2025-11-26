import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProgramCardProps {
  number: number;
  title?: string;
  code?: string;
  fileExtension?: string;
}

const ProgramCard = ({ number, title, code, fileExtension = "c" }: ProgramCardProps) => {
  const { toast } = useToast();

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
    <div className="code-block hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-primary font-mono text-xs bg-primary/10 px-2 py-1 rounded">
            #{number}
          </span>
          {title && <span className="text-foreground font-medium">{title}</span>}
        </div>
        {code && (
          <div className="flex gap-2">
            <Button
              onClick={handleCopy}
              variant="ghost"
              size="sm"
              className="h-8"
            >
              <Copy size={16} />
            </Button>
            <Button
              onClick={handleDownload}
              variant="ghost"
              size="sm"
              className="h-8"
            >
              <Download size={16} />
            </Button>
          </div>
        )}
      </div>
      {code ? (
        <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm font-mono text-foreground">{code}</code>
        </pre>
      ) : (
        <div className="h-20 flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Program placeholder</p>
        </div>
      )}
    </div>
  );
};

export default ProgramCard;
