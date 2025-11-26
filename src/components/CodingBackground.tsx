import { useEffect, useRef } from "react";

const CodingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const codeSnippets = [
      "int main() {",
      "return 0;",
      "class Node {",
      "void push() {",
      "stack<int> s;",
      "queue<int> q;",
      "cout << ",
      "cin >> ",
      "for(int i=0;",
      "while(true)",
      "if(x > 0)",
      "else {",
      "template<>",
      "vector<int>",
      "#include",
      "public:",
      "private:",
      "struct Data",
      "bool check()",
    ];

    class CodeLine {
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      fontSize: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.speed = 0.2 + Math.random() * 0.5;
        this.opacity = 0.1 + Math.random() * 0.3;
        this.fontSize = 12 + Math.floor(Math.random() * 4);
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
          this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
      }

      draw() {
        if (!ctx) return;
        ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    const lines: CodeLine[] = [];
    for (let i = 0; i < 50; i++) {
      lines.push(new CodeLine());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        line.update();
        line.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "hsl(var(--background))" }}
    />
  );
};

export default CodingBackground;
