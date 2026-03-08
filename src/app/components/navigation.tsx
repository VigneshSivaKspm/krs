import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../../firebase";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
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

  // ensure vars are considered used by TypeScript when passed to child components
  void isInstallable;
  void handleInstallClick;

  const closeMobile = () => setIsMobileMenuOpen(false);

  const handleLogout = async () => {
    try { await signOut(auth); } catch (e) { console.error(e); }
    setIsMobileMenuOpen(false);
  };

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

            {/* Mobile Menu Button (now shown on all sizes to match mobile header) */}
            <MobileAuthArea isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} closeMobile={closeMobile} />

            {/* Logo/Brand */}
            <a
              href="/"
              onClick={closeMobile}
              className="flex flex-col items-start transition-colors ml-2"
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
          <HeaderAuthArea navItems={navItems} isInstallable={isInstallable} handleInstallClick={handleInstallClick} closeMobile={closeMobile} />

          
        </div>

        {/* Mobile Navigation (absolute overlay so it doesn't change header height) */}
        <div className={`absolute left-0 right-0 top-full z-40 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
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
            {user ? (
              <div className="px-4 py-3 border-b border-neutral-800">
                <div className="text-sm text-neutral-300">Welcome,</div>
                <div className="mt-1 text-white font-semibold">{user.displayName || user.email?.split('@')[0]}</div>
                <button onClick={handleLogout} className="mt-3 w-full px-4 py-3 bg-white/5 text-white rounded-md">Logout</button>
              </div>
            ) : (
              <a href="/login" className="block w-full text-left px-4 py-3 text-white hover:text-black hover:bg-yellow-500 transition-colors font-medium border-b border-neutral-800">Login</a>
            )}
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

function HeaderAuthArea({ navItems, isInstallable, handleInstallClick, closeMobile }:{navItems:any[], isInstallable:boolean, handleInstallClick:()=>void, closeMobile:()=>void}){
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    try { await signOut(auth); } catch (e) { console.error(e); }
  };

  return (
    <div className="hidden">
      {navItems.map((item) => (
        <a key={item.label} href={item.href} onClick={closeMobile} className="px-4 py-2 text-sm lg:text-base text-white hover:text-yellow-500 transition-colors font-medium">{item.label}</a>
      ))}

      {user ? (
        <div className="flex items-center gap-3">
          <div className="text-sm text-neutral-300">Welcome,&nbsp;<span className="font-semibold text-white">{user.displayName || user.email?.split('@')[0]}</span></div>
          <button onClick={handleLogout} className="px-3 py-2 bg-white/5 hover:bg-white/10 text-sm rounded-md">Logout</button>
        </div>
      ) : (
        <Link to="/login" className="px-4 py-2 text-sm lg:text-base text-white hover:text-yellow-500 transition-colors font-medium">Login</Link>
      )}

      {isInstallable && (
        <Button onClick={handleInstallClick} className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-full flex items-center gap-2"><Download size={16} />Install</Button>
      )}
    </div>
  );
}

function MobileAuthArea({ isMobileMenuOpen, setIsMobileMenuOpen }:{isMobileMenuOpen:boolean, setIsMobileMenuOpen: (v:boolean)=>void, closeMobile?:()=>void}){
  return (
    <div className="flex">
      <Button variant="ghost" size="icon" className="text-yellow-400 hover:text-yellow-300 bg-black/20 hover:bg-white/5 z-60" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu">
        {isMobileMenuOpen ? (<X className="w-6 h-6" />) : (<Menu className="w-6 h-6" />)}
      </Button>
    </div>
  );
}
