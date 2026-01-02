import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Key Leaders", href: "#leaders" },
  { label: "Ideology", href: "#ideology" },
  { label: "Leadership", href: "#leadership-committee" },
  { label: "Executive", href: "#executive-committee" },
  { label: "Contact", href: "#contact" },
];

const partyLinks = [
  { label: "TVK Official", href: "#" },
  { label: "Party Manifesto", href: "#" },
  { label: "Membership", href: "#" },
  { label: "Events", href: "#" },
];

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 border-t-4 border-red-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-700 flex items-center justify-center overflow-hidden rounded">
                <img
                  src="/assets/saravanan.png"
                  alt="K.R. Saravanan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    img.parentElement!.innerHTML = '<span class="text-xl font-black text-white">KRS</span>';
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">K.R.Saravanakumar</h3>
                <p className="text-sm text-yellow-500">TVK</p>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Dedicated to serving the people of Ariyalur district with integrity, commitment, and a vision for inclusive growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-neutral-800 hover:bg-red-700 flex items-center justify-center text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 pb-2 border-b-2 border-yellow-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Party Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 pb-2 border-b-2 border-red-700">
              Party
            </h4>
            <ul className="space-y-3">
              {partyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-red-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
        </div>
        
        {/* SEO Rich Footer Content */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="text-center text-white/40 text-xs space-y-2">
            <p itemScope itemType="https://schema.org/Person">
              <span itemProp="name">K.R. Saravanakumar</span> (<span itemProp="alternateName">KRS</span>) - 
              <span itemProp="jobTitle">TVK Town Panchayat Secretary</span>
            </p>
            <p itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">Kasipalayam</span>, 
              <span itemProp="addressLocality">Gobichettipalayam</span>, 
              <span itemProp="addressRegion">Erode, Tamil Nadu</span>, 
              <span itemProp="postalCode">638454</span>, 
              <span itemProp="addressCountry">India</span>
            </p>
            <p>
              Also known as: Saravanakumar | Saravanan | சரவணகுமார் | சரவணன் | KR Saravanakumar
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} K.R. Saravanakumar (KRS) - krsaravanakumar.in - All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <span>Crafted By</span>
              <a
                href="https://legendaryoneagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors"
              >
                Legendary One
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-red-700 hover:bg-red-800 text-white flex items-center justify-center shadow-lg transition-all z-40 animate-in fade-in slide-in-from-bottom-4 duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
