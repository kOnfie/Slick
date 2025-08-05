import cn from "classnames";
import { Container } from "components/ui/Container";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NotFoundProps {
  className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={cn("min-h-screen flex items-center justify-center", className)}
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <Container className="px-4 py-8 sm:py-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h1
              className="text-8xl sm:text-9xl lg:text-[200px] font-bold leading-none select-none"
              style={{ color: "var(--color-gray-200)" }}
            >
              404
            </h1>
            <div className="relative -mt-4 sm:-mt-6 lg:-mt-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "var(--color-text-primary)" }}>
                Page Not Found
              </h2>
            </div>
          </div>

          <div className="mb-8 sm:mb-12">
            <p className="text-base sm:text-lg mb-4 px-4" style={{ color: "var(--color-text-secondary)" }}>
              Oops! The page you're looking for seems to have wandered off. It might have been moved, deleted, or you
              entered the wrong URL.
            </p>
            <p className="text-sm sm:text-base px-4" style={{ color: "var(--color-text-muted)" }}>
              Don't worry, let's get you back on track to find your perfect sole mate!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
            <button
              onClick={handleGoBack}
              className="w-full sm:w-auto px-6 py-3 transition-colors flex items-center justify-center gap-2 border rounded-lg font-medium"
              style={{
                color: "var(--color-text-secondary)",
                borderColor: "var(--color-border-medium)",
                backgroundColor: "var(--color-bg-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-hover-text)";
                e.currentTarget.style.borderColor = "var(--color-hover-border)";
                e.currentTarget.style.backgroundColor = "var(--color-hover-gray)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-secondary)";
                e.currentTarget.style.borderColor = "var(--color-border-medium)";
                e.currentTarget.style.backgroundColor = "var(--color-bg-primary)";
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-8 mb-8">
            <div className="w-8 sm:w-16 h-[2px]" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
            <div className="w-8 sm:w-16 h-[2px]" style={{ backgroundColor: "var(--color-primary)" }} />
          </div>

          <div className="text-center">
            <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
              The page you're looking for might have been removed or is temporarily unavailable.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
