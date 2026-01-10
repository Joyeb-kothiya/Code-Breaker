import { Github, Heart, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ziki" className="w-10 h-10 rounded-xl object-cover" />
            <div>
              <span className="font-bold text-lg">Ziki Code Breaker</span>
              <p className="text-xs text-muted-foreground">Interactive Program Demo</p>
            </div>
          </div>

          {/* Built by */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>by</span>
            <span className="font-semibold text-foreground">Ziki</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/joyeb_29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ziki Code Breaker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
