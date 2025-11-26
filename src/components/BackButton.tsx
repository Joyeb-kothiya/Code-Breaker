import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // Determine fallback route based on current path
    const pathParts = location.pathname.split('/');
    const fallbackRoute = pathParts.slice(0, -1).join('/') || '/';
    
    // Try to go back, but if there's no history, use fallback
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackRoute);
    }
  };

  return (
    <Button
      onClick={handleBack}
      variant="outline"
      size="sm"
      className="mb-6"
    >
      <ArrowLeft size={16} />
      Back
    </Button>
  );
};

export default BackButton;
