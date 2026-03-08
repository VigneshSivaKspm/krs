import { useState, useEffect } from "react";

export function WhatsAppFloatingButton() {
  const phoneNumber = "918667670083"; // Phone number without + sign
  const message = "Hello! I would like to connect with you.";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approximately 100px)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed left-4 sm:left-6 bottom-6 sm:bottom-8 z-40 p-4 sm:p-5 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp: +91 8667670083"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
        alt="WhatsApp"
        className="w-6 h-6 sm:w-7 sm:h-7"
      />
    </button>
  );
}
