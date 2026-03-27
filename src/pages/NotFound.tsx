import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
            <Search className="h-10 w-10 text-secondary" />
          </div>
          <h1 className="text-6xl sm:text-8xl font-heading font-bold text-secondary mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Page Not Found</h2>
          <p className="text-body text-sm sm:text-base leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 rounded-sm"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default NotFound;
