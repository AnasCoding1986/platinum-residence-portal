
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { useLanguage } from "../../contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, translations } = useLanguage();

  // Navigation links
  const navLinks = [
    { name: translations.navHome[language], path: "/" },
    { name: translations.navAbout[language], path: "/about" },
    { name: translations.navProperties[language], path: "/properties" },
    { name: translations.navServices[language], path: "/services" },
    { name: translations.navBlog[language], path: "/blog" },
    { name: translations.navContact[language], path: "/contact" },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative flex items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="mr-2">
              <div className="w-10 h-10 bg-luxury-darkblue flex items-center justify-center rounded-md">
                <span className="text-white font-cormorant text-xl font-bold">P</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-luxury-darkblue font-cormorant text-xl font-bold leading-none">
                Platinum
              </h1>
              <p className="text-xs text-luxury-blue tracking-wider">
                RESIDENCE PROPERTIES
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative
                  after:absolute after:bottom-0 after:left-0 after:right-0 
                  after:h-0.5 after:bg-luxury-blue after:scale-x-0 after:origin-center 
                  after:transition-transform after:duration-300
                  hover:text-luxury-blue hover:after:scale-x-100
                  ${
                    location.pathname === link.path
                      ? "text-luxury-blue after:scale-x-100"
                      : "text-luxury-darkblue"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-luxury-darkblue hover:text-luxury-blue transition-colors"
            >
              <Globe size={18} className="mr-1" />
              <span className="text-sm font-medium">{language === "en" ? "EN" : "BN"}</span>
              <ChevronDown size={16} className="ml-1" />
            </button>
            <CustomButton variant="primary" size="sm">
              Get In Touch
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={toggleLanguage}
              className="mr-4 text-luxury-darkblue hover:text-luxury-blue transition-colors"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-luxury-darkblue hover:text-luxury-blue transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg 
          transition-all duration-500 ease-in-out overflow-hidden
          ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium py-2 px-4 rounded-md transition-colors 
                  ${
                    location.pathname === link.path
                      ? "bg-luxury-blue/10 text-luxury-blue"
                      : "text-luxury-darkblue hover:bg-luxury-blue/5 hover:text-luxury-blue"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-platinum-100">
              <CustomButton variant="primary" fullWidth>
                Get In Touch
              </CustomButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
