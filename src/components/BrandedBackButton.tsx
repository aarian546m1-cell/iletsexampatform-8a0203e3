import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BrandedBackButtonProps {
  /** Override default browser-back behavior with a specific path */
  to?: string;
}

export default function BrandedBackButton({ to }: BrandedBackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group flex items-center gap-2.5 transition-all duration-200 hover:opacity-80"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform duration-200 group-hover:-translate-x-0.5">
        <ArrowLeft className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="font-serif text-xl font-bold">IELTS Pro</span>
    </button>
  );
}
