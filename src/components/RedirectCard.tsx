import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RedirectCardProps {
  title: string;
  description?: string;
  to: string;
}

const RedirectCard = ({ title, description, to }: RedirectCardProps) => {
  return (
    <Link to={to}>
      <div className="bg-card rounded-xl border border-border p-6 glow-effect hover:border-primary/50 transition-all duration-300 group">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <ChevronRight className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
        </div>
      </div>
    </Link>
  );
};

export default RedirectCard;
