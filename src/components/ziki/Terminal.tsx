import { ReactNode } from "react";

interface TerminalLine {
  type: 'input' | 'output' | 'success' | 'error' | 'warning' | 'info';
  content: string;
  prefix?: string;
}

interface TerminalProps {
  title?: string;
  lines: TerminalLine[];
  className?: string;
}

const Terminal = ({ title = "terminal", lines, className = "" }: TerminalProps) => {
  const getLineClass = (type: TerminalLine['type']) => {
    switch (type) {
      case 'success':
        return 'output-success';
      case 'error':
        return 'output-error';
      case 'warning':
        return 'output-warning';
      case 'info':
        return 'text-accent';
      default:
        return 'text-foreground/90';
    }
  };

  const getPrefix = (type: TerminalLine['type'], customPrefix?: string) => {
    if (customPrefix) return customPrefix;
    switch (type) {
      case 'input':
        return '$';
      case 'success':
        return '✓';
      case 'error':
        return '✗';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '→';
    }
  };

  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive" />
        <div className="terminal-dot bg-warning" />
        <div className="terminal-dot bg-success" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      <div className="terminal-body min-h-[200px]">
        {lines.map((line, index) => (
          <div key={index} className="terminal-line">
            <span className={`terminal-prompt ${line.type === 'input' ? 'text-primary' : getLineClass(line.type)}`}>
              {getPrefix(line.type, line.prefix)}
            </span>
            <span className={`${getLineClass(line.type)} ${line.type === 'input' ? 'text-foreground' : ''}`}>
              {line.content}
            </span>
          </div>
        ))}
        <div className="terminal-line mt-1">
          <span className="terminal-prompt text-primary">$</span>
          <span className="w-2 h-5 bg-primary inline-block animate-cursor-blink" />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
