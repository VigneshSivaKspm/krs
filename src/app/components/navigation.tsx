import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PWA Install prompt handler
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstallable(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  const closeMobile = () => setIsMobileMenuOpen(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Key Leaders", href: "/#leaders" },
    { label: "Ideology", href: "/#ideology" },
    { label: "Leadership", href: "/#leadership-committee" },
    { label: "Executive", href: "/#executive-committee" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 transition-all duration-300 ${
        isScrolled
          ? "bg-black border-b-2 border-red-700"
          : "bg-black/95"
      }`}
      style={{backdropFilter: 'saturate(120%) blur(6px)'}}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <a
            href="/"
            onClick={closeMobile}
            className="flex flex-col items-start transition-colors"
          >
            <div className="flex items-baseline">
               <span className="text-xl sm:text-3xl font-black leading-none">
                <span className="text-red-700">K</span>
                <span className="text-yellow-500">R</span>
                <span className="text-red-700">S</span>
              </span>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wider">
                aravanakumar
              </div>
            </div>
          </a>

          {/* Center Flag */}
          <img src="/assets/flag.png" alt="Flag" className="h-8 sm:h-16 w-auto object-contain" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="px-4 py-2 text-sm lg:text-base text-white hover:text-yellow-500 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Link to="/login" className="px-4 py-2 text-sm lg:text-base text-white hover:text-yellow-500 transition-colors font-medium">Login</Link>
            {isInstallable && (
              <Button
                onClick={handleInstallClick}
                className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-full flex items-center gap-2"
              >
                <Download size={16} />
                Install
              </Button>
            )}
          </div>

          {/* Mobile Login (visible) and Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/login"
              onClick={closeMobile}
              className="px-3 py-1 text-sm text-white hover:text-yellow-500 transition-colors font-medium"
            >
              Login
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-yellow-500 hover:bg-transparent z-60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation (absolute overlay so it doesn't change header height) */}
        <div className={`md:hidden absolute left-0 right-0 top-full z-40 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="w-full bg-black border-t border-red-700 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="block w-full text-left px-4 py-3 text-white hover:text-black hover:bg-yellow-500 transition-colors font-medium border-b border-neutral-800"
              >
                {item.label}
              </a>
            ))}
            <a href="/login" className="block w-full text-left px-4 py-3 text-white hover:text-black hover:bg-yellow-500 transition-colors font-medium border-b border-neutral-800">Login</a>
            {isInstallable && (
              <button
                onClick={handleInstallClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition-colors"
              >
                <Download size={18} />
                Install App
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
