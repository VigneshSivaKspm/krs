import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", action: scrollToTop },
    { label: "Service", id: "service" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black border-b-2 border-red-700"
          : "bg-black/95"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <button
            onClick={scrollToTop}
            className="flex flex-col items-start transition-colors"
          >
            <div className="flex items-baseline">
              <span className="text-2xl sm:text-3xl font-black leading-none">
                <span className="text-red-700">K</span>
                <span className="text-yellow-500">R</span>
                <span className="text-red-700">S</span>
              </span>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wider">
                aravanakumar
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.id ? scrollToSection(item.id) : item.action?.()}
                className="px-4 py-2 text-sm lg:text-base text-white hover:text-yellow-500 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-yellow-500 hover:bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="bg-black border-2 border-red-700">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.id ? scrollToSection(item.id) : item.action?.()}
                className="block w-full text-left px-4 py-3 text-white hover:text-black hover:bg-yellow-500 transition-colors font-medium border-b border-neutral-800 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
