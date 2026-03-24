import { useState, useEffect } from "react";
import { Instagram, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/saravanankspm_tvk?igsh=bmRtc3B1cnZqNHp3", label: "Instagram" },
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
    <footer className="bg-[#7F1D1D] border-t-4 border-amber-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-400 flex items-center justify-center overflow-hidden rounded shadow">
                <img
                  src="/assets/saravanan.png"
                  alt="K.R. Saravanan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    img.parentElement!.innerHTML = '<span class="text-xl font-black text-black">KRS</span>';
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">K.R.Saravanakumar</h3>
                <p className="text-sm text-amber-400 font-semibold">TVK</p>
              </div>
            </div>
            <p className="text-amber-100/80 text-sm mb-6">
              Dedicated to serving the people of Erode district with integrity, commitment, and a vision for inclusive growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-red-900/60 hover:bg-amber-400 hover:text-black flex items-center justify-center text-white transition-colors rounded"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-400/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-amber-100/80 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Party Links */}
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-400/50">
              Party
            </h4>
            <ul className="space-y-3">
              {partyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-amber-100/80 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
        </div>
        
        {/* Legal & Compliance Information */}
        <div className="border-t border-red-800/60 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Legal Disclaimer */}
            <div>
              <h5 className="text-sm font-bold text-amber-400 mb-2">Disclaimer</h5>
              <p className="text-amber-100/50 text-xs leading-relaxed">
                This website is an independent informational platform about K.R. Saravanakumar (KRS), Town Panchayat Secretary of Tamilaga Vettri Kazhagam. The content provided here is for public information and community communication purposes only. This website does not represent official election campaigning unless explicitly stated.
              </p>
            </div>

            {/* Election Compliance */}
            <div>
              <h5 className="text-sm font-bold text-amber-400 mb-2">Election Compliance</h5>
              <p className="text-amber-100/50 text-xs leading-relaxed">
                Any political advertising or election campaign material published on this website will comply with the guidelines issued by the Election Commission of India and applicable laws during election periods.
              </p>
            </div>

            {/* Privacy Policy */}
            <div>
              <h5 className="text-sm font-bold text-amber-400 mb-2">Privacy Policy</h5>
              <p className="text-amber-100/50 text-xs leading-relaxed">
                We respect user privacy. Any personal information collected through this website will only be used for communication and service purposes and will not be shared without consent.
              </p>
            </div>

            {/* Official Contact */}
            <div>
              <h5 className="text-sm font-bold text-amber-400 mb-2">Official Contact</h5>
              <p className="text-amber-100/50 text-xs leading-relaxed">
                K.R. Saravanakumar (KRS)<br />
                Kasipalayam, Gobichettipalayam, Erode District, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* SEO Rich Footer Content */}
          <div className="text-center text-amber-100/40 text-xs space-y-2 border-t border-red-800/40 pt-6">
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
      <div className="border-t border-red-900/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4">
            <p className="text-amber-100/60 text-sm text-center">
              © {new Date().getFullYear()} K.R. Saravanakumar (KRS). All Rights Reserved. | 
              <a href="/privacy-policy" className="text-amber-400 hover:text-amber-300 ml-1">Privacy Policy</a>
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-100/60 text-sm">
              <span>Website Designed & Developed by</span>
              <a
                href="https://legendaryone.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-bold hover:text-amber-300 transition-colors"
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
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#991B1B] hover:bg-amber-500 hover:text-black text-white flex items-center justify-center shadow-xl transition-all z-40 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
